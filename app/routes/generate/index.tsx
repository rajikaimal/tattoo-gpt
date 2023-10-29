import { Form, useActionData, useNavigation } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import NavBar from "~/components/nav-bar";
import Spinner from "~/components/spinner";
import TattooImg from "~/components/tatto-img";
import { promptReplicate } from "~/utils/replicate";

export const meta: MetaFunction = () => {
  return [
    { title: "Generate your tattoo in seconds - TattooGPT" },
    {
      name: "description",
      content: "Generate your tattoo in seconds - TattooGPT",
    },
  ];
};

export async function action({ request }: any) {
  const formData = await request.formData();

  const prompt = String(formData.get("prompt"));
  const output = await promptReplicate(prompt);
  if (output) {
    return output.toString();
  } else {
    throw new Response("An error occured, please try again", { status: 500 });
  }
}

export default function Generate() {
  const image = useActionData<typeof action>();
  const { state } = useNavigation();

  return (
    <div className="h-screen flex flex-col bg-slate-950 text-white">
      <NavBar />

      {image && state !== "submitting" && <TattooImg src={image} />}

      {state === "submitting" && <Spinner />}

      {state !== "submitting" && (
        <div
          className={
            image
              ? `flex items-center justify-center bg-slate-950 pt-20`
              : `h-screen flex items-center justify-center bg-slate-950`
          }
        >
          <div className="flex items-center space-x-4">
            <Form method="post">
              <input
                className="p-2 border text-slate-950 border-gray-300 rounded w32 pr-5 mr-5"
                type="text"
                name="prompt"
                placeholder="Enter your tattoo idea"
              />

              <button
                type="submit"
                className="p-2 bg-slate-500 text-white rounded"
              >
                Prompt
              </button>
            </Form>
          </div>
        </div>
      )}
    </div>
  );
}
