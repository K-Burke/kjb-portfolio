import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Timer from '../components/Timer'

const NotFound = () => {

    const router = useRouter();
    
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 5000)
    }, [])

    return (
        <div>
            <h1>Oops... That page cannot be found!</h1>

            <h2>Returning to Home in <Timer duration={5}/> </h2>

            <Link href='/'>
                Or click here to go now.
            </Link>
        </div>
    )
}

export default NotFound;