import Date from '@/components/Ui/Date';

export default function Header() {
    return (
        <>
            <div className="flex items-center justify-between">
                <div className='header-section'>
                    <h1> Welcome back! </h1>
                    <p> Track your daily habits and build consistency. </p>
                </div>
                < Date />
            </div>
        </>
    )
}