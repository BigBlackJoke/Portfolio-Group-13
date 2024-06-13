const section = document.getElementById('#about_me');

export function createSectionMarkup() {
  return `
  <div class="cont-about-me">
            <h2 class="title">ABOUT <span class="title-span">ME</span></h2>
            <img class="img-about-me" srcset="../img/About_me/About_me_1x.jpg 1x, ../img/About_me/About_me_1x.jpg 2x"
                src="../img/About_me_1x.jpg" alt="About me" width="320" height="374" />
            <ul>
                <li class="cont-bio">
                    <h3 class="title-three">BIO</h3>
                    <ul>
                        <li>
                            <P>I'm Lloyd Jefferson, a talented programmer specializing in software development. My
                                expertise spans
                                various programming
                                languages and technologies, and I am dedicated to continually enhancing my skills. I
                                thrive on seeking
                                unconventional
                                and creative solutions to problems, leveraging a high level of analytical skills to
                                effectively tackle
                                even the most
                                challenging tasks.
                            </P>
                        </li>
                        <li>
                            <P>Adaptable to both independent and team-oriented work, I collaborate seamlessly with
                                colleagues,
                                exchanging ideas and
                                finding optimal solutions. My professional maturity enables me to navigate challenges
                                and stressful
                                situations with a
                                calm demeanor, maintaining a consistently high quality of work. Committed to
                                self-improvement, I
                                actively engage in
                                studying new technologies and practices to stay current with the  latest innovations in
                                the field.
                            </P>
                        </li>
                    </ul>
                    <svg class="icon-decor-about">
                        <use href="../img/About_me/symbol-defs.svg#icon-decor-bg-2"></use>
                    </svg>
                </li>
                <li class="cont-education">
                    <h3 class="title-three">EDUCATION</h3>
                    <ul>
                        <li class="li-item">
                            <svg class="icon-about" width="24" height="24">
                                <use href="../img/About_me/symbol-defs.svg#icon-greenSmall"></use>
                            </svg>
                            <p>2018 - 2019 / Frontend Development Diploma, GoIT IT School, New York</p>
                        </li>
                        <li class="li-item">
                            <svg class="icon-about" width="24" height="24">
                                <use href="../img/About_me/symbol-defs.svg#icon-greenSmall"></use>
                            </svg>
                            <p>2019 - 2020 / Advanced Web Development Certificate, GoIT IT School, New York</p>
                        </li>
                        <li class="li-item">
                            <svg class="icon-about" width="24" height="24">
                                <use href="../img/About_me/symbol-defs.svg#icon-greenSmall"></use>
                            </svg>
                            <p>2020 - 2022 / Advanced Blender Animation Techniques, Udemy</p>
                        </li>
                    </ul>
                </li>
                <li class="cont-role">
                    <h3 class="title-three">ROLE</h3>
                    <ul>
                        <li class="li-item">
                            <svg class="icon-about" width="24" height="24">
                                <use href="../img/About_me/symbol-defs.svg#icon-greenSmall"></use>
                            </svg>
                            <p>Frontend development</p>
                        </li>
                        <li class="li-item">
                            <svg class="icon-about" width="24" height="24">
                                <use href="../img/About_me/symbol-defs.svg#icon-greenSmall"></use>
                            </svg>
                            <p>HeadlessCMS, Wordpress</p>
                        </li>
                        <li class="li-item">
                            <svg class="icon-about" width="24" height="24">
                                <use href="../img/About_me/symbol-defs.svg#icon-greenSmall"></use>
                            </svg>
                            <p>Blender (enjoy)</p>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
  `;
}
const sectionMarkup = createSectionMarkup();

section.insertAdjacentHTML('afterbegin', sectionMarkup);
