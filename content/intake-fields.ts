/**
 * The project-fit questionnaire. Edit labels, helper text and options here.
 * `name` values are what a future backend would receive.
 */

export type IntakeField =
  | {
      kind: "text" | "email";
      name: string;
      label: string;
      help?: string;
      placeholder?: string;
      required?: boolean;
      autoComplete?: string;
    }
  | {
      kind: "textarea";
      name: string;
      label: string;
      help?: string;
      placeholder?: string;
      required?: boolean;
      rows?: number;
    }
  | {
      kind: "choice";
      name: string;
      label: string;
      help?: string;
      required?: boolean;
      options: readonly string[];
    };

export type IntakeGroup = {
  title: string;
  description: string;
  fields: readonly IntakeField[];
};

export const intakeGroups: readonly IntakeGroup[] = [
  {
    title: "Who you are",
    description: "So we know how to reach you.",
    fields: [
      {
        kind: "text",
        name: "name",
        label: "Name",
        required: true,
        autoComplete: "name",
        placeholder: "Your name",
      },
      {
        kind: "email",
        name: "email",
        label: "Email",
        required: true,
        autoComplete: "email",
        placeholder: "you@example.com",
      },
    ],
  },
  {
    title: "The idea",
    description:
      "Describe it the way you'd describe it to a friend. Plain language is genuinely fine.",
    fields: [
      {
        kind: "textarea",
        name: "what_to_build",
        label: "What would you like to build?",
        help: "An app, an agent, an automation, a tool, a prototype — or just the thing you keep wishing existed.",
        rows: 5,
        required: true,
        placeholder: "I keep thinking about…",
      },
      {
        kind: "textarea",
        name: "who_its_for",
        label: "Who is it for?",
        help: "You, your team, your clients, a specific kind of person.",
        rows: 3,
      },
      {
        kind: "textarea",
        name: "problem_it_solves",
        label: "What problem does it solve?",
        help: "What's annoying, slow, manual or missing right now?",
        rows: 4,
      },
      {
        kind: "textarea",
        name: "first_version",
        label: "What would you like the first version to be able to do?",
        help: "Not the whole vision — just the first useful version.",
        rows: 4,
      },
    ],
  },
  {
    title: "Where you are",
    description: "This helps us understand the right starting point. There's no wrong answer here.",
    fields: [
      {
        kind: "textarea",
        name: "where_stuck",
        label: "Where are you currently stuck?",
        rows: 4,
        placeholder: "Anything from “I don't know where to begin” to something very specific.",
      },
      {
        kind: "choice",
        name: "ai_comfort",
        label: "How comfortable are you using AI today?",
        options: [
          "I've barely used it",
          "I've tried it a little",
          "I use it regularly for everyday things",
          "I use it a lot and want to go further",
        ],
      },
      {
        kind: "textarea",
        name: "tried_already",
        label: "Have you tried building any part of this already? If yes, describe it.",
        help: "Sketches, notes, a spreadsheet, a no-code attempt, a half-finished draft — all of it counts.",
        rows: 4,
      },
    ],
  },
  {
    title: "Working together",
    description: "What you're hoping for, and what would make this worth it.",
    fields: [
      {
        kind: "choice",
        name: "interest",
        label: "Which type of help interests you most?",
        options: [
          "Mationary Session",
          "Build With Mationary",
          "Mationary Build Day",
          "Not sure yet",
        ],
      },
      {
        kind: "textarea",
        name: "success",
        label: "What would make this experience feel successful to you?",
        rows: 4,
      },
      {
        kind: "textarea",
        name: "anything_else",
        label: "Anything else we should know?",
        rows: 4,
      },
    ],
  },
];
