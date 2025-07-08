import React, { useState, useCallback } from 'react';
import LoginForm from '../components/LoginForm';

const LoginContainer = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const onChange = useCallback(e => {
    setForm(form => ({ ...form, [e.target.name]: e.target.value }));
  }, []);

  const onSubmit = useCallback(e => {
    e.preventDefault();

    const errors = {};
    let hasErrors = false;

    // 필수 항목 검증 S
    const requiredFields = {
      email: '이메일을 입력하세요.',
      password: '비밀번호를 입력하세요.',
    };

    for (const [field, message] of Object.entries(requiredFields)) {
      if (!form[field] || !form[field]?.trim()) {
        errors[field] = message;
        hasErrors = true;
      }
    }
    // 필수 항목 검증 E

    setErrors(errors);
    if (hasErrors) {
        return; // 검증 실패 시, 다음 로직 처리 X
    }

    // 로그인 처리...

  }, [form]);

  return <LoginForm form={form} onChange={onChange} onSubmit={onSubmit} errors={errors} />;
};

export default React.memo(LoginContainer);
