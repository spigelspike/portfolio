import { NextRequest, NextResponse } from "next/server";
import { SYSTEM_PROMPT } from "@/data/knowledge";
import { GoogleGenAI } from "@google/genai";

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = (await req.json()) as { messages: ChatMessage[] };

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Invalid messages array provided." },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;

    // Graceful offline fallback if API key is not configured
    if (!apiKey) {
      const lastUserMessage = messages[messages.length - 1]?.content?.toLowerCase() || "";

      if (lastUserMessage.includes("project") || lastUserMessage.includes("built") || lastUserMessage.includes("work")) {
        return NextResponse.json({
          reply:
            "🚀 **Mohamed Shereef's Top Projects:**\n\n- **Kallanum Policeum**: Real-time multiplayer social deduction game with voice chat over WebRTC.\n- **MedArchive**: Self-hosted family medical document vault & clinical AI assistant with dual-stage OCR & local RAG.\n- **Book2Vision**: AI multimodal engine converting books into audiobooks, visuals & summaries.\n- **ACLInsight-Net**: Deep learning knee MRI diagnostic system (IEEE publication in preparation).\n- **PyPath**: Interactive browser Python execution engine with Pyodide.",
        });
      }

      if (lastUserMessage.includes("stack") || lastUserMessage.includes("skill") || lastUserMessage.includes("technolog")) {
        return NextResponse.json({
          reply:
            "⚡ **Shareef's Core Tech Stack:**\n\n- **Languages**: Python, JavaScript, TypeScript, Java, C\n- **Frameworks & Libs**: FastAPI, Next.js 16, React 19, PyTorch, Node.js\n- **Databases & Cloud**: Supabase, PostgreSQL, Firebase, ChromaDB, Docker, Vercel\n- **AI / NLP**: LLM APIs, Prompt Engineering, Tesseract OCR, Text-to-Speech, RAG Architecture",
        });
      }

      if (lastUserMessage.includes("kallanum")) {
        return NextResponse.json({
          reply:
            "🎮 **Kallanum Policeum** is a browser-based real-time multiplayer social deduction game built with **React**, **TypeScript**, **WebRTC** (for in-game voice chat), and **Supabase**. It runs completely serverless with zero dedicated server costs!",
        });
      }

      if (lastUserMessage.includes("medarchive") || lastUserMessage.includes("medical")) {
        return NextResponse.json({
          reply:
            "🏥 **MedArchive** is a self-hosted family medical vault and clinical AI assistant built with **FastAPI**, **React**, **ChromaDB**, **Groq LLaMA-3**, and **Tesseract/Gemini OCR** for turning messy prescriptions and lab reports into grounded, searchable records.",
        });
      }

      if (lastUserMessage.includes("book2vision") || lastUserMessage.includes("book")) {
        return NextResponse.json({
          reply:
            "📚 **Book2Vision** is an AI-powered multimodal platform that transforms written books into interactive audiobooks, illustrated visual scene summaries, and structured learning material using OCR, NLP, and Diffusion models.",
        });
      }

      if (lastUserMessage.includes("hire") || lastUserMessage.includes("available") || lastUserMessage.includes("job") || lastUserMessage.includes("role")) {
        return NextResponse.json({
          reply:
            "💼 **Yes! Shareef is actively open for opportunities:**\n\n- **Roles**: Software Engineer, Backend Developer (Python/FastAPI), AI/ML Engineer, Full-Stack Developer\n- **Work Model**: Open to Remote, Hybrid, or On-site roles globally\n- **Contact**: Reach out directly at **mhdshareefch@gmail.com** or on **[LinkedIn](https://linkedin.com/in/mohamed-shereef)**!",
        });
      }

      if (lastUserMessage.includes("contact") || lastUserMessage.includes("email") || lastUserMessage.includes("reach") || lastUserMessage.includes("message")) {
        return NextResponse.json({
          reply:
            "📬 **You can reach Mohamed Shereef at:**\n\n- **Email**: [mhdshareefch@gmail.com](mailto:mhdshareefch@gmail.com)\n- **LinkedIn**: [linkedin.com/in/mohamed-shereef](https://linkedin.com/in/mohamed-shereef)\n- **GitHub**: [github.com/spigelspike](https://github.com/spigelspike)",
        });
      }

      if (
        lastUserMessage.includes("fibonacci") ||
        lastUserMessage.includes("homework") ||
        lastUserMessage.includes("fizzbuzz") ||
        (lastUserMessage.includes("code for") && !lastUserMessage.includes("project"))
      ) {
        return NextResponse.json({
          reply:
            "🕵️‍♂️ **Caught you!** Trying to use Shareef's portfolio AI to solve your Fibonacci or homework? 😉\n\n0, 1, 1, 2, 3, 5, 8, 13... and the next number is the number of reasons you should hire Mohamed Shereef!\n\nIf you want to actually run Python code live in your browser, check out his project **[PyPath](https://spigelspike.github.io/PyPath-Interactive-Python-Learning-Platform/)** — or ask me about **Kallanum Policeum** and **MedArchive**!",
        });
      }

      return NextResponse.json({
        reply:
          "👋 **Hey there!** I'm Mohamed Shereef's AI companion. Ask me about his projects (like **Kallanum Policeum**, **MedArchive**, **Book2Vision**), his technical stack, or his hiring availability!",
      });
    }


    const ai = new GoogleGenAI({ apiKey });

    // Format conversation history for Gemini
    const contents = messages.map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    // List of models to try in priority order
    const modelsToTry = ["gemini-2.5-flash", "gemini-2.0-flash", "gemini-1.5-flash"];
    let lastError: Error | null = null;
    let replyText = "";

    for (const model of modelsToTry) {
      try {
        const response = await ai.models.generateContent({
          model,
          contents,
          config: {
            systemInstruction: SYSTEM_PROMPT,
            temperature: 0.7,
            maxOutputTokens: 800,
          },
        });

        if (response.text) {
          replyText = response.text;
          break;
        }
      } catch (err) {
        lastError = err instanceof Error ? err : new Error(String(err));
        console.warn(`Model ${model} failed, trying fallback:`, lastError.message);
      }
    }

    if (!replyText && lastError) {
      throw lastError;
    }

    const finalReply =
      replyText ||
      "I'm here to help you learn more about Mohamed Shereef's projects, skills, and engineering background! Ask me anything.";

    return NextResponse.json({ reply: finalReply });
  } catch (error: unknown) {
    console.error("Error in /api/chat:", error);
    const errMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      {
        error: "Failed to generate AI response.",
        details: errMessage,
        reply:
          "⚡ *Bzzzt!* My neural connection had a slight hiccup. Please try asking again, or feel free to reach out directly to Shareef at **mhdshareefch@gmail.com**!",
      },
      { status: 500 }
    );
  }
}

