import React, { useState, useCallback, useContext } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import CommonContext from '../../global/contexts/CommonContext';
import LoginForm from '../components/LoginForm';
import useFetch from '../../global/hooks/useFetch';
import { cookie } from 'react-cookies';

const LoginContainer = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {
    actions: { setIsLogin, setLoggedMember },
  } = useContext(CommonContext);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const fetchCSR = useFetch();

  const onChange = useCallback(e => {
    setForm(form => ({ ...form, [e.target.name]: e.target.value }));
  }, []);

  const onSubmit = useCallback(
    e => {
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
      (async () => {
        const res = await fetchCSR('/member/token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
        if (res.ok) {
          // 토큰 발급 성공, 토큰을 쿠키에 유지
          const token = await res.text();
          cookie.save('token', token, { path: '/' });

          // 로그인 완료 시 이동
          const redirectUrl = searchParams.get('redirectUrl') ?? '/';
          navigate(redirectUrl, { replace: true });
        } else {
          const data = await res.json();
          errors.global = data.messages;
        }
      })();

      // 양식 초기화
      setForm({});

      // 로그인 완료 시 페이지 이동
      const redirectUrl = searchParams.get('redirectUrl') ?? '/';
      // navigate(redirectUrl, { replace: true });
    },
    [form, setIsLogin, setLoggedMember, searchParams, navigate]
  );

  return (
    <LoginForm
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      errors={errors}
    />
  );
};

export default React.memo(LoginContainer);
