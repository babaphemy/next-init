'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import * as yup from 'yup';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Calendar } from '@/components/ui/calendar';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { FC, useState } from 'react';
import { UserDto } from '@/types/UserDto';

interface BirthDateCaptionProps {
  date: Date;
  onDateChange: (_date: Date) => void;
  fromYear: number;
  toYear: number;
}

const BirthDateCaption: FC<BirthDateCaptionProps> = ({
  date,
  onDateChange,
  fromYear,
  toYear,
}) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const years = Array.from(
    { length: toYear - fromYear + 1 },
    (_, i) => toYear - i,
  );

  const handleMonthChange = (month: string) => {
    const newDate = new Date(date);
    newDate.setMonth(parseInt(month));
    onDateChange(newDate);
  };

  const handleYearChange = (year: string) => {
    const newDate = new Date(date);
    newDate.setFullYear(parseInt(year));
    onDateChange(newDate);
  };

  return (
    <div className="flex gap-2 px-3 pb-3">
      <Select
        value={date.getMonth().toString()}
        onValueChange={handleMonthChange}
      >
        <SelectTrigger className="w-[140px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {months.map((month, i) => (
            <SelectItem key={month} value={i.toString()}>
              {month}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={date.getFullYear().toString()}
        onValueChange={handleYearChange}
      >
        <SelectTrigger className="w-[100px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="max-h-[300px]">
          {years.map((year) => (
            <SelectItem key={year} value={year.toString()}>
              {year}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

const getMaxDate = () => {
  const today = new Date();
  const maxDate = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate(),
  );
  return maxDate;
};

const schema = yup.object().shape({
  firstname: yup
    .string()
    .required('First Name is required')
    .min(2, 'First Name must be at least 2 characters'),
  lastname: yup
    .string()
    .required('Last Name is required')
    .min(2, 'Last Name must be at least 2 characters'),
  email: yup
    .string()
    .email('A valid email is required')
    .required('You must enter an email'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
  confirmPassword: yup
    .string()
    .required('Please confirm your password')
    .oneOf([yup.ref('password')], 'Passwords must match'),
  role: yup
    .string()
    .required('Please select account type')
    .oneOf(['buyer', 'seller'], 'Invalid account type'),
  dateOfBirth: yup.string().required('Date is required'),
});

const defaultValues = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  confirmPassword: '',
  role: 'buyer' as 'buyer' | 'seller',
  dateOfBirth: '',
};

interface SignUpFormProps {
  className?: string;
}

export function SignUpForm({ className, ...props }: SignUpFormProps) {
  const router = useRouter();
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [month, setMonth] = useState(new Date(2000, 0));

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  // Watch the dateOfBirth field to update month when it changes
  const dateOfBirth = watch('dateOfBirth');

  const onSubmit = async (data: UserDto) => {
    try {
      const _submitData = {
        ...data,
        dateOfBirth: data.dateOfBirth,
      };

      // const [emailExist] = await Promise.all([
      //   UserManagementService.isExist(data.email),
      // ]);
      // if (emailExist) {
      //   toast.error('Email already exists. Please use a different email.');
      //   return;
      // }
      // await UserManagementService.newUser(submitData);

      toast.success(
        'Account created successfully! Check your email for instructions.',
      );
      if (data.role === 'seller') {
        router.push('/pricing');
      } else {
        router.push('/user/login');
      }
    } catch {
      toast.error('An error occurred. Please try again!.');
    } finally {
      reset();
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signIn('google', {
        redirect: false,
        callbackUrl: '/dashboard/seller',
      });

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
            toast.error(`Sign up failed: ${result.error}`);
        }
      }
    } catch {
      toast.error('An error occurred during Google sign up');
    }
  };

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Create your account</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your details below to create your account
        </p>
      </div>

      <div className="grid gap-6">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-4"
          noValidate
        >
          <div className="grid gap-2">
            <Label htmlFor="firstname">First Name</Label>
            <Controller
              name="firstname"
              control={control}
              render={({ field }) => (
                <Input
                  id="firstname"
                  type="text"
                  placeholder="John"
                  {...field}
                  className={errors.firstname ? 'border-red-500' : ''}
                />
              )}
            />
            {errors.firstname && (
              <p className="text-sm text-red-500">{errors.firstname.message}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="lastname">Last Name</Label>
            <Controller
              name="lastname"
              control={control}
              render={({ field }) => (
                <Input
                  id="lastname"
                  type="text"
                  placeholder="Doe"
                  {...field}
                  className={errors.lastname ? 'border-red-500' : ''}
                />
              )}
            />
            {errors.lastname && (
              <p className="text-sm text-red-500">{errors.lastname.message}</p>
            )}
          </div>

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
            <Label htmlFor="dateOfBirth">Date of Birth</Label>
            <Controller
              name="dateOfBirth"
              control={control}
              render={({ field }) => {
                const currentMonth = dateOfBirth
                  ? new Date(dateOfBirth)
                  : month;

                return (
                  <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          'w-full justify-start text-left font-normal',
                          !field.value && 'text-muted-foreground',
                          errors.dateOfBirth && 'border-red-500',
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {field.value ? (
                          format(new Date(field.value), 'PPP')
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <BirthDateCaption
                        date={currentMonth}
                        onDateChange={setMonth}
                        fromYear={1900}
                        toYear={getMaxDate().getFullYear()}
                      />
                      <Calendar
                        mode="single"
                        selected={
                          field.value ? new Date(field.value) : undefined
                        }
                        onSelect={(date) => {
                          if (date) {
                            field.onChange(format(date, 'yyyy-MM-dd'));
                            setCalendarOpen(false);
                          }
                        }}
                        month={currentMonth}
                        onMonthChange={setMonth}
                        disabled={(date) =>
                          date > getMaxDate() || date < new Date('1900-01-01')
                        }
                        initialFocus
                        fromYear={1900}
                        toYear={getMaxDate().getFullYear()}
                      />
                    </PopoverContent>
                  </Popover>
                );
              }}
            />
            {errors.dateOfBirth && (
              <p className="text-sm text-red-500">
                {errors.dateOfBirth.message}
              </p>
            )}
          </div>

          <div className="grid gap-2">
            <Label>Account Type</Label>
            <Controller
              name="role"
              control={control}
              render={({ field }) => (
                <div className="flex gap-4">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      value="buyer"
                      checked={field.value === 'buyer'}
                      onChange={() => field.onChange('buyer')}
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium">Buyer</span>
                    <span className="text-xs text-gray-500">
                      - Shop and purchase items
                    </span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      value="seller"
                      checked={field.value === 'seller'}
                      onChange={() => field.onChange('seller')}
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium">Seller</span>
                    <span className="text-xs text-gray-500">
                      - Sell your used items
                    </span>
                  </label>
                </div>
              )}
            />
            {errors.role && (
              <p className="text-sm text-red-500">{errors.role.message}</p>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  {...field}
                  className={errors.password ? 'border-red-500' : ''}
                />
              )}
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  {...field}
                  className={errors.confirmPassword ? 'border-red-500' : ''}
                />
              )}
            />
            {errors.confirmPassword && (
              <p className="text-sm text-red-500">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Creating Account...' : 'Sign Up'}
          </Button>
        </form>

        {/* Separator */}
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>

        {/* Google signup - outside of form */}
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
          Continue with Google
        </Button>
      </div>

      {/* Sign in link - outside of form */}
      <div className="text-center text-sm">
        Already have an account?{' '}
        <Link href="/user/login" className="underline underline-offset-4">
          Sign in
        </Link>
      </div>
    </div>
  );
}
