(function () {
        var s = document.getElementById("stage");
        var vm = "",
          YS = 468,
          pc = 1,
          ts = 0,
          atB = 1,
          vT = 0,
          shown = "t1",
          xx = 0,
          yy = 0;
        function fit() {
          if (window.matchMedia("(max-width:1023px)").matches) {
            xx = 0;
            yy = 0;
            s.style.transform = "none";
            s.style.left = "0";
            s.style.top = "0";
            s.style.removeProperty("--x");
            s.style.removeProperty("--y");
            s.style.setProperty("--xl", "0px");
            document.body.classList.remove("fillbg");
            return;
          }
          var w = document.documentElement.clientWidth || innerWidth,
            h = document.documentElement.clientHeight || innerHeight;
          if (w <= 1280 && !s.classList.contains("c")) {
            s.classList.add("c");
          }
          var def = 1740 - w,
            x,
            xlGive = 0;
          if (def > 0) {
            var cMode = s.classList.contains("c"),
              base = cMode ? 1041 : 768,
              xCap = Math.max(0, base - (cMode ? 520 : 420));
            x = -Math.min(def, xCap);
            xlGive = Math.max(0, Math.min(def - xCap, 259));
          } else {
            x = Math.max(0, w - 1740);
          }
          var y = h - 904;
          xx = x;
          yy = y;
          s.style.setProperty("--x", x + "px");
          s.style.setProperty("--y", y + "px");
          s.style.setProperty("--xl", -xlGive + "px");
          document.body.classList.remove("fillbg");
          s.style.transform = "none";
          s.style.left = "0";
          s.style.top = "0";
          if (
            !s.classList.contains("nt") &&
            typeof $ === "function" &&
            typeof setD === "function"
          )
            setD(dd);
        }
        addEventListener("resize", fit);
        addEventListener("load", fit);
        if (window.ResizeObserver) {
          new ResizeObserver(fit).observe(document.documentElement);
        }
        addEventListener("orientationchange", function () {
          setTimeout(fit, 150);
        });
        fit();
        function setC(on) {
          var cp = document.getElementById("cp"),
            op = parseFloat(getComputedStyle(cp).opacity);
          if (on && !s.classList.contains("c") && op > 0.01) {
            s.classList.add("cpnodelay");
            clearTimeout(setC._t);
            setC._t = setTimeout(function () {
              s.classList.remove("cpnodelay");
            }, 400);
          }
          s.classList.toggle("c", on);
        }
        var tg = function () {
          setC(!s.classList.contains("c"));
        };
        document.getElementById("hb").onclick = tg;
        document.getElementById("cp").onclick = tg;
        s.classList.remove("n", "b");
        s.classList.add("c");
        var ni = document.querySelectorAll(".ni");
        function sel(i) {
          ni.forEach(function (e, j) {
            if (!e.classList.contains("nib")) e.classList.toggle("on", j == i);
          });
        }
        var tb = document.querySelectorAll(".tb"),
          cur = "t1",
          $ = function (i) {
            return document.getElementById(i);
          };
        var tn = 1,
          TY = { t1: "term" },
          KIND = ["term", "e", "d", "m"];
        var SV =
            '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">',
          IC = {
            term: '<svg width="16" height="12" viewBox="0 0 16 12"><path d="M1 1.5l5 4.5-5 4.5M8 11h6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
            e: SV + '<path d="M8 6l-6 6 6 6M16 6l6 6-6 6"/></svg>',
            m: SV + '<path d="M6 3h9l4 4v14H6zM9 12h7M9 16h7"/></svg>',
            d:
              SV +
              '<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg>',
          };
        function lbl(id) {
          var ty = TY[id];
          if (ty == "term")
            return "Terminal " + (Object.keys(TY).indexOf(id) + 1);
          var nm = { e: "Editor", d: "Data", m: "Notes" }[ty],
            same = Object.keys(TY).filter(function (k) {
              return TY[k] == ty;
            });
          return same.length > 1 ? nm + " " + (same.indexOf(id) + 1) : nm;
        }
        var XI =
          '<svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M2 2l8 8M10 2l-8 8"/></svg>';
        function paint() {
          var many = Object.keys(TY).length > 1;
          document.querySelectorAll("#tabs .tb").forEach(function (e) {
            var id = e.getAttribute("data-v");
            e.innerHTML =
              IC[TY[id]] +
              '<span class="lb2">' +
              lbl(id) +
              "</span>" +
              (many ? '<i class="cx" title="Close">' + XI + "</i>" : "");
          });
        }
        function viewNow(id) {
          cur = id;
          var ty = TY[id],
            isT = ty == "term";
          Array.prototype.slice.call(s.classList).forEach(function (c) {
            if (/^t\d+$/.test(c)) s.classList.remove(c);
          });
          ["d", "e", "m", "tx"].forEach(function (c) {
            s.classList.remove(c);
          });
          if (isT) {
            if (id != "t1") s.classList.add(id, "tx");
          } else s.classList.add(ty);
          document.querySelectorAll("#tabs .tb").forEach(function (e) {
            var on = e.getAttribute("data-v") == id;
            e.classList.toggle("on", on);
            if (on && e.scrollIntoView)
              e.scrollIntoView({ block: "nearest", inline: "nearest" });
          });
          document.querySelectorAll(".tx2").forEach(function (e) {
            e.classList.toggle("act", isT && e.id == id + "c");
          });
          sel(KIND.indexOf(ty));
          shown = id;
        }
        paint();
        var P =
            '<span class="r">root</span><span class="y">@escbash-lab</span>:~# ',
          C = '<i class="cur"></i>';
        var F = {
          "script.sh":
            '#!/bin/bash\n# Print a quick system report\n\necho "Host:   $(hostname)"\necho "Kernel: $(uname -r)"\necho "Uptime: $(uptime -p)"\n\nfor f in /etc/os-release /etc/hostname; do\n  echo "--- $f"\n  cat "$f"\ndone',
          "README.md":
            "# escbash lab\n\nPractice Linux on a clean Ubuntu 24.04 machine.\n\n## Quick start\n- Open Terminal 1\n- Run `bash script.sh`",
          "config.yaml":
            "lab:\n  image: ubuntu-24.04\n  timeout: 1h\n  user: root\n  tools:\n    - bash\n    - curl\n    - nginx",
        };
        function hl(t, n) {
          t = t.replace(/&/g, "&amp;").replace(/</g, "&lt;");
          if (/\.sh$/.test(n))
            return t.replace(
              /(#.*$)|("[^"]*")|\b(for|in|do|done|if|then|fi)\b/g,
              function (m, a, b, c) {
                return a
                  ? '<span class="hc">' + a + "</span>"
                  : b
                    ? '<span class="hs">' + b + "</span>"
                    : '<span class="hk">' + c + "</span>";
              },
            );
          if (/\.md$/.test(n))
            return t
              .replace(/^(#+ .*)$/, '<span class="hh">$1</span>')
              .replace(/`[^`]+`/g, '<span class="hs">$&</span>');
          return t.replace(
            /^(\s*-?\s*)([\w-]+)(:)/,
            '$1<span class="hv">$2</span>$3',
          );
        }
        function openF(n) {
          var L = F[n].split("\n"),
            K = Object.keys(F);
          $("ln").textContent = L.map(function (_, i) {
            return i + 1;
          }).join("\n");
          $("co").innerHTML = L.map(function (l) {
            return hl(l, n);
          }).join("\n");
          $("fl").innerHTML = K.map(function (k) {
            return (
              '<div class="fi' +
              (k == n ? " on" : "") +
              '" data-f="' +
              k +
              '">' +
              k +
              "</div>"
            );
          }).join("");
          $("sp").textContent =
            "Ln " +
            L.length +
            ", Col 1    Spaces: 2    UTF-8    LF    " +
            { sh: "Shell Script", md: "Markdown", yaml: "YAML" }[
              n.split(".").pop()
            ];
        }
        $("ed").onclick = function (e) {
          var f = e.target.getAttribute && e.target.getAttribute("data-f");
          if (f) openF(f);
        };
        openF("script.sh");
        var ta = $("ta"),
          D =
            "# Linux notes\n\nThings to remember from **lesson 1**.\n\n## Distributions\n- Ubuntu, Debian, CentOS, Red Hat\n- This course uses *Ubuntu*\n\n## Commands\n`uname -r` prints the kernel version.\n\n> The shell **is** the interface on a server.";
        try {
          D = localStorage.getItem("esc-notes") || D;
        } catch (e) {}
        ta.value = D;
        ta.oninput = function () {
          try {
            localStorage.setItem("esc-notes", ta.value);
          } catch (e) {}
        };
        var IA = [
            "AddRoleToInstanceProfile|Permissions management",
            "AddUserToGroup|Permissions management",
            "AttachGroupPolicy|Permissions management, Write",
            "AttachRolePolicy|Permissions management, Write",
            "AttachUserPolicy|Permissions management, Write",
            "CreateAccessKey|Write",
            "CreateGroup|Write",
            "CreateInstanceProfile|Write",
            "CreatePolicy|Permissions management, Write",
            "CreateRole|Write",
          ],
          AR =
            "only on: arn:aws:iam::*:user/escbash-lab-*,\narn:aws:iam::*:group/escbash-lab-*,\narn:aws:iam::*:role/escbash-lab-*,\narn:aws:iam::*:policy/escbash-lab-*,\narn:aws:iam::*:instance-profile/escbash-lab-*";
        $("il").innerHTML = IA.map(function (x) {
          x = x.split("|");
          return (
            '<div class="ir"><div><b>iam:' +
            x[0] +
            "</b><i>" +
            x[1] +
            "</i></div><pre>" +
            AR +
            "</pre></div>"
          );
        }).join("");
        ni.forEach(function (e, i) {
          if (e.classList.contains("nib")) return;
          e.title = [
            "New terminal",
            "New editor",
            "New data tab",
            "New notes tab",
          ][i];
          e.onclick = function () {
            addTab(KIND[i]);
          };
        });
        $("th").onclick = function () {
          s.classList.toggle("n");
        };
        var lab = { on: false, left: 3600 },
          labTick = null;
        function fmt(t) {
          var m = Math.floor(t / 60),
            r = t % 60;
          return (m < 10 ? "0" : "") + m + ":" + (r < 10 ? "0" : "") + r;
        }
        function labSet(on) {
          lab.on = on;
          clearInterval(labTick);
          var c = $("ck");
          if (on) {
            lab.left = 3600;
            labTick = setInterval(function () {
              lab.left--;
              if (lab.left <= 0) {
                labSet(false);
                return;
              }
              $("tmt").textContent = fmt(lab.left);
            }, 1000);
          } else {
            c.classList.remove("ran");
            ckClear(0);
            Array.prototype.forEach.call(
              c.querySelectorAll(".rw.open"),
              function (w) {
                w.classList.remove("open");
              },
            );
          }
          s.classList.toggle("lab", on);
          if (!on) s.classList.remove("u");
          $("tmr").classList.toggle("off", !on);
          $("tmt").textContent = fmt(lab.left);
          ckStatus();
          fitSx();
          if (typeof syncLabShell === "function") syncLabShell(on);
        }
        $("lab").onclick = function () {
          labSet(!lab.on);
        };
        labSet(false);

        var tbr = $("tbr"),
          tabs = $("tabs");
        var tDrag = null,
          tDragEndT = 0;
        tabs.addEventListener("pointerdown", function (e) {
          if (e.pointerType === "touch" || e.button !== 0) return;
          tDrag = {
            x: e.clientX,
            sl: tabs.scrollLeft,
            id: e.pointerId,
            moved: false,
          };
        });
        addEventListener(
          "pointermove",
          function (e) {
            if (!tDrag || e.pointerId !== tDrag.id) return;
            if (!(e.buttons & 1)) {
              tDragEnd();
              return;
            }
            var dx = e.clientX - tDrag.x;
            if (!tDrag.moved && Math.abs(dx) > 5) {
              tDrag.moved = true;
              tabs.classList.add("drag");
            }
            if (tDrag.moved) {
              tabs.scrollLeft = tDrag.sl - dx;
              e.preventDefault();
            }
          },
          { passive: false },
        );
        function tDragEnd() {
          if (!tDrag) return;
          if (tDrag.moved) tDragEndT = Date.now();
          tDrag = null;
          tabs.classList.remove("drag");
        }
        addEventListener("pointerup", tDragEnd);
        addEventListener("pointercancel", tDragEnd);
        addEventListener("blur", tDragEnd);
        tabs.addEventListener("click", function (e) {
          if (Date.now() - tDragEndT < 250) return;
          var c = e.target.closest(".tb");
          if (!c) return;
          var id = c.getAttribute("data-v");
          if (e.target.closest(".cx")) closeTab(id);
          else view(id);
        });
        tabs.addEventListener(
          "wheel",
          function (e) {
            if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
              tabs.scrollLeft += e.deltaY;
              e.preventDefault();
            }
          },
          { passive: false },
        );
        function addTab(ty) {
          if (Object.keys(TY).length >= 12) {
            view(cur);
            return;
          }
          tn++;
          var id = "t" + tn;
          TY[id] = ty;
          var c = document.createElement("div");
          c.className = "fl chip tb";
          c.setAttribute("data-v", id);
          tabs.appendChild(c);
          var x = document.createElement("div");
          x.id = id + "c";
          x.className = "tx2";
          $("tz").appendChild(x);
          if (ty == "term" && typeof mountTermTab === "function")
            mountTermTab(id, x);
          paint();
          view(id);
        }
        function closeTab(id) {
          var K = Object.keys(TY);
          if (K.length < 2) return;
          var i = K.indexOf(id);
          delete TY[id];
          if (typeof unmountTermTab === "function") unmountTermTab(id);
          var el = tabs.querySelector('[data-v="' + id + '"]');
          if (el) el.remove();
          var x = $(id + "c");
          if (x) x.remove();
          var R = Object.keys(TY);
          paint();
          view(cur == id ? R[Math.min(i, R.length - 1)] : cur);
        }
        var S1 = {
          t: "The shell",
          isShellIntro: true,
        };
        var SD = [
            {
              t: "Your first commands",
              p: [
                "A command is a word you type at the prompt, followed by optional options and arguments. Press <b>Enter</b> and the shell runs it.",
                "Start with three tiny commands that tell you who you are, which machine this is, and what time it is.",
              ],
              c:
                "whoami      # which user are you?\n" +
                "hostname    # what's this machine called?\n" +
                "date        # what time does it think it is?\n" +
                'echo hello  # print \"hello\" back at you',
              k: "Commands are case-sensitive. <code>whoami</code> works, <code>WHOAMI</code> does not.",
              cards: [
                [
                  "Anatomy of a command",
                  "A command, then <code>-options</code>, then arguments. For example, <code>ls -l /etc</code> lists <code>/etc</code> in long format.",
                ],
                [
                  "Getting help",
                  "Run <code>man ls</code> or <code>ls --help</code> to see what a command can do. Press <code>q</code> to leave a man page.",
                ],
                [
                  "Try it",
                  "Run <code>whoami</code>, <code>hostname</code> and <code>date</code> in Terminal 1, then use <code>echo</code> to print your own message.",
                ],
              ],
            },
            {
              t: "pwd, ls, and cat",
              p: [
                "Three commands cover most of what you do when you first land on a Linux machine: where am I, what is here, and what is inside this file.",
              ],
              c:
                "pwd         # print working directory\n" +
                "ls -a       # list all files, including hidden\n" +
                "cat /etc/hostname # print hostname\n" +
                'cat /etc/os-release | head -2 # view OS release info',
              k: "Run <code>pwd</code> whenever you feel lost. It always tells you where you are.",
              cards: [
                [
                  "pwd",
                  "Prints the working directory, the folder you are in right now. A fresh lab opens in <code>/root</code>.",
                ],
                [
                  "ls",
                  "Lists files and folders. Use <code>ls -l</code> for details and <code>ls -a</code> to include hidden files that start with a dot.",
                ],
                [
                  "cat",
                  "Prints a file to the screen. It is perfect for short files such as <code>/etc/os-release</code>.",
                ],
              ],
            },
            {
              t: "mkdir and cd",
              p: [
                "<code>mkdir</code> creates a folder and <code>cd</code> moves you into it. Together they let you build a tidy workspace.",
              ],
              k: "<code>cd</code> with no argument takes you home. <code>cd ..</code> goes up one level.",
            },
            {
              t: "Task: create a workspace",
              p: [
                "Time to practise. Use <code>mkdir</code> and <code>cd</code> in Terminal 1 to build your own workspace folder, then prove you are inside it.",
              ],
              c:
                "mkdir workspace # create folder\n" +
                "cd workspace    # move into folder\n" +
                "pwd             # confirm path ends in workspace",
              k: "You are done when <code>pwd</code> prints <code>/root/workspace</code>.",
              cards: [
                [
                  "1. Create the folder",
                  "Run <code>mkdir workspace</code>. Nothing is printed when it works.",
                ],
                [
                  "2. Move into it",
                  "Run <code>cd workspace</code>. The prompt now shows the new folder.",
                ],
                [
                  "3. Check your location",
                  "Run <code>pwd</code> and confirm the path ends in <code>workspace</code>.",
                ],
              ],
              ck: [
                [
                  "/root/workspace exists",
                  "Create it with <code>mkdir workspace</code> while you are in <code>/root</code>.",
                ],
                [
                  "Your shell is inside /root/workspace",
                  "Move in with <code>cd workspace</code>, then confirm with <code>pwd</code>.",
                ],
                [
                  "workspace is still empty",
                  "Leave it empty for now. <code>ls -A</code> should print nothing.",
                ],
              ],
            },
            {
              t: "Redirecting output with &gt;",
              p: [
                "The <code>&gt;</code> operator sends a command’s output into a file instead of the screen. Use <code>&gt;&gt;</code> to append.",
              ],
              k: "A single <code>&gt;</code> overwrites the file, so double-check before you use it.",
            },
            {
              t: "Quiz: redirecting output",
              p: [
                "Check what you just learned about redirection before the next task. Pass the quiz to move on. You can try again as often as you like.",
              ],
              quiz: "m",
            },
            {
              t: "Collect machine information",
              p: [
                "Create a folder called <code>/root/answers</code> and fill it with three files, one per question. Use <code>&gt;</code> to send each command\u2019s output into its file instead of the screen.",
                "<code>etc-count.txt</code> holds how many entries live in <code>/etc</code>. <code>root-hidden.txt</code> lists every entry in <code>/root</code>, hidden ones included, such as <code>.bashrc</code>. <code>etc-long.txt</code> holds a long listing of <code>/etc</code>.",
              ],
              k: "Save the output with <code>&gt;</code> so you can compare it later.",
              ck: [
                [
                  "/root/answers exists",
                  "Create the folder with <code>mkdir</code> and give it the full path, so it works from any directory.",
                ],
                [
                  "etc-count.txt records how many entries live in /etc",
                  "Pipe <code>ls /etc</code> into <code>wc -l</code> to count the lines, then redirect the number into the file with <code>&gt;</code>.",
                ],
                [
                  "root-hidden.txt lists the hidden entries in /root and includes .bashrc",
                  "Plain <code>ls</code> hides dotfiles. Use <code>ls -A</code> on <code>/root</code> and redirect the output into the file.",
                ],
                [
                  "etc-long.txt captures a long listing of /etc",
                  "The <code>-l</code> option gives the long format. List <code>/etc</code> with it and redirect into the file.",
                ],
                [
                  "/root/.bashrc exists on this machine",
                  "It ships with the image, so there is nothing to create. <code>ls -a /root</code> shows it.",
                ],
              ],
            },
            {
              t: "Prepare a working folder",
              p: [
                "Create a folder for the lab, move into it, and keep your scripts and notes there.",
              ],
              k: "Use <code>mkdir -p</code> to create nested folders in one go.",
            },
            {
              t: "Quizzes",
              p: [
                "Answer each quiz to finish this topic. Pass a quiz, then press Next quiz to continue. Use Previous to go back. You can try again as often as you like.",
              ],
              quiz: "f",
            },
          ],
          cir = document.querySelectorAll("#sb .cir"),
          stx = document.querySelectorAll("#sb .step"),
          dts = $("dts").children,
          step = 1;
        var KT = [
          "Lesson",
          "Lesson",
          "Lesson",
          "Lesson",
          "Task",
          "Lesson",
          "Quiz",
          "Task",
          "Lesson",
          "Quiz",
        ];
        function escAttr(str) {
          return String(str)
            .replace(/&/g, "&amp;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
        }
        function escHtmlText(str) {
          return String(str)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
        }
        function formatCodeLines(raw) {
          if (!raw) return "";
          var lines = raw.split("\n");
          return lines
            .map(function (line) {
              var hashIdx = line.indexOf("#");
              if (hashIdx !== -1) {
                var cmd = line.substring(0, hashIdx);
                var comment = line.substring(hashIdx);
                return (
                  '<span class="c-cmd">' +
                  escHtmlText(cmd) +
                  '</span><span class="c-comment">' +
                  escHtmlText(comment) +
                  "</span>"
                );
              }
              return '<span class="c-cmd">' + escHtmlText(line) + "</span>";
            })
            .join("\n");
        }
        function renderShellLesson() {
          return (
            '<h1 class="lesson-h1">The shell</h1>' +
            '<p class="lesson-p">The <b>shell</b> reads your commands and runs them. On Ubuntu it\u2019s called <b>bash</b>. When you land in a shell, it greets you with a prompt:</p>' +
            '<div class="code-card">' +
              '<div class="code-card-header">' +
                '<span class="code-card-label">BASH</span>' +
                '<div class="code-card-actions">' +
                  '<button type="button" class="code-card-btn copy-btn" data-copy="root@abc123:~#" title="Copy" aria-label="Copy"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2.5"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg></button>' +
                '</div>' +
              '</div>' +
              '<pre class="code-card-body"><code>root@abc123:~#</code></pre>' +
            '</div>' +
            '<p class="lesson-p">Read it left to right: <code class="code-pill">root</code> your user &middot; <code class="code-pill">abc123</code> the machine name &middot; <code class="code-pill">~</code> your current folder (shorthand for home) &middot; <code class="code-pill">#</code> the prompt symbol ( <code class="code-pill">#</code> for root, <code class="code-pill">$</code> for a regular user).</p>' +
            '<h2 class="lesson-h2">Safe read-only commands</h2>' +
            '<p class="lesson-p">These print information. Nothing to break, so try each one now.</p>' +
            '<div class="code-card">' +
              '<div class="code-card-header">' +
                '<span class="code-card-label">BASH</span>' +
                '<div class="code-card-actions">' +
                  '<button type="button" class="code-card-btn copy-btn" data-copy="whoami&#10;hostname&#10;date&#10;uname -a&#10;echo hello" title="Copy" aria-label="Copy"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2.5"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg></button>' +
                  '<button type="button" class="code-card-btn run-btn" data-cmd="whoami&#10;hostname&#10;date&#10;uname -a&#10;echo hello" title="Run in terminal" aria-label="Run in terminal"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3.5"></rect><line x1="12" y1="3" x2="12" y2="21"></line><polygon points="14.5 8.5 19 12 14.5 15.5" fill="currentColor"></polygon></svg></button>' +
                '</div>' +
              '</div>' +
              '<pre class="code-card-body"><code><span class="c-cmd">whoami</span>      <span class="c-comment"># which user are you?</span>\n' +
'<span class="c-cmd">hostname</span>    <span class="c-comment"># what\'s this machine called?</span>\n' +
'<span class="c-cmd">date</span>        <span class="c-comment"># what time does it think it is?</span>\n' +
'<span class="c-cmd">uname -a</span>    <span class="c-comment"># kernel and architecture details</span>\n' +
'<span class="c-cmd">echo hello</span>  <span class="c-comment"># print &quot;hello&quot; back at you</span></code></pre>' +
            '</div>' +
            '<h2 class="lesson-h2">Flags change what a command does</h2>' +
            '<p class="lesson-p">Most commands accept <b>flags</b> (also called options): single letters prefixed with <code class="code-pill">-</code> that change what gets printed.</p>' +
            '<div class="code-card">' +
              '<div class="code-card-header">' +
                '<span class="code-card-label">BASH</span>' +
                '<div class="code-card-actions">' +
                  '<button type="button" class="code-card-btn copy-btn" data-copy="uname&#10;uname -s&#10;uname -a" title="Copy" aria-label="Copy"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2.5"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg></button>' +
                  '<button type="button" class="code-card-btn run-btn" data-cmd="uname&#10;uname -s&#10;uname -a" title="Run in terminal" aria-label="Run in terminal"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3.5"></rect><line x1="12" y1="3" x2="12" y2="21"></line><polygon points="14.5 8.5 19 12 14.5 15.5" fill="currentColor"></polygon></svg></button>' +
                '</div>' +
              '</div>' +
              '<pre class="code-card-body"><code><span class="c-cmd">uname</span>       <span class="c-comment"># kernel name only (short)</span>\n' +
'<span class="c-cmd">uname -s</span>    <span class="c-comment"># same as above, explicit form</span>\n' +
'<span class="c-cmd">uname -a</span>    <span class="c-comment"># everything: kernel, host, version, arch</span></code></pre>' +
            '</div>' +
            '<p class="lesson-p">You\u2019ll meet flags on almost every command. When you don\u2019t know which one to use, <code class="code-pill">--help</code> after any command usually prints the list.</p>' +
            '<h2 class="lesson-h2">Keyboard shortcuts</h2>' +
            '<p class="lesson-p">Three keystrokes worth learning right now.</p>' +
            '<div class="kbd-list">' +
              '<div class="kbd-row">' +
                '<div class="kbd-keys"><kbd>Ctrl</kbd> <kbd>C</kbd></div>' +
                '<span class="kbd-desc">cancel whatever the shell is running</span>' +
              '</div>' +
              '<div class="kbd-row">' +
                '<div class="kbd-keys"><kbd>Ctrl</kbd> <kbd>L</kbd></div>' +
                '<span class="kbd-desc">wipe the screen (or type <code class="code-pill">clear</code>)</span>' +
              '</div>' +
              '<div class="kbd-row">' +
                '<div class="kbd-keys"><kbd>&uarr;</kbd></div>' +
                '<span class="kbd-desc">bring back your previous command. Keep pressing to walk further back through history.</span>' +
              '</div>' +
            '</div>' +
            '<p class="lesson-p lesson-bold-footer">Nobody retypes long commands. Everyone reaches for Up arrow.</p>'
          );
        }
        function rs(d) {
          if (d === S1 || d.t === "The shell" || d.isShellIntro) {
            return renderShellLesson();
          }
          var h = '<h1 class="lesson-h1">' + d.t + "</h1>";
          (d.p || []).forEach(function (x) {
            h += '<p class="lesson-p">' + x + "</p>";
          });
          if (d.quiz) {
            h += '<div id="qz"></div>';
            return h;
          }
          if (d.c) {
            var rawText = d.c.replace(/<[^>]+>/g, "");
            var lines = rawText.split("\n").filter(function (l) {
              return l.trim().length > 0;
            });
            var cmdOnly = lines
              .map(function (l) {
                return l.replace(/^root@[^:]+:[^#]*#\s*/, "").split("#")[0].trim();
              })
              .filter(Boolean)
              .join("\n");
            h +=
              '<div class="code-card">' +
                '<div class="code-card-header">' +
                  '<span class="code-card-label">BASH</span>' +
                  '<div class="code-card-actions">' +
                    '<button type="button" class="code-card-btn copy-btn" data-copy="' +
                    escAttr(cmdOnly) +
                    '" title="Copy" aria-label="Copy"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2.5"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg></button>' +
                    '<button type="button" class="code-card-btn run-btn" data-cmd="' +
                    escAttr(cmdOnly) +
                    '" title="Run in terminal" aria-label="Run in terminal"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3.5"></rect><line x1="12" y1="3" x2="12" y2="21"></line><polygon points="14.5 8.5 19 12 14.5 15.5" fill="currentColor"></polygon></svg></button>' +
                  '</div>' +
                "</div>" +
                '<pre class="code-card-body"><code>' +
                formatCodeLines(rawText.replace(/^root@[^:]+:[^#]*#\s*/gm, "")) +
                "</code></pre>" +
              "</div>";
          }
          (d.cards || []).forEach(function (c) {
            h +=
              '<h2 class="lesson-h2">' +
              c[0] +
              "</h2>" +
              '<p class="lesson-p">' +
              c[1] +
              "</p>";
          });
          if (d.k) {
            h +=
              '<p class="lesson-p lesson-bold-footer"><b>Key takeaway: </b>' +
              d.k +
              "</p>";
          }
          return h;
        }
        var CV =
          '<svg class="cv" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5l4 4 4-4"/></svg>';
        function ckTarget() {
          var c = $("ck");
          if (c.style.display != "block") return 0;
          var t = $("ckh").offsetHeight + $("cks").offsetHeight + 2;
          if (c.classList.contains("open")) {
            var hint = c.classList.contains("hint"),
              n = $("lbc").offsetHeight;
            Array.prototype.forEach.call($("ckl").children, function (w) {
              n += w.querySelector(".rt").offsetHeight + 1;
              if (hint && w.classList.contains("open"))
                n += w.querySelector(".rdi").offsetHeight;
            });
            var o = $("cksol");
            if (o.style.display == "block") {
              var m = o.querySelector(".slb").offsetHeight + 14;
              Array.prototype.forEach.call($("cksb").children, function (w) {
                m += w.querySelector(".srt").offsetHeight + 1;
                if (w.classList.contains("open"))
                  m += w.querySelector(".sri").offsetHeight;
              });
              n += m;
            }
            t += Math.min(n, 440);
          }
          return t;
        }
        function BH() {
          return vm == "vs" ? YS - 121 : 783 + yy;
        }
        function fitSx() {
          if (window.matchMedia("(max-width:1023px)").matches) return;
          var h = ckTarget();
          var nh = Math.max(120, BH() - (h ? h + 10 : 0)) + "px";
          $("sx").style.height = nh;
          if ($("s1")) $("s1").style.height = nh;
        }
        function ckUpdate(d) {
          var c = $("ck");
          if (!d || !d.ck) {
            c.style.display = "none";
            ckClear(1);
            s.classList.remove("tk");
            fitSx();
            return;
          }
          s.classList.add("tk");
          $("ckn").textContent = "ASSESSMENT";
          $("ckc").textContent = d.ck.length + " items";
          $("ckl").innerHTML = d.ck
            .map(function (r) {
              return (
                '<div class="rw"><div class="rt"><i class="o"></i><span>' +
                r[0] +
                "</span>" +
                CV +
                '</div><div class="rdw"><div class="rd"><div class="rdi">' +
                r[1] +
                "</div></div></div></div>"
              );
            })
            .join("");
          curKey = d.t;
          c.classList.remove("open", "ran", "hint");
          ckClear(1);
          ckTouch = 0;
          ckStatus();
          c.style.display = "block";
          c.style.animation = "none";
          void c.offsetWidth;
          c.style.animation = "";
          ckDefault();
          fitSx();
        }
        var STX = "Start the lab on the right to run the assessment.",
          ckTouch = 0;
        var ckMsg = "",
          att = 0,
          hintOn = 0,
          solOn = 0,
          lastFail = 0,
          lastPass = 0,
          curKey = "";
        var SOL = {
          "Task: create a workspace": [
            [
              "Start from your home directory, where a fresh lab opens:",
              "cd /root",
            ],
            ["Create the workspace folder:", "mkdir workspace"],
            ["Move into it:", "cd workspace"],
            ["Confirm your location. It should print /root/workspace:", "pwd"],
          ],
          "Collect machine information": [
            ["Create the answers folder:", "mkdir /root/answers"],
            [
              "Count the entries in /etc and save the number:",
              "ls /etc | wc -l &gt; /root/answers/etc-count.txt",
            ],
            [
              "Save every entry in /root, hidden ones included. This captures .bashrc:",
              "ls -A /root &gt; /root/answers/root-hidden.txt",
            ],
            [
              "Save a long listing of /etc:",
              "ls -l /etc &gt; /root/answers/etc-long.txt",
            ],
            ["Confirm .bashrc exists. It ships with the image:", "ls -a /root"],
          ],
        };
        function cfClose() {
          var m = $("cfm"),
            b = $("cfb");
          if (m) m.style.display = "none";
          if (b) b.style.display = "none";
        }
        function cfOpen() {
          $("cfn").style.display = hintOn ? "none" : "block";
          $("cfb").style.display = "block";
          $("cfm").style.display = "block";
        }
        function ckX() {
          var c = $("ck"),
            x = $("ckx");
          if (!x) return;
          var res = c.classList.contains("res"),
            f = res && lastFail,
            p = res && lastPass && !solOn,
            h = $("xh"),
            o = $("xs"),
            v = $("xv");
          h.style.display = f && !hintOn ? "flex" : "none";
          o.style.display = f && att >= 2 && !solOn ? "flex" : "none";
          v.style.display = p ? "flex" : "none";
          $("xl").textContent = p ? "Want to see the solution?" : "STUCK?";
          x.style.display =
            h.style.display == "flex" ||
            o.style.display == "flex" ||
            v.style.display == "flex"
              ? "flex"
              : "none";
        }
        var ckT = [],
          solT = [];
        function ckTimers() {
          (ckT || []).forEach(clearTimeout);
          (solT || []).forEach(clearTimeout);
          ckT = [];
          solT = [];
        }
        function ckClear(full) {
          var c = $("ck");
          ckTimers();
          subBusy = 0;
          c.classList.remove("res");
          ckMsg = "";
          lastFail = 0;
          lastPass = 0;
          Array.prototype.forEach.call(c.querySelectorAll(".rw"), function (w) {
            w.classList.remove("pass", "fail", "pend", "open");
          });
          if (full) {
            att = 0;
            hintOn = 0;
            solOn = 0;
            var o = $("cksol");
            o.style.display = "none";
            $("cksb").innerHTML = "";
            cfClose();
          }
          c.classList.toggle("hint", !!hintOn);
          var n = $("tnx");
          if (n) n.className = "bt nx";
          var b = $("ckb");
          if (b) {
            b.classList.remove("glow");
            var bt = b.querySelector(".ck-badge-text");
            if (bt) bt.textContent = "Pass the assessment to continue";
          }
          ckX();
        }
        function ckStatus() {
          var c = $("ck"),
            e = $("cksm") || $("cks");
          if (!e) return;
          if (ckMsg && c.classList.contains("res")) {
            e.textContent = ckMsg;
            return;
          }
          e.textContent = !lab.on
            ? STX
            : c.classList.contains("ran")
              ? "Commands run. Press Submit to check your work."
              : "Lab is running. Complete the steps in the terminal.";
        }
        function ckDefault() {}
        $("ckh").onclick = function () {
          ckTouch = 1;
          $("ck").classList.toggle("open");
          fitSx();
        };
        $("ckr").onclick = function (e) {
          var r = e.target.closest(".rt");
          if (r && $("ck").classList.contains("hint")) {
            r.parentNode.classList.toggle("open");
            fitSx();
          }
        };
        $("xh").onclick = function (e) {
          e.stopPropagation();
          hintOn = 1;
          $("ck").classList.add("hint");
          ckMsg = "Hint unlocked. Open a check below to read its hint.";
          ckStatus();
          ckX();
          fitSx();
        };
        $("xs").onclick = function (e) {
          e.stopPropagation();
          cfOpen();
        };
        $("cfk").onclick = cfClose;
        $("cfb").onclick = function (e) {
          e.stopPropagation();
        };
        $("cfm").onclick = function (e) {
          e.stopPropagation();
        };
        var CPI =
          '<svg class="i1" width="15" height="15" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="4.5" y="1.5" width="8" height="8" rx="1.5"/><path d="M9.5 12.5h-6a2 2 0 01-2-2v-6"/></svg><svg class="i2" width="15" height="15" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 7.5l3 3 6-7"/></svg>';
        var SV = CV.replace('class="cv"', 'class="svc"');
        function revealSol() {
          if (solOn) return;
          cfClose();
          var S = SOL[curKey] || [],
            o = $("cksol");
          solOn = 1;
          $("cksb").innerHTML = S.map(function (x, i) {
            return (
              '<div class="sr"><div class="srt"><i class="sno">' +
              (i + 1) +
              "</i><span>" +
              x[0].replace(/:$/, "") +
              "</span>" +
              SV +
              '</div><div class="srd"><div><div class="sri"><div class="scb"><div class="sch"><span>BASH</span><span class="cpy" title="Copy" data-c="' +
              x[1] +
              '">' +
              CPI +
              "</span></div><pre>" +
              x[1] +
              "</pre></div></div></div></div></div>"
            );
          }).join("");
          o.style.display = "block";
          ckMsg = "Solution unlocked. Open a step below to see its command.";
          ckStatus();
          ckX();
          fitSx();
          solT.push(
            setTimeout(function () {
              try {
                var r = $("ckr");
                r.scrollTo({
                  top:
                    r.scrollTop +
                    o.getBoundingClientRect().top -
                    r.getBoundingClientRect().top -
                    4,
                  behavior: "smooth",
                });
              } catch (e) {}
            }, 340),
          );
        }
        $("cfy").onclick = revealSol;
        $("xv").onclick = function (e) {
          e.stopPropagation();
          revealSol();
        };
        $("cksol").addEventListener("click", function (e) {
          var b = e.target.closest(".cpy");
          if (b) {
            try {
              navigator.clipboard.writeText(b.getAttribute("data-c"));
            } catch (x) {}
            b.classList.add("ok");
            setTimeout(function () {
              b.classList.remove("ok");
            }, 1300);
            return;
          }
          var r = e.target.closest(".srt");
          if (!r) return;
          var row = r.parentNode,
            was = row.classList.contains("open");
          Array.prototype.forEach.call($("cksb").children, function (w) {
            w.classList.remove("open");
          });
          if (!was) row.classList.add("open");
          fitSx();
          if (!was)
            solT.push(
              setTimeout(function () {
                try {
                  var c = $("ckr"),
                    k = s.getBoundingClientRect().width / 1740,
                    ov =
                      (row.getBoundingClientRect().bottom -
                        c.getBoundingClientRect().bottom) /
                        k +
                      10;
                  if (ov > 0) c.scrollBy({ top: ov, behavior: "smooth" });
                } catch (x) {}
              }, 330),
            );
        });
        $("cfib").src = $("cfia").src;
        var CFC = [
            "#ff4f9a",
            "#ff8a00",
            "#ffe600",
            "#00d0e6",
            "#a860d8",
            "#ff1d36",
            "#0a96e6",
          ],
          cfR = 0,
          CF_MODE = "random",
          CF_TYPES = ["burst", "cannons", "fireworks"],
          cfLast = "";
        /* CF_MODE: 'random' (rotates through all three) or 'burst' | 'cannons' | 'fireworks'. Preview any time with escConfetti('cannons') in the console. */
        function cfStar(g, r) {
          g.beginPath();
          for (var i = 0; i < 10; i++) {
            var a = -Math.PI / 2 + (i * Math.PI) / 5,
              d = i % 2 ? r * 0.45 : r;
            g[i ? "lineTo" : "moveTo"](Math.cos(a) * d, Math.sin(a) * d);
          }
          g.closePath();
          g.fill();
        }
        function cfMake(mode, cw, ch) {
          cw = cw || 1740;
          ch = ch || 904;
          var P = [],
            R = Math.random,
            pick = function (a) {
              return a[Math.floor(R() * a.length)];
            },
            i,
            j;
          if (mode == "burst") {
            /* TYPE 1: classic pop from the centre + paper rain, with the paper overlay art */
            for (i = 0; i < 135; i++) {
              var bu = i < 80,
                a = R() * 6.283,
                sp = bu ? 6 + R() * 11 : 0;
              P.push({
                x: bu ? cw / 2 : R() * cw,
                y: bu ? ch * 0.62 : -20 - R() * 320,
                vx: bu ? Math.cos(a) * sp : (R() - 0.5) * 1.4,
                vy: bu ? Math.sin(a) * sp - 9 : 1.5 + R() * 3,
                g: 0.17,
                d: 0.992,
                w: 7 + R() * 10,
                h: 4 + R() * 6,
                r: R() * 6.28,
                vr: (R() - 0.5) * 0.35,
                f: R() * 6.28,
                c: CFC[i % CFC.length],
                s: "r",
                t0: 0,
                life: 3200,
                fade: 1000,
              });
            }
          } else if (mode == "cannons") {
            /* TYPE 2: two party cannons fire from the bottom corners in three volleys */
            var V = [
              [0, 56],
              [320, 45],
              [640, 34],
            ];
            V.forEach(function (v) {
              [-1, 1].forEach(function (side) {
                for (j = 0; j < v[1]; j++) {
                  var ang =
                      ((side < 0 ? -58 : -122) * Math.PI) / 180 +
                      (R() - 0.5) * 0.7,
                    sp = 26 + R() * 16,
                    k = R();
                  P.push({
                    x: side < 0 ? -10 : cw + 10,
                    y: ch,
                    vx: Math.cos(ang) * sp,
                    vy: Math.sin(ang) * sp,
                    g: 0.3,
                    d: 0.982,
                    w: 9 + R() * 9,
                    h: 5 + R() * 6,
                    r: R() * 6.28,
                    vr: (R() - 0.5) * 0.4,
                    f: R() * 6.28,
                    c: pick(CFC),
                    s: k < 0.6 ? "r" : k < 0.82 ? "c" : "k",
                    t0: v[0],
                    life: 3000,
                    fade: 900,
                  });
                }
              });
            });
          } else {
            /* TYPE 3: fireworks, sparkle bursts of stars and glowing sparks high in the sky */
            var FC = [
              ["#ffd54a", "#fff3b0"],
              ["#ff4f9a", "#ffc2dd"],
              ["#2ee8b4", "#c4fff0"],
              ["#6aa8ff", "#cfe1ff"],
              ["#b57bff", "#e6d2ff"],
            ];
            for (i = 0; i < 5; i++) {
              var ox = 260 + R() * Math.max(200, cw - 520),
                oy = 150 + R() * 300,
                col = FC[(i + Math.floor(R() * 3)) % FC.length],
                t0 = i * 380 + (i ? R() * 140 : 0);
              for (j = 0; j < 58; j++) {
                var a2 = R() * 6.283,
                  sp2 = j % 3 ? 5 + R() * 7 : 12 + R() * 3;
                P.push({
                  x: ox,
                  y: oy,
                  vx: Math.cos(a2) * sp2,
                  vy: Math.sin(a2) * sp2,
                  g: 0.06,
                  d: 0.968,
                  w: j % 5 == 0 ? 9 + R() * 6 : 2.8,
                  h: 0,
                  r: R() * 6.28,
                  vr: (R() - 0.5) * 0.2,
                  f: 0,
                  c: j % 2 ? col[0] : col[1],
                  s: j % 5 == 0 ? "s" : "l",
                  t0: t0,
                  life: 1500 + R() * 700,
                  fade: 700,
                });
              }
            }
          }
          return P;
        }
        function confetti(mode) {
          if (matchMedia("(prefers-reduced-motion:reduce)").matches) return;
          if (!mode || CF_TYPES.indexOf(mode) < 0) {
            mode =
              CF_MODE != "random" && CF_TYPES.indexOf(CF_MODE) >= 0
                ? CF_MODE
                : CF_TYPES.filter(function (x) {
                    return x != cfLast;
                  })[Math.floor(Math.random() * (CF_TYPES.length - 1))];
          }
          cfLast = mode;
          var o = $("cf"),
            cv = $("cfc"),
            cw = Math.max(1740, Math.round(1740 + xx)),
            ch = Math.max(904, Math.round(904 + yy)),
            g = cv.getContext("2d");
          cv.width = cw;
          cv.height = ch;
          var P = cfMake(mode, cw, ch),
            t0 = performance.now(),
            end = 0;
          P.forEach(function (q) {
            end = Math.max(end, q.t0 + q.life);
          });
          cancelAnimationFrame(cfR);
          o.classList.remove("show");
          o.classList.toggle("img", mode == "burst");
          void o.offsetWidth;
          o.classList.add("show");
          function tick(t) {
            var e = t - t0;
            g.clearRect(0, 0, cw, ch);
            P.forEach(function (q) {
              if (e < q.t0) return;
              var age = e - q.t0;
              if (age > q.life) return;
              var al =
                age > q.life - q.fade
                  ? Math.max(0, (q.life - age) / q.fade)
                  : 1;
              q.vy += q.g;
              q.vx *= q.d;
              q.vy *= q.d;
              q.x +=
                q.vx + (q.s == "r" || q.s == "k" ? Math.sin(q.f) * 0.6 : 0);
              q.y += q.vy;
              q.r += q.vr;
              q.f += 0.08;
              g.save();
              g.globalAlpha = al;
              g.fillStyle = q.c;
              g.strokeStyle = q.c;
              if (q.s == "l") {
                g.lineWidth = q.w;
                g.lineCap = "round";
                g.beginPath();
                g.moveTo(q.x - q.vx * 2.2, q.y - q.vy * 2.2);
                g.lineTo(q.x, q.y);
                g.stroke();
              } else {
                g.translate(q.x, q.y);
                g.rotate(q.r);
                if (q.s == "r") {
                  g.scale(1, Math.cos(q.f));
                  g.fillRect(-q.w / 2, -q.h / 2, q.w, q.h);
                } else if (q.s == "c") {
                  g.beginPath();
                  g.arc(0, 0, q.h * 0.7, 0, 6.283);
                  g.fill();
                } else if (q.s == "k") {
                  g.lineWidth = 3;
                  g.lineCap = "round";
                  g.beginPath();
                  for (var u = -14; u <= 14; u += 2)
                    g[u == -14 ? "moveTo" : "lineTo"](
                      u,
                      Math.sin(u * 0.45 + q.f * 2) * 5,
                    );
                  g.stroke();
                } else if (q.s == "s") {
                  g.scale(Math.cos(q.f * 0.6) * 0.35 + 0.65, 1);
                  cfStar(g, q.w);
                }
              }
              g.restore();
            });
            if (e < end + 100) cfR = requestAnimationFrame(tick);
            else {
              g.clearRect(0, 0, cw, ch);
              o.classList.remove("show");
            }
          }
          cfR = requestAnimationFrame(tick);
        }
        function cfStop() {
          if (typeof cfR !== "undefined") cancelAnimationFrame(cfR);
          var o = $("cf");
          if (o) o.classList.remove("show");
          var cv = $("cfc");
          if (cv) {
            var g = cv.getContext("2d");
            if (g) g.clearRect(0, 0, cv.width || 1740, cv.height || 894);
          }
        }
        window.escConfetti = confetti;
        document.addEventListener("keydown", function (e) {
          var t = e.target;
          if (modalOpen()) return;
          if (
            e.key != "Enter" ||
            /^(INPUT|TEXTAREA)$/.test(t.tagName) ||
            !s.classList.contains("tk")
          )
            return;
          if (!(TY[cur] == "term")) return;
          var c = $("ck");
          if (lab.on && !c.classList.contains("ran")) {
            c.classList.add("ran");
            ckStatus();
            fitSx();
          }
        });
        /* ===== v12: quizzes page ===== */
        var QSETS = {
            m: [
              {
                t: "Quick check: running the same redirect twice",
                q: "You run <code>ls /etc &gt; list.txt</code> twice in a row. What does <code>list.txt</code> contain afterwards?",
                o: [
                  "The text <code>ls /etc</code>",
                  "Two copies of the listing, one after the other",
                  "An empty file, because the second run clears the first",
                  "Only the listing from the second run",
                ],
                a: 3,
                e: "A single <code>&gt;</code> overwrites the file every time, so only the output of the second run is left. Use <code>&gt;&gt;</code> to append instead.",
                h: "Think about what a single <code>&gt;</code> does when the file already exists. The key takeaway on the redirecting page covers it.",
              },
              {
                t: "Quick check: adding to a file",
                q: "Which operator adds a command\u2019s output to the end of an existing file without erasing what is already in it?",
                o: [
                  "<code>&gt;</code>",
                  "<code>|</code>",
                  "<code>&gt;&gt;</code>",
                  "<code>&lt;</code>",
                ],
                a: 2,
                e: "<code>&gt;&gt;</code> appends the output to the end of the file. A single <code>&gt;</code> would replace the contents.",
                h: "One of these doubles the arrow. Think about which one adds to the file instead of replacing it.",
              },
              {
                t: "Quick check: saving the date to a file",
                q: "You want to save the output of <code>date</code> into <code>today.txt</code> instead of printing it on screen. Which command does that?",
                o: [
                  "<code>date &lt; today.txt</code>",
                  "<code>date &gt; today.txt</code>",
                  "<code>today.txt &gt; date</code>",
                  "<code>echo date today.txt</code>",
                ],
                a: 1,
                e: "<code>date &gt; today.txt</code> sends the output of <code>date</code> into the file. The command comes first, then the operator, then the file name.",
                h: "The command goes on the left. The arrow points toward the file that receives the output.",
              },
            ],
            f: [
              {
                t: "Quick check: what kernel is running?",
                q: "Which command prints the release of the Linux kernel that is running right now?",
                o: [
                  "<code>whoami</code>",
                  "<code>hostname</code>",
                  "<code>uname -r</code>",
                  "<code>pwd</code>",
                ],
                a: 2,
                e: "<code>uname -r</code> prints the running kernel release.",
                h: "Look for the command that prints system information. Its <code>-r</code> flag asks for the release.",
              },
              {
                t: "Scenario: logging into an unfamiliar server",
                q: "You just logged into a server you have never seen. Which set of commands shows who you are, where you are and what is here without changing anything?",
                o: [
                  "<code>rm -rf *</code> then <code>ls</code>",
                  "<code>whoami</code>, <code>pwd</code> then <code>ls</code>",
                  "<code>mkdir test</code>, <code>cd test</code> then <code>pwd</code>",
                  "<code>echo hi &gt; notes.txt</code> then <code>cat notes.txt</code>",
                ],
                a: 1,
                e: "<code>whoami</code>, <code>pwd</code> and <code>ls</code> only read information. Always look around before you change anything.",
                h: "Three of these sets create or delete something. Pick the set where every command only reads.",
              },
            ],
          },
          QST = {
            m: { done: 0, cur: 0, sel: -1, st: "", tm: 0, cel: 0 },
            f: { done: 0, cur: 0, sel: -1, st: "", tm: 0, cel: 0 },
          },
          QK = "f",
          QD = QSETS.f,
          qz = QST.f;
        function qzBind(n) {
          var k = SD[n - 2] && SD[n - 2].quiz;
          if (k && QSETS[k]) {
            QK = k;
            QD = QSETS[k];
            qz = QST[k];
          }
        }
        function qzTile() {
          var e = $("qzt");
          if (!e) return;
          var d = 0,
            t = 0,
            k;
          for (k in QSETS) {
            t++;
            if (QST[k].done >= QSETS[k].length) d++;
          }
          e.textContent = d + "/" + t;
        }
        function qzOn() {
          return !!$("qz") && !!SD[step - 2] && !!SD[step - 2].quiz;
        }
        function qzMeta() {
          var q = $("qz");
          if (!q) return;
          var N = QD.length,
            p = q.querySelector(".qp");
          if (p) p.textContent = qz.done + " of " + N + " passed";
          Array.prototype.forEach.call(
            q.querySelectorAll(".qbar i"),
            function (e, i) {
              e.className = i < qz.done ? "on" : "";
            },
          );
        }
        function qzPaint() {
          var q = $("qz");
          if (!q) return;
          var os = q.querySelectorAll(".qo"),
            f = $("qf"),
            b = $("qcb");
          if (!os.length || !f || !b) return;
          Array.prototype.forEach.call(os, function (o, i) {
            var on = i == qz.sel;
            o.className =
              "qo" +
              (on
                ? qz.st == "ok"
                  ? " ok"
                  : qz.st == "bad"
                    ? " bad"
                    : " sel"
                : "") +
              (qz.st == "ok" ? " lock" : "");
            o.setAttribute("aria-checked", on ? "true" : "false");
          });
          var d = QD[qz.cur];
          if (qz.st == "ok") {
            f.className = "qf ok";
            f.innerHTML = "<b>Correct.</b> " + d.e;
          } else if (qz.st == "bad") {
            f.className = "qf bad";
            f.innerHTML = "<b>Not quite.</b> " + d.h;
          } else {
            f.className = "qf";
            f.innerHTML = "";
          }
          if (qz.st == "ok") {
            var last = qz.cur >= QD.length - 1,
              fin = QK == "f";
            b.setAttribute("data-act", !last ? "next" : fin ? "fin" : "cont");
            b.textContent = !last ? "Next quiz \u2192" : "Finish quiz";
            b.className = "qbt on";
          } else {
            b.setAttribute("data-act", "chk");
            b.textContent = "Check answer";
            b.className = "qbt" + (qz.sel >= 0 ? " on" : "");
          }
          b.style.display = "flex";
        }
        function qzRender() {
          var q = $("qz");
          if (!q) return;
          var N = QD.length,
            h = "",
            i;
          if (qz.cur >= N) qz.cur = N - 1;
          if (qz.cur < qz.done) {
            qz.sel = QD[qz.cur].a;
            qz.st = "ok";
          } else if (qz.st == "ok") {
            qz.sel = -1;
            qz.st = "";
          }
          h +=
            '<div class="qh"><span>' +
            "Quiz " +
            (qz.cur + 1) +
            " of " +
            N +
            '</span><span class="qp">' +
            qz.done +
            " of " +
            N +
            ' passed</span></div><div class="qbar">';
          for (i = 0; i < N; i++)
            h += "<i" + (i < qz.done ? ' class="on"' : "") + "></i>";
          h += "</div>";
          var d = QD[qz.cur];
          h +=
            '<div class="qc"><div class="qn">' +
            d.t +
            '</div><div class="qq">' +
            d.q +
            '</div><div class="qos" role="radiogroup">' +
            d.o
              .map(function (o, j) {
                return (
                  '<div class="qo" role="radio" aria-checked="false" data-i="' +
                  j +
                  '"><i class="qr"></i><span>' +
                  o +
                  "</span></div>"
                );
              })
              .join("") +
            '</div><div class="qf" id="qf"></div><div class="qa">' +
            (qz.cur > 0
              ? '<span class="qbt sec" data-act="prev">\u2190 Previous</span>'
              : "") +
            '<span class="qbt" id="qcb" data-act="chk">Check answer</span></div></div>';
          q.innerHTML = h;
          qzTile();
          qzPaint();
        }
        function qzGo(i) {
          qz.cur = i;
          qz.sel = -1;
          qz.st = "";
          qzRender();
          var x = $("sx");
          if (x) x.scrollTo({ top: 0 });
        }
        function qzFinish() {
          cfStop();
          qz.cel = 1;
          if (QK != "f") return;
          if (lab.on) labSet(false);
          $("lcm").classList.add("show");
        }
        $("sx").addEventListener("click", function (e) {
          var o = e.target.closest("#qz .qo"),
            b = e.target.closest("#qz .qbt");
          if (o) {
            if (qz.st == "ok") return;
            qz.sel = +o.getAttribute("data-i");
            qz.st = "";
            qzPaint();
            return;
          }
          if (!b) return;
          var a = b.getAttribute("data-act");
          if (a == "chk") {
            if (qz.sel < 0 || qz.st) return;
            if (qz.sel == QD[qz.cur].a) {
              qz.st = "ok";
              qz.done = Math.max(qz.done, qz.cur + 1);
              qzMeta();
              qzTile();
              qzPaint();
              if (qz.done >= QD.length) confetti();
            } else {
              qz.st = "bad";
              qzPaint();
            }
            return;
          }
          if (a == "prev") {
            qzGo(qz.cur - 1);
            return;
          }
          if (a == "next") {
            qzGo(qz.cur + 1);
            return;
          }
          if (a == "fin") {
            cfStop();
            qzFinish();
            return;
          }
          if (a == "cont") {
            cfStop();
            if (step < 10) go(step + 1);
          }
        });
        function lcHide() {
          $("lcm").classList.remove("show");
        }
        $("lcn").onclick = lcHide;
        $("lch").onclick = lcHide;
        $("lcl").onclick = function () {
          lcHide();
          for (var k in QST) {
            clearTimeout(QST[k].tm);
            QST[k].done = 0;
            QST[k].cur = 0;
            QST[k].sel = -1;
            QST[k].st = "";
            QST[k].cel = 0;
          }
          qzTile();
          go(1);
        };
        var qAuto = 0,
          qPrev = "";
        function go(n) {
          step = n;
          var isQ = !!(SD[n - 2] && SD[n - 2].quiz);
          qzBind(n);
          if (isQ) {
            if (!qAuto && want != "vl") {
              qAuto = 1;
              qPrev = want || "";
              setMode("vl");
            }
          } else if (qAuto) {
            qAuto = 0;
            if (want == "vl") setMode(qPrev);
          }

          cir.forEach(function (e, i) {
            var a = i + 1 == n,
              d = i + 1 < n;
            e.style.borderColor = a || d ? "var(--lamp)" : "var(--cirbd)";
            e.style.background = d ? "var(--lamp)" : "var(--cirbg)";
            e.style.boxShadow = a
              ? "0 0 8px color-mix(in srgb,var(--lamp) 45%,transparent)"
              : "none";
          });
          stx.forEach(function (e, i) {
            e.style.color = i + 1 == n ? "var(--lamp)" : "var(--ink)";
            e.style.fontWeight = i + 1 == n ? 600 : 500;
          });
          for (var i = 0; i < dts.length; i++) {
            dts[i].classList.toggle("done", i + 1 < n);
            dts[i].classList.toggle("cur", i + 1 == n);
          }
          $("sn").textContent = n;
          $("styp").textContent = KT[n - 1].toUpperCase();
          $("stepl").setAttribute("data-type", KT[n - 1].toLowerCase());
          var fl = n > 1 || vm == "vs" || vm == "vl";
          $("s1").style.display = fl ? "none" : "block";
          var x = $("sx");
          x.style.display = fl ? "block" : "none";
          if (fl) {
            x.innerHTML = rs(n == 1 ? S1 : SD[n - 2]);
            qzRender();
            x.scrollTop = 0;
            x.style.animation = "none";
            void x.offsetWidth;
            x.style.animation = "";
          } else if ($("s1")) {
            $("s1").scrollTop = 0;
          }
          ckUpdate(n > 1 ? SD[n - 2] : null);
          var bp = $("bp"),
            bn = $("bn"),
            off = n == 1,
            end = n == 10;
          bp.style.opacity = 1;
          bp.classList.toggle("dis", off);
          if (!SD[n - 2] || !SD[n - 2].ck) {
            bp.style.background = "var(--lamp)";
            bp.style.boxShadow =
              "inset 0 0 0 1px color-mix(in srgb,var(--lamp) 78%,var(--ink))";
            bp.style.color = "var(--on-lamp)";
          } else {
            bp.style.background = "";
            bp.style.boxShadow = "";
            bp.style.color = "";
          }
          bp.style.cursor = off ? "default" : "pointer";
          bp.querySelector("path").setAttribute("stroke", "currentColor");
          bn.style.opacity = 1;
          bn.classList.toggle("dis", end);
          bn.style.cursor = end ? "default" : "pointer";
        }
        $("bp").onclick = function () {
          if (step > 1) go(step - 1);
        };
        var CMI = {
            ok: '<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
            fail: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
            busy: "",
          },
          subBusy = 0;
        var cmT = 0;
        function modalOpen() {
          return (
            $("cm").classList.contains("show") ||
            $("cfm").style.display == "block" ||
            $("lcm").classList.contains("show")
          );
        }
        function cmShow(st, t, d) {
          var b = $("cmb");
          b.className = "cmb";
          void b.offsetWidth;
          b.className = "cmb" + (st == "busy" ? "" : " " + st);
          $("cms").innerHTML = CMI[st];
          $("cmt").textContent = t;
          $("cmd").textContent = d;
          $("cm").classList.add("show");
        }
        function cmHide() {
          $("cm").classList.remove("show");
        }
        document.addEventListener(
          "keydown",
          function (e) {
            if (modalOpen()) {
              e.preventDefault();
              e.stopPropagation();
              return;
            }
          },
          true,
        );
        $("cm").addEventListener("click", function (e) {
          e.stopPropagation();
        });
        $("cm").addEventListener("contextmenu", function (e) {
          e.preventDefault();
        });
        $("tsb").onclick = function () {
          if (subBusy) return;
          subBusy = 1;
          var c = $("ck"),
            ran = c.classList.contains("ran"),
            checks =
              lab.on && ran && typeof evalTaskChecks === "function"
                ? evalTaskChecks(curKey)
                : null,
            pass = lab.on && ran && (checks ? checks.every(Boolean) : true),
            why = !lab.on
              ? "The lab is not running. Start the lab, complete the steps, then submit again."
              : !ran
                ? "No terminal activity found yet. Run the commands in the terminal, then submit again."
                : checks && !pass
                  ? "Some checks did not pass yet. Open a failed check below for details."
                  : "";
          cmShow(
            "busy",
            "Checking your submission…",
            "Running the assessment on your lab machine. Please wait.",
          );
          setTimeout(function () {
            var rows = c.querySelectorAll(".rw");
            Array.prototype.forEach.call(rows, function (w) {
              w.classList.remove("pass", "fail", "pend");
            });
            c.classList.add("res", "open");
            att++;
            lastFail = !pass;
            lastPass = pass;
            ckTouch = 1;
            fitSx();
            var h = document.querySelector("#tf .hint");
            cmShow(
              pass ? "ok" : "fail",
              pass ? "Assessment passed" : "Assessment not passed",
              pass ? "Great work. Your submission met every check." : why,
            );
            setTimeout(function () {
              cmHide();
              Array.prototype.forEach.call(rows, function (w, idx) {
                var ok = checks ? !!checks[idx] : pass;
                w.classList.add(ok ? "pass" : "fail");
              });
              if (pass) c.classList.add("hint");
              ckMsg = pass
                ? "All checks passed. You can continue to the next step."
                : hintOn
                  ? why + " Open a check below to read its hint."
                  : why;
              ckStatus();
              ckX();
              fitSx();
              var b = $("ckb");
              if (b) {
                var bt = b.querySelector(".ck-badge-text");
                if (pass) {
                  b.classList.add("glow");
                  if (bt) bt.textContent = "Assessment passed";
                } else {
                  b.classList.remove("glow");
                  if (bt) bt.textContent = "Pass the assessment to continue";
                }
              }
              if (pass) {
                $("tnx").className = "bt sb2";
                confetti();
              }
              subBusy = 0;
            }, 500);
          }, 2000);
        };

        $("tnx").onclick = function () {
          if (this.classList.contains("sb2") && step < 10) go(step + 1);
        };
        $("bw").onclick = function () {
          if (lab.on) s.classList.toggle("u");
        };
        var nib = $("nib");
        if (nib)
          nib.onclick = function () {
            if (lab.on) s.classList.toggle("u");
          };
        var wasC = 0;
        $("ai").onclick = function () {
          var o = s.classList.toggle("b");
          if (o) {
            wasC = s.classList.contains("c");
            setC(true);
          } else if (!wasC) setC(false);
        };
        $("ax").onclick = function () {
          s.classList.remove("b");
          if (!wasC) setC(false);
        };
        function sendA() {
          var q = $("aq"),
            t = q.value.trim();
          if (!t) return;
          var m = $("am"),
            u = document.createElement("div"),
            r = document.createElement("div");
          u.className = "um";
          u.textContent = t;
          r.className = "bm";
          r.textContent = "escbee isn\u2019t connected in this preview.";
          m.appendChild(u);
          m.appendChild(r);
          q.value = "";
          m.scrollTop = m.scrollHeight;
        }
        $("as").onclick = sendA;
        $("aq").onkeydown = function (e) {
          if (e.key == "Enter") sendA();
        };
        $("ux").onclick = function () {
          s.classList.remove("u");
        };
        $("uo").onclick = function () {
          try {
            window.open(
              "https://vm-2nrq6nz8.labs.escbash.com" + $("up").value,
              "_blank",
              "noopener",
            );
          } catch (e) {}
        };
        $("uc").onclick = function () {
          try {
            navigator.clipboard.writeText(
              "https://vm-2nrq6nz8.labs.escbash.com" + $("up").value,
            );
          } catch (e) {}
        };
        $("bn").onclick = function () {
          if (step < 10) go(step + 1);
        };
        cir.forEach(function (e, i) {
          e.onclick = function () {
            go(i + 1);
          };
        });
        stx.forEach(function (e, i) {
          e.onclick = function () {
            go(i + 1);
          };
        });
        go(1);

        var dd = 0,
          dg = 0,
          sx0 = 0,
          d0 = 0,
          rz = $("rs");
        function lim() {
          var v = s.classList.contains("c") ? 1041 : 768;
          if (vm == "vs") return [v + xx, v + xx];
          if (vm == "vl") {
            v += xx - (s.classList.contains("b") ? 320 : 0);
            return [v, v];
          }
          if (vm == "vt") return [0, 0];
          var b = s.classList.contains("c") ? 1041 : 768;
          if (s.classList.contains("b")) b -= 320;
          var lo = -70;
          return [lo, Math.max(lo, b - 580)];
        }
        function setD(v) {
          var l = lim();
          dd = Math.max(l[0], Math.min(l[1], v));
          s.style.setProperty("--d", dd + "px");
          if ($("pg")) $("pg").style.opacity = dd < -25 ? 0 : 1;
        }
        rz.addEventListener("pointerdown", function (e) {
          dg = 1;
          sx0 = e.clientX;
          d0 = dd;
          s.classList.add("dr");
          rz.setPointerCapture(e.pointerId);
          e.preventDefault();
        });
        rz.addEventListener("pointermove", function (e) {
          if (dg) setD(d0 + (e.clientX - sx0));
        });
        function dup() {
          dg = 0;
          s.classList.remove("dr");
        }
        rz.addEventListener("pointerup", dup);
        rz.addEventListener("pointercancel", dup);
        rz.addEventListener("dblclick", function () {
          setD(0);
        });
        new MutationObserver(function () {
          setD(dd);
          tsFit();
          var nb = $("nib");
          if (nb) nb.classList.toggle("on", s.classList.contains("u"));
        }).observe(s, { attributes: true, attributeFilter: ["class"] });
        setD(0);
        function getSavedTheme() {
          try {
            var v = localStorage.getItem("linux_lighthouse_theme");
            if (v === "light" || v === "dark") return v;
          } catch (e) {}
          return null;
        }
        var darkMQ =
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)");
        function resolveTheme() {
          return getSavedTheme() || (darkMQ && darkMQ.matches ? "dark" : "light");
        }
        var T = resolveTheme();
        function applyThemeClasses(t) {
          T = t === "light" ? "light" : "dark";
          s.classList.toggle("lt", T === "light");
          document.body.classList.toggle("lt", T === "light");
          var mt2 = $("mtheme2");
          if (mt2)
            mt2.setAttribute(
              "aria-label",
              T === "light" ? "Switch to dark theme" : "Switch to light theme",
            );
        }
        function theme(t, persist) {
          applyThemeClasses(t);
          document.documentElement.setAttribute("data-theme", T);
          if (persist !== false) {
            try {
              localStorage.setItem("linux_lighthouse_theme", T);
            } catch (e) {}
          }
        }
        document.getElementById("tt").onclick = function () {
          theme(T === "light" ? "dark" : "light", true);
          ckDefault();
        };
        if (getSavedTheme()) {
          theme(T, false);
        } else {
          applyThemeClasses(T);
        }
        window.addEventListener("storage", function (e) {
          if (e.key !== "linux_lighthouse_theme") return;
          if (e.newValue === "light" || e.newValue === "dark") {
            theme(e.newValue, false);
          } else {
            document.documentElement.removeAttribute("data-theme");
            applyThemeClasses(resolveTheme());
          }
        });
        if (darkMQ && darkMQ.addEventListener) {
          darkMQ.addEventListener("change", function () {
            if (!getSavedTheme()) applyThemeClasses(resolveTheme());
          });
        }
        var want = "",
          mxT = 0;
        function setMode(m) {
          if (m == want) return;
          want = m;
          $("lm0").classList.toggle("on", m == "vl");
          $("lm1").classList.toggle("on", m == "vt");
          $("lm2").classList.toggle("on", !m);
          $("lm3").classList.toggle("on", m == "vs");
          clearTimeout(mxT);
          s.classList.add("mx");
          mxT = setTimeout(function () {
            s.classList.add("nt");
            vm = m;
            s.classList.remove("vt", "vs", "vl");
            if (m) s.classList.add(m);
            fit();
            setD(0);
            var lc = $("lc"),
              aiBtn = $("ai"),
              rgEl = $("rg");
            if (m == "vt") {
              rgEl.insertBefore(lc, rgEl.firstChild);
            } else {
              $("hd").appendChild(lc);
            }
            if (aiBtn) {
              if (m == "vs") {
                $("hd").appendChild(aiBtn);
              } else if (rgEl && aiBtn.parentNode !== rgEl) {
                rgEl.appendChild(aiBtn);
              }
            }
            go(step);
            fitSx();
            tsFit();
            void s.offsetWidth;
            s.classList.remove("nt");
            void s.offsetWidth;
            s.classList.remove("mx");
          }, 130);
        }
        $("lm1").onclick = function () {
          setMode("vt");
        };
        $("lm2").onclick = function () {
          setMode("");
        };
        $("lm3").onclick = function () {
          setMode("vs");
        };
        $("lm0").onclick = function () {
          setMode("vl");
        };
        $("vb").onclick = tg;
        $("lbs").onclick = function () {
          labSet(true);
        };
        function view(id) {
          if (id == shown && !vT) {
            cur = id;
            return;
          }
          cur = id;
          document.querySelectorAll("#tabs .tb").forEach(function (e) {
            var on = e.getAttribute("data-v") == id;
            e.classList.toggle("on", on);
            if (on && tabs) {
              var l = e.offsetLeft,
                r = l + e.offsetWidth;
              if (l < tabs.scrollLeft) tabs.scrollLeft = l;
              else if (r > tabs.scrollLeft + tabs.clientWidth)
                tabs.scrollLeft = r - tabs.clientWidth;
            }
          });
          clearTimeout(vT);
          s.classList.add("vf");
          vT = setTimeout(function () {
            vT = 0;
            viewNow(id);
            tsFit();
            void s.offsetWidth;
            requestAnimationFrame(function () {
              if (!vT) {
                s.classList.remove("vf");
                if (
                  !window.matchMedia("(max-width:1023px)").matches &&
                  typeof focusActiveTerm === "function"
                )
                  focusActiveTerm();
              }
            });
          }, 190);
        }
        /* ===== Interactive Ubuntu Terminal Engine ===== */
        var nodes = {},
          termSessions = {};
        function nowStamp() {
          return "Oct 30 10:42";
        }
        function makeInitialFS() {
          var ts = nowStamp(),
            n = {};
          function dir(p) {
            n[p] = { type: "dir", mode: "drwxr-xr-x", mtime: ts };
          }
          function file(p, c, mode) {
            n[p] = {
              type: "file",
              content: c,
              mode: mode || "-rw-r--r--",
              mtime: ts,
            };
          }
          [
            "/",
            "/bin",
            "/etc",
            "/etc/ssl",
            "/etc/systemd",
            "/home",
            "/root",
            "/tmp",
            "/usr",
            "/usr/bin",
            "/var",
            "/var/log",
          ].forEach(dir);
          file(
            "/root/.bashrc",
            '# ~/.bashrc: executed by bash(1) for non-login shells.\nexport PS1="\\u@\\h:\\w\\$ "\nalias ll="ls -alF"\n',
          );
          file(
            "/root/.profile",
            '# ~/.profile: executed by Bourne-compatible login shells.\nPATH="$HOME/bin:$PATH"\n',
          );
          file("/root/.bash_history", "whoami\npwd\nls -a\n");
          file("/etc/hostname", "escbash-lab\n");
          file(
            "/etc/os-release",
            'PRETTY_NAME="Ubuntu 24.04 LTS"\nNAME="Ubuntu"\nVERSION_ID="24.04"\nVERSION="24.04 LTS (Noble Numbat)"\nID=ubuntu\nHOME_URL="https://www.ubuntu.com/"\n',
          );
          file("/etc/hosts", "127.0.0.1\tlocalhost\n127.0.1.1\tescbash-lab\n");
          file(
            "/etc/passwd",
            "root:x:0:0:root:/root:/bin/bash\ndaemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin\nubuntu:x:1000:1000:Ubuntu:/home/ubuntu:/bin/bash\n",
          );
          file("/etc/group", "root:x:0:\nsudo:x:27:ubuntu\n");
          file("/etc/shells", "/bin/sh\n/bin/bash\n/usr/bin/bash\n");
          file(
            "/etc/fstab",
            "# /etc/fstab: static file system information.\n/dev/vda1 / ext4 defaults 0 1\n",
          );
          file("/etc/issue", "Ubuntu 24.04 LTS \\n \\l\n");
          file("/etc/resolv.conf", "nameserver 1.1.1.1\nnameserver 8.8.8.8\n");
          file("/etc/profile", "# /etc/profile: system-wide .profile file\n");
          file(
            "/var/log/syslog",
            "Oct 30 10:40:01 escbash-lab systemd[1]: Started escbash Ubuntu playground.\nOct 30 10:41:12 escbash-lab kernel: Linux version 6.8.0-45-generic\nOct 30 10:42:07 escbash-lab sshd[412]: Accepted publickey for root from 10.0.2.2\n",
          );
          return n;
        }
        nodes = makeInitialFS();

        function escHtml(str) {
          return String(str)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
        }
        function normPath(cwd, p) {
          if (!p || p === "~") return "/root";
          var raw = p;
          if (raw.indexOf("~/") === 0) raw = "/root/" + raw.slice(2);
          else if (raw.charAt(0) !== "/")
            raw = (cwd === "/" ? "" : cwd) + "/" + raw;
          var parts = raw.split("/"),
            out = [];
          for (var i = 0; i < parts.length; i++) {
            var seg = parts[i];
            if (!seg || seg === ".") continue;
            if (seg === "..") out.pop();
            else out.push(seg);
          }
          return "/" + out.join("/");
        }
        function parentPath(p) {
          if (p === "/") return "/";
          var idx = p.lastIndexOf("/");
          return idx <= 0 ? "/" : p.slice(0, idx);
        }
        function baseName(p) {
          if (p === "/") return "/";
          var idx = p.lastIndexOf("/");
          return p.slice(idx + 1);
        }
        function prettyCwd(cwd) {
          if (cwd === "/root") return "~";
          if (cwd.indexOf("/root/") === 0) return "~/" + cwd.slice(6);
          return cwd;
        }
        function isDir(p) {
          return !!(nodes[p] && nodes[p].type === "dir");
        }
        function isFile(p) {
          return !!(nodes[p] && nodes[p].type === "file");
        }
        function readFile(p) {
          return isFile(p) ? nodes[p].content : null;
        }
        function dirChildren(dirPath) {
          var prefix = dirPath === "/" ? "/" : dirPath + "/",
            res = [];
          Object.keys(nodes).forEach(function (k) {
            if (k === dirPath || k.indexOf(prefix) !== 0) return;
            var rest = k.slice(prefix.length);
            if (rest.indexOf("/") === -1) res.push(rest);
          });
          res.sort(function (a, b) {
            return a.toLowerCase().localeCompare(b.toLowerCase());
          });
          return res;
        }
        function mkDir(p, recursive) {
          if (nodes[p]) {
            if (nodes[p].type === "dir" && recursive) return null;
            return "mkdir: cannot create directory '" + p + "': File exists";
          }
          if (!recursive) {
            var par = parentPath(p);
            if (!isDir(par))
              return (
                "mkdir: cannot create directory '" +
                p +
                "': No such file or directory"
              );
            nodes[p] = {
              type: "dir",
              mode: "drwxr-xr-x",
              mtime: nowStamp(),
            };
            return null;
          }
          var parts = p.split("/").filter(Boolean),
            curP = "";
          for (var i = 0; i < parts.length; i++) {
            curP += "/" + parts[i];
            if (nodes[curP]) {
              if (nodes[curP].type !== "dir")
                return (
                  "mkdir: cannot create directory '" + curP + "': File exists"
                );
            } else {
              nodes[curP] = {
                type: "dir",
                mode: "drwxr-xr-x",
                mtime: nowStamp(),
              };
            }
          }
          return null;
        }
        function writeFile(p, text, append) {
          var par = parentPath(p);
          if (!isDir(par)) return "bash: " + p + ": No such file or directory";
          if (isDir(p)) return "bash: " + p + ": Is a directory";
          var prev = append && isFile(p) ? nodes[p].content : "";
          nodes[p] = {
            type: "file",
            content: prev + text,
            mode: "-rw-r--r--",
            mtime: nowStamp(),
          };
          return null;
        }
        function rmNode(p, rec, force) {
          if (p === "/")
            return "rm: it is dangerous to operate recursively on '/'";
          if (!nodes[p])
            return force
              ? null
              : "rm: cannot remove '" + p + "': No such file or directory";
          if (isDir(p) && !rec)
            return "rm: cannot remove '" + p + "': Is a directory";
          var prefix = p + "/";
          Object.keys(nodes).forEach(function (k) {
            if (k === p || k.indexOf(prefix) === 0) delete nodes[k];
          });
          return null;
        }
        function splitCommands(line) {
          var out = [],
            buf = "",
            q = null;
          for (var i = 0; i < line.length; i++) {
            var ch = line[i];
            if (q) {
              if (ch === "\\" && q === '"' && i + 1 < line.length) {
                buf += line[++i];
              } else if (ch === q) {
                q = null;
              } else {
                buf += ch;
              }
            } else if (ch === '"' || ch === "'") {
              q = ch;
            } else if (ch === ";" || (ch === "&" && line[i + 1] === "&")) {
              if (buf.trim()) out.push(buf.trim());
              buf = "";
              if (ch === "&") i++;
            } else {
              buf += ch;
            }
          }
          if (buf.trim()) out.push(buf.trim());
          return out;
        }
        function splitPipes(stmt) {
          var pipes = [],
            buf = "",
            q = null;
          for (var i = 0; i < stmt.length; i++) {
            var ch = stmt[i];
            if (q) {
              if (ch === "\\" && q === '"' && i + 1 < stmt.length) {
                buf += ch + stmt[++i];
              } else {
                if (ch === q) q = null;
                buf += ch;
              }
            } else if (ch === '"' || ch === "'") {
              q = ch;
              buf += ch;
            } else if (ch === "|") {
              pipes.push(buf.trim());
              buf = "";
            } else {
              buf += ch;
            }
          }
          if (buf.trim()) pipes.push(buf.trim());
          return pipes;
        }
        function tokenizeArgs(seg) {
          var tokens = [],
            buf = "",
            inTok = false,
            q = null;
          for (var i = 0; i < seg.length; i++) {
            var ch = seg[i];
            if (q) {
              if (ch === "\\" && q === '"' && i + 1 < seg.length) {
                buf += seg[++i];
              } else if (ch === q) {
                q = null;
              } else {
                buf += ch;
              }
            } else if (ch === '"' || ch === "'") {
              q = ch;
              inTok = true;
            } else if (ch === ">") {
              if (inTok) {
                tokens.push({ val: buf, quoted: false });
                buf = "";
                inTok = false;
              }
              if (seg[i + 1] === ">") {
                tokens.push({ op: ">>" });
                i++;
              } else {
                tokens.push({ op: ">" });
              }
            } else if (/\s/.test(ch)) {
              if (inTok) {
                tokens.push({ val: buf, quoted: false });
                buf = "";
                inTok = false;
              }
            } else {
              buf += ch;
              inTok = true;
            }
          }
          if (inTok) tokens.push({ val: buf, quoted: false });
          return tokens;
        }
        var CMDS = [
          "cat",
          "cd",
          "clear",
          "cp",
          "date",
          "df",
          "echo",
          "env",
          "exit",
          "find",
          "free",
          "grep",
          "head",
          "help",
          "history",
          "hostname",
          "id",
          "ls",
          "man",
          "mkdir",
          "mv",
          "ps",
          "pwd",
          "rm",
          "rmdir",
          "tail",
          "touch",
          "tree",
          "uname",
          "uptime",
          "wc",
          "which",
          "whoami",
        ];
        function runSingle(seg, stdin, sess, isPipedOut) {
          var toks = tokenizeArgs(seg),
            args = [],
            redir = null;
          for (var i = 0; i < toks.length; i++) {
            if (toks[i].op) {
              var next = toks[i + 1];
              if (!next || next.op)
                return {
                  err: "bash: syntax error near unexpected token `newline'",
                };
              redir = { append: toks[i].op === ">>", target: next.val };
              i++;
            } else {
              args.push(toks[i].val);
            }
          }
          if (!args.length) return { out: "" };
          var cmd = args[0],
            rest = args.slice(1),
            res = { out: "", htmlOut: null, err: "" };

          function parseFlags(arr) {
            var flags = {},
              pos = [];
            for (var j = 0; j < arr.length; j++) {
              var a = arr[j];
              if (a.length > 1 && a.charAt(0) === "-" && a !== "--") {
                if (/^-\d+$/.test(a)) flags.num = parseInt(a.slice(1), 10);
                else {
                  for (var k = 1; k < a.length; k++) flags[a.charAt(k)] = true;
                }
              } else {
                pos.push(a);
              }
            }
            return { f: flags, p: pos };
          }
          function needFiles(pos) {
            if (!pos.length) return stdin != null ? [null] : [];
            return pos;
          }

          switch (cmd) {
            case "clear":
            case "cls":
              return { clear: true, out: "" };
            case "pwd":
              res.out = sess.cwd + "\n";
              break;
            case "whoami":
              res.out = "root\n";
              break;
            case "id":
              res.out = "uid=0(root) gid=0(root) groups=0(root)\n";
              break;
            case "hostname":
              res.out = "escbash-lab\n";
              break;
            case "uname": {
              var pf = parseFlags(rest);
              if (pf.f.a)
                res.out =
                  "Linux escbash-lab 6.8.0-45-generic #45-Ubuntu SMP x86_64 GNU/Linux\n";
              else if (pf.f.r) res.out = "6.8.0-45-generic\n";
              else if (pf.f.n) res.out = "escbash-lab\n";
              else res.out = "Linux\n";
              break;
            }
            case "date":
              res.out = new Date().toUTCString().replace("GMT", "UTC") + "\n";
              break;
            case "uptime":
              res.out =
                " 10:42:07 up 14 min,  1 user,  load average: 0.04, 0.03, 0.01\n";
              break;
            case "df":
              res.out =
                "Filesystem      Size  Used Avail Use% Mounted on\n/dev/vda1        20G  2.8G   17G  15% /\ntmpfs           980M     0  980M   0% /dev/shm\n";
              break;
            case "free":
              res.out =
                "               total        used        free      shared  buff/cache   available\nMem:           1.9Gi       210Mi       1.3Gi       1.0Mi       420Mi       1.6Gi\nSwap:             0B          0B          0B\n";
              break;
            case "ps":
              res.out =
                "  PID TTY          TIME CMD\n    1 ?        00:00:01 systemd\n  418 pts/0    00:00:00 bash\n  442 pts/0    00:00:00 ps\n";
              break;
            case "env":
            case "printenv":
              res.out =
                "HOME=/root\nUSER=root\nLOGNAME=root\nSHELL=/bin/bash\nPWD=" +
                sess.cwd +
                "\nHOSTNAME=escbash-lab\nPATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin\n";
              break;
            case "history":
              res.out =
                sess.hist
                  .map(function (h, idx) {
                    return "  " + (idx + 1) + "  " + h;
                  })
                  .join("\n") + (sess.hist.length ? "\n" : "");
              break;
            case "which":
              if (!rest.length) {
                res.err = "which: missing command";
              } else {
                var wout = [];
                rest.forEach(function (w) {
                  if (CMDS.indexOf(w) >= 0) wout.push("/usr/bin/" + w);
                });
                res.out = wout.length ? wout.join("\n") + "\n" : "";
              }
              break;
            case "cd": {
              var tg = rest[0] || "~";
              if (tg === "-") tg = sess.prevCwd || "/root";
              var np = normPath(sess.cwd, tg);
              if (!nodes[np])
                res.err =
                  "bash: cd: " +
                  (rest[0] || tg) +
                  ": No such file or directory";
              else if (!isDir(np))
                res.err = "bash: cd: " + rest[0] + ": Not a directory";
              else {
                sess.prevCwd = sess.cwd;
                sess.cwd = np;
              }
              break;
            }
            case "ls": {
              var lp = parseFlags(rest),
                showDot = !!(lp.f.a || lp.f.A),
                showDotsDot = !!lp.f.a,
                longFmt = !!lp.f.l,
                tgs = lp.p.length ? lp.p : [sess.cwd],
                multi = tgs.length > 1,
                linesOut = [],
                htmlParts = [];
              tgs.forEach(function (rawTarget, idx) {
                var tp = normPath(sess.cwd, rawTarget);
                if (!nodes[tp]) {
                  res.err +=
                    (res.err ? "\n" : "") +
                    "ls: cannot access '" +
                    rawTarget +
                    "': No such file or directory";
                  return;
                }
                if (isFile(tp)) {
                  var nm = baseName(tp);
                  if (longFmt) {
                    var sz = String(nodes[tp].content.length);
                    var row =
                      nodes[tp].mode +
                      " 1 root root " +
                      sz.padStart(5, " ") +
                      " " +
                      nodes[tp].mtime +
                      " " +
                      nm;
                    linesOut.push(row);
                    htmlParts.push(escHtml(row));
                  } else {
                    linesOut.push(nm);
                    htmlParts.push(escHtml(nm));
                  }
                  return;
                }
                if (multi) {
                  var hdr = (idx ? "\n" : "") + rawTarget + ":";
                  linesOut.push(hdr);
                  htmlParts.push(escHtml(hdr));
                }
                var entries = dirChildren(tp).filter(function (nm) {
                  return showDot || nm.charAt(0) !== ".";
                });
                if (showDotsDot) entries = [".", ".."].concat(entries);
                if (longFmt) {
                  linesOut.push("total " + entries.length * 4);
                  htmlParts.push("total " + entries.length * 4);
                  entries.forEach(function (nm) {
                    var ep =
                      nm === "." || nm === ".."
                        ? tp
                        : tp === "/"
                          ? "/" + nm
                          : tp + "/" + nm;
                    var nd = nodes[ep] || {
                      type: "dir",
                      mode: "drwxr-xr-x",
                      mtime: nowStamp(),
                    };
                    var sz =
                      nd.type === "dir"
                        ? "4096"
                        : String((nd.content || "").length);
                    var prefix =
                      nd.mode +
                      " 1 root root " +
                      sz.padStart(5, " ") +
                      " " +
                      nd.mtime +
                      " ";
                    linesOut.push(prefix + nm);
                    htmlParts.push(
                      escHtml(prefix) +
                        (nd.type === "dir"
                          ? '<span class="t-dir">' + escHtml(nm) + "</span>"
                          : escHtml(nm)),
                    );
                  });
                } else if (isPipedOut || redir) {
                  entries.forEach(function (nm) {
                    linesOut.push(nm);
                    htmlParts.push(escHtml(nm));
                  });
                } else if (entries.length) {
                  linesOut.push(entries.join("  "));
                  htmlParts.push(
                    entries
                      .map(function (nm) {
                        var ep =
                          nm === "." || nm === ".."
                            ? tp
                            : tp === "/"
                              ? "/" + nm
                              : tp + "/" + nm;
                        var dirFlag = nm === "." || nm === ".." || isDir(ep);
                        return dirFlag
                          ? '<span class="t-dir">' + escHtml(nm) + "</span>"
                          : escHtml(nm);
                      })
                      .join("  "),
                  );
                }
              });
              res.out = linesOut.length ? linesOut.join("\n") + "\n" : "";
              if (!isPipedOut && !redir && htmlParts.length)
                res.htmlOut = htmlParts.join("\n");
              break;
            }
            case "mkdir": {
              var mp = parseFlags(rest);
              if (!mp.p.length) {
                res.err = "mkdir: missing operand";
                break;
              }
              mp.p.forEach(function (d) {
                var e = mkDir(normPath(sess.cwd, d), !!mp.f.p);
                if (e) res.err += (res.err ? "\n" : "") + e;
              });
              break;
            }
            case "rmdir":
              if (!rest.length) {
                res.err = "rmdir: missing operand";
                break;
              }
              rest.forEach(function (d) {
                var np = normPath(sess.cwd, d);
                if (!nodes[np])
                  res.err +=
                    (res.err ? "\n" : "") +
                    "rmdir: failed to remove '" +
                    d +
                    "': No such file or directory";
                else if (!isDir(np))
                  res.err +=
                    (res.err ? "\n" : "") +
                    "rmdir: failed to remove '" +
                    d +
                    "': Not a directory";
                else if (dirChildren(np).length)
                  res.err +=
                    (res.err ? "\n" : "") +
                    "rmdir: failed to remove '" +
                    d +
                    "': Directory not empty";
                else delete nodes[np];
              });
              break;
            case "touch":
              if (!rest.length) {
                res.err = "touch: missing file operand";
                break;
              }
              rest.forEach(function (f) {
                var np = normPath(sess.cwd, f);
                if (nodes[np]) nodes[np].mtime = nowStamp();
                else {
                  var e = writeFile(np, "", false);
                  if (e)
                    res.err +=
                      (res.err ? "\n" : "") + e.replace("bash:", "touch:");
                }
              });
              break;
            case "rm": {
              var rp = parseFlags(rest);
              if (!rp.p.length && !rp.f.f) {
                res.err = "rm: missing operand";
                break;
              }
              rp.p.forEach(function (t) {
                var e = rmNode(
                  normPath(sess.cwd, t),
                  !!(rp.f.r || rp.f.R),
                  !!rp.f.f,
                );
                if (e) res.err += (res.err ? "\n" : "") + e;
              });
              break;
            }
            case "cp": {
              var cpP = parseFlags(rest);
              if (cpP.p.length < 2) {
                res.err = "cp: missing destination file operand";
                break;
              }
              var src = normPath(sess.cwd, cpP.p[0]),
                dst = normPath(sess.cwd, cpP.p[1]);
              if (!nodes[src]) {
                res.err =
                  "cp: cannot stat '" +
                  cpP.p[0] +
                  "': No such file or directory";
              } else if (isDir(src)) {
                res.err = "cp: -r not supported on directories yet";
              } else {
                var target = isDir(dst)
                  ? (dst === "/" ? "" : dst) + "/" + baseName(src)
                  : dst;
                var we = writeFile(target, nodes[src].content, false);
                if (we) res.err = we;
              }
              break;
            }
            case "mv":
              if (rest.length < 2) {
                res.err = "mv: missing destination file operand";
                break;
              }
              var ms = normPath(sess.cwd, rest[0]),
                md = normPath(sess.cwd, rest[1]);
              if (!nodes[ms]) {
                res.err =
                  "mv: cannot stat '" +
                  rest[0] +
                  "': No such file or directory";
              } else if (isDir(ms)) {
                res.err =
                  "mv: directory move across paths not needed in playground";
              } else {
                var mt = isDir(md)
                  ? (md === "/" ? "" : md) + "/" + baseName(ms)
                  : md;
                var mwe = writeFile(mt, nodes[ms].content, false);
                if (mwe) res.err = mwe;
                else delete nodes[ms];
              }
              break;
            case "echo":
              res.out = rest.join(" ") + "\n";
              break;
            case "cat": {
              var cf = needFiles(rest);
              if (!cf.length) {
                res.err = "cat: missing file operand";
                break;
              }
              cf.forEach(function (f) {
                if (f === null) {
                  res.out += stdin;
                  return;
                }
                var np = normPath(sess.cwd, f);
                if (!nodes[np])
                  res.err +=
                    (res.err ? "\n" : "") +
                    "cat: " +
                    f +
                    ": No such file or directory";
                else if (isDir(np))
                  res.err +=
                    (res.err ? "\n" : "") + "cat: " + f + ": Is a directory";
                else res.out += nodes[np].content;
              });
              break;
            }
            case "head":
            case "tail": {
              var nVal = 10,
                hPos = [];
              for (var hi = 0; hi < rest.length; hi++) {
                if (rest[hi] === "-n" && hi + 1 < rest.length) {
                  nVal = parseInt(rest[++hi], 10) || 10;
                } else if (/^-\d+$/.test(rest[hi])) {
                  nVal = parseInt(rest[hi].slice(1), 10);
                } else {
                  hPos.push(rest[hi]);
                }
              }
              var txt = null;
              if (!hPos.length) {
                if (stdin != null) txt = stdin;
                else {
                  res.err = cmd + ": missing file operand";
                  break;
                }
              } else {
                var hnp = normPath(sess.cwd, hPos[0]);
                if (!nodes[hnp]) {
                  res.err =
                    cmd +
                    ": cannot open '" +
                    hPos[0] +
                    "': No such file or directory";
                  break;
                }
                if (isDir(hnp)) {
                  res.err =
                    cmd + ": error reading '" + hPos[0] + "': Is a directory";
                  break;
                }
                txt = nodes[hnp].content;
              }
              var arrL = txt.split("\n");
              if (arrL.length && arrL[arrL.length - 1] === "") arrL.pop();
              var sliced =
                cmd === "head"
                  ? arrL.slice(0, nVal)
                  : arrL.slice(Math.max(0, arrL.length - nVal));
              res.out = sliced.length ? sliced.join("\n") + "\n" : "";
              break;
            }
            case "wc": {
              var wp = parseFlags(rest),
                wtxt = null;
              if (!wp.p.length) {
                if (stdin != null) wtxt = stdin;
                else {
                  res.err = "wc: missing file operand";
                  break;
                }
              } else {
                var wnp = normPath(sess.cwd, wp.p[0]);
                if (!isFile(wnp)) {
                  res.err = "wc: " + wp.p[0] + ": No such file";
                  break;
                }
                wtxt = nodes[wnp].content;
              }
              var lc = wtxt
                ? wtxt.split("\n").length - (wtxt.slice(-1) === "\n" ? 1 : 0)
                : 0;
              var wc2 = wtxt.trim() ? wtxt.trim().split(/\s+/).length : 0;
              var cc = wtxt.length;
              if (wp.f.l && !wp.f.w && !wp.f.c) res.out = lc + "\n";
              else if (wp.f.w && !wp.f.l && !wp.f.c) res.out = wc2 + "\n";
              else if (wp.f.c && !wp.f.l && !wp.f.w) res.out = cc + "\n";
              else
                res.out =
                  " " +
                  lc +
                  "  " +
                  wc2 +
                  "  " +
                  cc +
                  (wp.p[0] ? " " + wp.p[0] : "") +
                  "\n";
              break;
            }
            case "grep": {
              var gp = parseFlags(rest),
                pat = gp.p[0],
                gFiles = gp.p.slice(1);
              if (!pat) {
                res.err = "grep: missing pattern";
                break;
              }
              var gSrc = null;
              if (!gFiles.length) {
                if (stdin != null) gSrc = stdin;
                else {
                  res.err = "grep: missing file operand";
                  break;
                }
              } else {
                var gnp = normPath(sess.cwd, gFiles[0]);
                if (!isFile(gnp)) {
                  res.err =
                    "grep: " + gFiles[0] + ": No such file or directory";
                  break;
                }
                gSrc = nodes[gnp].content;
              }
              var needle = gp.f.i ? pat.toLowerCase() : pat;
              var gLines = gSrc.split("\n");
              if (gLines.length && gLines[gLines.length - 1] === "")
                gLines.pop();
              var matched = [];
              gLines.forEach(function (lineStr, idx) {
                var hay = gp.f.i ? lineStr.toLowerCase() : lineStr;
                var hit = hay.indexOf(needle) !== -1;
                if (gp.f.v) hit = !hit;
                if (hit) matched.push((gp.f.n ? idx + 1 + ":" : "") + lineStr);
              });
              res.out = matched.length ? matched.join("\n") + "\n" : "";
              break;
            }
            case "find": {
              var fRoot = normPath(
                  sess.cwd,
                  rest[0] && rest[0].charAt(0) !== "-" ? rest[0] : ".",
                ),
                fNameIdx = rest.indexOf("-name"),
                fPat = fNameIdx >= 0 ? rest[fNameIdx + 1] : null;
              if (!nodes[fRoot]) {
                res.err =
                  "find: '" + (rest[0] || ".") + "': No such file or directory";
                break;
              }
              var rx = fPat
                ? new RegExp(
                    "^" +
                      fPat
                        .replace(/[.+^${}()|[\]\\]/g, "\\$&")
                        .replace(/\*/g, ".*")
                        .replace(/\?/g, ".") +
                      "$",
                  )
                : null;
              var fMatches = Object.keys(nodes)
                .filter(function (k) {
                  return (
                    k === fRoot ||
                    k.indexOf(fRoot === "/" ? "/" : fRoot + "/") === 0
                  );
                })
                .sort()
                .filter(function (k) {
                  return !rx || rx.test(baseName(k));
                });
              res.out = fMatches.length ? fMatches.join("\n") + "\n" : "";
              break;
            }
            case "tree": {
              var trRoot = normPath(sess.cwd, rest[0] || ".");
              if (!isDir(trRoot)) {
                res.err = (rest[0] || ".") + " [error opening dir]";
                break;
              }
              var trLines = [rest[0] || "."];
              function walk(dp, prefix) {
                var ch = dirChildren(dp);
                ch.forEach(function (nm, idx) {
                  var last = idx === ch.length - 1,
                    cp2 = dp === "/" ? "/" + nm : dp + "/" + nm;
                  trLines.push(prefix + (last ? "└── " : "├── ") + nm);
                  if (isDir(cp2)) walk(cp2, prefix + (last ? "    " : "│   "));
                });
              }
              walk(trRoot, "");
              res.out = trLines.join("\n") + "\n";
              break;
            }
            case "man":
              res.out =
                (rest[0] || "bash") +
                "(1) — escbash Ubuntu 24.04 built-in manual.\nTry running `" +
                (rest[0] || "help") +
                "` directly in the terminal.\n";
              break;
            case "exit":
              res.out =
                "Session active. Use Stop Lab in the top bar to end this VM.\n";
              break;
            case "help":
              res.out =
                "Built-in commands:\n" +
                "  pwd, ls [-l|-a|-A], cd [dir], mkdir [-p], touch, rm [-r|-f], rmdir, cp, mv\n" +
                "  cat, head [-n N], tail [-n N], wc [-l|-w|-c], grep [-i|-n], find, tree\n" +
                "  echo, whoami, hostname, uname [-a|-r], date, uptime, df, free, ps, env, clear\n" +
                "Supports pipes (|), redirection (> and >>), Up/Down history, Tab completion, Ctrl+L.\n";
              break;
            default:
              res.err = "bash: " + cmd + ": command not found";
          }

          if (redir && !res.err) {
            var rPath = normPath(sess.cwd, redir.target),
              wErr = writeFile(rPath, res.out, redir.append);
            if (wErr) res.err = wErr;
            res.out = "";
            res.htmlOut = null;
          }
          return res;
        }
        function executeLine(rawLine, sess) {
          var stmts = splitCommands(rawLine),
            outputs = [];
          for (var si = 0; si < stmts.length; si++) {
            var pipes = splitPipes(stmts[si]),
              stdin = null;
            for (var pi = 0; pi < pipes.length; pi++) {
              var hasNext = pi < pipes.length - 1;
              var r = runSingle(pipes[pi], stdin, sess, hasNext);
              if (r.clear) {
                outputs = [{ clear: true }];
                stdin = null;
                break;
              }
              if (r.err) {
                outputs.push({ cls: "t-err", text: r.err });
                stdin = null;
                break;
              }
              if (hasNext) {
                stdin = r.out;
              } else if (r.htmlOut != null) {
                outputs.push({ html: r.htmlOut });
              } else if (r.out) {
                outputs.push({ text: r.out.replace(/\n$/, "") });
              }
            }
          }
          return outputs;
        }

        function buildPromptHTML(cwd) {
          return (
            '<span class="r">root</span><span class="y">@escbash-lab</span>:<span class="t-cwd">' +
            escHtml(prettyCwd(cwd)) +
            "</span>#"
          );
        }
        function mountTermTab(id, container, withMotd) {
          container.innerHTML = "";
          var buf = document.createElement("div");
          buf.className = "t-buf";
          var row = document.createElement("div");
          row.className = "t-row";
          var ps = document.createElement("span");
          ps.className = "t-ps";
          var inp = document.createElement("input");
          inp.className = "t-inp";
          inp.type = "text";
          inp.autocomplete = "off";
          inp.setAttribute("autocapitalize", "off");
          inp.setAttribute("autocorrect", "off");
          inp.spellcheck = false;
          inp.setAttribute("aria-label", "Terminal command input");
          row.appendChild(ps);
          row.appendChild(inp);
          container.appendChild(buf);
          container.appendChild(row);

          var sess = {
            id: id,
            cwd: "/root",
            prevCwd: "/root",
            hist: [],
            histIdx: -1,
            draft: "",
            scrollEl: container === $("tw2") ? $("tw") : container,
            buf: buf,
            ps: ps,
            inp: inp,
          };
          termSessions[id] = sess;

          function renderPrompt() {
            ps.innerHTML = buildPromptHTML(sess.cwd);
          }
          function appendLine(text, cls, asHtml) {
            var d = document.createElement("div");
            d.className = "t-ln" + (cls ? " " + cls : "");
            if (asHtml) d.innerHTML = text;
            else d.textContent = text;
            buf.appendChild(d);
          }
          function writeMotd() {
            appendLine(
              'Welcome to the <span class="y">esc</span><span class="m">bash</span> Ubuntu playground! 🚀',
              "",
              true,
            );
            appendLine(
              "Ubuntu 24.04 LTS (GNU/Linux 6.8.0-45-generic x86_64) · root access",
              "t-dim",
            );
            appendLine(
              "Pre-installed: bash, coreutils, curl, vim, nano, git, jq, nginx, tree, htop",
              "t-dim t-gap",
            );
            appendLine(
              "Networking:    tcpdump, nmap, netcat, socat, iptables, traceroute, lsof",
              "t-dim",
            );
            appendLine(
              'Type "help" for commands (Tab completes paths, Ctrl+L clears).',
              "t-dim t-gap",
            );
          }
          if (withMotd) writeMotd();
          renderPrompt();

          sess.reset = function (motd) {
            sess.cwd = "/root";
            sess.prevCwd = "/root";
            sess.hist = [];
            sess.histIdx = -1;
            sess.draft = "";
            buf.innerHTML = "";
            inp.value = "";
            if (motd) writeMotd();
            renderPrompt();
            sess.scrollEl.scrollTop = sess.scrollEl.scrollHeight;
          };

          sess.scrollEl.addEventListener("click", function () {
            var sel = window.getSelection && window.getSelection().toString();
            if (!sel) inp.focus({ preventScroll: true });
          });

          inp.addEventListener("keydown", function (e) {
            if (e.ctrlKey && e.key.toLowerCase() === "l") {
              e.preventDefault();
              buf.innerHTML = "";
              sess.scrollEl.scrollTop = 0;
              return;
            }
            if (e.ctrlKey && e.key.toLowerCase() === "c") {
              e.preventDefault();
              appendLine(
                buildPromptHTML(sess.cwd) + " " + escHtml(inp.value) + "^C",
                "",
                true,
              );
              inp.value = "";
              sess.histIdx = -1;
              sess.scrollEl.scrollTop = sess.scrollEl.scrollHeight;
              return;
            }
            if (e.key === "ArrowUp") {
              e.preventDefault();
              if (!sess.hist.length) return;
              if (sess.histIdx === -1) {
                sess.draft = inp.value;
                sess.histIdx = sess.hist.length - 1;
              } else if (sess.histIdx > 0) {
                sess.histIdx--;
              }
              inp.value = sess.hist[sess.histIdx];
              return;
            }
            if (e.key === "ArrowDown") {
              e.preventDefault();
              if (sess.histIdx === -1) return;
              if (sess.histIdx < sess.hist.length - 1) {
                sess.histIdx++;
                inp.value = sess.hist[sess.histIdx];
              } else {
                sess.histIdx = -1;
                inp.value = sess.draft;
              }
              return;
            }
            if (e.key === "Tab") {
              e.preventDefault();
              var val = inp.value,
                spIdx = val.lastIndexOf(" ");
              if (spIdx === -1) {
                var cm = CMDS.filter(function (c) {
                  return c.indexOf(val) === 0;
                });
                if (cm.length === 1) inp.value = cm[0] + " ";
                else if (cm.length > 1) {
                  appendLine(
                    buildPromptHTML(sess.cwd) + " " + escHtml(val),
                    "",
                    true,
                  );
                  appendLine(cm.join("  "), "t-dim");
                }
              } else {
                var headStr = val.slice(0, spIdx + 1),
                  frag = val.slice(spIdx + 1),
                  slash = frag.lastIndexOf("/"),
                  dirPart = slash >= 0 ? frag.slice(0, slash + 1) : "",
                  namePart = slash >= 0 ? frag.slice(slash + 1) : frag,
                  searchDir = normPath(sess.cwd, dirPart || ".");
                if (isDir(searchDir)) {
                  var matches = dirChildren(searchDir).filter(function (nm) {
                    if (nm.indexOf(namePart) !== 0) return false;
                    if (!namePart && nm.charAt(0) === ".") return false;
                    return true;
                  });
                  if (matches.length === 1) {
                    var fullMatch =
                      (searchDir === "/" ? "" : searchDir) + "/" + matches[0];
                    inp.value =
                      headStr +
                      dirPart +
                      matches[0] +
                      (isDir(fullMatch) ? "/" : " ");
                  } else if (matches.length > 1) {
                    appendLine(
                      buildPromptHTML(sess.cwd) + " " + escHtml(val),
                      "",
                      true,
                    );
                    appendLine(matches.join("  "), "t-dim");
                  }
                }
              }
              sess.scrollEl.scrollTop = sess.scrollEl.scrollHeight;
              return;
            }
            if (e.key === "Enter") {
              e.preventDefault();
              var cmdLine = inp.value;
              appendLine(
                buildPromptHTML(sess.cwd) + " " + escHtml(cmdLine),
                "",
                true,
              );
              if (cmdLine.trim()) {
                sess.hist.push(cmdLine);
                if (sess.hist.length > 100) sess.hist.shift();
              }
              sess.histIdx = -1;
              sess.draft = "";
              inp.value = "";
              if (cmdLine.trim()) {
                var outList = executeLine(cmdLine, sess);
                if (outList.length && outList[0].clear) {
                  buf.innerHTML = "";
                } else {
                  outList.forEach(function (item) {
                    if (item.html != null) appendLine(item.html, "", true);
                    else appendLine(item.text, item.cls || "");
                  });
                }
                var ck = $("ck");
                if (
                  lab.on &&
                  s.classList.contains("tk") &&
                  ck &&
                  !ck.classList.contains("ran")
                ) {
                  ck.classList.add("ran");
                  ckStatus();
                  fitSx();
                }
              }
              renderPrompt();
              sess.scrollEl.scrollTop = sess.scrollEl.scrollHeight;
            }
          });
          return sess;
        }
        window.mountTermTab = function (id, el) {
          return mountTermTab(id, el, false);
        };
        window.unmountTermTab = function (id) {
          delete termSessions[id];
        };
        window.focusActiveTerm = function () {
          var tsObj = termSessions[cur];
          if (tsObj && lab.on && TY[cur] === "term")
            tsObj.inp.focus({ preventScroll: true });
            if (document.body.classList.contains("msplit")) {
              var tzEl = document.getElementById("tz");
              if (tzEl) tzEl.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        };
        window.syncLabShell = function (on) {
          if (!on) {
            nodes = makeInitialFS();
            Object.keys(termSessions).forEach(function (k) {
              termSessions[k].reset(k === "t1");
            });
          } else {
            var tsObj = termSessions[cur];
            if (
              tsObj &&
              !window.matchMedia("(max-width:1023px)").matches &&
              TY[cur] === "term"
            ) {
              setTimeout(function () {
                tsObj.inp.focus({ preventScroll: true });
            if (document.body.classList.contains("msplit")) {
              var tzEl = document.getElementById("tz");
              if (tzEl) tzEl.scrollIntoView({ behavior: "smooth", block: "start" });
            }
              }, 20);
            }
          }
        };
        window.evalTaskChecks = function (key) {
          if (key === "Task: create a workspace") {
            var wsOk = isDir("/root/workspace");
            var inWs = Object.keys(termSessions).some(function (k) {
              return termSessions[k].cwd === "/root/workspace";
            });
            var emptyWs = wsOk && dirChildren("/root/workspace").length === 0;
            return [wsOk, inWs, emptyWs];
          }
          if (key === "Collect machine information") {
            var ansDir = isDir("/root/answers");
            var etcCnt = readFile("/root/answers/etc-count.txt") || "";
            var rootHid = readFile("/root/answers/root-hidden.txt") || "";
            var etcLong = readFile("/root/answers/etc-long.txt") || "";
            return [
              ansDir,
              /\d+/.test(etcCnt.trim()),
              rootHid.indexOf(".bashrc") !== -1,
              etcLong.trim().length > 0,
              isFile("/root/.bashrc"),
            ];
          }
          return null;
        };
        mountTermTab("t1", $("tw2"), true);
        function tsFit() {
          var tsObj = termSessions[cur];
          if (tsObj && tsObj.scrollEl)
            tsObj.scrollEl.scrollTop = tsObj.scrollEl.scrollHeight;
        }
        function runInTerminal(rawCmd) {
          if (!rawCmd) return;
          if (!lab.on && typeof labSet === "function") {
            labSet(true);
          }
          var lines = rawCmd
            .split("\n")
            .map(function (l) {
              return l.split("#")[0].trim();
            })
            .filter(Boolean);
          var tsObj =
            (termSessions && termSessions[cur]) ||
            (termSessions && termSessions["t1"]);
          if (tsObj && tsObj.inp) {
            lines.forEach(function (cmdLine) {
              tsObj.inp.value = cmdLine;
              tsObj.inp.dispatchEvent(
                new KeyboardEvent("keydown", { key: "Enter", bubbles: true })
              );
            });
            tsObj.inp.focus({ preventScroll: true });
            if (document.body.classList.contains("msplit")) {
              var tzEl = document.getElementById("tz");
              if (tzEl) tzEl.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          } else if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(rawCmd).catch(function () {});
          }
        }
        function handleLessonCardClick(e) {
          var copyBtn = e.target.closest(".code-card-btn.copy-btn");
          if (copyBtn) {
            var textToCopy = copyBtn.getAttribute("data-copy");
            if (!textToCopy) {
              var card = copyBtn.closest(".code-card");
              if (card) {
                var codeEl =
                  card.querySelector(".code-card-body code") ||
                  card.querySelector(".code-card-body");
                if (codeEl) textToCopy = codeEl.innerText.replace(/#.*$/gm, "").trim();
              }
            }
            if (textToCopy) {
              if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(textToCopy).catch(function () {});
              }
              var origSvg = copyBtn.innerHTML;
              copyBtn.innerHTML =
                '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--lamp)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
              setTimeout(function () {
                copyBtn.innerHTML = origSvg;
              }, 1200);
            }
            return;
          }
          var runBtn = e.target.closest(".code-card-btn.run-btn");
          if (runBtn) {
            var cmd = runBtn.getAttribute("data-cmd");
            if (!cmd) {
              var card = runBtn.closest(".code-card");
              if (card) {
                var cmds = Array.prototype.map
                  .call(card.querySelectorAll(".c-cmd"), function (el) {
                    return el.textContent.trim();
                  })
                  .filter(Boolean);
                cmd = cmds.join("\n");
                if (!cmd) {
                  var codeEl =
                    card.querySelector(".code-card-body code") ||
                    card.querySelector(".code-card-body");
                  if (codeEl) cmd = codeEl.innerText.replace(/#.*$/gm, "").trim();
                }
              }
            }
            if (cmd) {
              runInTerminal(cmd);
            }
          }
        }
        if ($("s1")) $("s1").addEventListener("click", handleLessonCardClick);
        if ($("sx")) $("sx").addEventListener("click", handleLessonCardClick);
        var rv = $("rv"),
          vg = 0;
        stx.forEach(function (e, i) {
          var d = document.createElement("div");
          d.className = "t stt " + KT[i].toLowerCase();
          d.textContent = KT[i];
          d.style.top = parseInt(e.style.top) - 9 + "px";
          e.parentNode.insertBefore(d, e.nextSibling);
        });
        function setY(v) {
          var maxY = Math.max(360, 904 + yy - 180);
          YS = Math.max(180, Math.min(maxY, Math.round(v)));
          s.style.setProperty("--Ys", YS + "px");
          fitSx();
          tsFit();
        }
        rv.addEventListener("pointerdown", function (e) {
          vg = 1;
          s.classList.add("dr");
          rv.setPointerCapture(e.pointerId);
          e.preventDefault();
        });
        rv.addEventListener("pointermove", function (e) {
          if (!vg) return;
          var r = s.getBoundingClientRect();
          setY((e.clientY - r.top) / (r.height / (904 + yy)));
        });
        function vup() {
          vg = 0;
          s.classList.remove("dr");
        }
        rv.addEventListener("pointerup", vup);
        rv.addEventListener("pointercancel", vup);
        rv.addEventListener("dblclick", function () {
          setY(468);
        });
      })();

/* v15 accessibility shim: give pointer-driven div/span controls a role, a name and keyboard activation */
      (function () {
        var stage = document.getElementById("stage");
        if (!stage) return;
        var MAP = {
          hb: "Toggle lesson steps",
          cp: "Toggle lesson steps",
          ckh: "Assessment details",
          lab: "Start or stop the lab",
          tt: "Switch theme",
          lm0: "Lesson only layout",
          lm1: "Terminal only layout",
          lm2: "Lesson and terminal side by side",
          lm3: "Lesson on top, terminal below",
          th: "Toggle terminal panel",
        };
        var INTER = {
          button: 1,
          radio: 1,
          checkbox: 1,
          tab: 1,
          option: 1,
          switch: 1,
          link: 1,
          menuitem: 1,
          menuitemradio: 1,
          menuitemcheckbox: 1,
        };
        function clean(s) {
          return (s || "").replace(/\s+/g, " ").trim();
        }
        function nameOf(el) {
          if (MAP[el.id]) return MAP[el.id];
          if (
            el.classList.contains("arr") &&
            el.parentElement &&
            el.parentElement.id === "ckh"
          )
            return "Toggle assessment details";
          var a = clean(el.getAttribute("aria-label"));
          if (a) return a;
          var t = clean(el.textContent),
            ti = clean(el.getAttribute("title"));
          var n = ti && t ? ti + ": " + t : ti || t;
          return n.length > 90 ? n.slice(0, 87) + "\u2026" : n;
        }
        function inter(r) {
          return !!r && INTER[r] === 1;
        }
        function activate(el) {
          if (typeof el.click === "function") {
            el.click();
            return;
          }
          el.dispatchEvent(
            new MouseEvent("click", {
              bubbles: true,
              cancelable: true,
              view: el.ownerDocument.defaultView,
            }),
          );
        }
        function onKey(e) {
          var k = e.key;
          if (k === "Enter" || k === " " || k === "Spacebar" || k === "Space") {
            e.preventDefault();
            e.stopPropagation();
            activate(this);
            return;
          }
          if (
            this.getAttribute("role") === "radio" &&
            /^Arrow(Up|Down|Left|Right)$/.test(k)
          ) {
            var grp = this.closest('[role="radiogroup"]');
            if (!grp) return;
            var rs = [].slice.call(grp.querySelectorAll('[role="radio"]'));
            var idx = rs.indexOf(this);
            if (idx < 0) return;
            var dir = k === "ArrowDown" || k === "ArrowRight" ? 1 : -1;
            var next = rs[(idx + dir + rs.length) % rs.length];
            e.preventDefault();
            e.stopPropagation();
            next.focus();
            activate(next);
          }
        }
        function tag() {
          var els = stage.querySelectorAll("*");
          for (var i = 0; i < els.length; i++) {
            var el = els[i];
            if (el.hasAttribute("data-a11y")) continue;
            if (
              /^(BUTTON|A|INPUT|TEXTAREA|SELECT|SUMMARY|OPTION)$/.test(
                el.tagName,
              )
            )
              continue;
            if (el.classList.contains("cir")) continue;
            /* the assessment header is a container: the chevron inside it is the control,
         so tagging the header would nest the hint/solution buttons inside a button */
            if (el.id === "ckh") continue;
            var role = el.getAttribute("role");
            var existing = inter(role);
            /* structural/landmark roles are left alone; interactive roles are enhanced in place */
            if (role && role !== "presentation" && role !== "none" && !existing)
              continue;
            if (!existing && getComputedStyle(el).cursor !== "pointer")
              continue;
            /* never wrap already-interactive children in another button */
            if (
              el.querySelector(
                'button,a[href],input,select,textarea,[role="button"],[role="radio"],[role="checkbox"],[role="tab"],.xb,.cfy,.cfk',
              )
            )
              continue;
            var n = nameOf(el);
            if (!n) continue;
            var skip = false;
            for (
              var p = el.parentElement;
              p && p !== stage;
              p = p.parentElement
            ) {
              if (
                (inter(p.getAttribute("role")) ||
                  p.hasAttribute("data-a11y")) &&
                !el.matches(".xb,.cfy,.cfk")
              ) {
                skip = true;
                break;
              }
            }
            if (skip) continue;
            el.setAttribute("data-a11y", "1");
            if (!existing) el.setAttribute("role", "button");
            if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "0");
            if (!el.hasAttribute("aria-label"))
              el.setAttribute("aria-label", n);
            if (
              !el.hasAttribute("aria-checked") &&
              (role === "radio" || role === "checkbox" || role === "switch")
            )
              el.setAttribute("aria-checked", "false");
            el.addEventListener("keydown", onKey);
          }
          var arr = stage.querySelector("#ckh .arr"),
            ck = document.getElementById("ck");
          if (arr && ck)
            arr.setAttribute(
              "aria-expanded",
              ck.classList.contains("open") ? "true" : "false",
            );
        }
        var pending = false;
        function schedule() {
          if (pending) return;
          pending = true;
          var run = function () {
            pending = false;
            tag();
          };
          if (typeof queueMicrotask === "function") queueMicrotask(run);
          else setTimeout(run, 0);
        }
        tag();
        var mo = new MutationObserver(schedule);
        mo.observe(stage, {
          childList: true,
          subtree: true,
          attributes: true,
          attributeFilter: ["class"],
        });
        var sk = document.querySelector(".skip");
        if (sk)
          sk.addEventListener("click", function (e) {
            e.preventDefault();
            var lz = document.getElementById("lz");
            if (lz) {
              lz.focus({ preventScroll: true });
              try {
                lz.scrollIntoView({ block: "start", behavior: "smooth" });
              } catch (x) {}
            }
          });
      })();

/* v15 mobile app shell: keep every desktop control reachable at any viewport size */
      (function () {
        var $ = function (id) {
          return document.getElementById(id);
        };
        var stage = $("stage"),
          body = document.body,
          lz = $("lz");
        var mq = window.matchMedia("(max-width:1023px)");
        var list = $("msteps"),
          drawer = $("mdrawer"),
          scrim = $("mscrim"),
          menuBtn = $("mmenu");
        if (!stage || !list || !drawer) return;
        var closeBtn = $("mdrawerx"),
          sn = $("sn"),
          mname = $("mname");
        var stx = document.querySelectorAll("#sb .step");
        var btnByStep = [];
        var lastFocus = null;

        /* ---- step list, cloned from the real sidebar so navigation stays in sync ---- */
        Array.prototype.forEach.call(stx, function (el, i) {
          var li = document.createElement("li");
          var b = document.createElement("button");
          b.type = "button";
          var label = (el.textContent || "").replace(/^\s*\d+\.\s*/, "").trim();
          var type = "lesson";
          var nxt = el.nextElementSibling;
          if (nxt && nxt.classList && nxt.classList.contains("stt"))
            type = (nxt.textContent || "lesson").trim().toLowerCase();
          b.innerHTML =
            '<span class="mnum" aria-hidden="true">' +
            (i + 1) +
            '</span><span class="mlbl">' +
            label +
            '</span><span class="mtype ' +
            type +
            '">' +
            type +
            "</span>";
          b.setAttribute(
            "aria-label",
            "Step " + (i + 1) + ": " + label + " (" + type + ")",
          );
          b.addEventListener("click", function () {
            try {
              el.click();
            } catch (e) {}
            closeDrawer(true);
            setTimeout(function () {
              if (lz && lz.focus) lz.focus({ preventScroll: true });
            }, 30);
          });
          li.appendChild(b);
          list.appendChild(li);
          btnByStep.push(b);
        });

        /* ---- state sync ---- */
        function currentStep() {
          var n = parseInt((sn && sn.textContent) || "1", 10);
          return isNaN(n) ? 1 : n;
        }
        function stepLabel(n) {
          var el = stx[n - 1];
          return el
            ? (el.textContent || "").replace(/^\s*\d+\.\s*/, "").trim()
            : "";
        }
        function syncSteps() {
          var n = currentStep();
          if (mname) mname.textContent = stepLabel(n) || "Lesson";
          btnByStep.forEach(function (b, i) {
            if (i + 1 === n) b.setAttribute("aria-current", "step");
            else b.removeAttribute("aria-current");
          });
        }
        function layoutMode() {
          if (stage.classList.contains("vl")) return "vl";
          if (stage.classList.contains("vt")) return "vt";
          if (stage.classList.contains("vs")) return "vs";
          return "";
        }
        function syncLayout() {
          var m = layoutMode();
          document.querySelectorAll("#mdrawer [data-lm]").forEach(function (b) {
            var lm = b.getAttribute("data-lm");
            var on =
              (lm === "lm0" && m === "vl") ||
              (lm === "lm1" && m === "vt") ||
              (lm === "lm2" && m === "") ||
              (lm === "lm3" && m === "vs");
            b.setAttribute("aria-pressed", on ? "true" : "false");
          });
        }
        function syncTheme() {
          var light = body.classList.contains("lt");
          var t = $("mtheme2");
          if (t)
            t.setAttribute(
              "aria-label",
              light ? "Switch to dark theme" : "Switch to light theme",
            );
        }
        function syncLab() {
          var on = stage.classList.contains("lab"),
            b = $("mlab"),
            tm = $("tmt"),
            t = tm ? tm.textContent : "60:00";
          body.classList.toggle("mlabon", on);
          syncUrlPop();
          if (b) {
            b.textContent = "Start lab";
            b.setAttribute("aria-pressed", on ? "true" : "false");
          }
          var u = $("murl");
          if (u)
            u.setAttribute(
              "aria-pressed",
              stage.classList.contains("u") ? "true" : "false",
            );
          var ms = $("mstop");
          if (ms) ms.setAttribute("aria-pressed", on ? "true" : "false");
          var mt2 = $("mstopt");
          if (mt2) mt2.textContent = t;
          syncMbarOffset();
        }
        var mbarEl = $("mbar");
        function syncMbarOffset() {
          if (!lz) return;
          if (mq.matches && mbarEl && getComputedStyle(mbarEl).display !== "none") {
            var mh = mbarEl.offsetHeight + "px";
            lz.style.setProperty("padding-top", mh, "important");
            document.documentElement.style.setProperty("--mh", mh);
          } else {
            lz.style.removeProperty("padding-top");
            document.documentElement.style.removeProperty("--mh");
          }
        }
        if (window.ResizeObserver && mbarEl) {
          new ResizeObserver(syncMbarOffset).observe(mbarEl);
        }
        function sync() {
          syncSteps();
          syncLayout();
          syncTheme();
          syncLab();
        }

        /* ---- drawer ---- */
        function openDrawer() {
          lastFocus = document.activeElement;
          body.classList.add("mopen");
          drawer.setAttribute("aria-hidden", "false");
          if (menuBtn) menuBtn.setAttribute("aria-expanded", "true");
          sync();
          setTimeout(function () {
            var cur =
              list.querySelector('button[aria-current="step"]') || closeBtn;
            if (cur && cur.focus) cur.focus({ preventScroll: true });
            var box = list.querySelector('button[aria-current="step"]');
            if (box && list.scrollTo)
              list.scrollTo({ top: Math.max(0, box.offsetTop - 80) });
          }, 50);
        }
        function closeDrawer(restore) {
          if (!body.classList.contains("mopen")) return;
          body.classList.remove("mopen");
          drawer.setAttribute("aria-hidden", "true");
          if (menuBtn) menuBtn.setAttribute("aria-expanded", "false");
          if (restore !== false && lastFocus && lastFocus.focus) {
            try {
              lastFocus.focus({ preventScroll: true });
            } catch (e) {}
          }
        }
        if (menuBtn) menuBtn.addEventListener("click", openDrawer);
        if (closeBtn)
          closeBtn.addEventListener("click", function () {
            closeDrawer();
          });
        if (scrim)
          scrim.addEventListener("click", function () {
            if (body.classList.contains("mchat")) {
              closeChat();
              return;
            }
            closeDrawer();
          });
        drawer.addEventListener("keydown", function (e) {
          if (e.key !== "Tab") return;
          var f = drawer.querySelectorAll(
            'button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])',
          );
          var vis = Array.prototype.filter.call(f, function (el) {
            return el.offsetParent !== null;
          });
          if (!vis.length) return;
          var first = vis[0],
            last = vis[vis.length - 1];
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        });

        /* ---- controls ---- */
        var tt = $("tt");
        function toggleTheme() {
          if (tt) tt.click();
          syncTheme();
          syncLab();
        }
        var mt = $("mtheme2");
        if (mt) mt.addEventListener("click", toggleTheme);

        document.querySelectorAll("#mdrawer [data-lm]").forEach(function (b) {
          b.addEventListener("click", function () {
            var lm = b.getAttribute("data-lm");
            closeDrawer(false);
            if (lm === "lm1") {
              if (!stage.classList.contains("vt")) $("lm1").click();
              openTerminal(false);
            } else if (lm === "lm3") {
              if (!stage.classList.contains("vs")) $("lm3").click();
              openTerminal(true);
            } else if (lm === "lm0") {
              if (!stage.classList.contains("vl")) $("lm0").click();
              closeTerminal(true);
            }
            syncLayout();
          });
        });

        var mlab = $("mlab");
        if (mlab)
          mlab.addEventListener("click", function () {
            $("lab").click();
            setTimeout(syncLab, 40);
          });
        var mstop = $("mstop");
        if (mstop)
          mstop.addEventListener("click", function () {
            $("lab").click();
            setTimeout(syncLab, 40);
          });
        /* lab URL: on phones it is a popup, not an inline bar */
        var upop = $("murlpop"),
          upInp = $("murlp"),
          upBase = "https://vm-2nrq6nz8.labs.escbash.com",
          upCopyT = 0;
        function upFull() {
          return upBase + (upInp ? upInp.value : "");
        }
        function syncUrlPop() {
          if (upop) {
            var off = !stage.classList.contains("lab");
            upop.classList.toggle("off", off);
            ["murlo", "murlc", "murlp"].forEach(function (i) {
              var e = $(i);
              if (e) e.disabled = off;
            });
          }
        }
        function openUrlPop() {
          if (!upop) return;
          syncUrlPop();
          var d = $("up");
          if (d && upInp) upInp.value = d.value;
          closeDrawer(false);
          body.classList.add("murl");
          upop.setAttribute("aria-hidden", "false");
          setTimeout(function () {
            try {
              upop.focus({ preventScroll: true });
            } catch (e) {}
          }, 60);
        }
        function closeUrlPop() {
          if (!body.classList.contains("murl")) return;
          body.classList.remove("murl");
          upop.setAttribute("aria-hidden", "true");
          var d = $("up");
          if (d && upInp) d.value = upInp.value;
        }
        function copyText(t) {
          var legacy = function () {
            var ta = document.createElement("textarea");
            ta.value = t;
            ta.style.cssText = "position:fixed;left:-999px;top:0";
            document.body.appendChild(ta);
            ta.select();
            var ok = false;
            try {
              ok = document.execCommand("copy");
            } catch (e) {}
            document.body.removeChild(ta);
            return ok ? Promise.resolve() : Promise.reject(new Error("copy"));
          };
          try {
            if (navigator.clipboard && navigator.clipboard.writeText)
              return navigator.clipboard.writeText(t).catch(legacy);
          } catch (e) {}
          return legacy();
        }
        if (upop) {
          $("murlx").addEventListener("click", closeUrlPop);
          upop.addEventListener("click", function (e) {
            if (e.target === upop) closeUrlPop();
          });
          $("murlo").addEventListener("click", function () {
            try {
              window.open(upFull(), "_blank", "noopener");
            } catch (e) {}
          });
          $("murlc").addEventListener("click", function () {
            var b = this;
            copyText(upFull()).then(
              function () {
                b.textContent = "Copied";
                clearTimeout(upCopyT);
                upCopyT = setTimeout(function () {
                  b.textContent = "Copy link";
                }, 1400);
              },
              function () {},
            );
          });
          upInp.addEventListener("keydown", function (e) {
            if (e.key === "Enter") {
              e.preventDefault();
              $("murlo").click();
            }
          });
        }
        function openLabUrl() {
          if (mq.matches) {
            openUrlPop();
            return;
          }
          if (!stage.classList.contains("lab")) return;
          openTerminal(layoutMode() === "vs");
          var bw = $("bw");
          if (bw) bw.click();
          setTimeout(syncLab, 40);
        }
        var murl = $("murl");
        if (murl) murl.addEventListener("click", openLabUrl);

        /* ---- terminal sheet ---- */
        var mtmenu = $("mtmenu"),
          mtnew = $("mtnew");
        function openTerminal(split, silent) {
          closeDrawer(false);
          body.classList.add("mterm");
          body.classList.toggle("msplit", !!split);
          syncTermTitle();
          if (!silent) {
            var back = $("mtback");
            if (back && back.focus)
              setTimeout(function () {
                back.focus({ preventScroll: true });
              }, 30);
          }
        }
        function closeTerminal(silent) {
          if (
            !body.classList.contains("mterm") &&
            !body.classList.contains("msplit")
          )
            return;
          body.classList.remove("mterm", "msplit");
          if (mtmenu) mtmenu.classList.remove("on");
          if (mtnew) mtnew.setAttribute("aria-expanded", "false");
          if (stage.classList.contains("vt")) $("lm2").click();
          if (!silent) {
            var mb = $("mmenu");
            if (mb && mb.focus) mb.focus({ preventScroll: true });
          }
          syncLayout();
        }
        var mtBack = $("mtback");
        if (mtBack)
          mtBack.addEventListener("click", function () {
            closeTerminal();
          });
        if (mtnew)
          mtnew.addEventListener("click", function (e) {
            e.stopPropagation();
            var on = mtmenu.classList.toggle("on");
            mtnew.setAttribute("aria-expanded", on ? "true" : "false");
          });
        if (mtmenu) {
          mtmenu.addEventListener("click", function (e) {
            var b = e.target.closest("button");
            if (!b) return;
            if (b.hasAttribute("data-url")) {
              openLabUrl();
            } else {
              var i = +b.getAttribute("data-ni");
              var ni = document.querySelectorAll("#nw .ni");
              if (ni[i]) ni[i].click();
              setTimeout(syncTermTitle, 60);
            }
            mtmenu.classList.remove("on");
            mtnew.setAttribute("aria-expanded", "false");
          });
          document.addEventListener("click", function (e) {
            if (!mtmenu || !mtmenu.classList.contains("on")) return;
            if (e.target === mtnew || mtmenu.contains(e.target)) return;
            mtmenu.classList.remove("on");
            mtnew.setAttribute("aria-expanded", "false");
          });
        }
        function syncTermTitle() {
          var t = document.querySelector("#tabs .tb.on .lb2");
          var tt2 = $("mttt");
          if (tt2)
            tt2.textContent = t && t.textContent ? t.textContent : "Terminal";
        }
        var tabsBox = $("tabs");
        if (tabsBox)
          new MutationObserver(function () {
            syncTermTitle();
          }).observe(tabsBox, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ["class"],
          });

        /* ---- escbee ---- */
        var ap = $("ap"),
          apHome = ap ? ap.parentNode : null,
          mobileAutoSplit = false;
        var lapEl = $("lessonAudioPlayer"),
          lapHome = lapEl ? lapEl.parentNode : null;
        function placeChat() {
          if (ap) {
            if (mq.matches) {
              if (ap.parentNode !== stage) stage.appendChild(ap);
            } else if (apHome && ap.parentNode !== apHome) {
              apHome.appendChild(ap);
            }
          }
          if (lapEl) {
            if (mq.matches) {
              if (lz && lapEl.parentNode !== lz) lz.appendChild(lapEl);
            } else if (lapHome && lapEl.parentNode !== lapHome) {
              lapHome.appendChild(lapEl);
            }
          }
        }
        function onBreakpointChange() {
          placeChat();
          if (!mq.matches) {
            body.classList.remove("mopen", "mterm", "msplit", "mchat", "murl");
            if (menuBtn) menuBtn.setAttribute("aria-expanded", "false");
            if (drawer) drawer.setAttribute("aria-hidden", "true");
            if (mc) mc.setAttribute("aria-expanded", "false");
            if (upop) upop.setAttribute("aria-hidden", "true");
            if (ap) ap.removeAttribute("aria-hidden");
            if (mtmenu) mtmenu.classList.remove("on");
            if (mtnew) mtnew.setAttribute("aria-expanded", "false");
            if (mobileAutoSplit) {
              mobileAutoSplit = false;
              if (stage.classList.contains("vs") && $("lm2")) $("lm2").click();
            }
            if (typeof fit === "function") fit();
          } else {
            if (stage.classList.contains("b")) {
              stage.classList.remove("b");
              body.classList.add("mchat");
              if (mc) mc.setAttribute("aria-expanded", "true");
              if (ap) ap.setAttribute("aria-hidden", "false");
            }
            if (!body.classList.contains("mterm")) {
              if (!stage.classList.contains("vs") && !stage.classList.contains("vt")) {
                mobileAutoSplit = true;
                if ($("lm3")) $("lm3").click();
              }
              openTerminal(true, true);
            }
          }
          sync();
        }
        placeChat();
        if (mq.addEventListener) mq.addEventListener("change", onBreakpointChange);
        function openChat() {
          closeDrawer(false);
          if (mq.matches) {
            body.classList.add("mchat");
            if (mc) mc.setAttribute("aria-expanded", "true");
            if (ap) ap.setAttribute("aria-hidden", "false");
            return;
          }
          openTerminal(layoutMode() === "vs");
          if (!stage.classList.contains("b")) $("ai").click();
        }
        function closeChat() {
          if (mq.matches) {
            body.classList.remove("mchat");
            if (mc) mc.setAttribute("aria-expanded", "false");
            if (ap) ap.setAttribute("aria-hidden", "true");
            return;
          }
          if (stage.classList.contains("b")) $("ax").click();
        }
        function toggleChat() {
          if (mq.matches) {
            if (body.classList.contains("mchat")) closeChat();
            else openChat();
            return;
          }
          if (!body.classList.contains("mterm"))
            openTerminal(layoutMode() === "vs");
          if (stage.classList.contains("b")) $("ax").click();
          else $("ai").click();
        }
        var mc = $("mchatb");
        if (mc) mc.addEventListener("click", toggleChat);
        var mtc = $("mtchat");
        if (mtc) mtc.addEventListener("click", toggleChat);
        var axb = $("ax");
        if (axb)
          axb.addEventListener("click", function () {
            body.classList.remove("mchat");
            if (mc) mc.setAttribute("aria-expanded", "false");
            if (ap) ap.setAttribute("aria-hidden", "true");
          });

        /* ---- observers ---- */
        if (sn)
          new MutationObserver(syncSteps).observe(sn, {
            childList: true,
            characterData: true,
            subtree: true,
          });
        new MutationObserver(function () {
          syncLayout();
          syncLab();
        }).observe(stage, { attributes: true, attributeFilter: ["class"] });
        var tmt = $("tmt");
        if (tmt)
          new MutationObserver(syncLab).observe(tmt, {
            childList: true,
            characterData: true,
            subtree: true,
          });
        new MutationObserver(syncTheme).observe(body, {
          attributes: true,
          attributeFilter: ["class"],
        });

        document.addEventListener("keydown", function (e) {
          if (e.key !== "Escape") return;
          if (body.classList.contains("murl")) {
            closeUrlPop();
            return;
          }
          if (mtmenu && mtmenu.classList.contains("on")) {
            mtmenu.classList.remove("on");
            mtnew.setAttribute("aria-expanded", "false");
            return;
          }
          if (body.classList.contains("mchat")) {
            closeChat();
            return;
          }
          if (body.classList.contains("mopen")) {
            closeDrawer();
            return;
          }
          if (stage.classList.contains("b")) {
            $("ax").click();
            return;
          }
          if (body.classList.contains("mterm")) closeTerminal();
        });

        /* mobile default: lesson on top, terminal below */
        if (window.matchMedia("(max-width:1023px)").matches) {
          mobileAutoSplit = true;
          if (!stage.classList.contains("vs")) $("lm3").click();
          openTerminal(true, true);
        }

        sync();
      })();

      /* Smooth cross-page navigation & bfcache restore */
      (function () {
        if (window.__escbashNavBound) return;
        window.__escbashNavBound = true;
        const reducedMotion = () =>
          window.matchMedia &&
          window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const isSameOrigin = (u) =>
          location.protocol === "file:"
            ? u.protocol === "file:"
            : u.origin === location.origin;

        window.__escbashGo = function (dest) {
          if (!dest) return;
          let url;
          try {
            url = new URL(dest, location.href);
          } catch (e) {
            location.href = dest;
            return;
          }
          if (url.pathname === location.pathname && url.hash) {
            location.href = url.href;
            return;
          }
          if (reducedMotion()) {
            location.href = url.href;
            return;
          }
          const hasNativeVT =
            "onpagereveal" in window &&
            typeof CSS !== "undefined" &&
            CSS.supports &&
            CSS.supports("view-transition-name", "top-header");
          if (hasNativeVT) {
            location.href = url.href;
            return;
          }
          document.documentElement.classList.add("page-leaving");
          setTimeout(() => {
            location.href = url.href;
          }, 140);
        };

        document.addEventListener("click", (e) => {
          if (e.defaultPrevented) return;
          const a = e.target.closest("a[href]");
          if (
            !a ||
            a.target ||
            a.hasAttribute("download") ||
            e.metaKey ||
            e.ctrlKey ||
            e.shiftKey ||
            e.altKey ||
            e.button !== 0
          )
            return;
          const rawHref = a.getAttribute("href") || "";
          if (!rawHref || rawHref.startsWith("#")) return;
          let url;
          try {
            url = new URL(a.href, location.href);
          } catch (err) {
            return;
          }
          if (!isSameOrigin(url) || !/\.html?$/i.test(url.pathname)) return;
          if (url.pathname === location.pathname && url.hash) return;
          e.preventDefault();
          window.__escbashGo(url.href);
        });

        window.addEventListener("pageshow", () => {
          document.documentElement.classList.remove("page-leaving");
        });
      })();

/* ==========================================================================
         Lesson Audio Player Controller ("Explain this lesson · 2:23")
         ========================================================================== */
      (function initLessonAudioPlayer() {
        const totalDuration = 143; // 2 minutes 23 seconds = 143 seconds
        let currentTime = 0;
        let isPlaying = false;
        let playbackRate = 1.0;
        let timerId = null;

        const explainBtn = document.getElementById("explainLessonBtn");
        const player = document.getElementById("lessonAudioPlayer");
        const bottomProgress = document.getElementById("lapBottomProgress");
        const playPauseBtn = document.getElementById("lapPlayPauseBtn");
        const pauseIcon = player ? player.querySelector(".lap-pause-icon") : null;
        const playIcon = player ? player.querySelector(".lap-play-icon") : null;
        const curTimeEl = document.getElementById("lapCurTime");
        const remTimeEl = document.getElementById("lapRemTime");
        const fillEl = document.getElementById("lapFill");
        const thumbEl = document.getElementById("lapThumb");
        const seekWrap = document.getElementById("lapSeekWrap");
        const closeBtn = document.getElementById("lapCloseBtn");

        const speedBtn = document.getElementById("lapSpeedBtn");
        const speedVal = document.getElementById("lapSpeedVal");
        const speedMenu = document.getElementById("lapSpeedMenu");

        const langBtn = document.getElementById("lapLangBtn");
        const langVal = document.getElementById("lapLangVal");
        const langMenu = document.getElementById("lapLangMenu");

        const mexpBtn = document.getElementById("mexp");

        function formatTime(sec) {
          const s = Math.max(0, Math.floor(sec));
          const m = Math.floor(s / 60);
          const rem = s % 60;
          return m + ":" + (rem < 10 ? "0" : "") + rem;
        }

        function updateUI() {
          if (curTimeEl) curTimeEl.textContent = formatTime(currentTime);
          const remaining = Math.max(0, totalDuration - currentTime);
          if (remTimeEl) remTimeEl.textContent = "-" + formatTime(remaining);
          const pct = Math.min(100, Math.max(0, (currentTime / totalDuration) * 100));
          if (fillEl) fillEl.style.width = pct + "%";
          if (thumbEl) thumbEl.style.left = pct + "%";
          if (seekWrap) seekWrap.setAttribute("aria-valuenow", Math.round(currentTime));
        }

        function speakExplanation() {
          if (!('speechSynthesis' in window)) return;
          try {
            window.speechSynthesis.cancel();
            const text = "Welcome to Linux Shell Basics. In this lesson, you will learn how the shell reads your commands and runs them. On Ubuntu, it is called bash. Let's begin by checking who you are with whoami, your machine name with hostname, and the system date.";
            const utter = new SpeechSynthesisUtterance(text);
            utter.rate = playbackRate;
            window.speechSynthesis.speak(utter);
          } catch (e) {}
        }

        function stopExplanation() {
          if ('speechSynthesis' in window) {
            try { window.speechSynthesis.cancel(); } catch (e) {}
          }
        }

        function setPlayingState(playing) {
          isPlaying = playing;
          if (isPlaying) {
            if (pauseIcon) pauseIcon.style.display = "block";
            if (playIcon) playIcon.style.display = "none";
            if (playPauseBtn) {
              playPauseBtn.setAttribute("aria-label", "Pause explanation");
              playPauseBtn.title = "Pause";
            }
            startTimer();
            speakExplanation();
          } else {
            if (pauseIcon) pauseIcon.style.display = "none";
            if (playIcon) playIcon.style.display = "block";
            if (playPauseBtn) {
              playPauseBtn.setAttribute("aria-label", "Play explanation");
              playPauseBtn.title = "Play";
            }
            stopTimer();
            stopExplanation();
          }
        }

        function startTimer() {
          stopTimer();
          const stepMs = 250;
          timerId = setInterval(function () {
            currentTime += (stepMs / 1000) * playbackRate;
            if (currentTime >= totalDuration) {
              currentTime = totalDuration;
              updateUI();
              setPlayingState(false);
              return;
            }
            updateUI();
          }, stepMs);
        }

        function stopTimer() {
          if (timerId) {
            clearInterval(timerId);
            timerId = null;
          }
        }

        function openPlayer() {
          if (explainBtn) explainBtn.style.display = "none";
          if (player) player.style.display = "inline-flex";
          if (bottomProgress) {
            bottomProgress.classList.add("active");
            bottomProgress.style.display = "flex";
          }
          setPlayingState(true);
          updateUI();
        }

        function closePlayer() {
          setPlayingState(false);
          currentTime = 0;
          updateUI();
          if (player) player.style.display = "none";
          if (bottomProgress) {
            bottomProgress.classList.remove("active");
            bottomProgress.classList.remove("dragging");
            bottomProgress.style.display = "none";
          }
          if (explainBtn) explainBtn.style.display = "inline-flex";
          closeMenus();
        }

        function closeMenus() {
          if (speedMenu) speedMenu.style.display = "none";
          if (langMenu) langMenu.style.display = "none";
          if (speedBtn) speedBtn.setAttribute("aria-expanded", "false");
          if (langBtn) langBtn.setAttribute("aria-expanded", "false");
        }

        if (explainBtn) {
          explainBtn.addEventListener("focus", function () {
            openPlayer();
          });
          explainBtn.addEventListener("click", function (e) {
            e.stopPropagation();
            openPlayer();
          });
        }

        if (player) {
          player.addEventListener("focusout", function (e) {
            const next = e.relatedTarget;
            if (next && (player.contains(next) || (seekWrap && seekWrap.contains(next)))) {
              return;
            }
            // Stop/pause explanation when focus moves away
            setPlayingState(false);
          });
        }

        if (mexpBtn) {
          mexpBtn.addEventListener("click", function (e) {
            e.stopPropagation();
            openPlayer();
          });
        }

        if (playPauseBtn) {
          playPauseBtn.addEventListener("click", function (e) {
            e.stopPropagation();
            setPlayingState(!isPlaying);
          });
        }

        if (closeBtn) {
          closeBtn.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            closePlayer();
          });
        }

        if (player) {
          player.addEventListener("click", function (e) {
            if (e.target && e.target.closest && e.target.closest("#lapCloseBtn, .lap-close-btn")) {
              e.preventDefault();
              e.stopPropagation();
              closePlayer();
            }
          });
        }

        // Seekbar interaction (click & drag)
        let isDragging = false;
        function seekTo(e) {
          if (!seekWrap) return;
          const rect = seekWrap.getBoundingClientRect();
          const clientX = e.clientX !== undefined ? e.clientX : (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
          const pos = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
          currentTime = pos * totalDuration;
          updateUI();
        }

        if (seekWrap) {
          seekWrap.addEventListener("click", function (e) {
            e.stopPropagation();
            seekTo(e);
          });
          seekWrap.addEventListener("mousedown", function (e) {
            e.stopPropagation();
            isDragging = true;
            if (bottomProgress) bottomProgress.classList.add("dragging");
            seekTo(e);
            function onMove(ev) {
              if (isDragging) seekTo(ev);
            }
            function onUp() {
              isDragging = false;
              if (bottomProgress) bottomProgress.classList.remove("dragging");
              window.removeEventListener("mousemove", onMove);
              window.removeEventListener("mouseup", onUp);
            }
            window.addEventListener("mousemove", onMove);
            window.addEventListener("mouseup", onUp);
          });

          seekWrap.addEventListener("touchstart", function (e) {
            e.stopPropagation();
            isDragging = true;
            if (bottomProgress) bottomProgress.classList.add("dragging");
            seekTo(e);
            function onTouchMove(ev) {
              if (isDragging) seekTo(ev);
            }
            function onTouchEnd() {
              isDragging = false;
              if (bottomProgress) bottomProgress.classList.remove("dragging");
              window.removeEventListener("touchmove", onTouchMove);
              window.removeEventListener("touchend", onTouchEnd);
            }
            window.addEventListener("touchmove", onTouchMove, { passive: true });
            window.addEventListener("touchend", onTouchEnd);
          }, { passive: true });

          seekWrap.addEventListener("keydown", function (e) {
            if (e.key === "ArrowLeft") {
              currentTime = Math.max(0, currentTime - 5);
              updateUI();
              e.preventDefault();
            } else if (e.key === "ArrowRight") {
              currentTime = Math.min(totalDuration, currentTime + 5);
              updateUI();
              e.preventDefault();
            } else if (e.key === " ") {
              setPlayingState(!isPlaying);
              e.preventDefault();
            }
          });
        }


        // Speed Menu toggle
        if (speedBtn && speedMenu) {
          speedBtn.addEventListener("click", function (e) {
            e.stopPropagation();
            const isOpen = speedMenu.style.display === "flex";
            closeMenus();
            if (!isOpen) {
              speedMenu.style.display = "flex";
              speedBtn.setAttribute("aria-expanded", "true");
            }
          });

          speedMenu.querySelectorAll(".lap-menu-item").forEach(function (item) {
            item.addEventListener("click", function (e) {
              e.stopPropagation();
              const rate = parseFloat(item.getAttribute("data-speed"));
              if (!isNaN(rate)) {
                playbackRate = rate;
                if (speedVal) speedVal.textContent = rate.toFixed(rate % 1 === 0 ? 1 : 2).replace(/\.0$/, ".0") + "×";
                speedMenu.querySelectorAll(".lap-menu-item").forEach(function (b) {
                  b.classList.toggle("active", b === item);
                });
              }
              closeMenus();
            });
          });
        }

        // Language Menu toggle
        if (langBtn && langMenu) {
          langBtn.addEventListener("click", function (e) {
            e.stopPropagation();
            const isOpen = langMenu.style.display === "flex";
            closeMenus();
            if (!isOpen) {
              langMenu.style.display = "flex";
              langBtn.setAttribute("aria-expanded", "true");
            }
          });

          langMenu.querySelectorAll(".lap-menu-item").forEach(function (item) {
            item.addEventListener("click", function (e) {
              e.stopPropagation();
              const lang = item.getAttribute("data-lang");
              if (lang) {
                if (langVal) langVal.textContent = lang;
                langMenu.querySelectorAll(".lap-menu-item").forEach(function (b) {
                  b.classList.toggle("active", b === item);
                });
              }
              closeMenus();
            });
          });
        }

        // Close dropdowns when clicking outside
        document.addEventListener("click", function (e) {
          if (player && !player.contains(e.target)) {
            closeMenus();
          }
        });

        // Global bridge for verification
        window.lessonAudioPlayer = {
          open: openPlayer,
          close: closePlayer,
          togglePlay: function () { setPlayingState(!isPlaying); },
          setPlaying: function (p) { setPlayingState(p); },
          setTime: function (t) { currentTime = t; updateUI(); },
          getStatus: function () {
            return {
              isOpen: player ? player.style.display !== "none" : false,
              isPlaying: isPlaying,
              currentTime: currentTime,
              totalDuration: totalDuration,
              playbackRate: playbackRate
            };
          }
        };
      })();

// --- Merged from lab-tour.js ---
(function () {
  "use strict";

  var STORAGE_KEY = "esc-lab-tour-done";
  var active = false;
  var currentStep = 0;
  var panes = null;
  var spotlightEl = null;
  var cardEl = null;
  var initialState = null;

  function isMobile() {
    return window.matchMedia("(max-width: 1023px)").matches;
  }

  function $(id) {
    return document.getElementById(id);
  }

  function closeMobileDrawer() {
    var x = $("mdrawerx");
    if (document.body.classList.contains("mopen") && x) {
      x.click();
    }
  }

  function openMobileDrawer() {
    var m = $("mmenu");
    if (!document.body.classList.contains("mopen") && m) {
      m.click();
    }
  }

  function openLessonSidebar() {
    if (isMobile()) {
      openMobileDrawer();
      return;
    }
    var st = $("stage");
    var vb = $("vb");
    var hb = $("hb");
    if (st && st.classList.contains("c")) {
      if (vb) vb.click();
      else if (hb) hb.click();
    }
  }

  function closeLessonSidebar() {
    if (isMobile()) {
      closeMobileDrawer();
      return;
    }
    var st = $("stage");
    var hb = $("hb");
    if (st && !st.classList.contains("c") && hb) {
      hb.click();
    }
  }

  function openEscbeeSidebar() {
    var st = $("stage");
    if (isMobile()) {
      if (!document.body.classList.contains("mchat") && $("mchatb")) {
        $("mchatb").click();
      }
      return;
    }
    if (st && !st.classList.contains("b") && $("ai")) {
      $("ai").click();
    }
  }

  function closeEscbeeSidebar() {
    var st = $("stage");
    var ax = $("ax");
    if (isMobile()) {
      if (document.body.classList.contains("mchat") && ax) ax.click();
      return;
    }
    if (st && st.classList.contains("b") && ax) {
      ax.click();
    }
  }

  function openTerminalSidebar() {
    var st = $("stage");
    var th = $("th");
    if (st && !st.classList.contains("n") && th) {
      th.click();
    }
  }

  function closeTerminalSidebar() {
    var st = $("stage");
    var th = $("th");
    if (st && st.classList.contains("n") && th) {
      th.click();
    }
  }

  function openTabMenu() {
    var m = $("mtmenu");
    var btn = $("mtnew");
    if (m && btn && !m.classList.contains("on")) {
      btn.click();
    }
  }

  function closeTabMenu() {
    var m = $("mtmenu");
    var btn = $("mtnew");
    if (m && btn && m.classList.contains("on")) {
      btn.click();
    }
  }

  function ensureLabStarted() {
    var st = $("stage");
    var lab = $("lab");
    if (st && !st.classList.contains("lab") && lab) {
      lab.click();
    }
  }

  function ensureLabStopped() {
    var st = $("stage");
    var lab = $("lab");
    if (st && st.classList.contains("lab") && lab) {
      lab.click();
    }
  }

  var STEPS = [
    {
      title: "Welcome to the escbash Lab",
      body: "Read lessons on one side and practice on a real Linux machine on the other. Let's take a quick 11-step tour.",
      desktop: null,
      mobile: null,
      before: function () {
        closeLessonSidebar();
        closeEscbeeSidebar();
        closeTerminalSidebar();
        closeTabMenu();
      }
    },
    {
      title: "Lesson Workspace",
      body: "The left side holds your lesson content, code blocks, tasks, and quizzes.",
      desktop: "#lbg",
      mobile: "#lz",
      before: function () {
        closeLessonSidebar();
        closeEscbeeSidebar();
        closeTerminalSidebar();
        closeTabMenu();
      }
    },
    {
      title: "Terminal Workspace",
      body: "The right side is your live Linux terminal where you run commands and test your work.",
      desktop: "#tm",
      mobile: "#tm",
      before: function () {
        closeLessonSidebar();
        closeEscbeeSidebar();
        closeTerminalSidebar();
        closeTabMenu();
      }
    },
    {
      title: "Lesson Sidebar",
      body: "Jump between steps in this module, track your progress, or use the back arrow to return to the course overview anytime.",
      desktop: "#sb",
      mobile: "#mdrawer",
      before: function () {
        closeEscbeeSidebar();
        closeTerminalSidebar();
        closeTabMenu();
        openLessonSidebar();
      }
    },
    {
      title: "Layout Switcher & Theme",
      body: "Switch between Lesson only, Terminal only, Side-by-side, or Terminal below, and toggle between dark and light themes.",
      desktop: "#sfb",
      mobile: "#mdrawer .mlay",
      before: function () {
        closeEscbeeSidebar();
        closeTerminalSidebar();
        closeTabMenu();
        openLessonSidebar();
      }
    },
    {
      title: "Ask escbee AI",
      body: "Stuck on a command or concept? Click escbee anytime to open the AI assistant and get contextual help.",
      desktop: "#ap",
      mobile: "#ap",
      before: function () {
        closeLessonSidebar();
        closeTerminalSidebar();
        closeTabMenu();
        openEscbeeSidebar();
      }
    },
    {
      title: "Terminal Panel",
      body: "Toggle the terminal sidebar or expand it into view when you want more room to run commands.",
      desktop: "#tm",
      mobile: "#mtb",
      before: function () {
        closeLessonSidebar();
        closeEscbeeSidebar();
        closeTerminalSidebar();
        closeTabMenu();
      }
    },
    {
      title: "Terminals, Notes & Editor",
      body: "Open the terminal sidebar to switch between multiple Terminals, the code Editor (VS Code), Data client, Notes, and Lab URL browser.",
      desktop: "#nw",
      mobile: "#mtmenu",
      before: function () {
        closeLessonSidebar();
        closeEscbeeSidebar();
        if (isMobile()) {
          openTabMenu();
        } else {
          openTerminalSidebar();
        }
      }
    },
    {
      title: "Start Lab",
      body: "Click Start Lab to boot your dedicated Linux machine and begin the session timer.",
      desktop: "#tm",
      mobile: "#mstop",
      before: function () {
        closeLessonSidebar();
        closeEscbeeSidebar();
        closeTerminalSidebar();
        closeTabMenu();
        ensureLabStarted();
      }
    },
    {
      title: "Explain Lesson & Stop Lab",
      body: "Use Explain this lesson for an audio walkthrough in multiple languages and speeds, and Stop Lab when you're done for the day.",
      desktop: "#lhb, #lab",
      mobile: "#mexp, #mstop",
      before: function () {
        closeLessonSidebar();
        closeEscbeeSidebar();
        closeTerminalSidebar();
        closeTabMenu();
        ensureLabStarted();
      }
    },
    {
      title: "Previous & Next",
      body: "Move forward or backward between lessons, tasks, and quizzes using Previous and Next. You can replay this tour anytime from the Tour button.",
      desktop: "#lfb",
      mobile: "#mfoot",
      before: function () {
        closeLessonSidebar();
        closeEscbeeSidebar();
        closeTerminalSidebar();
        closeTabMenu();
      }
    }
  ];

  function getTargetRect(step) {
    var sel = isMobile() ? step.mobile : step.desktop;
    if (!sel) return null;
    var els = document.querySelectorAll(sel);
    var firstEl = null;
    for (var i = 0; i < els.length; i++) {
      var r0 = els[i].getBoundingClientRect();
      if (r0.width === 0 && r0.height === 0) continue;
      firstEl = els[i];
      break;
    }
    if (!firstEl) return null;
    firstEl.scrollIntoView({ block: "nearest", inline: "nearest" });
    var left = Infinity, top = Infinity, right = -Infinity, bottom = -Infinity;
    for (var j = 0; j < els.length; j++) {
      var rect = els[j].getBoundingClientRect();
      if (rect.width === 0 && rect.height === 0) continue;
      left = Math.min(left, rect.left);
      top = Math.min(top, rect.top);
      right = Math.max(right, rect.right);
      bottom = Math.max(bottom, rect.bottom);
    }
    return {
      left: left,
      top: top,
      right: right,
      bottom: bottom,
      width: right - left,
      height: bottom - top
    };
  }

  function setPane(pane, top, left, width, height) {
    if (!pane) return;
    pane.style.top = top + "px";
    pane.style.left = left + "px";
    pane.style.width = Math.max(0, width) + "px";
    pane.style.height = Math.max(0, height) + "px";
  }

  function positionElements(step) {
    if (!spotlightEl || !cardEl || !panes) return;

    var r = getTargetRect(step);
    var vw = window.innerWidth;
    var vh = window.innerHeight;

    if (!r) {
      setPane(panes.top, 0, 0, vw, vh);
      setPane(panes.bottom, 0, 0, 0, 0);
      setPane(panes.left, 0, 0, 0, 0);
      setPane(panes.right, 0, 0, 0, 0);
      spotlightEl.style.opacity = "0";
      spotlightEl.style.top = vh / 2 + "px";
      spotlightEl.style.left = vw / 2 + "px";
      spotlightEl.style.width = "0px";
      spotlightEl.style.height = "0px";

      cardEl.style.top = Math.max(16, (vh - cardEl.offsetHeight) / 2) + "px";
      cardEl.style.left = Math.max(12, (vw - cardEl.offsetWidth) / 2) + "px";
      return;
    }

    var pad = 6;
    var x1 = Math.max(0, r.left - pad);
    var y1 = Math.max(0, r.top - pad);
    var w = Math.min(vw - x1, r.width + pad * 2);
    var h = Math.min(vh - y1, r.height + pad * 2);
    var x2 = x1 + w;
    var y2 = y1 + h;

    setPane(panes.top, 0, 0, vw, y1);
    setPane(panes.bottom, y2, 0, vw, vh - y2);
    setPane(panes.left, y1, 0, x1, h);
    setPane(panes.right, y1, x2, vw - x2, h);

    spotlightEl.style.opacity = "1";
    spotlightEl.style.top = y1 + "px";
    spotlightEl.style.left = x1 + "px";
    spotlightEl.style.width = w + "px";
    spotlightEl.style.height = h + "px";

    var cardW = cardEl.offsetWidth || 340;
    var cardH = cardEl.offsetHeight || 190;
    var gap = 14;
    var top, left;

    if (r.bottom + gap + cardH <= vh - 12) {
      top = r.bottom + gap;
      left = Math.min(Math.max(12, r.left), vw - cardW - 12);
    } else if (r.top - gap - cardH >= 12) {
      top = r.top - cardH - gap;
      left = Math.min(Math.max(12, r.left), vw - cardW - 12);
    } else if (r.right + gap + cardW <= vw - 12) {
      left = r.right + gap;
      top = Math.max(12, Math.min(r.top + 16, vh - cardH - 12));
    } else if (r.left - gap - cardW >= 12) {
      left = r.left - cardW - gap;
      top = Math.max(12, Math.min(r.top + 16, vh - cardH - 12));
    } else {
      top = Math.max(12, (vh - cardH) / 2);
      left = Math.max(12, (vw - cardW) / 2);
    }

    cardEl.style.top = top + "px";
    cardEl.style.left = left + "px";
  }

  function renderStep() {
    var step = STEPS[currentStep];
    if (typeof step.before === "function") {
      try {
        step.before();
      } catch (e) {}
    }

    var isLast = currentStep === STEPS.length - 1;
    cardEl.innerHTML =
      '<div class="ltour-step-meta">' +
      "<span>Step " + (currentStep + 1) + " of " + STEPS.length + "</span>" +
      "</div>" +
      '<h3 class="ltour-title">' + step.title + "</h3>" +
      '<p class="ltour-body">' + step.body + "</p>" +
      '<div class="ltour-actions">' +
      '<button type="button" class="ltour-btn ltour-btn-skip" data-ltour="skip">Skip</button>' +
      '<div class="ltour-btn-group">' +
      '<button type="button" class="ltour-btn" data-ltour="prev"' + (currentStep === 0 ? " disabled" : "") + ">Back</button>" +
      '<button type="button" class="ltour-btn ltour-btn-primary" data-ltour="next">' + (isLast ? "Finish" : "Next") + "</button>" +
      "</div>" +
      "</div>";

    if (currentStep === 0) {
      positionElements(step);
    } else {
      setTimeout(function () {
        positionElements(step);
      }, typeof step.before === "function" ? 340 : 40);
    }
  }

  function endTour(markDone) {
    if (!active) return;
    active = false;
    if (markDone) {
      try {
        localStorage.setItem(STORAGE_KEY, "1");
      } catch (e) {}
    }
    closeMobileDrawer();
    closeTabMenu();
    if (initialState) {
      if (initialState.lessonOpen) openLessonSidebar();
      else closeLessonSidebar();
      if (initialState.escbeeOpen) openEscbeeSidebar();
      else closeEscbeeSidebar();
      if (initialState.termSidebarOpen) openTerminalSidebar();
      else closeTerminalSidebar();
      if (initialState.labRunning) ensureLabStarted();
      else ensureLabStopped();
      initialState = null;
    } else {
      closeLessonSidebar();
      closeEscbeeSidebar();
      closeTerminalSidebar();
    }
    if (panes) {
      panes.top.remove();
      panes.bottom.remove();
      panes.left.remove();
      panes.right.remove();
    }
    if (spotlightEl) spotlightEl.remove();
    if (cardEl) cardEl.remove();
    panes = null;
    spotlightEl = null;
    cardEl = null;
    document.removeEventListener("keydown", onKeyDown, true);
    window.removeEventListener("resize", onResize);
  }

  function onKeyDown(e) {
    if (!active) return;
    if (e.key === "Escape") {
      e.preventDefault();
      endTour(true);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      if (currentStep < STEPS.length - 1) {
        currentStep++;
        renderStep();
      } else {
        endTour(true);
      }
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      if (currentStep > 0) {
        currentStep--;
        renderStep();
      }
    }
  }

  function onResize() {
    if (!active) return;
    positionElements(STEPS[currentStep]);
  }

  function startTour() {
    if (active) return;
    active = true;
    currentStep = 0;

    var st = $("stage");
    initialState = {
      labRunning: !!(st && st.classList.contains("lab")),
      lessonOpen: !!(st && !st.classList.contains("c")),
      escbeeOpen: !!(st && st.classList.contains("b")),
      termSidebarOpen: !!(st && st.classList.contains("n"))
    };

    function makePane() {
      var p = document.createElement("div");
      p.className = "ltour-backdrop-pane";
      document.body.appendChild(p);
      return p;
    }

    panes = {
      top: makePane(),
      bottom: makePane(),
      left: makePane(),
      right: makePane()
    };
    setPane(panes.top, 0, 0, window.innerWidth, window.innerHeight);
    setPane(panes.bottom, 0, 0, 0, 0);
    setPane(panes.left, 0, 0, 0, 0);
    setPane(panes.right, 0, 0, 0, 0);

    spotlightEl = document.createElement("div");
    spotlightEl.className = "ltour-spotlight";
    spotlightEl.style.top = window.innerHeight / 2 + "px";
    spotlightEl.style.left = window.innerWidth / 2 + "px";
    spotlightEl.style.width = "0px";
    spotlightEl.style.height = "0px";
    spotlightEl.style.opacity = "0";

    cardEl = document.createElement("div");
    cardEl.className = "ltour-card";
    cardEl.style.top = Math.max(16, (window.innerHeight - 200) / 2) + "px";
    cardEl.style.left = Math.max(12, (window.innerWidth - 360) / 2) + "px";
    cardEl.setAttribute("role", "dialog");
    cardEl.setAttribute("aria-modal", "true");
    cardEl.setAttribute("aria-label", "Lab walkthrough");

    cardEl.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-ltour]");
      if (!btn) return;
      var act = btn.getAttribute("data-ltour");
      if (act === "skip") {
        endTour(true);
      } else if (act === "prev" && currentStep > 0) {
        currentStep--;
        renderStep();
      } else if (act === "next") {
        if (currentStep < STEPS.length - 1) {
          currentStep++;
          renderStep();
        } else {
          endTour(true);
        }
      }
    });

    document.body.appendChild(spotlightEl);
    document.body.appendChild(cardEl);

    document.addEventListener("keydown", onKeyDown, true);
    window.addEventListener("resize", onResize);
    renderStep();
  }

  function injectReplayButton() {
    var rg = $("rg");
    if (rg && !rg.querySelector(".ltour-trigger")) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "ltour-trigger";
      btn.title = "Replay lab walkthrough";
      btn.textContent = "? Tour";
      btn.addEventListener("click", startTour);
      rg.insertBefore(btn, rg.firstChild);
    }
  }

  window.escLabTour = { start: startTour };

  document.addEventListener("DOMContentLoaded", function () {
    injectReplayButton();

    var forceTour = false;
    try {
      forceTour = new URLSearchParams(window.location.search).get("tour") === "1";
    } catch (e) {}

    var done = false;
    try {
      done = localStorage.getItem(STORAGE_KEY) === "1";
    } catch (e) {}

    if (forceTour || !done) {
      setTimeout(startTour, 600);
    }
  });
})();
