import Link from "next/link";

type ImageCreditsProps = {
  creditingPhrase?: string;
  creditsTo: string;
  creditLink: string;
};

export default function ImageCredits({
  creditingPhrase,
  creditsTo,
  creditLink,
}: ImageCreditsProps) {
  return (
    <span className="absolute top-0 text-white text-sm opacity-0 p-2">
      {creditingPhrase ? creditingPhrase : "Photo taken by"}{" "}
      <Link
        href={creditLink}
        target="_blank"
        className="font-semibold hover:text-primary-light hover:underline"
      >
        {creditsTo}
      </Link>
    </span>
  );
}
