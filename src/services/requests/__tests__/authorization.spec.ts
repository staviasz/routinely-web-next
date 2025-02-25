import type { HttpResponse } from '@/types/contracts/services/httpResponse';
import { makeHttpClient } from '@mocks/fetchAdapterStub';
import { authorization } from '../authorization';

const token = 'test@example.com';
const refreshToken = 'password123';
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

describe('Authorization', () => {
  it('Should return correct response', async () => {
    const mockResponse: HttpResponse = {
      status: 200,
      ok: true,
      body: { token: 'fake-token' },
    };

    const response = await authorization(httpClient, token, refreshToken);

    expect(response).toEqual(mockResponse);
  });

  it('Should return with errors', async () => {
    const mockResponse: HttpResponse = {
      status: 500,
      ok: false,
      body: ['Credenciais inválidas'],
    };

    const response = await authorization(httpClient, token, refreshToken);

    expect(response).toEqual(mockResponse);
  });

  it('Should throw an error', async () => {
    const mockError = new Error('Error');
    jest.spyOn(httpClient, 'request').mockRejectedValue(mockError);
    await expect(authorization(httpClient, token, refreshToken)).rejects.toThrow(mockError);
  });

  it('Shoul call httpClient with correct params', async () => {
    jest
      .spyOn(httpClient, 'request')
      .mockImplementation(() =>
        Promise.resolve({ status: 200, body: { token: 'fake-token' }, ok: true }),
      );
    await authorization(httpClient, token, refreshToken);
    expect(httpClient.request).toHaveBeenCalledWith('/auth/refresh', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: {
        refreshToken,
      },
    });
  });
});
