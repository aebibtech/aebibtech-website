import Image from 'next/image'
import styles from './layout.module.css'

export default function Contact() {
    return (
        <span className={`layout ${styles.contacts}`}>
            <a href="https://facebook.com/aebibtech" target="_blank">
            <Image 
                priority
                src="/facebook.png"
                height={32}
                width={32}
                alt="facebook contact icon"
            />
            </a>
            <a href="https://linkedin.com/in/paul-abib-camano" target="_blank">
            <Image 
                priority
                src="/linkedin.png"
                height={32}
                width={32}
                alt="linkedin contact icon"
            />
            </a>
            <a href="https://twitter.com/aebibtech" target="_blank">
            <Image 
                priority
                src="/twitter.png"
                height={32}
                width={32}
                alt="twitter contact icon"
            />
            </a>
            <a href="https://www.youtube.com/channel/UCtH_FUz4G1p7kRrKgOELRTA" target="_blank">
            <Image 
                priority
                src="/youtube.png"
                height={32}
                width={32}
                alt="youtube contact icon"
            />
            </a>
        </span>
    )
}