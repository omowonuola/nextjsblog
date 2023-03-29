import { NextPage } from 'next'
import BlogCard from '../../component/BlogCard';

interface Props {
    title: string;
    desc: string;
}


const Blogs: NextPage<Props> = () => {
    return <div className='max-w-3xl mx-auto p-5 space-y-5'>
        <BlogCard title='First Blog' desc='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia 
            laborum molestias labore ullam earum soluta minus veniam, repellendus sapiente ipsum.'
        />
        <BlogCard title='First Blog' desc='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia 
            laborum molestias labore ullam earum soluta minus veniam, repellendus sapiente ipsum.'
        />
        <BlogCard title='First Blog' desc='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia 
            laborum molestias labore ullam earum soluta minus veniam, repellendus sapiente ipsum.'
        />
    </div>
}

export default Blogs