import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

import locale from 'locale';
import department from 'api/department';

import Form from '../Form';

export default () => {
  /**
   * Hooks
   */
  const [name, setName] = useState("");
  const [comments, setComments] = useState("");
  const [isActive, setIsActive] = useState(true);

  const queryClient = useQueryClient();

  const mutation = useMutation(department.create, {
    onSuccess: () => {
      queryClient.invalidateQueries(department.queryKey);

      const message = locale.en.toastMessages.createSuccess.replace("{{ 1 }}", "Department");
      toast.success(message);
      setName("");
      setComments("");
      setIsActive(true);
    }
  });

  /**
   * Not hook
   */
  const handleSubmit = () => {
    mutation.mutate({
      name,
      description: comments,
      status: isActive ? "active" : "inActive"
    });
  }

  /**
   * Render
   */
  return (
    <Form
      name={[name, setName]}
      comments={[comments, setComments]}
      isActive={[isActive, setIsActive]}

      okText={locale.en.common.button.create}
      onOk={handleSubmit}
    />
  );
}