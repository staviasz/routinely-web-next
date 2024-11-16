import type { HttpClient } from '@/types/contracts/services/httpClient';
import type { HttpResponse } from '@/types/contracts/services/httpResponse';
import type { Task } from '@/types/task';

export const updateTask = async (
  httpClient: HttpClient,
  body: Partial<Task>,
  token: string,
): Promise<HttpResponse> => {
	if (!body.id) {
    throw new Error("O campo 'id' é obrigatório para atualizar uma tarefa.");
  }
  try {
    const response = await httpClient.request(`/tasks`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body,
    });

    return response;
  } catch (error) {
    throw error;
  }
};
