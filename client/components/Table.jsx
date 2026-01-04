import { Card } from "@/components/Ui/Card";
import HabitCell from "@/components/HabitCell";
import { Fragment } from "react";

const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const days = Array.from({ length: 31 }, (_, i) => i + 1);

function getStatus(day, month) {
    if (month === "Jan" && day === 1) return "done";
    if (month === "Jan" && day === 2) return "skipped";
    if (month === "Jan" && day === 3) return "done";
    return "empty";
}

export default function HabitTable() {
    return (
        <Card>
            <h3 className="text-sm font-medium mb-4">Daily Habit Tracker</h3>

            <div className="overflow-x-auto">
                <div
                    className="grid gap-2"
                    style={{ gridTemplateColumns: `60px repeat(12, 1fr)` }}
                >
                    {/* Header row */}
                    <div className="text-xs text-white/60">Day</div>
                    {months.map(m => (
                        <div key={m} className="text-xs text-center text-white/60">
                            {m}
                        </div>
                    ))}

                    {/* Grid rows */}
                    {days.map(day => (
                        <Fragment key={day}>
                            <div className="text-xs text-white/60">
                                {day}
                            </div>

                            {months.map(month => (
                                <HabitCell
                                    key={`${day}-${month}`}
                                    status={getStatus(day, month)}
                                />
                            ))}
                        </Fragment>
                    ))}
                </div>
            </div>
        </Card>
    );
}
