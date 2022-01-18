import Button from 'components/Button';
import DebugStates from 'components/DebugStates';
import { useApiAxios } from 'api/base';
import useFieldValues from 'hooks/useFieldValues';
import { useNavigate } from 'react-router-dom';
import useAuth from 'hooks/useAuth';

const INITIAL_FIELD_VALUES = {
  username: '',
  email: '',
  password: '',
  password2: '',
};

function SignupForm() {
  const navigate = useNavigate();

  const [auth, _, signup] = useAuth();

  const [{ loading, error }, requestSignup] = useApiAxios(
    {
      url: '/accounts/api/signup/',
      method: 'POST',
    },
    { manual: true },
  );

  const { handleFieldChange, fieldValues } =
    useFieldValues(INITIAL_FIELD_VALUES);

  const handleSubmit = (e) => {
    e.preventDefault();
    requestSignup({ data: fieldValues }).then((response) => {
      const { access, refresh, email, username, first_name, last_name } =
        response.data;
      signup({
        isLoggedIn: true,
        access,
        refresh,
        username,
        email,
        first_name,
        last_name,
      });
      console.log('access :', access);
      console.log('refresh :', refresh);
      console.log('username :', username);
      console.log('email :', email);
      console.log('first_name :', first_name);
      console.log('last_name :', last_name);

      // 인증 후, 이동할 주소를 지정합니다.
      navigate('/accounts/login/');
    });
  };

  return (
    <div>
      <h2>Signup</h2>
      {error?.response?.status === 401 && (
        <div className="text-red-400">회원가입에 실패했습니다.</div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <input
            type="text"
            name="username"
            value={fieldValues.username}
            onChange={handleFieldChange}
            placeholder="username"
            className="p-1 bg-gray-100 w-full outline-none focus:border focus:border-gray-400 focus:border-dashed hover:transition-transform duration-300"
          />
        </div>
        <div className="my-3">
          <input
            type="email"
            name="email"
            value={fieldValues.email}
            onChange={handleFieldChange}
            placeholder="email"
            className="p-1 bg-gray-100 w-full outline-none focus:border focus:border-gray-400 focus:border-dashed hover:transition-transform duration-300"
          />
        </div>
        <div className="my-3">
          <input
            type="password"
            name="password"
            value={fieldValues.password}
            onChange={handleFieldChange}
            placeholder="password"
            className="p-1 bg-gray-100 w-full outline-none focus:border focus:border-gray-400 focus:border-dashed hover:transition-transform duration-300"
          />
        </div>
        <div className="my-3">
          <input
            type="password"
            name="password2"
            value={fieldValues.password2}
            onChange={handleFieldChange}
            placeholder="confirm password"
            className="p-1 bg-gray-100 w-full outline-none focus:border focus:border-gray-400 focus:border-dashed hover:transition-transform duration-300"
          />
        </div>
        <div className="my-3">
          <Button>Signup</Button>
        </div>
      </form>
      <DebugStates auth={auth} fieldValues={fieldValues} />
    </div>
  );
}

export default SignupForm;
