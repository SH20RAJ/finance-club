"use client";

import { motion } from 'framer-motion';
import { User, Settings, LogOut } from 'lucide-react';

export default function UserManagementClient() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl">
         <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-white p-12 shadow-[12px_12px_0px_0px] shadow-zinc-900 dark:shadow-white"
         >
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12 border-b-2 border-zinc-200 dark:border-zinc-800 pb-8">
               <div className="w-32 h-32 bg-zinc-200 dark:bg-zinc-800 rounded-full border-2 border-zinc-900 dark:border-white flex items-center justify-center">
                  <User className="w-16 h-16 text-zinc-400" />
               </div>
               <div className="text-center md:text-left">
                  <h1 className="font-handwritten text-4xl font-bold mb-2">Guest User</h1>
                  <p className="text-zinc-500">Member since 2026</p>
               </div>
            </div>

            <div className="grid gap-4">
                {["Edit Profile", "Change Password", "Notification Settings", "My Registrations"].map((item) => (
                   <div key={item} className="flex items-center justify-between p-4 border-2 border-zinc-200 dark:border-zinc-800 hover:border-fin-blue cursor-pointer bg-zinc-50 dark:bg-black hover:bg-fin-blue/5 transition-colors group">
                      <span className="font-handwritten text-xl font-bold">{item}</span>
                      <Settings className="w-5 h-5 text-zinc-400 group-hover:text-fin-blue" />
                   </div>
                ))}
            </div>

            <div className="mt-12 text-center">
               <button className="flex items-center justify-center gap-2 text-red-500 font-bold hover:underline">
                  <LogOut className="w-5 h-5" /> Sign Out
               </button>
            </div>
         </motion.div>
      </div>
    </main>
  );
}
