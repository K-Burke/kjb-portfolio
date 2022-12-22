import Head from 'next/head'

const Meta = ({title, keywords, description}) => {
    return (
         <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <meta charSet='utf-8' />
            <title>{title}</title>
         </Head>
    )
}

Meta.defaultProps = {
    title: 'Kyle Burke Portfolio',
    keywords: 'web development, programming, coding, software development, software engineering, portfolio',
    description: "Kyle Burke's personal portfolio website"
}

export default Meta