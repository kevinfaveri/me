import { TypeAnimation } from "react-type-animation";
import Avatar from "~/components/avatar";
import { useTerminalState } from "~/components/terminal-base/useTerminalState";
import { getTypingSpeeds, waitTypingPromise } from "~/utils";

export default function useTerminalStepAbout() {
  const { setCurrentLine, addInputLine, addOutputLine, disableTypingSpeedRef } =
    useTerminalState();

  const fn = async () => {
    setCurrentLine(
      <TypeAnimation
        sequence={[
          "open ",
          getTypingSpeeds(disableTypingSpeedRef).typingSpeed,
          "open abo",
          getTypingSpeeds(disableTypingSpeedRef).typingSpeed,
          "open about",
          getTypingSpeeds(disableTypingSpeedRef).typingSpeed,
        ]}
        speed={{
          type: "keyStrokeDelayInMs",
          value: getTypingSpeeds(disableTypingSpeedRef).keystrokeSpeed,
        }}
        wrapper="span"
        cursor
        className="text-[18px] text-secondary-yellow"
      />
    );
    await waitTypingPromise(
      getTypingSpeeds(disableTypingSpeedRef).typingSpeedCommand
    );
    addInputLine(<b>about</b>);
    addOutputLine(<Avatar />);
    addOutputLine(
      <span>
        <b>Kevin de Faveri Aguiar</b> | Software Engineer | Tokyo, Japan
      </span>
    );
    addOutputLine(
      `Product minded software engineer with ${
        new Date().getFullYear() - 2015
      }+ years building in finance (traditional and blockchain) and education.`
    );
    addOutputLine(
      "Shipped products that processed billions in volume. Passionate about open source."
    );
    addOutputLine(
      <span>
        Curious, love teaching, always learning new things.{" "}
        <a
          href="https://github.com/kevinfaveri"
          target="_blank"
          rel="noreferrer"
          className="hover:opacity-65 text-accent-orange no-underline"
        >
          GitHub
        </a>
      </span>
    );
    setCurrentLine("");
  };

  return fn;
}
