import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Package, MapPin, Settings, LogOut, ChevronRight } from 'lucide-react';
import { userProfile, orderHistory } from '../data/mockData';

const Account = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', name: 'Profile Details', icon: <User size={20} /> },
    { id: 'orders', name: 'Order History', icon: <Package size={20} /> },
    { id: 'addresses', name: 'Saved Addresses', icon: <MapPin size={20} /> },
    { id: 'settings', name: 'Account Settings', icon: <Settings size={20} /> },
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          
          {/* Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-card rounded-sm border border-white/5 p-6 mb-6">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary">
                <span className="text-3xl font-black text-primary">
                  {userProfile.name.charAt(0)}
                </span>
              </div>
              <h2 className="text-xl font-black uppercase tracking-tighter text-white text-center mb-1">{userProfile.name}</h2>
              <p className="text-gray-400 text-sm text-center mb-4">Member since {userProfile.joinDate}</p>
            </div>
            
            <div className="bg-card rounded-sm border border-white/5 overflow-hidden">
              <ul className="divide-y divide-white/5">
                {tabs.map(tab => (
                  <li key={tab.id}>
                    <button 
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center justify-between px-6 py-4 transition-colors ${activeTab === tab.id ? 'bg-primary/10 text-primary border-l-4 border-primary' : 'text-gray-300 hover:bg-white/5 hover:text-white border-l-4 border-transparent'}`}
                    >
                      <div className="flex items-center gap-3 font-bold uppercase tracking-wider text-sm">
                        {tab.icon} {tab.name}
                      </div>
                      <ChevronRight size={16} />
                    </button>
                  </li>
                ))}
                <li>
                  <button className="w-full flex items-center justify-between px-6 py-4 text-red-400 hover:bg-red-500/10 transition-colors border-l-4 border-transparent">
                    <div className="flex items-center gap-3 font-bold uppercase tracking-wider text-sm">
                      <LogOut size={20} /> Logout
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
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-card rounded-sm border border-white/5 p-6 sm:p-8"
                >
                  <h2 className="text-2xl font-black uppercase tracking-tighter text-white mb-6 border-b border-white/5 pb-4">Profile Details</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">Full Name</label>
                      <div className="bg-background border border-white/10 text-white px-4 py-3 rounded-sm font-medium">
                        {userProfile.name}
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">Email Address</label>
                      <div className="bg-background border border-white/10 text-white px-4 py-3 rounded-sm font-medium">
                        {userProfile.email}
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">Phone Number</label>
                      <div className="bg-background border border-white/10 text-white px-4 py-3 rounded-sm font-medium">
                        {userProfile.phone}
                      </div>
                    </div>
                  </div>
                  <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-sm uppercase tracking-wider transition-colors">
                    Edit Profile
                  </button>
                </motion.div>
              )}

              {activeTab === 'orders' && (
                <motion.div 
                  key="orders"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <h2 className="text-2xl font-black uppercase tracking-tighter text-white mb-6">Order History</h2>
                  <div className="space-y-6">
                    {orderHistory.map(order => (
                      <div key={order.id} className="bg-card rounded-sm border border-white/5 p-6">
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6 pb-6 border-b border-white/5 gap-4">
                          <div>
                            <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Order Number</div>
                            <div className="text-white font-bold tracking-wider">{order.id}</div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Date</div>
                            <div className="text-white font-bold">{order.date}</div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Total</div>
                            <div className="text-primary font-bold">₹{order.total.toLocaleString('en-IN')}</div>
                          </div>
                          <div>
                            <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wider">
                              {order.status}
                            </span>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          {order.items.map((item, idx) => (
                            <div key={idx} className="flex justify-between items-center">
                              <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-white/5 rounded-sm flex items-center justify-center flex-shrink-0">
                                  <Package size={20} className="text-gray-400" />
                                </div>
                                <div>
                                  <div className="text-white font-bold">{item.name}</div>
                                  <div className="text-gray-400 text-sm">Qty: {item.quantity}</div>
                                </div>
                              </div>
                              <div className="text-white font-bold">₹{item.price.toLocaleString('en-IN')}</div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-6 pt-6 border-t border-white/5 flex gap-4">
                           <button className="flex-1 sm:flex-none bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-sm uppercase tracking-wider transition-colors text-sm">
                             Track Order
                           </button>
                           <button className="flex-1 sm:flex-none border border-white/20 hover:border-white text-white font-bold py-3 px-6 rounded-sm uppercase tracking-wider transition-colors text-sm">
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
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-black uppercase tracking-tighter text-white">Saved Addresses</h2>
                    <button className="bg-primary hover:bg-primary/90 text-white font-bold py-2 px-4 text-xs rounded-sm uppercase tracking-wider transition-colors">
                      Add New
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {userProfile.addresses.map(addr => (
                      <div key={addr.id} className="bg-card rounded-sm border border-white/5 p-6 relative group">
                        {addr.isDefault && (
                          <span className="absolute top-4 right-4 bg-primary/20 text-primary text-[10px] font-bold px-2 py-1 uppercase rounded-sm tracking-wider">
                            Default
                          </span>
                        )}
                        <h3 className="text-white font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                          <MapPin size={16} className="text-primary" /> {addr.type}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                          {userProfile.name}<br/>
                          {addr.street}<br/>
                          {addr.city}, {addr.state} {addr.zip}
                        </p>
                        <div className="flex gap-4">
                          <button className="text-primary text-sm font-bold uppercase tracking-wider hover:text-white transition-colors">Edit</button>
                          <button className="text-gray-500 text-sm font-bold uppercase tracking-wider hover:text-red-400 transition-colors">Delete</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
              
              {activeTab === 'settings' && (
                <motion.div 
                  key="settings"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-card rounded-sm border border-white/5 p-6 sm:p-8"
                >
                  <h2 className="text-2xl font-black uppercase tracking-tighter text-white mb-6 border-b border-white/5 pb-4">Account Settings</h2>
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-4">Change Password</h3>
                      <div className="space-y-4 max-w-md">
                        <div>
                          <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">Current Password</label>
                          <input type="password" placeholder="••••••••" className="w-full bg-background border border-white/10 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-primary" />
                        </div>
                        <div>
                          <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">New Password</label>
                          <input type="password" placeholder="••••••••" className="w-full bg-background border border-white/10 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-primary" />
                        </div>
                        <button className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-sm uppercase tracking-wider transition-colors text-sm">
                          Update Password
                        </button>
                      </div>
                    </div>
                    
                    <div className="pt-8 border-t border-white/5">
                      <h3 className="text-lg font-bold text-red-400 mb-2">Danger Zone</h3>
                      <p className="text-gray-400 text-sm mb-4">Once you delete your account, there is no going back. Please be certain.</p>
                      <button className="border border-red-500/50 text-red-400 hover:bg-red-500 hover:text-white font-bold py-3 px-6 rounded-sm uppercase tracking-wider transition-colors text-sm">
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
