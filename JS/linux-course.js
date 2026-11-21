/* JS/linux-course.js — Course curriculum, terminal, quiz, scorecard, and certificate logic for v2, v2.1, and course-complete. */
const P = [
        [
          "First steps on the command line",
          [
            [
              1,
              "Introduction to Linux",
              "What Linux is, why every cloud runs it, and the first commands you can safely type into the black screen without breaking anything.",
              5,
              2,
              2,
              40,
            ],
            [
              2,
              "Paths and navigation",
              "The Linux filesystem is one tree with one root. Learn to read and write paths, and move around any folder you land in.",
              2,
              2,
              2,
              30,
            ],
            [
              3,
              "Listing files",
              "See what’s in any folder, read a long listing, spot hidden files, and look up a command you don’t know.",
              3,
              2,
              1,
              30,
            ],
            [
              4,
              "Reading files",
              "Read whole files, peek at the top or bottom, scroll through big ones, and follow logs live. The DevOps engineer’s daily reading toolkit.",
              3,
              2,
              1,
              30,
            ],
          ],
        ],
        [
          "Managing files",
          [
            [
              5,
              "Managing files",
              "Create, copy, move, and delete files and folders safely, and use globs to act on many at once.",
              3,
              2,
              1,
              35,
            ],
            [
              18,
              "Links",
              "Symlinks and hard links. Why every DevOps deploy pattern uses symlinks, and how to create, follow, and safely replace them.",
              2,
              2,
              1,
              20,
            ],
            [
              19,
              "Archives and compression",
              "tar and gzip. Bundle a folder into a single file, compress it, look inside before you extract, and unpack it exactly where you meant to.",
              3,
              2,
              1,
              25,
            ],
          ],
        ],
        [
          "Searching, editing and processing text",
          [
            [
              6,
              "Searching text",
              "Find text inside files with grep and locate files themselves with find. Two commands every DevOps engineer runs dozens of times a day.",
              3,
              2,
              1,
              30,
            ],
            [
              7,
              "Editing files",
              "Survive vim when it’s the only editor around, change files in place with nano, and make quick edits from the shell without opening an editor at all.",
              3,
              2,
              1,
              30,
            ],
            [
              17,
              "Text processing",
              "The pipe-friendly toolkit for slicing, sorting, counting, and transforming text. cut, sort, uniq, tr, tee, xargs, and a practical look at awk and sed.",
              3,
              2,
              1,
              40,
            ],
          ],
        ],
        [
          "Users, permissions and shell setup",
          [
            [
              8,
              "Users and permissions",
              "Who you are on a Linux machine, and what you’re allowed to do to each file. Read a long listing properly, and use chmod, chown, and sudo without breaking things.",
              4,
              2,
              1,
              43,
            ],
            [
              16,
              "Shell configuration",
              "Environment variables, PATH, and the startup files that make your shell feel like yours. The setup every DevOps engineer does on a new box within the first hour.",
              3,
              2,
              1,
              30,
            ],
          ],
        ],
        [
          "Processes, services and the system",
          [
            [
              9,
              "Processes",
              "Every command and service on a Linux machine is a process. Learn to list them, find the ones you care about, stop them cleanly, and run long jobs that survive after you log out.",
              3,
              2,
              1,
              35,
            ],
            [
              10,
              "systemd services",
              "How Linux runs, restarts, and logs the services that keep a server alive. Use systemctl and journalctl daily, and write your first service unit from scratch.",
              3,
              2,
              1,
              45,
            ],
            [
              11,
              "Networking essentials",
              "IP addresses, listening ports, reaching other machines, and testing DNS. The four things every DevOps engineer checks first when a service is unreachable.",
              3,
              2,
              1,
              35,
            ],
            [
              12,
              "Package management",
              "Install, remove, and inspect software with apt on Ubuntu, and find your way around dpkg for the lower-level view.",
              3,
              2,
              1,
              30,
            ],
            [
              13,
              "Disks and filesystems",
              "How Linux stacks disks, partitions, and mount points. Read df and du fluently, and find what’s eating your disk when a filesystem fills up.",
              3,
              2,
              1,
              30,
            ],
            [
              14,
              "Monitoring and performance",
              "The vitals every DevOps engineer checks first when a machine is misbehaving. Load average, memory pressure, and what top actually tells you.",
              3,
              2,
              1,
              30,
            ],
            [
              15,
              "Scheduled jobs",
              "Run things on a schedule with cron. The DevOps engineer’s toolkit for backups, cleanups, log rotation, and everything else that should just happen without you thinking about it.",
              3,
              2,
              1,
              30,
            ],
          ],
        ],
        [
          "Projects",
          [
            [
              0,
              "Linux Project #1",
              "Set up a scheduled job that clears old log files on its own and keeps a record of every run.",
              0,
              1,
              0,
              45,
            ],
            [
              0,
              "Linux Project #2",
              "Respond to a slow-server alert by capturing a full health snapshot of the machine into one report.",
              0,
              1,
              0,
              45,
            ],
            [
              0,
              "Linux Project #3",
              "Clean up a sloppy server handover by securing a secrets file, fixing SSH key permissions, and making a helper tool runnable from anywhere.",
              0,
              1,
              0,
              45,
            ],
          ],
        ],
      ];
      const COURSE_VARIANT = document.documentElement.dataset.courseVariant || "v2.1";
      const completed = COURSE_VARIANT === "complete"
        ? new Set(Array.from({ length: 22 }, (_, i) => i + 1))
        : new Set([1, 2]);
      const inProgress = COURSE_VARIANT === "complete" ? new Set() : new Set([3]);
      const mdoneEl = document.getElementById("mdone");
      if (mdoneEl) mdoneEl.textContent = completed.size + "/22";
      const mk = (b) =>
        '<svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
        b +
        "</svg>";
      const I = {
        lesson: mk(
          '<circle cx="8" cy="8" r="6.3"/><path d="M6.6 5.4l3.6 2.6-3.6 2.6z" fill="currentColor" stroke="none"/>',
        ),
        task: mk(
          '<rect x="1.5" y="3" width="13" height="10" rx="2"/><path d="M4.5 6.5l2 1.5-2 1.5M8.5 10h3"/>',
        ),
        quiz: mk(
          '<circle cx="8" cy="8" r="6.3"/><path d="M6.2 6.3a1.9 1.9 0 013.6.7c0 1.2-1.8 1.4-1.8 2.6"/><circle cx="8" cy="11.6" r=".6" fill="currentColor"/>',
        ),
        time: mk('<circle cx="8" cy="8" r="6.3"/><path d="M8 4.8V8l2.2 1.4"/>'),
        redo: mk('<path d="M13 8a5 5 0 11-1.6-3.7M13 2.5v2.8h-2.8"/>'),
        ok: mk(
          '<circle cx="8" cy="8" r="6.3"/><path d="M5.3 8.2l1.9 1.9 3.5-3.9"/>',
        ),
      };
      const TUX =
        '<svg class="tux" aria-hidden="true"><use href="#tux"/></svg>';
      const parts = document.getElementById("parts");
let num = 0;
      P.forEach(([name, list]) => {
        const s = document.createElement("div");
        s.className = "part";
        s.innerHTML =
          '<h3 class="fade-up"><span class="part-rail-l" aria-hidden="true"></span><span class="part-title">' +
          name +
          '</span><span class="part-rail-r" aria-hidden="true"></span></h3>';
        const g = document.createElement("div");
        g.className = "grid";
        list.forEach(([_, title, desc, c, k, q, m]) => {
          const n = ++num;
          const d = completed.has(n),
            wip = !d && inProgress.has(n),
            free = n === 1 || n === 2;
          const a = document.createElement("article");
          a.className = "card" + (d ? " done" : wip ? " in-progress" : "");
          const meta =
            (c ? "<span>" + I.lesson + c + " lessons</span>" : "") +
            "<span>" +
            I.task +
            k +
            " task" +
            (k > 1 ? "s" : "") +
            "</span>" +
            (q
              ? "<span>" +
                I.quiz +
                q +
                " quiz" +
                (q > 1 ? "zes" : "") +
                "</span>"
              : "") +
            "<span>" +
            I.time +
            m +
            " min</span>";
          const badges = free ? '<span class="free">Free</span>' : "";
          const status = d
            ? '<div class="card-status"><span class="chk curr-badge-dot is-completed" role="img" title="Completed" aria-label="Completed">' +
              '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>' +
              '</span><button type="button" class="relearn" title="Relearn" aria-label="Relearn">' +
              I.redo.replace(
                'width="15" height="15"',
                'width="16" height="16"',
              ) +
              "</button></div>"
            : wip
              ? '<div class="card-status"><span class="curr-badge-dot card-state is-progress" role="img" title="In progress" aria-label="In progress">' +
                '<svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor"><path d="M8 2a6 6 0 0 1 0 12V2z"/></svg>' +
                "</span></div>"
              : "";
          a.innerHTML =
            status +
            '<div class="ic">' +
            TUX +
            '</div><div class="cmain"><div class="chead"><h4>Module ' +
            String(n).padStart(2, "0") +
            " - " +
            title +
            "</h4>" +
            badges +
            "</div><p>" +
            desc +
            '</p><div class="meta">' +
            meta +
            "</div></div>";
          if (d)
            a.querySelector(".relearn").onclick = (e) => {
              e.stopPropagation();
              toast("Relearn opens inside the lab.");
            };
          if (n === 1) {
            a.classList.add("is-link");
            a.dataset.href = "lab.html";
            a.setAttribute("role", "link");
            a.setAttribute("tabindex", "0");
            a.setAttribute("aria-label", "Module 01 - " + title + " — open lab");
            const openLab = (e) => {
              if (e.target && e.target.closest("button, a")) return;
              if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
                window.open("lab.html", "_blank");
                return;
              }
              if (window.__escbashGo) window.__escbashGo("lab.html");
              else window.location.href = "lab.html";
            };
            a.addEventListener("click", openLab);
            a.addEventListener("keydown", (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openLab(e);
              }
            });
          }
          g.appendChild(a);
        });
        s.appendChild(g);
        parts.appendChild(s);
      });

      /* View switcher (Grid / List) */
      (function () {
        const sec = document.getElementById("topics");
        const btns = document.querySelectorAll(".vs-btn");
        if (!sec || !btns.length) return;
        function setView(v) {
          if (v === "list") {
            sec.classList.add("view-list");
          } else {
            sec.classList.remove("view-list");
          }
          btns.forEach((b) => {
            const active = b.dataset.view === v;
            b.classList.toggle("active", active);
            b.setAttribute("aria-pressed", String(active));
          });
          try {
            localStorage.setItem("linux_lighthouse_view", v);
          } catch (e) {}
          if (window.__refreshReveals) window.__refreshReveals(true);
        }
        btns.forEach((b) => {
          b.addEventListener("click", () => setView(b.dataset.view));
        });
        const saved = (function () {
          try {
            return localStorage.getItem("linux_lighthouse_view");
          } catch (e) {
            return null;
          }
        })();
        if (saved === "list") setView("list");
      })();

      const FS0 = {
        "~": ["notes.txt", "orders.log", "scripts/", ".bashrc"],
        "~/scripts": ["backup.sh", "cleanup.sh"],
      };
      const FILES0 = {
        "notes.txt": "Tapri's ordering app moves to this server today.",
        "orders.log":
          "12:01 order #1042 ok\n12:03 order #1043 ok\n12:07 order #1044 FAILED: disk full",
        ".bashrc": "export PATH=$PATH:~/scripts",
        "backup.sh": "#!/bin/bash\ntar -czf /tmp/backup.tgz ~/scripts",
        "cleanup.sh": "#!/bin/bash\nfind /var/log -name '*.old' -delete",
      };
      function mkTerm(out, inp, hints, hintList) {
        let cwd, fs, files;
        const line = (t, c) => {
          const d = document.createElement("div");
          d.className = "ln " + (c || "");
          d.textContent = t;
          out.appendChild(d);
          out.scrollTop = out.scrollHeight;
        };
        function reset() {
          cwd = "~";
          fs = JSON.parse(JSON.stringify(FS0));
          files = Object.assign({}, FILES0);
          out.innerHTML = "";
          line("Welcome to escbash. Type help, or tap a command below.", "dim");
        }
        const abs = () => (cwd === "~" ? "/root" : "/root/" + cwd.slice(2));
        function run(s) {
          line("root@escbash:" + cwd + "# " + s, "ps");
          const t = s.trim();
          if (!t) return;
          const [c, ...a] = t.split(/\s+/);
          const arg = a[0];
          switch (c) {
            case "pwd":
              line(abs());
              break;
            case "ls": {
              let l = fs[cwd] || [];
              if (!a.includes("-a")) l = l.filter((x) => x[0] !== ".");
              line(l.length ? l.join("  ") : "(empty)", l.length ? "" : "dim");
              break;
            }
            case "cd": {
              if (!arg || arg === "~") {
                cwd = "~";
                break;
              }
              if (arg === "..") {
                cwd = cwd.includes("/")
                  ? cwd.slice(0, cwd.lastIndexOf("/"))
                  : "~";
                break;
              }
              const n = arg.replace(/\/$/, "");
              const tg = cwd + "/" + n;
              if (fs[tg]) cwd = tg;
              else line("cd: " + arg + ": No such file or directory", "dim");
              break;
            }
            case "cat":
              files[arg] !== undefined
                ? line(files[arg] || "(empty file)", files[arg] ? "" : "dim")
                : line("cat: " + (arg || "") + ": No such file", "dim");
              break;
            case "grep": {
              const f = files[a[1]];
              if (!arg || f === undefined)
                line("usage: grep FAILED orders.log", "dim");
              else {
                const m = f.split("\n").filter((x) => x.includes(arg));
                line(
                  m.length ? m.join("\n") : "(no matches)",
                  m.length ? "ok" : "dim",
                );
              }
              break;
            }
            case "mkdir":
              if (!arg) line("mkdir: missing operand", "dim");
              else if (fs[cwd + "/" + arg])
                line(
                  "mkdir: cannot create directory '" + arg + "': File exists",
                  "dim",
                );
              else {
                fs[cwd].push(arg + "/");
                fs[cwd + "/" + arg] = [];
              }
              break;
            case "touch":
              if (!arg) line("touch: missing file operand", "dim");
              else if (!fs[cwd].includes(arg)) {
                fs[cwd].push(arg);
                files[arg] = "";
              }
              break;
            case "rm":
              if (!arg) line("rm: missing operand", "dim");
              else {
                const i = fs[cwd].indexOf(arg);
                if (i < 0)
                  line(
                    "rm: cannot remove '" +
                      arg +
                      "': No such file or directory",
                    "dim",
                  );
                else {
                  fs[cwd].splice(i, 1);
                  delete files[arg];
                }
              }
              break;
            case "echo": {
              const m = t.slice(4).trim();
              const g = m.match(/^(.*?)\s*>\s*(\S+)$/);
              if (g) {
                const txt = g[1].replace(/^["']|["']$/g, "");
                files[g[2]] = txt;
                if (!fs[cwd].includes(g[2])) fs[cwd].push(g[2]);
              } else line(m.replace(/^["']|["']$/g, ""));
              break;
            }
            case "whoami":
              line("root");
              break;
            case "hostname":
              line("escbash");
              break;
            case "date":
              line(new Date().toString());
              break;
            case "uname":
              line(
                a.includes("-a")
                  ? "Linux escbash 6.8.0-45-generic #45-Ubuntu SMP x86_64 GNU/Linux"
                  : "Linux",
              );
              break;
            case "df":
              line(
                "Filesystem  Size  Used Avail Use%\n/dev/vda1    20G   20G     0 100%",
              );
              break;
            case "help":
              line(
                "Try: pwd, ls, ls -a, cd scripts, cd .., cat orders.log, grep FAILED orders.log, mkdir, touch, rm, echo hi > f.txt, uname -a, date, df, whoami, clear",
              );
              break;
            case "clear":
              out.innerHTML = "";
              break;
            default:
              line(c + ": command not found. Type help.", "dim");
          }
        }
        reset();
        hintList.forEach((h) => {
          const b = document.createElement("button");
          b.textContent = h;
          b.onclick = () => {
            run(h);
            inp.focus();
          };
          hints.appendChild(b);
        });
        inp.addEventListener("keydown", (e) => {
          if (e.key === "Enter") {
            run(inp.value);
            inp.value = "";
          }
        });
        return { reset };
      }
      mkTerm(
        document.getElementById("out"),
        document.getElementById("cmd"),
        document.getElementById("hints"),
        ["ls", "ls -a", "cat orders.log", "grep FAILED orders.log", "df"],
      );
/* Quick actions */
      const quickTerminalBtn = document.getElementById("quickTerminalBtn");
      if (quickTerminalBtn) {
        quickTerminalBtn.addEventListener("click", () => {
          const cmd = document.getElementById("cmd");
          if (cmd) {
            cmd.focus();
            cmd.scrollIntoView({ behavior: "smooth", block: "center" });
          }
          toast("Terminal ready. Enter a Linux command! 💻");
        });
      }
      const quickLabsBtn = document.getElementById("quickLabsBtn");
      if (quickLabsBtn) {
        quickLabsBtn.addEventListener("click", () => {
          const topics = document.getElementById("topics");
          if (topics) {
            topics.scrollIntoView({ behavior: "smooth", block: "start" });
          }
          toast("Hands-on tasks ready in curriculum below. 🧪");
        });
      }
      const quickBookmarksBtn = document.getElementById("quickBookmarksBtn");
      if (quickBookmarksBtn) {
        quickBookmarksBtn.addEventListener("click", () => {
          toast("Bookmark your favorite lessons with the ribbon icon! 🔖");
        });
      }
/* keep both card headers the same height on every screen size */
      (function () {
        const heads = [
            ...document.querySelectorAll(".cert .head,.quick .head"),
          ],
          side = document.querySelector(".side");
        let lastW = -1,
          raf = 0;
        function sync() {
          heads.forEach((h) => (h.style.minHeight = "0px"));
          const m = Math.ceil(
            Math.max(...heads.map((h) => h.getBoundingClientRect().height)),
          );
          heads.forEach((h) => (h.style.minHeight = m + "px"));
        }
        function queue() {
          cancelAnimationFrame(raf);
          raf = requestAnimationFrame(sync);
        }
        new ResizeObserver(() => {
          const w = side.offsetWidth;
          if (w !== lastW) {
            lastW = w;
            queue();
          }
        }).observe(side);
        addEventListener("resize", queue);
        if (document.fonts && document.fonts.ready)
          document.fonts.ready.then(queue);
        queue();
      })();

      /* ===== Quiz Pop-up Modal Implementation ===== */
      (function () {
        const QUIZ_DATA = {
          all: {
            name: "Core Mix",
            questions: [
              {
                module: "Module 01 · Intro to Linux",
                q: "Which command prints the effective username of the currently logged-in user?",
                code: "$ whoami",
                options: ["hostname", "whoami", "uname -u", "id -user"],
                answer: 1,
                exp: "<code>whoami</code> prints the effective username of the current session directly to standard output.",
              },
              {
                module: "Module 02 · Paths & Navigation",
                q: "You are currently in <code>/var/log/nginx</code> and need to navigate to <code>/var/www/html</code> using relative pathing. Which command is correct?",
                code: "root@escbash:/var/log/nginx# cd <path>",
                options: [
                  "cd ../www/html",
                  "cd ../../www/html",
                  "cd /www/html",
                  "cd .../www/html",
                ],
                answer: 1,
                exp: "<code>../..</code> climbs two directory levels up to <code>/var</code>, then proceeds down into <code>www/html</code>.",
              },
              {
                module: "Module 06 · Searching Text",
                q: "How do you search for the word 'FAILED' inside <code>orders.log</code> line-by-line without opening an editor?",
                code: "$ grep 'FAILED' orders.log",
                options: [
                  "find orders.log -name 'FAILED'",
                  "grep 'FAILED' orders.log",
                  "cat orders.log | echo 'FAILED'",
                  "locate orders.log 'FAILED'",
                ],
                answer: 1,
                exp: "<code>grep</code> processes files line-by-line and outputs only lines matching the search pattern.",
              },
              {
                module: "Module 08 · Permissions",
                q: "What permissions does <code>chmod 755 deploy.sh</code> assign to owner, group, and others?",
                code: "$ chmod 755 deploy.sh",
                options: [
                  "Owner: rwx, Group: r-x, Others: r-x",
                  "Owner: rwx, Group: rw-, Others: r--",
                  "Owner: r--, Group: r-x, Others: rwx",
                  "Owner: rw-, Group: r--, Others: ---",
                ],
                answer: 0,
                exp: "7 = 4+2+1 (rwx) for owner; 5 = 4+0+1 (r-x) for group and others.",
              },
              {
                module: "Module 10 · systemd Services",
                q: "Which command streams real-time logs for a systemd unit named <code>nginx</code>?",
                code: "$ journalctl -u nginx -f",
                options: [
                  "systemctl status nginx --follow",
                  "journalctl -u nginx -f",
                  "cat /var/log/nginx/stream.log",
                  "service nginx tail",
                ],
                answer: 1,
                exp: "<code>journalctl -u nginx -f</code> filters systemd logs for the nginx unit and <code>-f</code> (follow) streams incoming entries.",
              },
            ],
          },
          nav: {
            name: "Navigation & Files",
            questions: [
              {
                module: "Module 02 · Paths & Navigation",
                q: "In Linux, what does the tilde character (<code>~</code>) represent in shell paths?",
                code: "$ cd ~",
                options: [
                  "The root filesystem /",
                  "The parent folder ..",
                  "The current user's home directory",
                  "The temporary directory /tmp",
                ],
                answer: 2,
                exp: "<code>~</code> expands to the current user's home directory path stored in <code>$HOME</code>.",
              },
              {
                module: "Module 03 · Listing Files",
                q: "Which option causes <code>ls</code> to display hidden files and directories (those starting with a dot)?",
                code: "$ ls -a",
                options: ["ls -h", "ls -a", "ls -x", "ls -d"],
                answer: 1,
                exp: "<code>ls -a</code> (all) includes entries whose names start with <code>.</code>, such as <code>.bashrc</code> or <code>.ssh</code>.",
              },
              {
                module: "Module 04 · Reading Files",
                q: "Which utility is best suited for viewing the last 20 lines of a large log file?",
                code: "$ tail -n 20 app.log",
                options: [
                  "head -n 20 app.log",
                  "tail -n 20 app.log",
                  "less +20 app.log",
                  "cut -n 20 app.log",
                ],
                answer: 1,
                exp: "<code>tail -n 20</code> reads and outputs the final 20 lines from the bottom of the file.",
              },
              {
                module: "Module 05 · Finding Files",
                q: "Which command searches the <code>/etc</code> directory for files ending in <code>.conf</code>?",
                code: "$ find /etc -name '*.conf'",
                options: [
                  "search /etc '*.conf'",
                  "find /etc -name '*.conf'",
                  "grep -r '.conf' /etc",
                  "locate -d /etc '*.conf'",
                ],
                answer: 1,
                exp: "<code>find</code> traverses the filesystem tree and matches filenames against the glob pattern.",
              },
              {
                module: "Module 19 · Archives",
                q: "Which flags extract a compressed tar archive (<code>.tar.gz</code>) while displaying file names as they unpack?",
                code: "$ tar -xzvf bundle.tar.gz",
                options: ["-czvf", "-xzvf", "-tvf", "-rzvf"],
                answer: 1,
                exp: "<code>-x</code> extracts, <code>-z</code> decompresses gzip, <code>-v</code> enables verbose output, and <code>-f</code> targets the file.",
              },
            ],
          },
          perm: {
            name: "Permissions & Shell",
            questions: [
              {
                module: "Module 08 · Permissions",
                q: "If a file has permission string <code>-rw-r--r--</code>, what is its octal representation?",
                code: "-rw-r--r-- 1 root root 1042 Nov 9 app.py",
                options: ["755", "644", "600", "744"],
                answer: 1,
                exp: "rw- is 4+2=6 (owner); r-- is 4 (group); r-- is 4 (others) = <code>644</code>.",
              },
              {
                module: "Module 08 · Permissions",
                q: "Which command changes ownership of <code>/var/www</code> and all contents to user <code>www-data</code>?",
                code: "$ chown -R www-data:www-data /var/www",
                options: [
                  "chmod -R 775 /var/www",
                  "chown -R www-data:www-data /var/www",
                  "useradd www-data /var/www",
                  "usermod -aG www-data /var/www",
                ],
                answer: 1,
                exp: "<code>chown -R</code> recursively changes user and group ownership across directory contents.",
              },
              {
                module: "Module 08 · Permissions",
                q: "Which command adds execute permissions specifically for the file owner on <code>backup.sh</code>?",
                code: "$ chmod u+x backup.sh",
                options: [
                  "chmod u+x backup.sh",
                  "chmod o+x backup.sh",
                  "chown +x backup.sh",
                  "setfacl -e backup.sh",
                ],
                answer: 0,
                exp: "<code>u+x</code> targets the user (owner) and sets the executable bit.",
              },
              {
                module: "Module 16 · Shell Configuration",
                q: "Which startup file is read and executed by interactive non-login bash shells to configure aliases and <code>$PATH</code>?",
                code: "$ nano ~/.bashrc",
                options: [
                  "/etc/fstab",
                  "~/.bashrc",
                  "/etc/hosts",
                  "~/.ssh/authorized_keys",
                ],
                answer: 1,
                exp: "<code>~/.bashrc</code> runs for each interactive bash terminal to initialize custom environments and functions.",
              },
              {
                module: "Module 08 · Permissions",
                q: "A command fails with 'Permission denied'. Which command reruns your previous command using sudo privileges?",
                code: "$ sudo !!",
                options: ["sudo last", "sudo !!", "sudo --retry", "su -exec"],
                answer: 1,
                exp: "<code>!!</code> is bash history expansion that substitutes the entire previous command.",
              },
            ],
          },
          sys: {
            name: "Processes & Systems",
            questions: [
              {
                module: "Module 09 · Processes",
                q: "Which kill signal cannot be intercepted, caught, or ignored by a stubborn process?",
                code: "$ kill -s 9 <PID>",
                options: [
                  "SIGTERM (15)",
                  "SIGINT (2)",
                  "SIGKILL (9)",
                  "SIGHUP (1)",
                ],
                answer: 2,
                exp: "<code>SIGKILL (signal 9)</code> is handled directly by the Linux kernel, preventing the process from blocking it.",
              },
              {
                module: "Module 11 · Networking",
                q: "Which command displays active TCP listening sockets with process identifiers on modern Linux distros?",
                code: "$ ss -tulpn",
                options: [
                  "ss -tulpn",
                  "ip addr",
                  "ping -c 4 localhost",
                  "traceroute 8.8.8.8",
                ],
                answer: 0,
                exp: "<code>ss -tulpn</code> inspects TCP/UDP listening sockets with numeric ports and owning process IDs.",
              },
              {
                module: "Module 13 · Disks & Filesystems",
                q: "Which command checks disk space availability across all mounted filesystems in human-readable units?",
                code: "$ df -h",
                options: ["free -m", "du -sh /", "df -h", "fdisk -l"],
                answer: 2,
                exp: "<code>df -h</code> prints total, used, and available space for all mounted filesystems in M/G units.",
              },
              {
                module: "Module 09 · Processes",
                q: "Which command lists process IDs and names for running processes matching <code>nginx</code>?",
                code: "$ pgrep -l nginx",
                options: [
                  "pgrep -l nginx",
                  "findproc nginx",
                  "killall -t nginx",
                  "service --list nginx",
                ],
                answer: 0,
                exp: "<code>pgrep -l</code> scans active processes and returns their process IDs alongside process names.",
              },
              {
                module: "Module 10 · systemd Services",
                q: "Which command reloads configuration files for the <code>nginx</code> unit without dropping active connections?",
                code: "$ systemctl reload nginx",
                options: [
                  "systemctl restart nginx",
                  "systemctl reload nginx",
                  "kill -9 nginx",
                  "service nginx reset",
                ],
                answer: 1,
                exp: "<code>systemctl reload</code> sends a reload signal so worker processes reload configuration without terminating the master process.",
              },
            ],
          },
          m1: {
            name: "Module 01 · Intro to Linux",
            questions: [
              {
                module: "Module 01 · Intro to Linux",
                q: "Which command prints the effective username of the currently logged-in user?",
                code: "$ whoami",
                options: ["hostname", "whoami", "uname -u", "id -user"],
                answer: 1,
                exp: "<code>whoami</code> prints the effective username of the current session directly to standard output.",
              },
              {
                module: "Module 01 · Intro to Linux",
                q: "Which command prints the Linux kernel release and system architecture?",
                code: "$ uname -r",
                options: ["uname -r", "sysinfo", "kernel -v", "arch -a"],
                answer: 0,
                exp: "<code>uname -r</code> prints the kernel release version currently executing.",
              },
              {
                module: "Module 01 · Intro to Linux",
                q: "In Linux, where do you find the root directory of the entire filesystem hierarchy?",
                code: "$ cd /",
                options: ["/root", "C:\\", "/", "/home"],
                answer: 2,
                exp: "The single forward slash <code>/</code> is the root directory at the base of the entire Linux filesystem tree.",
              },
            ],
          },
          m2: {
            name: "Module 02 · Paths & Navigation",
            questions: [
              {
                module: "Module 02 · Paths & Navigation",
                q: "You are currently in <code>/var/log/nginx</code> and need to navigate to <code>/var/www/html</code> using relative pathing. Which command is correct?",
                code: "root@escbash:/var/log/nginx# cd <path>",
                options: [
                  "cd ../www/html",
                  "cd ../../www/html",
                  "cd /www/html",
                  "cd .../www/html",
                ],
                answer: 1,
                exp: "<code>../..</code> climbs two directory levels up to <code>/var</code>, then proceeds down into <code>www/html</code>.",
              },
              {
                module: "Module 02 · Paths & Navigation",
                q: "What does the command <code>cd -</code> do in bash?",
                code: "$ cd -",
                options: [
                  "Returns to user home",
                  "Changes to previous working directory",
                  "Deletes working directory",
                  "Cancels last command",
                ],
                answer: 1,
                exp: "<code>cd -</code> toggles back to the previous directory stored in <code>$OLDPWD</code>.",
              },
              {
                module: "Module 02 · Paths & Navigation",
                q: "In Linux paths, what does a single dot (<code>.</code>) refer to?",
                code: "$ cp ~/app.py .",
                options: [
                  "The root directory",
                  "The parent folder",
                  "The current working directory",
                  "The user home directory",
                ],
                answer: 2,
                exp: "A single dot <code>.</code> denotes the current working directory.",
              },
            ],
          },
          m3: {
            name: "Module 03 · Listing Files",
            questions: [
              {
                module: "Module 03 · Listing Files",
                q: "Which option causes <code>ls</code> to display hidden files (entries starting with a dot)?",
                code: "$ ls -a",
                options: ["ls -h", "ls -a", "ls -x", "ls -d"],
                answer: 1,
                exp: "<code>ls -a</code> (all) includes entries whose names start with <code>.</code>.",
              },
              {
                module: "Module 03 · Listing Files",
                q: "Which flag combination lists files with human-readable file sizes and modification times?",
                code: "$ ls -lh",
                options: ["ls -lh", "ls -m", "ls -size", "ls -v"],
                answer: 0,
                exp: "<code>-l</code> produces long format; <code>-h</code> formats sizes in K, M, or G.",
              },
              {
                module: "Module 03 · Listing Files",
                q: "Which flag sorts <code>ls</code> output by modification time with newest files first?",
                code: "$ ls -lt",
                options: ["-lt", "-ls", "-lx", "-lr"],
                answer: 0,
                exp: "<code>-t</code> sorts by timestamp descending (newest first).",
              },
            ],
          },
          m4: {
            name: "Module 04 · Reading Files",
            questions: [
              {
                module: "Module 04 · Reading Files",
                q: "Which utility is best suited for viewing the last 20 lines of a large log file?",
                code: "$ tail -n 20 app.log",
                options: [
                  "head -n 20 app.log",
                  "tail -n 20 app.log",
                  "less +20 app.log",
                  "cut -n 20 app.log",
                ],
                answer: 1,
                exp: "<code>tail -n 20</code> reads and outputs the final 20 lines from the bottom of the file.",
              },
              {
                module: "Module 04 · Reading Files",
                q: "Which flag allows <code>tail</code> to follow incoming log entries in real time?",
                code: "$ tail -f /var/log/syslog",
                options: ["-f", "-w", "-r", "-s"],
                answer: 0,
                exp: "<code>-f</code> (follow) continuously streams new lines appended to the file.",
              },
              {
                module: "Module 04 · Reading Files",
                q: "Which pager command allows forward and backward scrolling without loading entire huge files into RAM?",
                code: "$ less production.log",
                options: ["cat", "less", "echo", "grep"],
                answer: 1,
                exp: "<code>less</code> opens files page-by-page and does not read the full file before displaying.",
              },
            ],
          },
          m5: {
            name: "Module 05 · Managing Files",
            questions: [
              {
                module: "Module 05 · Managing Files",
                q: "Which command safely creates parent directories on demand if they do not already exist?",
                code: "$ mkdir -p src/components/ui",
                options: ["mkdir -r", "mkdir -p", "mkdir -a", "mkdir -f"],
                answer: 1,
                exp: "<code>mkdir -p</code> creates missing parent directories without throwing errors if they exist.",
              },
              {
                module: "Module 05 · Managing Files",
                q: "Which flag combination forcefully removes a non-empty directory and its contents recursively?",
                code: "$ rm -rf dist/",
                options: ["-rf", "-d", "-all", "-k"],
                answer: 0,
                exp: "<code>-r</code> is recursive and <code>-f</code> bypasses confirmation prompts.",
              },
              {
                module: "Module 05 · Managing Files",
                q: "Which command creates an empty file named <code>index.js</code> or updates its modification timestamp?",
                code: "$ touch index.js",
                options: [
                  "touch index.js",
                  "make index.js",
                  "new index.js",
                  "init index.js",
                ],
                answer: 0,
                exp: "<code>touch</code> updates access and modification times, creating empty files if absent.",
              },
            ],
          },
          m6: {
            name: "Module 06 · Searching Text",
            questions: [
              {
                module: "Module 06 · Searching Text",
                q: "How do you search for the word 'FAILED' inside <code>orders.log</code> line-by-line without opening an editor?",
                code: "$ grep 'FAILED' orders.log",
                options: [
                  "find orders.log -name 'FAILED'",
                  "grep 'FAILED' orders.log",
                  "cat orders.log | echo 'FAILED'",
                  "locate orders.log 'FAILED'",
                ],
                answer: 1,
                exp: "<code>grep</code> processes files line-by-line and outputs only lines matching the search pattern.",
              },
              {
                module: "Module 06 · Searching Text",
                q: "Which flag makes <code>grep</code> case-insensitive?",
                code: "$ grep -i 'error' server.log",
                options: ["-c", "-i", "-s", "-v"],
                answer: 1,
                exp: "<code>-i</code> ignores case distinctions in both pattern and input.",
              },
              {
                module: "Module 06 · Searching Text",
                q: "Which command finds all files ending in <code>.conf</code> under directory <code>/etc</code>?",
                code: "$ find /etc -name '*.conf'",
                options: [
                  "find /etc -name '*.conf'",
                  "search /etc -type conf",
                  "grep /etc '*.conf'",
                  "filter /etc '*.conf'",
                ],
                answer: 0,
                exp: "<code>find</code> searches directory trees for filenames matching the given pattern.",
              },
            ],
          },
          m7: {
            name: "Module 07 · Editing Files",
            questions: [
              {
                module: "Module 07 · Editing Files",
                q: "In vim normal mode, which command saves changes and exits the editor?",
                code: ":wq",
                options: [":wq", ":exit!", "Ctrl+S", "Alt+Q"],
                answer: 0,
                exp: "<code>:wq</code> writes the buffer to disk and quits vim.",
              },
              {
                module: "Module 07 · Editing Files",
                q: "Which mode in vim allows you to begin typing new text into the document?",
                code: "-- INSERT --",
                options: [
                  "Command Mode",
                  "Insert Mode",
                  "Visual Mode",
                  "Ex Mode",
                ],
                answer: 1,
                exp: "Pressing <code>i</code> or <code>a</code> enters Insert Mode for typing text.",
              },
              {
                module: "Module 07 · Editing Files",
                q: "In the nano editor, which keyboard shortcut saves the current file without quitting?",
                code: "^O (WriteOut)",
                options: ["Ctrl+O", "Ctrl+S", "Ctrl+W", "Ctrl+X"],
                answer: 0,
                exp: "<code>Ctrl+O</code> executes 'WriteOut' in nano to save changes to disk.",
              },
            ],
          },
          m8: {
            name: "Module 08 · Users & Permissions",
            questions: [
              {
                module: "Module 08 · Permissions",
                q: "What permissions does <code>chmod 755 deploy.sh</code> assign to owner, group, and others?",
                code: "$ chmod 755 deploy.sh",
                options: [
                  "Owner: rwx, Group: r-x, Others: r-x",
                  "Owner: rwx, Group: rw-, Others: r--",
                  "Owner: r--, Group: r-x, Others: rwx",
                  "Owner: rw-, Group: r--, Others: ---",
                ],
                answer: 0,
                exp: "7 = 4+2+1 (rwx) for owner; 5 = 4+0+1 (r-x) for group and others.",
              },
              {
                module: "Module 08 · Permissions",
                q: "If a file has permission string <code>-rw-r--r--</code>, what is its octal representation?",
                code: "-rw-r--r-- 1 root root 1042 Nov 9 app.py",
                options: ["755", "644", "600", "744"],
                answer: 1,
                exp: "rw- is 4+2=6 (owner); r-- is 4 (group); r-- is 4 (others) = <code>644</code>.",
              },
              {
                module: "Module 08 · Permissions",
                q: "Which command changes ownership of <code>/var/www</code> recursively to user <code>www-data</code>?",
                code: "$ chown -R www-data:www-data /var/www",
                options: [
                  "chmod -R 775 /var/www",
                  "chown -R www-data:www-data /var/www",
                  "useradd www-data /var/www",
                  "usermod -aG www-data /var/www",
                ],
                answer: 1,
                exp: "<code>chown -R</code> recursively updates user and group owners across the folder tree.",
              },
            ],
          },
          m9: {
            name: "Module 09 · Processes",
            questions: [
              {
                module: "Module 09 · Processes",
                q: "Which kill signal cannot be intercepted, caught, or ignored by a stubborn process?",
                code: "$ kill -s 9 <PID>",
                options: [
                  "SIGTERM (15)",
                  "SIGINT (2)",
                  "SIGKILL (9)",
                  "SIGHUP (1)",
                ],
                answer: 2,
                exp: "<code>SIGKILL (signal 9)</code> is handled directly by the Linux kernel, preventing the process from blocking it.",
              },
              {
                module: "Module 09 · Processes",
                q: "Which command lists process IDs and names for running processes matching <code>nginx</code>?",
                code: "$ pgrep -l nginx",
                options: [
                  "pgrep -l nginx",
                  "findproc nginx",
                  "killall -t nginx",
                  "service --list nginx",
                ],
                answer: 0,
                exp: "<code>pgrep -l</code> scans active processes and returns process IDs and process names.",
              },
              {
                module: "Module 09 · Processes",
                q: "Which key inside interactive <code>top</code> allows you to kill a process by PID?",
                code: "top - PID to signal/kill [default pid = 1234]",
                options: ["k", "x", "q", "d"],
                answer: 0,
                exp: "Pressing <code>k</code> prompts for a PID and signal to send to the process.",
              },
            ],
          },
          m10: {
            name: "Module 10 · systemd Services",
            questions: [
              {
                module: "Module 10 · systemd Services",
                q: "Which command streams real-time logs for a systemd unit named <code>nginx</code>?",
                code: "$ journalctl -u nginx -f",
                options: [
                  "systemctl status nginx --follow",
                  "journalctl -u nginx -f",
                  "cat /var/log/nginx/stream.log",
                  "service nginx tail",
                ],
                answer: 1,
                exp: "<code>journalctl -u nginx -f</code> filters systemd logs for the nginx unit and <code>-f</code> (follow) streams incoming entries.",
              },
              {
                module: "Module 10 · systemd Services",
                q: "Which command configures a systemd service to start automatically on system boot?",
                code: "$ systemctl enable nginx",
                options: [
                  "systemctl enable nginx",
                  "systemctl start nginx",
                  "systemctl boot nginx",
                  "systemctl persist nginx",
                ],
                answer: 0,
                exp: "<code>systemctl enable</code> creates symlinks in <code>/etc/systemd/system</code> to run the unit at boot.",
              },
              {
                module: "Module 10 · systemd Services",
                q: "Which command reloads configuration files for the <code>nginx</code> unit without dropping active connections?",
                code: "$ systemctl reload nginx",
                options: [
                  "systemctl restart nginx",
                  "systemctl reload nginx",
                  "kill -9 nginx",
                  "service nginx reset",
                ],
                answer: 1,
                exp: "<code>systemctl reload</code> sends a SIGHUP/reload directive so workers restart smoothly without downtime.",
              },
            ],
          },
          m11: {
            name: "Module 11 · Networking Essentials",
            questions: [
              {
                module: "Module 11 · Networking",
                q: "Which command displays active TCP listening sockets with process identifiers on modern Linux distros?",
                code: "$ ss -tulpn",
                options: [
                  "ss -tulpn",
                  "ip addr",
                  "ping -c 4 localhost",
                  "traceroute 8.8.8.8",
                ],
                answer: 0,
                exp: "<code>ss -tulpn</code> inspects TCP/UDP listening sockets with numeric ports and owning process IDs.",
              },
              {
                module: "Module 11 · Networking",
                q: "Which tool inspects DNS resolution records for a domain directly from the terminal?",
                code: "$ dig example.com",
                options: [
                  "dig example.com",
                  "netstat --domain",
                  "ip route get",
                  "arp -a",
                ],
                answer: 0,
                exp: "<code>dig</code> queries DNS name servers and returns detailed query answers.",
              },
              {
                module: "Module 11 · Networking",
                q: "Which command shows IP addresses and status of all local network interfaces on Linux?",
                code: "$ ip addr show",
                options: [
                  "ip addr show",
                  "ifconfig --setup",
                  "ping -a",
                  "route -n",
                ],
                answer: 0,
                exp: "<code>ip addr show</code> is the standard iproute2 command for interface and IP information.",
              },
            ],
          },
          m12: {
            name: "Module 12 · Package Management",
            questions: [
              {
                module: "Module 12 · Package Management",
                q: "On Ubuntu/Debian, which command updates the local index of package versions available from repositories?",
                code: "$ apt update",
                options: [
                  "apt update",
                  "apt upgrade",
                  "apt install --refresh",
                  "dpkg --sync",
                ],
                answer: 0,
                exp: "<code>apt update</code> synchronizes index files from sources specified in <code>/etc/apt/sources.list</code>.",
              },
              {
                module: "Module 12 · Package Management",
                q: "Which command inspects whether a Debian package is installed using low-level dpkg?",
                code: "$ dpkg -l | grep nginx",
                options: [
                  "dpkg -l | grep nginx",
                  "apt-cache --local",
                  "pkg list nginx",
                  "deb -q nginx",
                ],
                answer: 0,
                exp: "<code>dpkg -l</code> lists installed packages with status flags and package versions.",
              },
              {
                module: "Module 12 · Package Management",
                q: "Which flag removes both a package and its configuration files on apt?",
                code: "$ apt purge <pkg>",
                options: ["purge", "clean", "remove --hard", "drop"],
                answer: 0,
                exp: "<code>apt purge</code> removes the binaries and wipes all package configuration files.",
              },
            ],
          },
          m13: {
            name: "Module 13 · Disks & Filesystems",
            questions: [
              {
                module: "Module 13 · Disks & Filesystems",
                q: "Which command checks disk space availability across all mounted filesystems in human-readable units?",
                code: "$ df -h",
                options: ["free -m", "du -sh /", "df -h", "fdisk -l"],
                answer: 2,
                exp: "<code>df -h</code> prints total, used, and available space for all mounted filesystems in M/G units.",
              },
              {
                module: "Module 13 · Disks & Filesystems",
                q: "Which command shows the total disk space consumed by folder <code>/var/log</code>?",
                code: "$ du -sh /var/log",
                options: [
                  "du -sh /var/log",
                  "df -h /var/log",
                  "ls -s /var/log",
                  "stat --disk /var/log",
                ],
                answer: 0,
                exp: "<code>du -sh</code> (disk usage summary human-readable) calculates the combined size of the directory.",
              },
              {
                module: "Module 13 · Disks & Filesystems",
                q: "Which file defines filesystems mounted automatically at boot time?",
                code: "/etc/fstab",
                options: [
                  "/etc/fstab",
                  "/etc/mtab",
                  "/etc/disks",
                  "/proc/mounts",
                ],
                answer: 0,
                exp: "<code>/etc/fstab</code> contains descriptive information about filesystems mounted by the system.",
              },
            ],
          },
          m14: {
            name: "Module 14 · Monitoring & Performance",
            questions: [
              {
                module: "Module 14 · Monitoring",
                q: "What does the first number in system load average represent (e.g. <code>1.45, 0.80, 0.50</code>)?",
                code: "load average: 1.45, 0.80, 0.50",
                options: [
                  "1-minute CPU/IO load average",
                  "5-minute load",
                  "15-minute load",
                  "Current memory load %",
                ],
                answer: 0,
                exp: "The three load average figures represent 1-minute, 5-minute, and 15-minute intervals.",
              },
              {
                module: "Module 14 · Monitoring",
                q: "Which command provides a quick summary of total, used, and available RAM and swap in megabytes?",
                code: "$ free -m",
                options: [
                  "free -m",
                  "mem -h",
                  "cat /proc/ram",
                  "vmstat -total",
                ],
                answer: 0,
                exp: "<code>free -m</code> displays memory statistics formatted in megabytes.",
              },
              {
                module: "Module 14 · Monitoring",
                q: "Which terminal utility provides an interactive, colorful alternative to top with horizontal usage bars?",
                code: "$ htop",
                options: ["htop", "glances", "atop", "ps aux"],
                answer: 0,
                exp: "<code>htop</code> is an interactive process viewer with visual CPU, memory, and swap meters.",
              },
            ],
          },
          m15: {
            name: "Module 15 · Scheduled Jobs",
            questions: [
              {
                module: "Module 15 · Scheduled Jobs",
                q: "Which command opens the current user's crontab for editing?",
                code: "$ crontab -e",
                options: [
                  "crontab -e",
                  "crontab -l",
                  "cron --edit",
                  "systemctl edit cron",
                ],
                answer: 0,
                exp: "<code>crontab -e</code> opens the user's scheduled jobs table in the default terminal editor.",
              },
              {
                module: "Module 15 · Scheduled Jobs",
                q: "In a cron expression <code>0 2 * * * /backup.sh</code>, when does the job run?",
                code: "0 2 * * * /backup.sh",
                options: [
                  "Every 2 minutes",
                  "Every hour at minute 2",
                  "Daily at 2:00 AM",
                  "On the 2nd day of each month",
                ],
                answer: 2,
                exp: "Minute 0, Hour 2 (2:00 AM) every day.",
              },
              {
                module: "Module 15 · Scheduled Jobs",
                q: "Which directory holds system-wide daily cron jobs on Debian/Ubuntu?",
                code: "/etc/cron.daily",
                options: [
                  "/etc/cron.daily",
                  "/var/spool/cron/daily",
                  "/usr/bin/daily",
                  "/etc/crontab.d",
                ],
                answer: 0,
                exp: "Executable scripts placed in <code>/etc/cron.daily</code> run once per day automatically.",
              },
            ],
          },
          m16: {
            name: "Module 16 · Shell Configuration",
            questions: [
              {
                module: "Module 16 · Shell Configuration",
                q: "Which startup file is read and executed by interactive non-login bash shells to configure aliases and <code>$PATH</code>?",
                code: "$ nano ~/.bashrc",
                options: [
                  "/etc/fstab",
                  "~/.bashrc",
                  "/etc/hosts",
                  "~/.ssh/authorized_keys",
                ],
                answer: 1,
                exp: "<code>~/.bashrc</code> runs for each interactive bash terminal to initialize custom environments and functions.",
              },
              {
                module: "Module 16 · Shell Configuration",
                q: "How do you make an environment variable available to child processes spawned from the current shell?",
                code: "$ export API_KEY='secret'",
                options: [
                  "export API_KEY='secret'",
                  "setenv API_KEY",
                  "env.put API_KEY",
                  "declare API_KEY",
                ],
                answer: 0,
                exp: "<code>export</code> marks variables for export to the environment of subsequently executed child commands.",
              },
              {
                module: "Module 16 · Shell Configuration",
                q: "Which command applies newly added aliases in <code>~/.bashrc</code> immediately to the current terminal session?",
                code: "$ source ~/.bashrc",
                options: [
                  "source ~/.bashrc",
                  "bash --reload",
                  "exec --apply",
                  "eval .bashrc",
                ],
                answer: 0,
                exp: "<code>source</code> (or <code>.</code>) executes commands from the file in the current shell environment.",
              },
            ],
          },
          m17: {
            name: "Module 17 · Text Processing",
            questions: [
              {
                module: "Module 17 · Text Processing",
                q: "Which command filters out duplicate consecutive lines from a sorted stream?",
                code: "$ sort names.txt | uniq",
                options: ["uniq", "distinct", "dedup", "clean"],
                answer: 0,
                exp: "<code>uniq</code> filters adjacent duplicate lines from standard input.",
              },
              {
                module: "Module 17 · Text Processing",
                q: "Which command extracts the first column of a colon-delimited file like <code>/etc/passwd</code>?",
                code: "$ cut -d: -f1 /etc/passwd",
                options: ["cut -d: -f1", "split -c1 :", "grep -c1 :", "tr : 1"],
                answer: 0,
                exp: "<code>-d:</code> specifies the colon delimiter and <code>-f1</code> selects the first field.",
              },
              {
                module: "Module 17 · Text Processing",
                q: "Which utility reads standard input and writes it simultaneously to standard output AND a file?",
                code: "$ make 2>&1 | tee build.log",
                options: ["tee", "fork", "pipe", "clone"],
                answer: 0,
                exp: "<code>tee</code> splits the standard stream, sending it to screen and saving a copy to disk.",
              },
            ],
          },
          m18: {
            name: "Module 18 · Links",
            questions: [
              {
                module: "Module 18 · Links",
                q: "Which command creates a symbolic (soft) link pointing <code>current</code> to directory <code>release-v2</code>?",
                code: "$ ln -s release-v2 current",
                options: [
                  "ln -s release-v2 current",
                  "ln -h release-v2 current",
                  "symlink release-v2 current",
                  "link -soft current release-v2",
                ],
                answer: 0,
                exp: "<code>ln -s &lt;target&gt; &lt;linkname&gt;</code> creates a soft symbolic link.",
              },
              {
                module: "Module 18 · Links",
                q: "What happens to a symbolic link if the original target file is deleted?",
                code: "$ rm original.txt && cat my-link",
                options: [
                  "The symlink is automatically deleted",
                  "The symlink becomes a broken/dangling link",
                  "The symlink converts into a regular file",
                  "The file is restored from cache",
                ],
                answer: 1,
                exp: "A symlink only contains a path string. If the target is deleted, it points nowhere (broken/dangling).",
              },
              {
                module: "Module 18 · Links",
                q: "Can a hard link point to a file on a completely different filesystem or disk partition?",
                code: "$ ln /mnt/disk1/data.txt /mnt/disk2/link.txt",
                options: [
                  "No, hard links cannot cross filesystem boundaries",
                  "Yes, anytime",
                  "Yes, with the -f flag",
                  "Only if running as root",
                ],
                answer: 0,
                exp: "Hard links point directly to an inode number, which is only valid within a single filesystem.",
              },
            ],
          },
          m19: {
            name: "Module 19 · Archives & Compression",
            questions: [
              {
                module: "Module 19 · Archives",
                q: "Which flags extract a compressed tar archive (<code>.tar.gz</code>) while displaying file names as they unpack?",
                code: "$ tar -xzvf bundle.tar.gz",
                options: ["-czvf", "-xzvf", "-tvf", "-rzvf"],
                answer: 1,
                exp: "<code>-x</code> extracts, <code>-z</code> decompresses gzip, <code>-v</code> enables verbose output, and <code>-f</code> targets the file.",
              },
              {
                module: "Module 19 · Archives",
                q: "Which command creates a compressed <code>backup.tar.gz</code> from directory <code>/var/www</code>?",
                code: "$ tar -czvf backup.tar.gz /var/www",
                options: [
                  "tar -czvf backup.tar.gz /var/www",
                  "tar -xzvf backup.tar.gz /var/www",
                  "gzip -tar backup /var/www",
                  "zip -r backup.tar.gz /var/www",
                ],
                answer: 0,
                exp: "<code>-c</code> (create), <code>-z</code> (gzip), <code>-v</code> (verbose), <code>-f</code> (file).",
              },
              {
                module: "Module 19 · Archives",
                q: "Which command inspects the contents of a tar archive without extracting files to disk?",
                code: "$ tar -tf archive.tar.gz",
                options: [
                  "tar -tf archive.tar.gz",
                  "tar -vf archive.tar.gz",
                  "cat archive.tar.gz",
                  "unzip -l archive.tar.gz",
                ],
                answer: 0,
                exp: "<code>-t</code> lists the table of contents of an archive file.",
              },
            ],
          },
          m20: {
            name: "Module 20 · Linux Project #1",
            questions: [
              {
                module: "Module 20 · Linux Project #1",
                q: "In your scheduled cleanup job, which command finds and deletes <code>*.log</code> files older than 7 days in <code>/var/log/apps</code>?",
                code: "$ find /var/log/apps -name '*.log' -mtime +7 -delete",
                options: [
                  "find /var/log/apps -name '*.log' -mtime +7 -delete",
                  "rm -r /var/log/apps/*.log --days 7",
                  "cron clean /var/log/apps 7d",
                  "clean-logs -d 7 /var/log/apps",
                ],
                answer: 0,
                exp: "<code>-mtime +7</code> matches files modified more than 7 days ago, and <code>-delete</code> removes them safely.",
              },
              {
                module: "Module 20 · Linux Project #1",
                q: "How do you redirect both standard output and standard error from a cron task into <code>cleanup.log</code>?",
                code: "* * * * * /scripts/clean.sh >> cleanup.log 2>&1",
                options: [
                  ">> cleanup.log 2>&1",
                  "> cleanup.log &2",
                  "2> cleanup.log >1",
                  "2>&1 >> /dev/null",
                ],
                answer: 0,
                exp: "<code>>> cleanup.log</code> appends stdout, and <code>2>&1</code> redirects stderr to stdout.",
              },
              {
                module: "Module 20 · Linux Project #1",
                q: "Which exit code convention indicates successful execution in Linux scripts and commands?",
                code: "exit 0",
                options: ["0", "1", "-1", "255"],
                answer: 0,
                exp: "In Unix-like systems, an exit code of <code>0</code> signifies success; non-zero indicates an error.",
              },
            ],
          },
          m21: {
            name: "Module 21 · Linux Project #2",
            questions: [
              {
                module: "Module 21 · Linux Project #2",
                q: "For the health report script, which command captures uptime, active users, and load average into a single string?",
                code: "$ uptime",
                options: ["uptime", "w -s", "who -b", "systemctl status"],
                answer: 0,
                exp: "<code>uptime</code> outputs system run duration, logged-in user count, and load averages (1, 5, 15 min).",
              },
              {
                module: "Module 21 · Linux Project #2",
                q: "Which command checks if the root filesystem (<code>/</code>) has exceeded disk utilization threshold in a bash script?",
                code: "$ df / | awk 'NR==2 {print $5}'",
                options: [
                  "df / | awk 'NR==2 {print $5}'",
                  "du -s / | grep 90",
                  "checkdisk --root 90",
                  "stat --usage /",
                ],
                answer: 0,
                exp: "<code>df /</code> prints filesystem usage, and awk extracts the percentage usage column.",
              },
              {
                module: "Module 21 · Linux Project #2",
                q: "Which command outputs the top memory-consuming processes sorted in descending order?",
                code: "$ ps aux --sort=-%mem | head -n 6",
                options: [
                  "ps aux --sort=-%mem | head -n 6",
                  "top -b -n 1 | head -5",
                  "pgrep --mem -top 5",
                  "kill -l mem 5",
                ],
                answer: 0,
                exp: "<code>--sort=-%mem</code> orders processes from highest memory percentage to lowest.",
              },
            ],
          },
          m22: {
            name: "Module 22 · Linux Project #3",
            questions: [
              {
                module: "Module 22 · Linux Project #3",
                q: "SSH private keys (e.g. <code>~/.ssh/id_ed25519</code>) must have which strict permissions to be accepted by the SSH client?",
                code: "$ chmod 600 ~/.ssh/id_ed25519",
                options: ["chmod 600", "chmod 777", "chmod 644", "chmod 755"],
                answer: 0,
                exp: "<code>600</code> (read/write for owner only) prevents private key exposure warnings and rejected logins.",
              },
              {
                module: "Module 22 · Linux Project #3",
                q: "Which folder in the standard hierarchy is designated for administrator-installed custom executables accessible across system users?",
                code: "/usr/local/bin",
                options: [
                  "/usr/local/bin",
                  "/etc/bin",
                  "/tmp/scripts",
                  "/var/run/bin",
                ],
                answer: 0,
                exp: "<code>/usr/local/bin</code> is part of default <code>$PATH</code> and reserved for local machine software.",
              },
              {
                module: "Module 22 · Linux Project #3",
                q: "Which command ensures a helper script has executable permissions for everyone but write permissions for the owner only?",
                code: "$ chmod 755 /usr/local/bin/backup-helper",
                options: ["chmod 755", "chmod 644", "chmod 700", "chmod 777"],
                answer: 0,
                exp: "<code>755</code> gives owner rwx, and group/others r-x.",
              },
            ],
          },
        };

        const MODULES_LIST = [
          { num: 1, name: "Introduction to Linux" },
          { num: 2, name: "Paths and navigation" },
          { num: 3, name: "Listing files" },
          { num: 4, name: "Reading files" },
          { num: 5, name: "Managing files" },
          { num: 6, name: "Searching text" },
          { num: 7, name: "Editing files" },
          { num: 8, name: "Users and permissions" },
          { num: 9, name: "Processes" },
          { num: 10, name: "systemd services" },
          { num: 11, name: "Networking essentials" },
          { num: 12, name: "Package management" },
          { num: 13, name: "Disks and filesystems" },
          { num: 14, name: "Monitoring and performance" },
          { num: 15, name: "Scheduled jobs" },
          { num: 16, name: "Shell configuration" },
          { num: 17, name: "Text processing" },
          { num: 18, name: "Links" },
          { num: 19, name: "Archives and compression" },
          { num: 20, name: "Linux Project #1 (Cron Cleanups)" },
          { num: 21, name: "Linux Project #2 (System Snapshot)" },
          { num: 22, name: "Linux Project #3 (Secrets & Security)" },
        ];

        let currentCategory = "all";
        let activeQuestions = [];
        let currentIndex = 0;
        let selectedOption = null;
        let isChecked = false;
        let score = 0;

        const overlay = document.getElementById("quizOverlay");
        const closeBtn = document.getElementById("quizCloseBtn");
        const backdrop = document.getElementById("quizBackdrop");
        const modalBody = document.getElementById("quizModalBody");
        const actionBtn = document.getElementById("quizActionBtn");
        const retakeBtn = document.getElementById("quizRetakeBtn");
        const footShareBtn = document.getElementById("quizFootShareBtn");
        const quizBackTopicBtn = document.getElementById("quizBackTopicBtn");
        const liveScore = document.getElementById("quizLiveScore");
        const takeQuizBtn = document.getElementById("takeQuizBtn");
        const heroQuizStat = document.getElementById("heroQuizStat");
        const certQuizRow = document.getElementById("certQuizRow");

        function escapeHtml(str) {
          if (!str) return "";
          return String(str)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
        }

        window.openQuizModal = function (cat) {
          if (cat && QUIZ_DATA[cat]) {
            startQuiz(cat);
          } else {
            showTopicSelect();
          }
          if (overlay) {
            overlay.hidden = false;
            void overlay.offsetHeight; // force reflow for smooth transition
            overlay.classList.add("open");
            document.documentElement.style.overflow = "hidden";
            document.body.style.overflow = "hidden";
          }
        };

        window.closeQuizModal = function () {
          if (typeof closeQuizShareDrawer === "function")
            closeQuizShareDrawer();
          if (overlay) {
            overlay.classList.remove("open");
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
            setTimeout(() => {
              if (!overlay.classList.contains("open")) {
                overlay.hidden = true;
              }
            }, 240);
          }
        };

        function showTopicSelect() {
          if (typeof closeQuizShareDrawer === "function")
            closeQuizShareDrawer();
          if (liveScore) {
            liveScore.textContent = "Choose a module to practice";
          }
          if (quizBackTopicBtn) quizBackTopicBtn.style.display = "none";
          if (retakeBtn) retakeBtn.style.display = "none";
          if (footShareBtn) footShareBtn.style.display = "none";
          if (actionBtn) {
            actionBtn.style.display = "none";
          }

          let html = `
      <div class="quiz-select-view">
        <div class="quiz-section-label">
          <span>Choose a Module to Practice (1 – 22)</span>
          <span class="quiz-label-hint">Click any module to start</span>
        </div>

        <div class="quiz-modules-grid">
          ${MODULES_LIST.map(
            (m) => `
            <button type="button" class="quiz-mod-card" data-cat="m${m.num}">
              <span class="quiz-mod-num">${String(m.num).padStart(2, "0")}</span>
              <span class="quiz-mod-title">${escapeHtml(m.name)}</span>
              <span class="quiz-mod-arrow">→</span>
            </button>
          `,
          ).join("")}
        </div>
      </div>
    `;

          modalBody.innerHTML = html;

          modalBody.querySelectorAll(".quiz-mod-card").forEach((card) => {
            card.onclick = () => {
              startQuiz(card.dataset.cat);
            };
          });
        }

        function startQuiz(cat) {
          if (typeof closeQuizShareDrawer === "function")
            closeQuizShareDrawer();
          if (cat && QUIZ_DATA[cat]) currentCategory = cat;
          else if (!QUIZ_DATA[currentCategory]) currentCategory = "m1";

          activeQuestions = (
            QUIZ_DATA[currentCategory] || QUIZ_DATA.m1
          ).questions.slice();
          currentIndex = 0;
          selectedOption = null;
          isChecked = false;
          score = 0;

          if (quizBackTopicBtn) {
            quizBackTopicBtn.style.display = "inline-flex";
            quizBackTopicBtn.textContent = "← Modules";
            quizBackTopicBtn.onclick = () => showTopicSelect();
          }
          if (retakeBtn) retakeBtn.style.display = "none";
          if (footShareBtn) footShareBtn.style.display = "none";
          if (actionBtn) {
            actionBtn.style.display = "inline-flex";
            actionBtn.onclick = handleActionClick;
            actionBtn.disabled = true;
            actionBtn.classList.remove("ready");
            actionBtn.textContent = "Check answer";
          }
          renderQuestion();
        }

        function renderQuestion() {
          if (!modalBody) return;
          if (currentIndex >= activeQuestions.length) {
            renderSummary();
            return;
          }

          const q = activeQuestions[currentIndex];
          const total = activeQuestions.length;

          selectedOption = null;
          isChecked = false;
          if (actionBtn) {
            actionBtn.disabled = true;
            actionBtn.classList.remove("ready");
            actionBtn.textContent = "Check answer";
          }
          if (liveScore) {
            liveScore.textContent = `Question ${currentIndex + 1} of ${total} · Score: ${score}/${currentIndex}`;
          }
          if (quizBackTopicBtn) {
            quizBackTopicBtn.style.display = "inline-flex";
            quizBackTopicBtn.textContent = "← Modules";
            quizBackTopicBtn.onclick = () => showTopicSelect();
          }

          // Segmented progress bar (escbash signature design) matching Image 2 exactly
          let html = `
      <div class="quiz-status-row">
        <span class="qcount">Question ${currentIndex + 1} of ${total}</span>
        <span class="qpassed">${score} of ${total} passed</span>
      </div>
      <div class="quiz-qbar" aria-hidden="true">
        ${activeQuestions
          .map((_, i) => {
            let cls = "";
            if (i < currentIndex) {
              cls = "passed";
            } else if (i === currentIndex) {
              cls = "active";
            }
            return `<i class="${cls}"></i>`;
          })
          .join("")}
      </div>
      <div class="quiz-card">
        <span class="quiz-tag">${q.module}</span>
        <h4>${q.q}</h4>
        ${q.code ? `<div class="quiz-code-box">${escapeHtml(q.code)}</div>` : ""}
        <div class="quiz-options" role="radiogroup" aria-label="Quiz choices">
          ${q.options
            .map(
              (opt, i) => `
            <button type="button" class="quiz-opt" data-index="${i}" role="radio" aria-checked="false">
              <span class="quiz-opt-radio"></span>
              <span class="quiz-opt-text">${escapeHtml(opt)}</span>
            </button>
          `,
            )
            .join("")}
        </div>
        <div id="quizFeedbackBox"></div>
      </div>
    `;

          modalBody.innerHTML = html;

          modalBody.querySelectorAll(".quiz-opt").forEach((btn) => {
            btn.onclick = () => {
              if (isChecked) return;
              const idx = parseInt(btn.dataset.index, 10);
              selectOption(idx);
            };
          });
        }

        function selectOption(index) {
          if (isChecked) return;
          selectedOption = index;
          if (actionBtn) {
            actionBtn.disabled = false;
            actionBtn.classList.add("ready");
          }
          modalBody.querySelectorAll(".quiz-opt").forEach((btn, i) => {
            const isSel = i === index;
            btn.classList.toggle("selected", isSel);
            btn.setAttribute("aria-checked", String(isSel));
          });
        }

        function checkAnswer() {
          if (selectedOption === null || isChecked) return;
          isChecked = true;
          const q = activeQuestions[currentIndex];
          const isCorrect = selectedOption === q.answer;
          if (isCorrect) score++;

          modalBody.querySelectorAll(".quiz-opt").forEach((btn, i) => {
            btn.classList.add("locked");
            btn.disabled = true;
            if (i === q.answer) {
              btn.classList.add("correct");
            } else if (i === selectedOption) {
              btn.classList.add("wrong");
            }
          });

          // Update active progress bar pip
          const pips = modalBody.querySelectorAll(".quiz-qbar i");
          if (pips[currentIndex]) {
            pips[currentIndex].className = isCorrect ? "passed" : "bad";
          }

          const fbBox = document.getElementById("quizFeedbackBox");
          if (fbBox) {
            fbBox.innerHTML = `
        <div class="quiz-feedback ${isCorrect ? "ok" : "bad"}">
          <b>${isCorrect ? "Correct." : "Not quite."}</b> ${q.exp}
        </div>
      `;
          }

          const total = activeQuestions.length;
          if (liveScore) {
            liveScore.textContent = `Question ${currentIndex + 1} of ${total} · Score: ${score}/${currentIndex + 1}`;
          }

          if (actionBtn) {
            actionBtn.disabled = false;
            actionBtn.classList.add("ready");
            if (currentIndex + 1 < total) {
              actionBtn.textContent = "Next Question →";
            } else {
              actionBtn.textContent = "View Results 🎉";
            }
          }
        }

        function handleActionClick() {
          if (currentIndex >= activeQuestions.length) {
            closeQuizModal();
          } else if (!isChecked) {
            checkAnswer();
          } else {
            currentIndex++;
            renderQuestion();
          }
        }

        /* ===== 10-Style Celebration Confetti Engine ===== */
        const Confetti = (function () {
          let canvas, ctx;
          let particles = [];
          let animationFrame = null;
          let isRunning = false;

          function initCanvas() {
            if (!canvas) {
              canvas = document.getElementById("confettiCanvas");
              if (!canvas) {
                canvas = document.createElement("canvas");
                canvas.id = "confettiCanvas";
                document.body.appendChild(canvas);
              }
              ctx = canvas.getContext("2d");
            }
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
          }

          const COLORS = [
            "#a78bfa",
            "#ffb454",
            "#22dea6",
            "#38bdf8",
            "#f43f5e",
            "#8b5cf6",
            "#f59e0b",
            "#34d399",
            "#ec4899",
            "#60a5fa",
            "#fde047",
            "#ffffff",
          ];

          const EMOJIS = ["🎉", "🚀", "🐧", "⭐", "🔥", "💻", "✨", "🏆"];
          const GLYPHS = ["$", "#", ">_", "~", "01", "root", "{ }", "sudo"];

          function createParticle(originX, originY) {
            const angle = Math.random() * Math.PI * 2;
            const speed = 7 + Math.random() * 17;
            const styleType = Math.floor(Math.random() * 10); // 0 to 9: 10 distinct styles
            const color = COLORS[Math.floor(Math.random() * COLORS.length)];

            return {
              x: originX,
              y: originY,
              vx: Math.cos(angle) * speed,
              vy: Math.sin(angle) * speed - 6 - Math.random() * 8, // upward thrust
              gravity: 0.32 + Math.random() * 0.18,
              drag: 0.965,
              rotation: Math.random() * 360,
              dRotation: (Math.random() - 0.5) * 12,
              wobble: Math.random() * 10,
              dWobble: 0.08 + Math.random() * 0.08,
              size: 7 + Math.random() * 9,
              color: color,
              alpha: 1,
              decay: 0.007 + Math.random() * 0.008,
              style: styleType,
              char:
                styleType === 6
                  ? EMOJIS[Math.floor(Math.random() * EMOJIS.length)]
                  : styleType === 9
                    ? GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
                    : null,
            };
          }

          function fire() {
            initCanvas();
            particles = [];
            const w = canvas.width;
            const h = canvas.height;

            // Burst 1: Left cannon
            for (let i = 0; i < 65; i++) {
              particles.push(createParticle(w * 0.15, h * 0.85));
            }
            // Burst 2: Right cannon
            for (let i = 0; i < 65; i++) {
              particles.push(createParticle(w * 0.85, h * 0.85));
            }
            // Burst 3: Center celebration starburst
            for (let i = 0; i < 65; i++) {
              particles.push(createParticle(w * 0.5, h * 0.45));
            }

            if (!isRunning) {
              isRunning = true;
              render();
            }
          }

          function drawParticle(p) {
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.globalAlpha = Math.max(0, p.alpha);
            ctx.fillStyle = p.color;
            ctx.strokeStyle = p.color;

            const s = p.size;
            const wFactor = Math.cos(p.wobble);

            switch (p.style) {
              // Style 0: Ribbon / Rectangle (fluttering paper strip)
              case 0:
                ctx.fillRect(-s, -s * 0.45 * wFactor, s * 2, s * 0.9 * wFactor);
                break;

              // Style 1: Circle / Disc
              case 1:
                ctx.beginPath();
                ctx.arc(0, 0, s * 0.65, 0, Math.PI * 2);
                ctx.fill();
                break;

              // Style 2: 5-Pointed Star
              case 2:
                ctx.beginPath();
                for (let i = 0; i < 10; i++) {
                  const rad = (i * Math.PI) / 5;
                  const r = i % 2 === 0 ? s * 0.9 : s * 0.42;
                  const px = Math.cos(rad) * r;
                  const py = Math.sin(rad) * r;
                  if (i === 0) ctx.moveTo(px, py);
                  else ctx.lineTo(px, py);
                }
                ctx.closePath();
                ctx.fill();
                break;

              // Style 3: Curled Ribbon / Streamer
              case 3:
                ctx.beginPath();
                ctx.lineWidth = Math.max(2.5, s * 0.35);
                ctx.moveTo(-s, Math.sin(p.wobble) * 4);
                ctx.quadraticCurveTo(
                  0,
                  Math.cos(p.wobble) * 10,
                  s,
                  Math.sin(p.wobble + 2) * 5,
                );
                ctx.stroke();
                break;

              // Style 4: Triangle Shard
              case 4:
                ctx.beginPath();
                ctx.moveTo(0, -s * 0.9);
                ctx.lineTo(s * 0.8, s * 0.6 * wFactor);
                ctx.lineTo(-s * 0.8, s * 0.6 * wFactor);
                ctx.closePath();
                ctx.fill();
                break;

              // Style 5: Diamond / Rhombus
              case 5:
                ctx.beginPath();
                ctx.moveTo(0, -s);
                ctx.lineTo(s * 0.65 * wFactor, 0);
                ctx.lineTo(0, s);
                ctx.lineTo(-s * 0.65 * wFactor, 0);
                ctx.closePath();
                ctx.fill();
                break;

              // Style 6: Celebration Emojis (🎉, 🚀, 🐧, ⭐)
              case 6:
                ctx.font = `${Math.round(s * 1.7)}px sans-serif`;
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText(p.char || "🎉", 0, 0);
                break;

              // Style 7: Hollow Ring / Donut
              case 7:
                ctx.beginPath();
                ctx.arc(0, 0, s * 0.7, 0, Math.PI * 2);
                ctx.lineWidth = Math.max(2, s * 0.28);
                ctx.stroke();
                break;

              // Style 8: Glowing 4-Point Sparkle Cross
              case 8:
                ctx.beginPath();
                for (let i = 0; i < 8; i++) {
                  const rad = (i * Math.PI) / 4;
                  const r = i % 2 === 0 ? s * 1.25 : s * 0.2;
                  const px = Math.cos(rad) * r;
                  const py = Math.sin(rad) * r;
                  if (i === 0) ctx.moveTo(px, py);
                  else ctx.lineTo(px, py);
                }
                ctx.closePath();
                ctx.fill();
                break;

              // Style 9: Terminal / Shell Code Glyph ($, #, >_, ~)
              case 9:
                ctx.font = `700 ${Math.round(s * 1.4)}px "IBM Plex Mono", monospace`;
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText(p.char || "$", 0, 0);
                break;
            }
            ctx.restore();
          }

          function render() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = particles.length - 1; i >= 0; i--) {
              const p = particles[i];
              p.vx *= p.drag;
              p.vy *= p.drag;
              p.vy += p.gravity;
              p.x += p.vx;
              p.y += p.vy;
              p.rotation += p.dRotation;
              p.wobble += p.dWobble;
              p.alpha -= p.decay;

              if (p.alpha <= 0 || p.y > canvas.height + 60) {
                particles.splice(i, 1);
              } else {
                drawParticle(p);
              }
            }

            if (particles.length > 0) {
              animationFrame = requestAnimationFrame(render);
            } else {
              isRunning = false;
              ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
          }

          window.addEventListener("resize", () => {
            if (canvas) {
              canvas.width = window.innerWidth;
              canvas.height = window.innerHeight;
            }
          });

          return { fire };
        })();

        /* ===== Quiz Scorecard Generator (Branded 1200x630 Card) ===== */
        let currentScorecardBlob = null;
        let currentScorecardDataUrl = null;

        function generateQuizScorecard(info) {
          return new Promise((resolve) => {
            const canvas = document.createElement("canvas");
            const width = 1200;
            const height = 630;
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext("2d");

            // 1. Base dark background
            ctx.fillStyle = "#0b0e14";
            ctx.fillRect(0, 0, width, height);

            // 2. Atmospheric ambient glows
            const gTop = ctx.createRadialGradient(width - 150, 100, 10, width - 150, 100, 500);
            gTop.addColorStop(0, "rgba(34, 197, 94, 0.20)");
            gTop.addColorStop(0.5, "rgba(56, 189, 248, 0.08)");
            gTop.addColorStop(1, "rgba(11, 14, 20, 0)");
            ctx.fillStyle = gTop;
            ctx.fillRect(0, 0, width, height);

            const gBottom = ctx.createRadialGradient(150, height - 100, 10, 150, height - 100, 450);
            gBottom.addColorStop(0, "rgba(99, 102, 241, 0.16)");
            gBottom.addColorStop(1, "rgba(11, 14, 20, 0)");
            ctx.fillStyle = gBottom;
            ctx.fillRect(0, 0, width, height);

            // 3. Dot matrix pattern
            ctx.fillStyle = "rgba(255, 255, 255, 0.045)";
            for (let x = 40; x < width - 40; x += 22) {
              for (let y = 40; y < height - 40; y += 22) {
                ctx.beginPath();
                ctx.arc(x, y, 1.2, 0, Math.PI * 2);
                ctx.fill();
              }
            }

            function drawRoundRect(x, y, w, h, r) {
              ctx.beginPath();
              ctx.moveTo(x + r, y);
              ctx.lineTo(x + w - r, y);
              ctx.quadraticCurveTo(x + w, y, x + w, y + r);
              ctx.lineTo(x + w, y + h - r);
              ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
              ctx.lineTo(x + r, y + h);
              ctx.quadraticCurveTo(x, y + h, x, y + h - r);
              ctx.lineTo(x, y + r);
              ctx.quadraticCurveTo(x, y, x + r, y);
              ctx.closePath();
            }

            // 4. Outer border
            drawRoundRect(28, 28, width - 56, height - 56, 18);
            ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
            ctx.lineWidth = 1.8;
            ctx.stroke();

            // 5. Header Bar
            ctx.fillStyle = "#ffffff";
            ctx.font = "bold 30px Inter, -apple-system, sans-serif";
            ctx.fillText("escbash", 64, 76);

            // Linux Lighthouse Badge
            drawRoundRect(200, 50, 175, 34, 6);
            ctx.fillStyle = "rgba(34, 197, 94, 0.12)";
            ctx.fill();
            ctx.strokeStyle = "rgba(34, 197, 94, 0.35)";
            ctx.lineWidth = 1.2;
            ctx.stroke();

            ctx.fillStyle = "#22c55e";
            ctx.font = "bold 13px 'IBM Plex Mono', monospace";
            ctx.fillText("LINUX LIGHTHOUSE", 214, 72);

            // Right header badge: VERIFIED RESULT
            drawRoundRect(width - 275, 50, 210, 34, 17);
            ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
            ctx.fill();
            ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
            ctx.lineWidth = 1;
            ctx.stroke();

            // Green dot
            ctx.beginPath();
            ctx.arc(width - 255, 67, 5, 0, Math.PI * 2);
            ctx.fillStyle = "#22c55e";
            ctx.shadowColor = "#22c55e";
            ctx.shadowBlur = 8;
            ctx.fill();
            ctx.shadowBlur = 0;

            ctx.fillStyle = "#cbd5e1";
            ctx.font = "bold 12px 'IBM Plex Mono', monospace";
            ctx.fillText("VERIFIED RESULT", width - 240, 72);

            // Divider line
            ctx.beginPath();
            ctx.moveTo(64, 102);
            ctx.lineTo(width - 64, 102);
            ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
            ctx.lineWidth = 1;
            ctx.stroke();

            // 6. Assessment Title & Topic
            ctx.fillStyle = "#38bdf8";
            ctx.font = "bold 13px 'IBM Plex Mono', monospace";
            ctx.fillText("OFFICIAL ASSESSMENT REPORT", 64, 134);

            ctx.fillStyle = "#ffffff";
            ctx.font = "bold 36px Inter, -apple-system, sans-serif";
            const topicTitle = info.topic || "Linux Module Quiz";
            ctx.fillText(topicTitle, 64, 180);

            ctx.fillStyle = "#94a3b8";
            ctx.font = "400 15px Inter, -apple-system, sans-serif";
            ctx.fillText("Interactive command-line skills assessment evaluated on real Linux systems", 64, 210);

            // 7. Glassmorphic Central Scorecard
            const cardY = 236;
            const cardH = 240;
            drawRoundRect(64, cardY, width - 128, cardH, 16);
            ctx.fillStyle = "rgba(19, 24, 34, 0.82)";
            ctx.fill();
            ctx.strokeStyle = "rgba(255, 255, 255, 0.09)";
            ctx.lineWidth = 1.2;
            ctx.stroke();

            // Score Dial on the left (cx=195, cy=356, r=70)
            const cx = 195;
            const cy = cardY + 120;
            const r = 70;
            const pct = Number(info.pct) || 0;
            const score = Number(info.score) || 0;
            const total = Number(info.total) || 3;

            // Track circle
            ctx.beginPath();
            ctx.arc(cx, cy, r, 0, Math.PI * 2);
            ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
            ctx.lineWidth = 13;
            ctx.lineCap = "round";
            ctx.stroke();

            let dialColor = "#22c55e";
            let statusText = "PERFECT SCORE · MASTERED 🏆";
            let statusBg = "rgba(34, 197, 94, 0.14)";
            let statusBorder = "rgba(34, 197, 94, 0.4)";
            let messageText = "Flawless execution! You demonstrated mastery of this module.";

            if (pct === 100) {
              dialColor = "#22c55e";
              statusText = "PERFECT SCORE · MASTERED 🏆";
              statusBg = "rgba(34, 197, 94, 0.14)";
              statusBorder = "rgba(34, 197, 94, 0.4)";
              messageText = "Flawless execution! You demonstrated mastery of this module.";
            } else if (pct >= 66) {
              dialColor = "#38bdf8";
              statusText = "PASSED · PROFICIENT 🚀";
              statusBg = "rgba(56, 189, 248, 0.14)";
              statusBorder = "rgba(56, 189, 248, 0.4)";
              messageText = "Great job! Strong grasp of hands-on command line concepts.";
            } else if (pct > 0) {
              dialColor = "#facc15";
              statusText = "SOLID EFFORT · IN PROGRESS 💡";
              statusBg = "rgba(250, 204, 21, 0.14)";
              statusBorder = "rgba(250, 204, 21, 0.4)";
              messageText = "Good effort! Review the module lessons to reach 100% mastery.";
            } else {
              dialColor = "#f43f5e";
              statusText = "CHALLENGING QUIZ · KEEP PRACTICING 🐧";
              statusBg = "rgba(244, 63, 94, 0.14)";
              statusBorder = "rgba(244, 63, 94, 0.4)";
              messageText = "Linux permissions take practice! Re-run terminal tasks & conquer it.";
            }

            // Active progress arc
            const startAngle = -Math.PI / 2;
            const progressSweep = Math.max(0.04, (pct / 100) * 2 * Math.PI);
            ctx.beginPath();
            ctx.arc(cx, cy, r, startAngle, startAngle + progressSweep);
            ctx.strokeStyle = dialColor;
            ctx.shadowColor = dialColor;
            ctx.shadowBlur = 12;
            ctx.lineWidth = 13;
            ctx.lineCap = "round";
            ctx.stroke();
            ctx.shadowBlur = 0;

            // Inside Dial Text
            ctx.textAlign = "center";
            ctx.fillStyle = "#ffffff";
            ctx.font = "bold 38px Inter, -apple-system, sans-serif";
            ctx.fillText(`${pct}%`, cx, cy + 5);

            ctx.fillStyle = "#94a3b8";
            ctx.font = "bold 13px 'IBM Plex Mono', monospace";
            ctx.fillText(`${score}/${total} Correct`, cx, cy + 30);
            ctx.textAlign = "left";

            // Right side of scorecard card
            const textLeft = 320;

            // Status pill
            drawRoundRect(textLeft, cardY + 36, 360, 32, 6);
            ctx.fillStyle = statusBg;
            ctx.fill();
            ctx.strokeStyle = statusBorder;
            ctx.lineWidth = 1;
            ctx.stroke();

            ctx.fillStyle = dialColor;
            ctx.font = "bold 12px 'IBM Plex Mono', monospace";
            ctx.fillText(statusText, textLeft + 14, cardY + 57);

            // Headline message
            ctx.fillStyle = "#f1f5f9";
            ctx.font = "bold 20px Inter, -apple-system, sans-serif";
            ctx.fillText(messageText, textLeft, cardY + 104);

            // Key Stats Cards Row
            const statBoxY = cardY + 134;
            const statBoxW = 160;
            const statBoxH = 68;
            const statsData = [
              { label: "SCORE", val: `${score} of ${total} (${pct}%)` },
              { label: "STATUS", val: pct >= 66 ? "Passed" : "Needs Review" },
              { label: "TOPIC", val: "Linux CLI" }
            ];

            statsData.forEach((s, idx) => {
              const sx = textLeft + (idx * (statBoxW + 16));
              drawRoundRect(sx, statBoxY, statBoxW, statBoxH, 8);
              ctx.fillStyle = "rgba(255, 255, 255, 0.035)";
              ctx.fill();
              ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
              ctx.lineWidth = 1;
              ctx.stroke();

              ctx.fillStyle = "#64748b";
              ctx.font = "bold 11px 'IBM Plex Mono', monospace";
              ctx.fillText(s.label, sx + 12, statBoxY + 24);

              ctx.fillStyle = "#e2e8f0";
              ctx.font = "bold 15px Inter, -apple-system, sans-serif";
              ctx.fillText(s.val, sx + 12, statBoxY + 50);
            });

            // 8. Terminal Command Accent Bar
            const termY = 496;
            const termH = 46;
            drawRoundRect(64, termY, width - 128, termH, 8);
            ctx.fillStyle = "rgba(12, 14, 18, 0.95)";
            ctx.fill();
            ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
            ctx.lineWidth = 1;
            ctx.stroke();

            ctx.font = "bold 14px 'IBM Plex Mono', monospace";
            ctx.fillStyle = "#22c55e";
            ctx.fillText("$", 84, termY + 28);

            ctx.fillStyle = "#cbd5e1";
            const slug = (topicTitle || "quiz").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
            ctx.fillText(`escbash test --module "${slug}" --score ${score}/${total} --status verified`, 104, termY + 28);

            ctx.textAlign = "right";
            ctx.fillStyle = "#38bdf8";
            ctx.font = "bold 12px 'IBM Plex Mono', monospace";
            ctx.fillText("[SANDBOX: EVALUATED]", width - 84, termY + 28);
            ctx.textAlign = "left";

            // 9. Footer
            ctx.fillStyle = "#94a3b8";
            ctx.font = "500 13px Inter, -apple-system, sans-serif";
            ctx.fillText("escbash.com", 64, 584);
            ctx.fillStyle = "#64748b";
            ctx.fillText(" · Engineering playground with interactive Linux environments", 142, 584);

            ctx.textAlign = "right";
            ctx.font = "400 12px 'IBM Plex Mono', monospace";
            ctx.fillStyle = "#64748b";
            ctx.fillText("Real Machines · Hands-on Proof", width - 64, 584);
            ctx.textAlign = "left";

            const dataUrl = canvas.toDataURL("image/png");
            canvas.toBlob((blob) => {
              resolve({ canvas, dataUrl, blob });
            }, "image/png");
          });
        }

        /* ===== Quiz Dialog Share Drawer Functions ===== */
        function setupQuizShareDrawer(info) {
          const url = window.location.href;
          const text = `I just scored ${info.pct}% (${info.score}/${info.total}) on the ${info.topic} Linux Quiz on Linux Lighthouse! 🐧🚀 Test your command line skills:`;
          const encUrl = encodeURIComponent(url);
          const encText = encodeURIComponent(text);

          const scorecardImg = document.getElementById("quizScorecardImg");
          const copyImgBtn = document.getElementById("quizCopyImgBtn");
          const copyImgText = document.getElementById("quizCopyImgText");
          const downloadImgBtn = document.getElementById("quizDownloadImgBtn");
          const nativeShareBtn = document.getElementById("quizNativeShareBtn");

          // Generate scorecard image
          generateQuizScorecard(info).then(({ dataUrl, blob }) => {
            currentScorecardBlob = blob;
            currentScorecardDataUrl = dataUrl;
            if (scorecardImg) {
              scorecardImg.src = dataUrl;
            }
          });

          // Download Card Function
          function downloadCard() {
            if (!currentScorecardDataUrl) return;
            const safeTopic = (info.topic || "quiz")
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/^-|-$/g, "");
            const a = document.createElement("a");
            a.href = currentScorecardDataUrl;
            a.download = `escbash-${safeTopic}-scorecard.png`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            toast("Scorecard PNG downloaded! ⬇️");
          }

          if (downloadImgBtn) {
            downloadImgBtn.onclick = downloadCard;
          }

          // Copy Image button
          if (copyImgBtn) {
            copyImgBtn.onclick = () => {
              if (currentScorecardBlob && navigator.clipboard && window.ClipboardItem) {
                navigator.clipboard.write([
                  new ClipboardItem({ "image/png": currentScorecardBlob })
                ]).then(() => {
                  copyImgBtn.classList.add("copied");
                  if (copyImgText) copyImgText.textContent = "Copied Image! ✓";
                  toast("Scorecard image copied! Paste with Ctrl+V into LinkedIn, X, or Discord 📋");
                  setTimeout(() => {
                    copyImgBtn.classList.remove("copied");
                    if (copyImgText) copyImgText.textContent = "Copy Image";
                  }, 2400);
                }).catch(() => {
                  downloadCard();
                });
              } else {
                downloadCard();
              }
            };
          }

          // Native Share Card button
          if (nativeShareBtn) {
            nativeShareBtn.onclick = () => {
              if (currentScorecardBlob && navigator.canShare) {
                const file = new File([currentScorecardBlob], "escbash-scorecard.png", { type: "image/png" });
                if (navigator.canShare({ files: [file] })) {
                  navigator.share({
                    title: `${info.topic} Scorecard - escbash`,
                    text: text,
                    url: url,
                    files: [file]
                  }).then(() => {
                    toast("Scorecard shared! 🚀");
                  }).catch((e) => {
                    if (e.name !== "AbortError") {
                      downloadCard();
                    }
                  });
                  return;
                }
              }
              copyImgBtn ? copyImgBtn.click() : downloadCard();
            };
          }

          const liBtn = document.getElementById("quizShareLinkedIn");
          if (liBtn) {
            liBtn.onclick = () => {
              if (currentScorecardBlob && navigator.clipboard && window.ClipboardItem) {
                navigator.clipboard.write([
                  new ClipboardItem({ "image/png": currentScorecardBlob })
                ]).catch(() => {});
              }
              toast("Scorecard copied! Opening LinkedIn... 📋");
            };
            liBtn.href = `https://www.linkedin.com/sharing/share-offsite/?url=${encUrl}`;
          }

          const xBtn = document.getElementById("quizShareX");
          if (xBtn) {
            xBtn.onclick = () => {
              if (currentScorecardBlob && navigator.clipboard && window.ClipboardItem) {
                navigator.clipboard.write([
                  new ClipboardItem({ "image/png": currentScorecardBlob })
                ]).catch(() => {});
              }
              toast("Scorecard copied! Opening X... 📋");
            };
            xBtn.href = `https://twitter.com/intent/tweet?text=${encText}&url=${encUrl}`;
          }

          const peerBtn = document.getElementById("quizSharePeerlist");
          if (peerBtn) {
            peerBtn.onclick = (e) => {
              if (currentScorecardBlob && navigator.clipboard && window.ClipboardItem) {
                navigator.clipboard.write([
                  new ClipboardItem({ "image/png": currentScorecardBlob })
                ]).then(() => {
                  toast("Scorecard copied! Opening Peerlist Scroll... 📋");
                }).catch(() => {
                  navigator.clipboard.writeText(`${text} ${url}`).catch(() => {});
                  toast("Opening Peerlist Scroll... 🚀");
                });
              } else {
                navigator.clipboard.writeText(`${text} ${url}`).catch(() => {});
                toast("Opening Peerlist Scroll... 🚀");
              }
            };
          }

          function copyToClipboard(str) {
            if (navigator.clipboard && navigator.clipboard.writeText) {
              return navigator.clipboard
                .writeText(str)
                .catch(() => fallbackCopy(str));
            }
            fallbackCopy(str);
            return Promise.resolve();
          }
          function fallbackCopy(str) {
            const ta = document.createElement("textarea");
            ta.value = str;
            ta.style.position = "fixed";
            ta.style.opacity = "0";
            document.body.appendChild(ta);
            ta.select();
            try {
              document.execCommand("copy");
            } catch (e) {}
            document.body.removeChild(ta);
          }

          const copyBtn = document.getElementById("quizShareCopyBtn");
          if (copyBtn) {
            copyBtn.onclick = () => {
              copyToClipboard(url).then(() => {
                copyBtn.classList.add("copied");
                const copyIcon = copyBtn.querySelector(".icon-copy");
                const checkIcon = copyBtn.querySelector(".icon-check");
                const label = document.getElementById("quizShareCopyText");
                if (copyIcon) copyIcon.style.display = "none";
                if (checkIcon) checkIcon.style.display = "block";
                if (label) label.textContent = "Copied! ✓";
                toast("Link copied to clipboard! 📋");
                setTimeout(() => {
                  copyBtn.classList.remove("copied");
                  if (copyIcon) copyIcon.style.display = "block";
                  if (checkIcon) checkIcon.style.display = "none";
                  if (label) label.textContent = "Copy Link";
                }, 2400);
              });
            };
          }

          const closeBtn = document.getElementById("quizShareCloseBtn");
          if (closeBtn) {
            closeBtn.onclick = () => closeQuizShareDrawer();
          }
        }

        function toggleQuizShareDrawer() {
          const drawer = document.getElementById("quizShareDrawer");
          const footBtn = document.getElementById("quizFootShareBtn");
          if (!drawer) return;
          const willOpen = !drawer.classList.contains("open");
          if (willOpen) {
            drawer.classList.add("open");
            if (footBtn) footBtn.classList.add("active");
            setTimeout(() => {
              drawer.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }, 60);
          } else {
            drawer.classList.remove("open");
            if (footBtn) footBtn.classList.remove("active");
          }
        }

        function closeQuizShareDrawer() {
          const drawer = document.getElementById("quizShareDrawer");
          const footBtn = document.getElementById("quizFootShareBtn");
          if (drawer) drawer.classList.remove("open");
          if (footBtn) footBtn.classList.remove("active");
        }

        function renderSummary() {
          const total = activeQuestions.length;
          const pct = Math.round((score / total) * 100);
          if (liveScore) {
            liveScore.textContent = `Completed! Score: ${score} of ${total}`;
          }

          // Launch celebration confetti only when score > 0 (not all failed)
          if (score > 0) {
            Confetti.fire();
          }

          let headline = "Great Work!";
          let message =
            "You've got a solid grasp of these command line concepts.";
          if (pct === 100) {
            headline = "Perfect Score! 🌟";
            message =
              "Flawless run! You're navigating Linux like a senior DevOps engineer.";
          } else if (pct >= 80) {
            headline = "Excellent Score! 🚀";
            message =
              "Strong performance across real-world system and shell patterns.";
          } else if (pct < 60) {
            headline = "Keep Practicing! 💡";
            message =
              "Review the module lessons and run through the hands-on terminal tasks.";
          }

          const catName = (QUIZ_DATA[currentCategory] || QUIZ_DATA.m1).name;

          let html = `
      <div class="quiz-summary-view">
        <div class="quiz-summary-ring" style="--p:${pct}" data-score="${pct}%"></div>
        <h4>${headline}</h4>
        <p class="summary-msg">${message}</p>
        <div class="quiz-stats-row">
          <div class="quiz-stat-card">
            <strong>${score} / ${total}</strong>
            <span>Correct</span>
          </div>
          <div class="quiz-stat-card">
            <strong>${pct}%</strong>
            <span>Accuracy</span>
          </div>
        </div>
      </div>
    `;

          modalBody.innerHTML = html;

          setupQuizShareDrawer({
            score,
            total,
            pct,
            topic: catName,
          });

          if (quizBackTopicBtn) {
            quizBackTopicBtn.style.display = "inline-flex";
            quizBackTopicBtn.textContent = "← All Modules";
            quizBackTopicBtn.onclick = () => {
              closeQuizShareDrawer();
              showTopicSelect();
            };
          }

          if (footShareBtn) {
            footShareBtn.style.display = "inline-flex";
            footShareBtn.onclick = () => {
              toggleQuizShareDrawer();
            };
          }

          if (retakeBtn) {
            retakeBtn.style.display = "inline-flex";
            retakeBtn.onclick = () => {
              closeQuizShareDrawer();
              startQuiz(currentCategory);
            };
          }
          if (actionBtn) {
            actionBtn.disabled = false;
            actionBtn.classList.remove("ready");
            actionBtn.textContent = "Done";
            actionBtn.onclick = () => {
              closeQuizShareDrawer();
              closeQuizModal();
            };
          }
        }

        if (closeBtn) closeBtn.onclick = closeQuizModal;
        if (backdrop) backdrop.onclick = closeQuizModal;

        document.addEventListener("keydown", (e) => {
          if (overlay && overlay.classList.contains("open")) {
            if (e.key === "Escape") {
              e.preventDefault();
              closeQuizModal();
            } else if (!isChecked && ["1", "2", "3", "4"].includes(e.key)) {
              e.preventDefault();
              selectOption(parseInt(e.key, 10) - 1);
            } else if (
              !isChecked &&
              ["a", "b", "c", "d", "A", "B", "C", "D"].includes(e.key)
            ) {
              e.preventDefault();
              const idx = e.key.toLowerCase().charCodeAt(0) - 97;
              selectOption(idx);
            } else if (e.key === "Enter" && actionBtn && !actionBtn.disabled) {
              e.preventDefault();
              actionBtn.click();
            }
          }
        });

        if (takeQuizBtn) {
          takeQuizBtn.addEventListener("click", (e) => {
            e.preventDefault();
            openQuizModal();
          });
        }

        if (heroQuizStat) {
          heroQuizStat.addEventListener("click", () => openQuizModal());
        }

        const certRow =
          certQuizRow ||
          Array.from(document.querySelectorAll(".cert .row")).find((r) =>
            r.textContent.includes("Quizzes"),
          );
        if (certRow) {
          certRow.style.cursor = "pointer";
          certRow.title = "Click to take a quiz";
          certRow.addEventListener("click", () => openQuizModal());
        }
      })();
/* Collapsible Certificate requirements card (closed by default) */
      document.querySelectorAll(".cert .cert-head").forEach((b) =>
        b.addEventListener("click", () => {
          const c = b.closest(".cert");
          if (!c) return;
          const o = c.classList.toggle("open");
          b.setAttribute("aria-expanded", String(o));
        }),
      );
/* =========================================
         CERTIFICATE GENERATION LOGIC (course-complete.html)
         ========================================= */
      (function() {
        const certOverlay = document.getElementById("certOverlay");
        const certBackdrop = document.getElementById("certBackdrop");
        const certCloseBtn = document.getElementById("certModalCloseBtn");
        const certDoneBtn = document.getElementById("certDoneBtn");
        const generateCertBtn = document.getElementById("generateCertBtn");
        const viewCertBtn = document.getElementById("viewCertBtn");
        const heroCertStat = document.getElementById("heroCertStat");
        const certPrintBtn = document.getElementById("certPrintBtn");
        const certCopyLinkBtn = document.getElementById("certCopyLinkBtn");
        const certCtaWrap = document.getElementById("certCtaWrap");
        const certIssuedBox = document.getElementById("certIssuedBox");
        const certStatusBadge = document.getElementById("certStatusBadge");
        const certStatusHint = document.getElementById("certStatusHint");

        let certGenerated = false;

        function openCertModal() {
          if (!certOverlay) return;
          certOverlay.hidden = false;
          void certOverlay.offsetHeight; // force reflow for smooth transition
          certOverlay.classList.add("open");
          document.body.style.overflow = "hidden";
        }

        function closeCertModal() {
          if (!certOverlay) return;
          certOverlay.classList.remove("open");
          document.body.style.overflow = "";
          setTimeout(() => {
            if (!certOverlay.classList.contains("open")) {
              certOverlay.hidden = true;
            }
          }, 240);
        }

        function triggerConfetti() {
          const canvas = document.createElement("canvas");
          canvas.style.position = "fixed";
          canvas.style.inset = "0";
          canvas.style.width = "100%";
          canvas.style.height = "100%";
          canvas.style.pointerEvents = "none";
          canvas.style.zIndex = "99999";
          document.body.appendChild(canvas);

          const ctx = canvas.getContext("2d");
          let width = canvas.width = window.innerWidth;
          let height = canvas.height = window.innerHeight;

          const colors = ["#22c55e", "#10b981", "#38bdf8", "#f59e0b", "#ec4899", "#ffffff"];
          const pieces = [];
          for (let i = 0; i < 90; i++) {
            pieces.push({
              x: width * 0.5 + (Math.random() * 240 - 120),
              y: height * 0.45 + (Math.random() * 120 - 60),
              vx: (Math.random() - 0.5) * 16,
              vy: (Math.random() - 0.8) * 18,
              size: Math.random() * 8 + 5,
              color: colors[Math.floor(Math.random() * colors.length)],
              rot: Math.random() * 360,
              vRot: (Math.random() - 0.5) * 10,
              alpha: 1
            });
          }

          let start = performance.now();
          function anim(now) {
            const elapsed = now - start;
            ctx.clearRect(0, 0, width, height);

            pieces.forEach(p => {
              p.x += p.vx;
              p.y += p.vy;
              p.vy += 0.35;
              p.rot += p.vRot;
              if (elapsed > 1200) {
                p.alpha = Math.max(0, 1 - (elapsed - 1200) / 1200);
              }
              ctx.save();
              ctx.globalAlpha = p.alpha;
              ctx.translate(p.x, p.y);
              ctx.rotate(p.rot * Math.PI / 180);
              ctx.fillStyle = p.color;
              ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
              ctx.restore();
            });

            if (elapsed < 2400) {
              requestAnimationFrame(anim);
            } else {
              canvas.remove();
            }
          }
          requestAnimationFrame(anim);
        }

        function generateCertificate() {
          if (!certGenerated) {
            certGenerated = true;
            triggerConfetti();
            if (typeof toast === "function") {
              toast("Certificate generated · ESC-LNX-7DA3DE582A");
            }

            // Update Certificate Card UI
            const certHeadIssued = document.getElementById("certHeadIssued");
            if (certCtaWrap) certCtaWrap.hidden = true;
            if (certIssuedBox) certIssuedBox.hidden = false;
            if (generateCertBtn) generateCertBtn.style.display = "none";
            if (certHeadIssued) certHeadIssued.style.display = "inline-flex";
            if (certStatusBadge) {
              certStatusBadge.textContent = "Issued · Credential verified";
              certStatusBadge.style.color = "var(--lamp)";
            }
            if (certStatusHint) {
              certStatusHint.textContent = "Credential issued · ID: ESC-LNX-7DA3DE582A";
            }
          }
          openCertModal();
        }

        if (generateCertBtn) {
          generateCertBtn.addEventListener("click", (e) => {
            e.preventDefault();
            generateCertificate();
          });
        }

        if (viewCertBtn) {
          viewCertBtn.addEventListener("click", (e) => {
            e.preventDefault();
            openCertModal();
          });
        }

        if (heroCertStat) {
          heroCertStat.addEventListener("click", () => {
            generateCertificate();
          });
        }

        if (certCloseBtn) certCloseBtn.addEventListener("click", closeCertModal);
        if (certDoneBtn) certDoneBtn.addEventListener("click", closeCertModal);
        if (certBackdrop) certBackdrop.addEventListener("click", closeCertModal);

        if (certPrintBtn) {
          certPrintBtn.addEventListener("click", () => {
            window.print();
          });
        }

        if (certCopyLinkBtn) {
          certCopyLinkBtn.addEventListener("click", () => {
            const url = "https://escbash.com/certificates/ESC-LNX-7DA3DE582A";
            navigator.clipboard.writeText(url).then(() => {
              if (typeof toast === "function") {
                toast("Verification link copied to clipboard!");
              } else {
                alert("Verification link copied: " + url);
              }
            }).catch(() => {
              prompt("Certificate verification URL:", url);
            });
          });
        }

        window.addEventListener("keydown", (e) => {
          if (e.key === "Escape" && certOverlay && certOverlay.classList.contains("open")) {
            closeCertModal();
          }
        });
      })();
