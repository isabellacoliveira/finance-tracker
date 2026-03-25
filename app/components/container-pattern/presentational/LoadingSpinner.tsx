// 🧠 PRESENTATIONAL COMPONENT (Dumb)
// Recebe props, sem lógica de negócio, reutilizável

interface LoadingSpinnerProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: 'h-8 w-8',
  md: 'h-12 w-12',
  lg: 'h-16 w-16'
};

export function LoadingSpinner({ message = 'Carregando...', size = 'md' }: LoadingSpinnerProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-64 p-8 space-y-4">
      <div 
        className={`animate-spin rounded-full border-4 border-indigo-200 border-t-indigo-600 ${sizeClasses[size]}`}
        role="status"
      >
        <span className="sr-only">Carregando...</span>
      </div>
      <p className="text-lg text-gray-600 font-medium">{message}</p>
    </div>
  );
}

