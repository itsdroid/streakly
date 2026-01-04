export function Card({ children }) {
    return (
        <div className="
      rounded-2xl
      bg-white/5 backdrop-blur-xl
      border border-white/10
      p-6
    ">
            {children}
        </div>
    );
}
