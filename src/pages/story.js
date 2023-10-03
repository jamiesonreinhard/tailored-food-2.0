/* eslint-disable @next/next/no-img-element */
import React from "react";
import Layout from "@/components/layout";
import Image from "next/image";
import Link from "next/link";

const OurStory = () => {

    return (
        <Layout>
            <div className="py-[140px] max-w-[90%] mx-auto">
                <div
                    className="z-[10] bg-white/[0.9] p-[24px] lg:p-[40px] flex flex-col items-start
            gap-[20px] text-left z-[200]"
                >
                    <h1 className="text-4xl font-bold mb-8 mx-auto">Our Story</h1>

                    <p className="mb-6">
                        In the midst of the unpredictable whirlwind that was 2021, amidst a global pandemic, fate had a special story to weave for Leslie and Jamieson. Their paths crossed unexpectedly, when destiny had a change of plans for Jamieson. While he had his heart set on Bali to embark on a coding adventure at Le Wagon, the universe had other plans. The closing of the border took him on a detour to the vibrant heart of Mexico City.
                    </p>

                    <p className="mb-6">
                        Their first encounter was tinged with both excitement and caution. With the unpredictability of online meetings during that time, Leslie, always the prudent one, brought along a friend to their first date, ensuring Jamieson was the gentleman he claimed to be online. A laughable memory now, but it was the beginning of something magical.
                    </p>

                    <p className="mb-6">
                        Their connection was undeniable and the universe continued to have its playful say. While Jamieson returned to the US to chase his dreams in software engineering, the distance only deepened their bond. Life had its own tempo, sometimes fast, other times slow. But soon enough, the stars aligned. With the flexibility of remote jobs, Jamieson found himself either by Leslie's side in Mexico or exploring new horizons together. From the bustling streets of US cities to tranquil Mexican towns, the picturesque Canadian mountains, and the timeless charm of European locales, every journey was a chapter in their evolving love story.
                    </p>

                    <p className="mb-6">
                        However, as in every great love story, it wasn't all sunsets and postcards. They navigated through the maze of cultural differences, learning, sometimes stumbling, but always growing. Every challenge, every misunderstanding only solidified their bond, teaching them more about each other and themselves.
                    </p>

                    <p className="mb-6">
                        The culmination of their journey so far was a chilly evening in February 2023, against the backdrop of the iconic London skyline. Jamieson, with a heart full of hope and love, got down on one knee and proposed. And as Leslie said "yes", they embarked on their newest adventure together.
                    </p>

                    <p className="mb-6">
                        And now, as we await their special day, we celebrate not just the union of two souls, but the incredible journey that brought them together. Here's to Leslie and Jamieson - a testament to the fact that love, no matter the circumstances, always finds a way.
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default OurStory;
