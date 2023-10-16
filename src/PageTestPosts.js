import { memo } from "react";
import { Header, Note, Group, } from "./PageElements";
import { FaRegSmileWink } from "react-icons/fa";
import { PageContainer } from "./PageContainer";
import { useOutletContext } from "react-router-dom";
import matter from 'gray-matter'

export const PageTestPosts = memo(function PageTestPosts({
    title,
    subtitle,
    background,
    row,
    column
}) {
    const [media, setMedia] = useOutletContext();


    const color1 = "hsl(40,80%,70%)";
    const color2 = "hsl(40,80%,80%)";
    const noteStyle = {
        maxWidth: "100%",
        boxSizing: "border-box"

    };


    async function getAllPosts() {
        const context = require.context('../_posts', false, /\.md$/)
        const posts = []
        for (const key of context.keys()) {
            const post = key.slice(2);
            const content = await import(`../_posts/${post}`);
            const meta = matter(content.default)
            posts.push({
                slug: post.replace('.md', ''),
                title: meta.data.title
            })
        }
        return posts;
    }

    return (
        <PageContainer layout="center" heroComponent="asl" heroInteraction={true}
        >

            <Group className="p col" style={{
                gap: "1rem", margin: "0 auto 0 auto", padding: "0 0 2rem 0",
            }}>
                <Header
                    title="ASL Flash Cards"
                    subtitle="Animated sign language card deck"

                >
                </Header>


                <Note>
                    <span>My husband and I wanted to try learning a second language together. We chose American Sign Language because we thought it would be handy <FaRegSmileWink size=".9rem" style={{ transform: "translateY(.1rem)", opacity: ".5" }} /> to be able to communicate visually as an alternative to speaking.</span>
                </Note>

                <Note>
                    <h4>Use Cases</h4>
                    <ul className="col" style={{
                        gap: ".5rem", margin: 0, padding: "0 0 0 1.5rem"
                    }}>
                        <li>During quiet situations when we don't want to disturb other people by making noise</li>
                        <li>In crowded places or noisy environments when we don't want to shout over competing sounds</li>
                        <li>When friends are having a group conversation and we want to communicate something briefly without interrupting other people who are talking</li>
                    </ul>
                </Note>
                <Note>
                    <h4>Criteria</h4>
                    <ul className="col" style={{
                        gap: ".5rem", margin: 0, padding: "0 0 0 1.5rem"
                    }}>
                        <li>A way to track new words we learn from various sources</li>
                        <li>Quiz or flash cards that allow us to practice words from our learned vocabulary</li>
                        <li>Free or inexpensive</li>
                    </ul>
                </Note>
                <Note>
                    <h4>Problems</h4>
                    <ul className="col" style={{
                        gap: ".5rem", margin: 0, padding: "0 0 0 1.5rem"
                    }}>
                        <li> The ASL learning tools didn't make it easy to track learned vocabulary or add new words from multiple resources. </li>
                        <li>Custom flashcard building tools required multiple UI steps and uploading photos to create each card one at a time.</li>
                        <li> I found one tool that featured spreadsheet integration for bulk entry, but it was very expensive. </li>
                    </ul>
                </Note>
                <Note>
                    <span> I looked for tools to help us learn and practice, wasn't able to find any that met our needs. It occurred to me that I could probably write an easier app myself for quicker and cheaper than I could buy one.</span>
                </Note>

            </Group>


        </PageContainer >
    );
});