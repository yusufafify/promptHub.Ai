import Feed from "@components/Feed";
import React from "react";

function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="blue_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Welcome to PromptVerse.ai, the platform where you can discover and share
        AI-powered prompts. Whether you're looking for creative inspiration or
        want to contribute your own prompts, we've got you covered. Join our
        community of thinkers, creators, and innovators today!
      </p>

      <Feed />
    </section>
  );
}

export default Home;
