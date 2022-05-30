import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MutationFunction, useMutation, useQueryClient } from 'react-query';

import locale from 'locale';
import routes from 'config/routes';
import department from 'api/department';

import Form from '../Form';
import useNavStore from 'stores/useNavStore';
import { toast } from 'react-toastify';

export default () => {
  /**
   * Hooks
   */
  const { id } = useParams<{ id: string }>();

  const nativeNavigate = useNavigate();
  const navigate = useNavStore(state => state.navigate);

  const [name, setName] = useState("");
  const [comments, setComments] = useState("");
  const [isActive, setIsActive] = useState(true);

  const queryClient = useQueryClient();

  const mutation = useMutation(department.update, {
    onSuccess: () => {
      queryClient.invalidateQueries(department.queryKey);

      const message = locale.en.toastMessages.updateSuccess.replace("{{ 1 }}", 'Department');
      toast.success(message);
    }
  });

  useEffect(() => {
    if (navigate && id) {
      (async () => {
        try {
          const response = await department.getById(id);
          const data = department.mapToReactSchema(response);

          setName(data.name);
          setComments(data.description);
          setIsActive(data.isActive);
        }
        catch (ex: any) {
          const route = routes.error;
          navigate(route);
        }
      })();
    }
  }, [navigate !== undefined, id]);

  /**
   * Not hook
   */
  const handleSubmit = () => {
    if (id) {
      mutation.mutate({
        uId: id,
        name,
        description: comments,
        status: isActive ? "active" : "inActive"
      });
    }
  }

  const handleCancel = () => {
    nativeNavigate(-1);
  }

  /**
   * Render
   */
  return (
    <Form
      name={[name, setName]}
      comments={[comments, setComments]}
      isActive={[isActive, setIsActive]}

      okText={locale.en.common.button.update}
      onOk={handleSubmit}

      cancelText={locale.en.common.button.cancel}
      onCancel={handleCancel}
    />
  );
}