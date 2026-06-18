import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Package, MapPin, Settings, LogOut, ChevronRight } from 'lucide-react';
import { userProfile, orderHistory } from '../data/mockData';

const Account = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', name: 'Profile', icon: <User size={18} strokeWidth={1.5} /> },
    { id: 'orders', name: 'Orders', icon: <Package size={18} strokeWidth={1.5} /> },
    { id: 'addresses', name: 'Addresses', icon: <MapPin size={18} strokeWidth={1.5} /> },
    { id: 'settings', name: 'Settings', icon: <Settings size={18} strokeWidth={1.5} /> },
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-5 md:px-8">

        <div className="flex flex-col md:flex-row gap-6 lg:gap-10">

          {/* Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-card p-6 mb-5">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-4 border border-primary/10">
                <span className="text-3xl font-display font-bold text-primary">
                  {userProfile.name.charAt(0)}
                </span>
              </div>
              <h2 className="font-display text-lg font-bold text-heading text-center mb-1">{userProfile.name}</h2>
              <p className="text-muted text-xs font-medium text-center">Member since {userProfile.joinDate}</p>
            </div>

            <div className="bg-white rounded-2xl shadow-card overflow-hidden">
              <ul>
                {tabs.map((tab, i) => (
                  <li key={tab.id}>
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center justify-between px-5 py-4 transition-all duration-200 ${
                        activeTab === tab.id
                          ? 'bg-primary/5 text-primary font-semibold'
                          : 'text-body hover:bg-surface-2 hover:text-heading font-medium'
                      } ${i > 0 ? 'border-t border-black/[0.04]' : ''}`}
                    >
                      <div className="flex items-center gap-3 text-sm">
                        {tab.icon} {tab.name}
                      </div>
                      <ChevronRight size={16} className={activeTab === tab.id ? 'text-primary' : 'text-muted/50'} />
                    </button>
                  </li>
                ))}
                <li className="border-t border-black/[0.04]">
                  <button className="w-full flex items-center justify-between px-5 py-4 text-red-500 hover:text-red-600 hover:bg-red-50 transition-colors font-medium">
                    <div className="flex items-center gap-3 text-sm">
                      <LogOut size={18} strokeWidth={1.5} /> Logout
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              {activeTab === 'profile' && (
                <motion.div
                  key="profile"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white rounded-2xl shadow-card p-6 sm:p-8"
                >
                  <h2 className="font-display text-xl font-bold text-heading mb-6 pb-5 border-b border-black/[0.06]">Profile Details</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label className="block text-muted text-[11px] font-semibold uppercase tracking-wider mb-2">Full Name</label>
                      <div className="bg-surface-2 border border-black/[0.04] text-heading px-4 py-3 rounded-xl text-sm font-medium">
                        {userProfile.name}
                      </div>
                    </div>
                    <div>
                      <label className="block text-muted text-[11px] font-semibold uppercase tracking-wider mb-2">Email</label>
                      <div className="bg-surface-2 border border-black/[0.04] text-heading px-4 py-3 rounded-xl text-sm font-medium">
                        {userProfile.email}
                      </div>
                    </div>
                    <div>
                      <label className="block text-muted text-[11px] font-semibold uppercase tracking-wider mb-2">Phone</label>
                      <div className="bg-surface-2 border border-black/[0.04] text-heading px-4 py-3 rounded-xl text-sm font-medium">
                        {userProfile.phone}
                      </div>
                    </div>
                  </div>
                  <button className="bg-heading hover:bg-black text-white font-semibold py-3 px-6 rounded-xl text-sm transition-colors shadow-md">
                    Edit Profile
                  </button>
                </motion.div>
              )}

              {activeTab === 'orders' && (
                <motion.div
                  key="orders"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  <h2 className="font-display text-xl font-bold text-heading mb-6">Order History</h2>
                  <div className="space-y-5">
                    {orderHistory.map(order => (
                      <div key={order.id} className="bg-white rounded-2xl shadow-card p-6">
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6 pb-6 border-b border-black/[0.06] gap-4">
                          <div>
                            <div className="text-muted text-[10px] font-semibold uppercase tracking-wider mb-1">Order</div>
                            <div className="text-heading font-bold text-sm tracking-wide">{order.id}</div>
                          </div>
                          <div>
                            <div className="text-muted text-[10px] font-semibold uppercase tracking-wider mb-1">Date</div>
                            <div className="text-body text-sm font-medium">{order.date}</div>
                          </div>
                          <div>
                            <div className="text-muted text-[10px] font-semibold uppercase tracking-wider mb-1">Total</div>
                            <div className="text-heading font-display font-bold text-sm">₹{order.total.toLocaleString('en-IN')}</div>
                          </div>
                          <div>
                            <span className="bg-green-100 text-green-700 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm">
                              {order.status}
                            </span>
                          </div>
                        </div>

                        <div className="space-y-4">
                          {order.items.map((item, idx) => (
                            <div key={idx} className="flex justify-between items-center p-3 rounded-xl hover:bg-surface-2 transition-colors">
                              <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white border border-black/[0.06] rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                                  <Package size={20} className="text-muted" strokeWidth={1.5} />
                                </div>
                                <div>
                                  <div className="text-heading font-bold text-sm">{item.name}</div>
                                  <div className="text-body text-xs font-medium mt-0.5">Qty: {item.quantity}</div>
                                </div>
                              </div>
                              <div className="text-heading font-bold text-sm">₹{item.price.toLocaleString('en-IN')}</div>
                            </div>
                          ))}
                        </div>

                        <div className="mt-6 pt-6 border-t border-black/[0.06] flex gap-3">
                          <button className="bg-heading hover:bg-black text-white font-semibold py-2.5 px-5 rounded-xl text-xs transition-colors shadow-md">
                            Track Order
                          </button>
                          <button className="bg-surface-2 hover:bg-gray-200 text-heading font-semibold py-2.5 px-5 rounded-xl text-xs transition-colors border border-black/[0.04]">
                            View Invoice
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'addresses' && (
                <motion.div
                  key="addresses"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="font-display text-xl font-bold text-heading">Saved Addresses</h2>
                    <button className="bg-primary hover:bg-primary-dark text-white font-semibold py-2.5 px-5 text-sm rounded-xl transition-colors shadow-md shadow-primary/20">
                      Add New
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {userProfile.addresses.map(addr => (
                      <div key={addr.id} className="bg-white rounded-2xl shadow-card p-6 relative border border-transparent hover:border-primary/20 transition-colors">
                        {addr.isDefault && (
                          <span className="absolute top-5 right-5 bg-primary/10 text-primary text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wider">
                            DEFAULT
                          </span>
                        )}
                        <h3 className="text-heading font-bold text-sm mb-3 flex items-center gap-2">
                          <MapPin size={16} className="text-primary" strokeWidth={2} /> {addr.type}
                        </h3>
                        <p className="text-body text-sm leading-relaxed mb-5 font-medium">
                          {userProfile.name}<br/>
                          {addr.street}<br/>
                          {addr.city}, {addr.state} {addr.zip}
                        </p>
                        <div className="flex gap-4 pt-4 border-t border-black/[0.04]">
                          <button className="text-primary font-bold text-xs hover:text-primary-dark transition-colors">Edit</button>
                          <button className="text-red-500 font-bold text-xs hover:text-red-600 transition-colors">Delete</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'settings' && (
                <motion.div
                  key="settings"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white rounded-2xl shadow-card p-6 sm:p-8"
                >
                  <h2 className="font-display text-xl font-bold text-heading mb-6 pb-5 border-b border-black/[0.06]">Account Settings</h2>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-base font-bold text-heading mb-4">Change Password</h3>
                      <div className="space-y-4 max-w-sm">
                        <div>
                          <label className="block text-muted text-[11px] font-semibold uppercase tracking-wider mb-2">Current Password</label>
                          <input type="password" placeholder="••••••••" className="w-full bg-surface-2 border border-black/[0.04] text-heading px-4 py-2.5 rounded-xl focus:outline-none focus:border-primary/40 focus:shadow-sm text-sm transition-all" />
                        </div>
                        <div>
                          <label className="block text-muted text-[11px] font-semibold uppercase tracking-wider mb-2">New Password</label>
                          <input type="password" placeholder="••••••••" className="w-full bg-surface-2 border border-black/[0.04] text-heading px-4 py-2.5 rounded-xl focus:outline-none focus:border-primary/40 focus:shadow-sm text-sm transition-all" />
                        </div>
                        <button className="bg-heading hover:bg-black text-white font-semibold py-3 px-6 rounded-xl text-sm transition-colors shadow-md mt-2">
                          Update Password
                        </button>
                      </div>
                    </div>

                    <div className="pt-8 border-t border-black/[0.06]">
                      <h3 className="text-base font-bold text-red-600 mb-2">Danger Zone</h3>
                      <p className="text-body text-sm mb-5 font-medium">Once you delete your account, there is no going back. Please be certain.</p>
                      <button className="bg-red-50 hover:bg-red-100 text-red-600 font-bold py-3 px-6 rounded-xl text-sm transition-colors border border-red-200">
                        Delete Account
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Account;
