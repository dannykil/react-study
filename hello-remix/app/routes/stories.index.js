import { json, redirect } from "@remix-run/node";
import {
  Link,
  useLoaderData,
  Form,
  useTransition,
  unstable_useViewTransitionState,
} from "@remix-run/react";
import { createStory, getStories } from "../lib/api";

export const loader = async () => {
  const stories = await getStories();
  return json(stories);
};

export async function action({ request }) {
  const formData = await request.formData();
  const title = formData.get("title");
  const body = formData.get("body");
  const story = await createStory({ title, body });
  //   return story;
  return redirect(`/stories/${story.id}`);
}

export default function Stories() {
  const stories = useLoaderData();
  const transition = unstable_useViewTransitionState();

  return (
    <div>
      <h1>Stories</h1>
      <ul>
        {stories.map((story) => (
          <li key={story.id}>
            <Link to={`/stories/${story.id}`}>{story.title}</Link>
          </li>
        ))}
      </ul>
      <Form method="post">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            width: 320,
          }}
        >
          <input type="text" name="title" placeholder="제목을 입력하세요..." />
          <textarea name="body" placeholder="이야기를 입력하세요..." />
          <button type="submit">
            {transition.state === "submitting" ? "등록 중..." : "등록"}
          </button>
        </div>
      </Form>
    </div>
  );
}
