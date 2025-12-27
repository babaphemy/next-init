'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useState } from 'react';
import { toast } from 'sonner';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

const forgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email('A valid email is required')
    .required('You must enter an email'),
});

const resetPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .required('Password is required')
    .min(4, 'Password is too short - should be 4 chars minimum.'),
  confirmPassword: yup
    .string()
    .required('Please confirm your password')
    .oneOf([yup.ref('password')], 'Passwords must match'),
});

const forgotPasswordDefaults = {
  email: '',
};

const resetPasswordDefaults = {
  password: '',
  confirmPassword: '',
  email: '',
};

type ForgotPasswordProps = {
  email: string;
};

type ResetPasswordProps = {
  password: string;
  confirmPassword: string;
};

interface ResetFormProps {
  className?: string;
}

function ResetForm({ className, ...props }: ResetFormProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const emailEncoded = searchParams.get('email');
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [_selectedEmail, _setSelectedEmail] = useState(
    emailEncoded ? decodeURIComponent(emailEncoded) : '',
  );

  const {
    control: forgotControl,
    handleSubmit: handleForgotSubmit,
    formState: { errors: forgotErrors },
    reset: forgotReset,
  } = useForm({
    resolver: yupResolver(forgotPasswordSchema),
    defaultValues: forgotPasswordDefaults,
  });

  const {
    control: resetControl,
    handleSubmit: handleResetSubmit,
    formState: { errors: resetErrors },
    reset: resetReset,
  } = useForm({
    resolver: yupResolver(resetPasswordSchema),
    defaultValues: resetPasswordDefaults,
  });

  const onForgotSubmit = async (data: ForgotPasswordProps) => {
    setIsLoading(true);
    // setSelectedEmail(data.email);
    try {
      // await UserManagementService.sendToken({ email: data.email });
      setEmailSent(true);
      toast.success(
        'Password reset email sent! Check your inbox.' + data.email,
      );
    } catch {
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
      forgotReset();
    }
  };

  const onResetSubmit = async (_data: ResetPasswordProps) => {
    setIsLoading(true);
    try {
      // await UserManagementService.changePass({
      //   token: token || '',
      //   password: data.password,
      //   email: selectedEmail,
      // });
      toast.success('Password reset successful! You can now log in.');
      router.push('/user/login?reset=success');
    } catch {
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
      resetReset();
    }
  };
  if (token) {
    return (
      <div className={cn('flex flex-col gap-6', className)} {...props}>
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Reset your password</h1>
          <p className="text-balance text-sm text-muted-foreground">
            Enter your new password below
          </p>
        </div>

        <form
          onSubmit={handleResetSubmit(onResetSubmit)}
          className="grid gap-4"
        >
          <div className="grid gap-2">
            <Label htmlFor="password">New Password</Label>
            <Controller
              name="password"
              control={resetControl}
              render={({ field }) => (
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter new password"
                  {...field}
                  className={resetErrors.password ? 'border-red-500' : ''}
                />
              )}
            />
            {resetErrors.password && (
              <p className="text-sm text-red-500">
                {resetErrors.password.message}
              </p>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Controller
              name="confirmPassword"
              control={resetControl}
              render={({ field }) => (
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm new password"
                  {...field}
                  className={
                    resetErrors.confirmPassword ? 'border-red-500' : ''
                  }
                />
              )}
            />
            {resetErrors.confirmPassword && (
              <p className="text-sm text-red-500">
                {resetErrors.confirmPassword.message}
              </p>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Resetting Password...' : 'Reset Password'}
          </Button>
        </form>

        <div className="text-center text-sm">
          Remember your password?{' '}
          <Link href="/user/login" className="underline underline-offset-4">
            Back to login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">
          {emailSent ? 'Check your email' : 'Forgot your password?'}
        </h1>
        <p className="text-balance text-sm text-muted-foreground">
          {emailSent
            ? 'We sent a password reset link to your email address'
            : "Enter your email address and we'll send you a link to reset your password"}
        </p>
      </div>

      {emailSent ? (
        <div className="grid gap-4">
          <div className="rounded-md border border-green-200 bg-green-50 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-green-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-green-800">
                  If an account with that email exists, you will receive a
                  password reset link shortly.
                </p>
              </div>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full"
            onClick={() => {
              setEmailSent(false);
              forgotReset();
            }}
          >
            Send another email
          </Button>
        </div>
      ) : (
        <form
          onSubmit={handleForgotSubmit(onForgotSubmit)}
          className="grid gap-4"
        >
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Controller
              name="email"
              control={forgotControl}
              render={({ field }) => (
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  {...field}
                  className={forgotErrors.email ? 'border-red-500' : ''}
                />
              )}
            />
            {forgotErrors.email && (
              <p className="text-sm text-red-500">
                {forgotErrors.email.message}
              </p>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send reset link'}
          </Button>
        </form>
      )}

      <div className="text-center text-sm">
        Remember your password?{' '}
        <Link href="/user/login" className="underline underline-offset-4">
          Back to login
        </Link>
      </div>
    </div>
  );
}

export default ResetForm;
