import React from "react";
import Link from "next/link";

function Form({ type, post, setPost, submitting, handleSubmit }) {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        {" "}
        <span className="blue_gradient">{type} Post</span>{" "}
      </h1>
      <p className="desc text-left max-w-md">
        Ready to supercharge your AI experience and inspire others along the
        way? Take the lead and craft an amazing AI-powered prompt that fuels
        imagination, innovation, and collaboration. Your words can ignite a
        world of ideas, helping users make the most out of their AI-powered
        tools. {type} & Share your brilliance with our community and watch your
        prompt become a catalyst for AI-driven creativity. Start writing your
        remarkable prompt now and be part of the AI inspiration revolution!
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI Prompt
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) =>
              setPost({
                ...post,
                prompt: e.target.value,
              })
            }
            placeholder="Write you prompt here..."
            className="form_textarea"
            required
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag <br />
            <span className="font-normal text-base text-gray-500">
              eg: (#product, #webdevelopment, #idea)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) =>
              setPost({
                ...post,
                tag: e.target.value,
              })
            }
            placeholder="#tag"
            className="form_input"
            required
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href={"/"} className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-blue text-white rounded-full"
          >
            {submitting ? `${type}...` : `${type}`}
          </button>
        </div>
      </form>
    </section>
  );
}

export default Form;
