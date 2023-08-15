import { Post } from "./components/Post";
import { Header } from "./components/Header";
import "./Global.css";
import Style from "./App.module.css";
import { SideBar } from "./components/SideBar";
import { id } from "date-fns/locale";

const post = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Luka4s.png",
      nome: "Lucas Rodrigues",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCar",
      },
      { type: "Link", content: "👉 @lcs_sdl" },
    ],
    publishedAt: new Date("2022-05-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/LucasPolizeli.png",
      nome: "Lucas Polizeli",
      role: "Eng Software",
    },
    content: [
      { type: "paragraph", content: "Bom dia a todos." },
      {
        type: "paragraph",
        content:
          "Acabei de iniciar uma nova jornada como DevOps em uma nova empresa e sou muito grato pela oportunidade que me concederam 😁",
      },
      { type: "Link", content: "👉 @Poli_" },
    ],
    publishedAt: new Date("2023-07-16 08:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={Style.wrapper}>
        <SideBar />
        <main>
          {post.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
