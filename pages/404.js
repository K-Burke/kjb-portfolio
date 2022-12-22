import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {

    const router = useRouter();
    var time = 5;
    //const timeEl = document.getElementById('countdown');
    const countRef = useRef();
    setInterval(updateCountdown, 1000);

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 5000)
    }, [])

    function updateCountdown() {
        countRef.current.value = `${time}`;
        time--;
    }

    return (
        <html>
            <div>
                <h1>Oops...</h1>
                <h2>Returning to Home in <p ref={countRef}></p> seconds.</h2>
                <Link href='/'>
                    Or click here to go now.
                </Link>
            </div>
        </html>
    )
}

export default NotFound;