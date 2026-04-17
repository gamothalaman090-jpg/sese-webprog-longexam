import { Link } from 'react-router-dom';

const variantClasses = {
  primary: 'bg-primary-500 text-bg-dark border-primary-500 hover:bg-white hover:border-white shadow-[0_0_20px_rgba(251,191,36,0.3)]',
  secondary: 'bg-transparent text-white border-white/20 hover:border-primary-500/50 hover:bg-primary-500/5 hover:text-primary-500',
  glass: 'glass border-white/10 text-white hover:bg-white/10 hover:border-white/20',
};

const Button = ({
  children,
  to,
  type = 'button',
  variant = 'primary',
  className = '',
}) => {
  const classes = [
    'inline-flex items-center justify-center rounded-2xl border-2 px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed',
    variantClasses[variant] ?? variantClasses.primary,
    className,
  ]
    .join(' ')
    .trim();

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
};

export default Button;



