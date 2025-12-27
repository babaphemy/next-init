import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Star,
  TrendingUp,
  DollarSign,
  ShoppingCart,
  MessageSquare,
  Award,
  Globe,
  Camera,
  Edit,
  MoreVertical,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';

const UserView = ({ id }: { id: string }) => {
  const user = {
    id: '12345',
    firstname: 'John',
    lastname: 'Doe',
    email: 'john.do@example.com',
    phone: '+1 234 567 890',
    role: 'user',
    status: true,
    dp: '/images/avatars/john_doe.jpg',
    rating: 4.5,
    country: 'USA',
    address: '123 Main St',
    bio: 'Passionate developer and tech enthusiast.',
  };

  const { data: _data } = useQuery({
    // queryFn: async () => await AnalyticsService.myStats(id),
    queryKey: ['user-stat'],
    enabled: !!id,
  });

  const _formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? 'fill-yellow-400 text-yellow-400'
            : i < rating
              ? 'fill-yellow-200 text-yellow-400'
              : 'text-gray-300'
        }`}
      />
    ));
  };
  if (!user) {
    return <div> No user found!</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-6">
              <div className="relative">
                <Image
                  src={user.dp || '/images/avatars/default.jpg'}
                  alt={`${user.firstname} ${user.lastname}`}
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                  width={96}
                  height={96}
                />
                <div
                  className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-white ${
                    user.status ? 'bg-green-500' : 'bg-red-500'
                  }`}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <h1 className="text-3xl font-bold text-gray-900">
                    {user.firstname} {user.lastname}
                  </h1>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      user.status
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {user.status ? 'Active' : 'Inactive'}
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 capitalize">
                    {user.role}
                  </span>
                </div>

                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Mail className="w-4 h-4" />
                    <span>{user.email}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Phone className="w-4 h-4" />
                    <span>{user.phone}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Globe className="w-4 h-4" />
                    <span>{user.country}</span>
                  </div>
                </div>

                {user?.rating && (
                  <div className="flex items-center space-x-2">
                    {renderStars(user.rating)}
                    <span className="text-sm font-medium text-gray-700">
                      {user.rating} rating
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Link href={`/dashboard/admin/users/${user.id}?action=edit`}>
                <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Edit className="w-4 h-4" />
                  <span>Edit Profile</span>
                </button>
              </Link>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
          </div>

          {user.bio && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">{user.bio}</p>
            </div>
          )}
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center justify-between">
              {/* <div>
                <p className="text-sm font-medium text-gray-600">Total Sales</p>
                <p className="text-2xl font-bold text-gray-900">
                  {formatCurrency(data?.revenue?.count ?? 0)}
                </p>
              </div> */}
              <div className="p-3 bg-green-100 rounded-full">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-green-600 font-medium">+12.5%</span>
              <span className="text-gray-600 ml-1">from last month</span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Total Orders
                </p>
                {/* <p className="text-2xl font-bold text-gray-900">
                  {data?.totalOrders?.toLocaleString()}
                </p> */}
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <ShoppingCart className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-green-600 font-medium">+8.2%</span>
              <span className="text-gray-600 ml-1">from last month</span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Avg. Order Value
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {formatCurrency(0)}
                </p>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-green-600 font-medium">+5.1%</span>
              <span className="text-gray-600 ml-1">from last month</span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Conversion Rate
                </p>
                {/* <p className="text-2xl font-bold text-gray-900">
                  {data?.conversionRate}%
                </p> */}
              </div>
              <div className="p-3 bg-orange-100 rounded-full">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-green-600 font-medium">+2.3%</span>
              <span className="text-gray-600 ml-1">from last month</span>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Organization Information */}
            {/* <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                  <Building className="w-5 h-5 mr-2" />
                  Organization Information
                </h2>
              </div>
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <Image
                    src={organization.logo}
                    alt={organization.name}
                    className="w-16 h-16 rounded-lg border object-cover"
                    width={64}
                    height={64}
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {organization.name}
                    </h3>
                    <p className="text-gray-600 mt-1">
                      {organization.industry}
                    </p>

                    <div className="grid grid-cols-2 gap-6 mt-4">
                      <div>
                        <p className="text-sm font-medium text-gray-600">
                          Website
                        </p>
                        <a
                          href={`https://${organization.website}`}
                          className="text-blue-600 hover:underline"
                        >
                          {organization.website}
                        </a>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-600">
                          Founded
                        </p>
                        <p className="text-gray-900">{organization.founded}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-600">
                          Employees
                        </p>
                        <p className="text-gray-900">
                          {organization.employees.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-600">
                          Annual Revenue
                        </p>
                        <p className="text-gray-900">{organization.revenue}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Top Products */}
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                  Top Products
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {/* {data?.topProducts?.map((product, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div>
                        <h4 className="font-medium text-gray-900">
                          {product?.productName ?? ''}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {product.unitsSold ?? 0} units sold
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">
                          {formatCurrency(product?.revenue ?? 0)}
                        </p>
                        <p className="text-sm text-gray-600">revenue</p>
                      </div>
                    </div>
                  ))} */}
                </div>
              </div>
            </div>

            {/* Recent Reviews */}
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Recent Reviews
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {/* {data?.recentReviews?.map((review, index) => (
                    <div
                      key={`${review?.userID}-${index}-${index}`}
                      className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="flex items-center">
                              {renderStars(review?.rating ?? 0)}
                            </div>
                            <span className="text-sm text-gray-600">
                              {formatDate(review?.createdOn ?? '')}
                            </span>
                          </div>
                          <p className="text-gray-900 mb-2">{review.comment}</p>
                          <p className="text-sm text-gray-600">
                            Review: {review?.comment ?? ''}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))} */}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                  Contact Information
                </h2>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-600">Email</p>
                    <a
                      href={`mailto:${user.email}`}
                      className="text-blue-600 hover:underline"
                    >
                      {user.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-600">Phone</p>
                    <a
                      href={`tel:${user.phone}`}
                      className="text-blue-600 hover:underline"
                    >
                      {user.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-600">Address</p>
                    <div className="text-gray-900">
                      <p>{user.address}</p>
                      {/* <p>
                        {user.city}, {user.state} {user.zip}
                      </p> */}
                      <p>{user.country}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Account Details */}
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                  Account Details
                </h2>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-600">User ID</p>
                  <p className="text-gray-900 font-mono text-sm">{user.id}</p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-600">Token</p>
                  {/* <p className="text-gray-900 font-mono text-sm">
                    {user.token}
                  </p> */}
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-600">Role</p>
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full capitalize">
                    {user.role}
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Member Since
                    </p>
                    {/* <p className="text-gray-900">
                      {user?.createdOn && formatDate(user.createdOn)}
                    </p> */}
                  </div>
                </div>

                {/* {user.modifiedOn && (
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Last Modified
                      </p>
                      <p className="text-gray-900">
                        {formatDate(user.modifiedOn)}
                      </p>
                    </div>
                  </div>
                )} */}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                  Quick Actions
                </h2>
              </div>
              <div className="p-6 space-y-3">
                <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>Send Message</span>
                </button>

                <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>Call User</span>
                </button>

                <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  <Camera className="w-4 h-4" />
                  <span>View Gallery</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserView;
