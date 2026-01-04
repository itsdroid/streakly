import Header from '@/components/Header';
import AddButton from '@/components/Ui/AddButton';
import GridCard from '@/components/GridCard';

export default function Page() {
  return (
    <div className='m-5'>
    <Header/>
    <AddButton/>
    <GridCard/>
    </div>
  )
}