import Link from "next/link";
import { contactInfo, footerLinks, socialLinks } from "@/data";
import { TrendingUpIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="font-heading bg-black px-4 text-white sm:px-[30px] lg:px-[50px]">
      <div className="max-w-8xl container mx-auto">
        <div className="flex flex-wrap justify-between gap-12 py-8">
          <div className="flex w-fit max-w-md flex-col gap-4">
            <Link className="flex items-end gap-4" href="/">
              <span className="text-accent flex flex-col text-3xl font-bold uppercase">
                <span className="selection-reverse">Inclusive</span>{" "}
                <span className="flex items-center gap-1 selection-reverse">
                  Growth
                  <TrendingUpIcon className="h-6 w-6" />
                </span>
              </span>
            </Link>
            <p className="text-lg text-white/80 selection-reverse">
              Championing universal accessibility and meaningful participation
              of individuals with disabilities across all sectors of society.
            </p>
            <div className="mt-4 flex items-center gap-4">
              {socialLinks?.map((s, i) => (
                <Link
                  key={i}
                  title={s.title}
                  href={s.link}
                  target="_blank"
                  className="bg-accent hover:bg-secondary rounded-full p-2 transition-colors duration-300"
                >
                  <s.icon />
                </Link>
              ))}
            </div>
          </div>

          {footerLinks?.map((foot, i) => (
            <div key={i} className="flex w-fit flex-col gap-6">
              <h2 className="text-xl font-bold selection-reverse">{foot.section}</h2>
              <div className="flex flex-col gap-2">
                {foot?.links?.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className="hover-underline-anim hover:text-accent w-fit text-lg text-white transition duration-300 selection-reverse"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div className="flex w-fit flex-col gap-6">
            <h2 className="text-xl font-bold selection-reverse">Contact Info</h2>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                {contactInfo.locations?.map((l, i) => (
                  <span key={i} className="text-lg text-white selection-reverse">
                    {l}
                  </span>
                ))}
              </div>

              <div className="flex flex-col">

                {contactInfo.phones?.map((p, i) => (
                  <Link
                    key={i}
                    href={`tel:${p}`}
                    className="hover-underline-anim hover:text-accent w-fit text-lg text-white transition duration-300 selection-reverse"
                  >
                    {p}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col">

                {contactInfo.emails?.map((e, i) => (
                  <Link
                    key={i}
                    href={`mailto:${e}`}
                    className="hover-underline-anim hover:text-accent w-fit text-lg text-white transition duration-300 selection-reverse"
                  >
                    {e}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center border-t border-white py-5 text-lg selection-reverse">
          All Right Reserved Copyright &copy; {new Date().getFullYear()}.
        </div>
      </div>
    </footer>
  );
}
