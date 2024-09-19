import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import clsx from 'clsx';
import { register } from '../core/_requests';
import { Link } from 'react-router-dom';
import { useAuth } from '../core/Auth';
import { PasswordMeterComponent } from '../../../components/assets/ts/components';
import { toAbsoluteUrl } from '../../../components/helpers';
import { registrationSchema } from '../schemes/register.schema';

const initialValues = {
  username: '',
  lastname: '',
  email: '',
  password: '',
  changepassword: '',
  acceptTerms: false,
};

export function Registration() {
  const [loading, setLoading] = useState(false);
  const { saveAuth, setCurrentUser } = useAuth();

  const formik = useFormik({
    initialValues,
    validationSchema: registrationSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setLoading(true);
      try {
        const { data: auth } = await register(
          values.email,
          values.username,
          values.lastname,
          values.password,
          values.changepassword
        );
        saveAuth(auth);
        const { data: user } = await getUserByToken(auth.api_token);
        setCurrentUser(user);
      } catch (error) {
        console.error(error);
        saveAuth(undefined);
        setStatus('Los detalles de registro son incorrectos');
        setSubmitting(false);
      } finally {
        setLoading(false);
      }
    },
  });

  useEffect(() => {
    PasswordMeterComponent.bootstrap();
  }, []);

  return (
    <form
      className="form w-100 fv-plugins-bootstrap5 fv-plugins-framework"
      noValidate
      id="kt_login_signup_form"
      onSubmit={formik.handleSubmit}
    >
      {/* begin::Heading */}
      <div className="text-center mb-11">
        <h1 className="text-gray-900 fw-bolder mb-3">Registrarse</h1>
      </div>
      {/* end::Heading */}

      {/* begin::Login options */}
      <div className="row g-3 mb-9">
        <div className="col-md-6">
          <a
            href="#"
            className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100"
          >
            <img
              alt="Logo"
              src={toAbsoluteUrl('media/svg/brand-logos/google-icon.svg')}
              className="h-15px me-3"
            />
            Google
          </a>
        </div>

        <div className="col-md-6">
          <a
            href="#"
            className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100"
          >
            <img
              alt="Logo"
              src={toAbsoluteUrl('media/svg/brand-logos/apple-black.svg')}
              className="theme-light-show h-15px me-3"
            />
            <img
              alt="Logo"
              src={toAbsoluteUrl('media/svg/brand-logos/apple-black-dark.svg')}
              className="theme-dark-show h-15px me-3"
            />
            Apple
          </a>
        </div>
      </div>
      {/* end::Login options */}

      <div className="separator separator-content my-14">
        <span className="w-125px text-gray-500 fw-semibold fs-7">O con email</span>
      </div>

      {formik.status && (
        <div className="mb-lg-15 alert alert-danger">
          <div className="alert-text font-weight-bold">{formik.status}</div>
        </div>
      )}

      {/* begin::Form group Username */}
      <div className="fv-row mb-8">
        <label className="form-label fw-bolder text-gray-900 fs-6">Nombre de usuario</label>
        <input
          placeholder="Nombre de usuario"
          type="text"
          autoComplete="off"
          {...formik.getFieldProps('username')}
          className={clsx(
            'form-control bg-transparent',
            {
              'is-invalid': formik.touched.username && formik.errors.username,
            },
            {
              'is-valid': formik.touched.username && !formik.errors.username,
            }
          )}
        />
        {formik.touched.username && formik.errors.username && (
          <div className="fv-plugins-message-container">
            <div className="fv-help-block">
              <span role="alert">{formik.errors.username}</span>
            </div>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Form group Email */}
      <div className="fv-row mb-8">
        <label className="form-label fw-bolder text-gray-900 fs-6">Email</label>
        <input
          placeholder="Email"
          type="email"
          autoComplete="off"
          {...formik.getFieldProps('email')}
          className={clsx(
            'form-control bg-transparent',
            { 'is-invalid': formik.touched.email && formik.errors.email },
            {
              'is-valid': formik.touched.email && !formik.errors.email,
            }
          )}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="fv-plugins-message-container">
            <div className="fv-help-block">
              <span role="alert">{formik.errors.email}</span>
            </div>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Form group Password */}
      <div className="fv-row mb-8" data-kt-password-meter="true">
        <div className="mb-1">
          <label className="form-label fw-bolder text-gray-900 fs-6">Contraseña</label>
          <div className="position-relative mb-3">
            <input
              type="password"
              placeholder="Contraseña"
              autoComplete="off"
              {...formik.getFieldProps('password')}
              className={clsx(
                'form-control bg-transparent',
                {
                  'is-invalid': formik.touched.password && formik.errors.password,
                },
                {
                  'is-valid': formik.touched.password && !formik.errors.password,
                }
              )}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">
                  <span role="alert">{formik.errors.password}</span>
                </div>
              </div>
            )}
          </div>
          {/* begin::Meter */}
          <div
            className="d-flex align-items-center mb-3"
            data-kt-password-meter-control="highlight"
          >
            <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
            <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
            <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
            <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px"></div>
          </div>
          {/* end::Meter */}
        </div>
        <div className="text-muted">
          Utilice 8 o más caracteres con una combinación de letras, números y símbolos.
        </div>
      </div>
      {/* end::Form group */}

      {/* begin::Form group Confirm password */}
      <div className="fv-row mb-5">
        <label className="form-label fw-bolder text-gray-900 fs-6">Confirmar contraseña</label>
        <input
          type="password"
          placeholder="Confirmar contraseña"
          autoComplete="off"
          {...formik.getFieldProps('changepassword')}
          className={clsx(
            'form-control bg-transparent',
            {
              'is-invalid': formik.touched.changepassword && formik.errors.changepassword,
            },
            {
              'is-valid': formik.touched.changepassword && !formik.errors.changepassword,
            }
          )}
        />
        {formik.touched.changepassword && formik.errors.changepassword && (
          <div className="fv-plugins-message-container">
            <div className="fv-help-block">
              <span role="alert">{formik.errors.changepassword}</span>
            </div>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className="fv-row mb-8">
        <label className="form-check form-check-inline" htmlFor="kt_login_toc_agree">
          <input
            className="form-check-input"
            type="checkbox"
            id="kt_login_toc_agree"
            {...formik.getFieldProps('acceptTerms')}
          />
          <span>
            Acepto los{' '}
            <a
              href="https://keenthemes.com/metronic/?page=faq"
              target="_blank"
              className="ms-1 link-primary"
              rel="noopener noreferrer"
            >
              Términos & condiciones
            </a>
            .
          </span>
        </label>
        {formik.touched.acceptTerms && formik.errors.acceptTerms && (
          <div className="fv-plugins-message-container">
            <div className="fv-help-block">
              <span role="alert">{formik.errors.acceptTerms}</span>
            </div>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className="text-center">
        <button
          type="submit"
          id="kt_sign_up_submit"
          className="btn btn-lg btn-primary w-100 mb-5"
          disabled={formik.isSubmitting || !formik.isValid || !formik.values.acceptTerms}
        >
          {!loading && <span className="indicator-label">Enviar</span>}
          {loading && (
            <span className="indicator-progress" style={{ display: 'block' }}>
              Por favor espera...{' '}
              <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
            </span>
          )}
        </button>
        <Link to="/auth/login">
          <button
            type="button"
            id="kt_login_signup_form_cancel_button"
            className="btn btn-lg btn-light-primary w-100 mb-5"
          >
            Cancelar
          </button>
        </Link>
      </div>
      {/* end::Form group */}
    </form>
  );
}
