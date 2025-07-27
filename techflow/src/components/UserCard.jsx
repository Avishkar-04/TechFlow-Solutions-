import { motion } from 'framer-motion';

export default function UserCard({ name, email }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    },
    hover: {
      y: -5,
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    }
  };

  const avatarVariants = {
    hover: {
      rotate: 360,
      transition: {
        duration: 0.8,
        ease: 'linear'
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: 'spring',
        stiffness: 400
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
      initial="hidden"
      animate="visible"
      whileHover="hover"
      variants={cardVariants}
    >
      <div className="p-6">
        <motion.div 
          className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 text-blue-600"
          variants={avatarVariants}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </motion.div>
        
        <motion.h3 
          className="text-lg font-medium text-center text-gray-900"
          whileHover={{ color: '#3B82F6' }}
          transition={{ duration: 0.2 }}
        >
          {name}
        </motion.h3>
        <motion.p 
          className="mt-1 text-sm text-center text-gray-500"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {email}
        </motion.p>
        
        <motion.div 
          className="mt-4 flex justify-center space-x-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.button
            className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Message
          </motion.button>
          <motion.button
            className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded hover:bg-gray-300"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            View
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}