import type { HttpResponse } from '@/types/contracts/services/httpResponse';
import type { Task } from '@/types/task';
import { makeHttpClient } from '@mocks/fetchAdapterStub';
import { tasks } from '@mocks/taskMock';
import { updateTask } from '../updateTasks';

const token = 'test@example.com';
const body: Task = tasks[0];
const httpClient = makeHttpClient();

global.fetch = jest
  .fn()
  .mockResolvedValueOnce({
    ok: true,
    status: 200,
    json: () => Promise.resolve({ token: 'fake-token' }),
  })
  .mockResolvedValueOnce({
    ok: false,
    status: 500,
    json: () => Promise.resolve({ errors: [{ message: 'Credenciais inválidas' }] }),
  });

afterAll(() => {
  jest.clearAllMocks();
});

describe('Update Task', () => {
  it('Should return correct response', async () => {
    const mockResponse: HttpResponse = {
      status: 200,
      body: { token: 'fake-token' },
      ok: true,
    };

    const response = await updateTask(httpClient, body, token);

    expect(response).toEqual(mockResponse);
  });

  it('Should return with errors', async () => {
    const mockResponse: HttpResponse = {
      status: 500,
      body: ['Credenciais inválidas'],
      ok: false,
    };

    const response = await updateTask(httpClient, body, token);

    expect(response).toEqual(mockResponse);
  });

  it('Should throw an error', async () => {
    const mockError = new Error('Error');
    jest.spyOn(httpClient, 'request').mockRejectedValue(mockError);
    await expect(updateTask(httpClient, body, token)).rejects.toThrow(mockError);
  });

  it('Shoul call httpClient with correct params', async () => {
    jest
      .spyOn(httpClient, 'request')
      .mockImplementation(() => Promise.resolve({ status: 200, ok: true }));
    await updateTask(httpClient, body, token);
    expect(httpClient.request).toHaveBeenCalledWith('/tasks', {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body,
    });
  });
});
