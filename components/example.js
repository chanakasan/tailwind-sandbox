import { styles } from '@/styles/home.js'

export default () => (
    <div class={styles.wrapper}>
        <a href="#">
            <img class="rounded-t-lg" src="/static/images/image-1.jpg" alt="" />
        </a>

        <div class="p-5">
            <a href="#">
                <h5 class={styles.heading}>Noteworthy technology acquisitions 2021</h5>
            </a>
            <p class={styles.body}>Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <a href="#" class={styles.link}>
                Read more &rarr;
            </a>
        </div>
    </div>
)