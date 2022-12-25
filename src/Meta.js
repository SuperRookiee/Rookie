import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import logo from './assets/img/logo.svg'

// @param props
// @returns {JSX.Element}

const Meta = (props) => {
    return (
     <HelmetProvider>
        <Helmet>
            <meta charSet='utf-8' />
            <title>{props.title}</title>
            <meta name="description" content={props.description} />
            <meta name="keywords" content={props.keywords} />
            <meta name="author" content={props.author} />
            <meta name="subject" content={props.subject} />
            <meta name="copyright" content={props.copyright} />
            <meta name="content-language" content="ko" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={props.title}/>
            <meta property="og:description" content={props.description} />
            <meta property="og:url" content={props.url} />
            <meta property="og:image" content={props.image} />
            <link rel="icon" href={props.icon} type="image/png" />
            <link rel="shortcut icon" href={props.shortcutIcon} type="image/png" />
            <link rel="apple-touch-icon" href={props.appleTouchIcon} type="image/png" />

            {/* 구글 웹폰트 적용 */}
            <link rel="preconnect" href="https://fonts.googleapis.com"/> 
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/> 
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"/>
        </Helmet>
     </HelmetProvider>
    );
};

Meta.defaultProps = {
    title: 'Rookie',
    description: 'React Project',
    author: 'SuperRookiee',
    subject: 'React Frontend Programming',
    copyright: 'HyunWook Go',
    keywords: 'React',
    url: window.location.href,
    image: logo,
    icon: null,
    shortcutIcon: null,
    appleTouchIcon: null,
};

export default Meta;