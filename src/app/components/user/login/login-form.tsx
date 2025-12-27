'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { signIn, useSession } from 'next-auth/react';
import * as yup from 'yup';
import { toast } from 'sonner';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useQueryClient } from '@tanstack/react-query';
const schema = yup.object().shape({
  email: yup
    .string()
    .email('A valid email is required')
    .required('You must enter a email'),
  password: yup
    .string()
    .required('Password is required!.')
    .min(4, 'Password is too short - should be 4 chars minimum.'),
});
const defaultValues = {
  email: '',
  password: '',
};
type loginProps = {
  email: string;
  password: string;
};
interface LoginFormProps {
  className?: string;
}
export function LoginForm({ className, ...props }: LoginFormProps) {
  const params = useSearchParams();
  const { data: _session, status: _status } = useSession();
  const _queryClient = useQueryClient();
  const router = useRouter();
  const _redirectFrom = params.get('redirect');

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });
  const onSubmit = async (data: loginProps) => {
    try {
      const response = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (response?.status === 200) {
        router.push('/dashboard/seller');
      } else {
        toast.error('Invalid credentials or account not active!');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
      throw new Error(error instanceof Error ? error.message : String(error));
    } finally {
      reset();
    }
  };
  const handleGoogleSignIn = async () => {
    try {
      const result = await signIn('google', { redirect: false });

      if (result?.error) {
        switch (result.error) {
          case 'AccessDenied':
            toast.error(
              'Access denied. You may not be authorized to access this application.',
            );
            break;
          case 'OAuthSignin':
          case 'OAuthCallback':
            toast.error(
              'Error occurred during Google authentication. Please try again.',
            );
            break;
          default:
            toast.error(`Login failed: ${result.error}`);
        }
      }
    } catch {
      toast.error(`An error occurred during Google login`);
    }
  };

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>

      <div className="grid gap-6">
        {/* Form section - only email/password fields */}
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  {...field}
                  className={errors.email ? 'border-red-500' : ''}
                />
              )}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link
                href="/user/reset"
                className="ml-auto text-sm underline-offset-4 hover:underline"
              >
                Forgot your password?
              </Link>
            </div>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input
                  id="password"
                  type="password"
                  {...field}
                  className={errors.password ? 'border-red-500' : ''}
                />
              )}
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>

        {/* Separator */}
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>

        {/* Google login - outside of form */}
        <Button
          variant="outline"
          className="w-full"
          type="button"
          onClick={handleGoogleSignIn}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            className="mr-2 inline-block"
            aria-hidden="true"
            focusable="false"
          >
            <g>
              <path
                fill="#4285F4"
                d="M21.805 10.023h-9.18v3.955h5.262c-.227 1.18-1.37 3.463-5.262 3.463-3.167 0-5.75-2.624-5.75-5.858s2.583-5.858 5.75-5.858c1.805 0 3.017.77 3.71 1.432l2.537-2.47C17.09 3.41 15.13 2.5 12.625 2.5 7.797 2.5 4 6.297 4 11.023s3.797 8.523 8.625 8.523c4.97 0 8.25-3.49 8.25-8.41 0-.56-.06-1.01-.07-1.113z"
              />
              <path
                fill="#34A853"
                d="M12.625 21.546c2.43 0 4.47-.8 5.96-2.18l-2.84-2.32c-.79.53-1.8.85-3.12.85-2.4 0-4.44-1.62-5.17-3.8H4.58v2.39A8.52 8.52 0 0 0 12.625 21.546z"
              />
              <path
                fill="#FBBC05"
                d="M7.455 13.096a5.13 5.13 0 0 1 0-3.19V7.516H4.58a8.52 8.52 0 0 0 0 7.968l2.875-2.388z"
              />
              <path
                fill="#EA4335"
                d="M12.625 6.687c1.32 0 2.5.45 3.43 1.33l2.57-2.5C17.09 3.41 15.13 2.5 12.625 2.5A8.52 8.52 0 0 0 4.58 7.516l2.875 2.39c.73-2.18 2.77-3.8 5.17-3.8z"
              />
            </g>
          </svg>
          Login with Google
        </Button>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{' '}
        <a href="/user/register" className="underline underline-offset-4">
          Sign up
        </a>
      </div>
    </div>
  );
}
