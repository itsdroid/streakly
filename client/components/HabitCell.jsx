function HabitCell({ status }) {
    const base =
        "h-7 rounded-md border flex items-center justify-center text-xs";

    const styles = {
        done: "bg-green-500/90 border-green-500 text-white",
        skipped: "bg-blue-500/80 border-blue-500 text-white",
        empty: "bg-transparent border-white/10",
    };

    return (
        <div className={`${base} ${styles[status]}`}>
            {status === "done" && "✓"}
            {status === "skipped" && "🌙"}
        </div>
    );
}

export default HabitCell;
