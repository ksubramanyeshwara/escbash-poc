/* JS/roadmap-data.js — Data Engineer roadmap state & renderer. */
/* ===== DATA ENGINEER ROADMAP STATE & RENDERER ===== */
      (() => {
        const STORAGE_KEY = "escbash_roadmap_data_v1";

        const TOOL_ICONS = {
          postgres: `<svg viewBox="0 0 24 24" fill="none" stroke="var(--pg-color)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5.5" rx="7" ry="2.8" fill="var(--pg-color)" fill-opacity="0.16"/><path d="M5 5.5v6.5c0 1.55 3.13 2.8 7 2.8s7-1.25 7-2.8V5.5"/><path d="M5 12v6.5c0 1.55 3.13 2.8 7 2.8s7-1.25 7-2.8V12"/></svg>`,
          python: `<svg viewBox="0 0 128 128"><linearGradient id="pyA" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#387eb8"/><stop offset="1" stop-color="#366994"/></linearGradient><linearGradient id="pyB" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffe052"/><stop offset="1" stop-color="#ffc331"/></linearGradient><path fill="url(#pyA)" d="M63.4 9.5c-28.4 0-26.6 12.3-26.6 12.3l.1 12.8h27.1v3.8H26.2S8 36.3 8 64.9s15.9 27.6 15.9 27.6h9.5V79.2s-.5-15.9 15.6-15.9h26.9s15.1.2 15.1-14.6V24.2S93.3 9.5 63.4 9.5zM48.5 18.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8z"/><path fill="url(#pyB)" d="M64.6 118.5c28.4 0 26.6-12.3 26.6-12.3l-.1-12.8H64v-3.8h37.8s18.2 2.1 18.2-26.5-15.9-27.6-15.9-27.6h-9.5v13.3s.5 15.9-15.6 15.9H52.1s-15.1-.2-15.1 14.6v24.5s-2.3 14.7 27.6 14.7zm14.9-8.6a4.9 4.9 0 1 1 0-9.8 4.9 4.9 0 0 1 0 9.8z"/></svg>`,
          airflow: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 12c0-4.5 2-8 5.5-8 2.2 0 3.5 1.5 3.5 3.4 0 2.9-3.6 4.6-9 4.6z" fill="#00c7d4"/><path d="M12 12c4.5 0 8 2 8 5.5 0 2.2-1.5 3.5-3.4 3.5-2.9 0-4.6-3.6-4.6-9z" fill="#017cee"/><path d="M12 12c0 4.5-2 8-5.5 8-2.2 0-3.5-1.5-3.5-3.4 0-2.9 3.6-4.6 9-4.6z" fill="#00a1f1"/><path d="M12 12c-4.5 0-8-2-8-5.5C4 4.3 5.5 3 7.4 3c2.9 0 4.6 3.6 4.6 9z" fill="#00c7d4" opacity="0.85"/><circle cx="12" cy="12" r="2" fill="var(--surface)"/></svg>`,
          spark: `<svg viewBox="0 0 24 24" fill="none"><path d="M14.4 2.5l1.4 5.2 5.2-1.1-3.1 4.4 4.2 3.3-5.2.9.9 5.3-4.6-2.9-3.6 4-.5-5.3-5-.9 3.5-4-3.1-4.3 5.1 1.1L14.4 2.5z" fill="#e25a1c"/><circle cx="13" cy="13" r="2.2" fill="#ffd166"/></svg>`,
          kafka: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9.5" cy="12" r="2.6"/><circle cx="9.5" cy="4.8" r="2"/><circle cx="9.5" cy="19.2" r="2"/><circle cx="16.5" cy="8.2" r="2"/><circle cx="16.5" cy="15.8" r="2"/><line x1="9.5" y1="6.8" x2="9.5" y2="9.4"/><line x1="9.5" y1="14.6" x2="9.5" y2="17.2"/><line x1="11.8" y1="10.8" x2="14.8" y2="9.2"/><line x1="11.8" y1="13.2" x2="14.8" y2="14.8"/></svg>`,
          dbt: `<svg viewBox="0 0 24 24" fill="none"><path d="M4.5 5.5L10 11H4.5V5.5zM19.5 5.5L14 11h5.5V5.5zM4.5 18.5L10 13H4.5v5.5zM19.5 18.5L14 13h5.5v5.5z" fill="#ff694b"/><path d="M7.5 8.5L12 12l4.5-3.5L12 12l4.5 3.5L12 12l-4.5 3.5L12 12z" stroke="#ff694b" stroke-width="2.4" stroke-linejoin="round"/></svg>`,
          snowflake: `<svg viewBox="0 0 24 24" fill="none" stroke="#29b5e8" stroke-width="1.9" stroke-linecap="round"><line x1="12" y1="2.5" x2="12" y2="21.5"/><line x1="3.8" y1="7.2" x2="20.2" y2="16.8"/><line x1="20.2" y1="7.2" x2="3.8" y2="16.8"/><polyline points="9.8 4.8 12 7 14.2 4.8"/><polyline points="9.8 19.2 12 17 14.2 19.2"/><polyline points="5.2 9.8 7.8 9.5 7 6.9"/><polyline points="17 17.1 16.2 14.5 18.8 14.2"/><polyline points="18.8 9.8 16.2 9.5 17 6.9"/><polyline points="7 17.1 7.8 14.5 5.2 14.2"/></svg>`,
        };

        const ROADMAP_COURSES = [
          {
            id: "sql",
            num: "01",
            title: "SQL with PostgreSQL",
            desc: "Design relational schemas, write analytical queries with JOINs, CTEs, and window functions, and tune indexes.",
            hours: 18,
            icon: "postgres",
            gridClass: "rm-pos-1",
            delayClass: "delay-1",
            arrowDir: "right",
            lessons: [
              "Relational schemas, keys and normalization",
              "Filtering, sorting and multi-table JOINs",
              "Aggregations, GROUP BY and HAVING",
              "Subqueries and Common Table Expressions (CTEs)",
              "Window functions for analytics and ranking",
              "Indexing, query plans and EXPLAIN ANALYZE",
              "Transactions, isolation levels and constraints",
              "Views, materialized views and partitioning",
            ],
            tasks: [
              { kind: "Task", title: "Model an e-commerce order schema" },
              { kind: "Task", title: "Write rolling 7-day revenue window queries" },
              { kind: "Task", title: "Optimize a slow report with composite indexes" },
              { kind: "Task", title: "Load bulk CSV data safely inside a transaction" },
              { kind: "Quiz", title: "Relational algebra and JOIN semantics" },
              { kind: "Quiz", title: "CTEs, window frames and aggregations" },
              { kind: "Quiz", title: "Query planning and indexing trade-offs" },
            ],
            projectIdea:
              "Design a normalized PostgreSQL analytics schema for a ride-sharing platform, backfill sample trip logs, and write fast KPI views powered by CTEs and window functions.",
            tutorTip:
              "not sure why a JOIN multiplies your row count? Ask the AI tutor to inspect the join keys with you.",
            unlocksNext: "02. Python for DevOps",
          },
          {
            id: "python",
            num: "02",
            title: "Python for DevOps",
            desc: "Automate data workflows and ops tasks with virtual environments, REST APIs, shell scripts, tests, and CLIs.",
            hours: 14,
            icon: "python",
            gridClass: "rm-pos-2",
            delayClass: "delay-2",
            arrowDir: "right",
            lessons: [
              "Python setup and virtual environments",
              "Files, paths and the standard library",
              "Working with APIs and JSON",
              "Automating shell tasks with subprocess",
              "Testing and packaging scripts",
              "Building a small CLI tool",
            ],
            tasks: [
              { kind: "Task", title: "Parse a server log file" },
              { kind: "Task", title: "Call a REST API and save results" },
              { kind: "Task", title: "Automate a backup script" },
              { kind: "Quiz", title: "Python basics for ops" },
              { kind: "Quiz", title: "Scripting and testing" },
            ],
            projectIdea:
              "Build a small command-line tool that loads CSV files into PostgreSQL and checks them for bad rows. It uses what you learned in course 01.",
            tutorTip:
              "stuck on a task? Ask for a hint without leaving the lesson.",
            unlocksNext: "03. Apache Airflow",
          },
          {
            id: "airflow",
            num: "03",
            title: "Apache Airflow",
            desc: "Orchestrate data pipelines as Python DAGs with TaskFlow API, sensors, hooks, retries, alerts, and backfills.",
            hours: 12,
            icon: "airflow",
            gridClass: "rm-pos-3",
            delayClass: "delay-3",
            arrowDir: "down",
            lessons: [
              "Airflow architecture, scheduler and executors",
              "Writing your first DAG with TaskFlow API",
              "Operators, sensors, hooks and connections",
              "Retries, SLAs, alerts and idempotent backfills",
              "Dynamic task mapping and production testing",
            ],
            tasks: [
              { kind: "Task", title: "Schedule an hourly Postgres ingest DAG" },
              { kind: "Task", title: "Add sensor checks and failure alerting" },
              { kind: "Quiz", title: "DAG scheduling and backfill semantics" },
              { kind: "Quiz", title: "Operators, XComs and task dependencies" },
            ],
            projectIdea:
              "Orchestrate the Python CSV-to-PostgreSQL loader from course 02 as a daily Airflow DAG with file sensors, automatic retries, and Slack-style failure hooks.",
            tutorTip:
              "confused about execution_date vs logical_date? Ask the AI tutor for a timeline walkthrough.",
            unlocksNext: "04. Apache Spark",
          },
          {
            id: "spark",
            num: "04",
            title: "Apache Spark",
            desc: "Process large datasets in parallel with PySpark DataFrames, Parquet and Delta tables, and broadcast joins.",
            hours: 16,
            icon: "spark",
            gridClass: "rm-pos-4",
            delayClass: "delay-3",
            arrowDir: "left",
            lessons: [
              "Distributed execution, drivers and executors",
              "PySpark DataFrames, schemas and lazy evaluation",
              "Reading and writing Parquet and Delta tables",
              "Shuffles, partitioning and broadcast joins",
              "User-defined functions vs native expressions",
              "Tuning memory, skew and Spark UI stages",
              "Structured Streaming basics for micro-batches",
            ],
            tasks: [
              { kind: "Task", title: "Convert raw JSON events into partitioned Parquet" },
              { kind: "Task", title: "Fix a skewed join using broadcast hints" },
              { kind: "Task", title: "Aggregate clickstream sessions in PySpark" },
              { kind: "Quiz", title: "Transformations, actions and DAG stages" },
              { kind: "Quiz", title: "Partitioning, shuffles and memory tuning" },
            ],
            projectIdea:
              "Process 50 million simulated clickstream events in PySpark, deduplicate late arrivals, and output daily partitioned Parquet summaries ready for downstream warehouses.",
            tutorTip:
              "seeing a stage spill to disk? Ask the AI tutor how to diagnose partition skew in Spark UI.",
            unlocksNext: "05. Apache Kafka",
          },
          {
            id: "kafka",
            num: "05",
            title: "Apache Kafka",
            desc: "Stream real-time events across services with topics, partitions, consumer groups, Avro schemas, and CDC.",
            hours: 14,
            icon: "kafka",
            gridClass: "rm-pos-5",
            delayClass: "delay-2",
            arrowDir: "left",
            lessons: [
              "Topics, partitions, offsets and replication",
              "Producers, batching, acks and idempotence",
              "Consumer groups, rebalancing and commits",
              "Event schemas with Avro and Schema Registry",
              "Kafka Connect and CDC from PostgreSQL",
              "Stream processing patterns and dead-letter queues",
            ],
            tasks: [
              { kind: "Task", title: "Produce ordered events with partition keys" },
              { kind: "Task", title: "Build a fault-tolerant consumer group worker" },
              { kind: "Task", title: "Stream PostgreSQL row changes via CDC" },
              { kind: "Quiz", title: "Partitions, consumer offsets and delivery guarantees" },
              { kind: "Quiz", title: "Schema evolution and dead-letter handling" },
            ],
            projectIdea:
              "Capture live order updates from PostgreSQL into Kafka topics, validate payloads against an Avro schema, and route malformed events to a dead-letter topic.",
            tutorTip:
              "unsure about at-least-once vs exactly-once semantics? Ask for a side-by-side failure scenario.",
            unlocksNext: "06. dbt",
          },
          {
            id: "dbt",
            num: "06",
            title: "dbt",
            desc: "Transform raw warehouse tables into tested star-schema models with staging marts, lineage, and snapshots.",
            hours: 10,
            icon: "dbt",
            gridClass: "rm-pos-6",
            delayClass: "delay-1",
            arrowDir: "down",
            lessons: [
              "dbt project layout, sources and ref() lineage",
              "Staging, intermediate and mart layer modeling",
              "Schema tests, custom tests and documentation",
              "Incremental models, snapshots and CI checks",
            ],
            tasks: [
              { kind: "Task", title: "Refactor raw SQL scripts into staged dbt marts" },
              { kind: "Task", title: "Add uniqueness, not-null and freshness tests" },
              { kind: "Quiz", title: "Model materializations and ref() graph" },
              { kind: "Quiz", title: "Incremental strategies and SCD snapshots" },
            ],
            projectIdea:
              "Build a tested dbt project turning raw event tables into clean star-schema fact and dimension marts with auto-generated lineage docs.",
            tutorTip:
              "need help choosing between table, view and incremental materialization? Ask the AI tutor.",
            unlocksNext: "07. Snowflake",
          },
          {
            id: "snowflake",
            num: "07",
            title: "Snowflake",
            desc: "Store and query cloud analytics in Snowflake using virtual warehouses, Snowpipe, VARIANT JSON, and clones.",
            hours: 12,
            icon: "snowflake",
            gridClass: "rm-pos-7",
            delayClass: "delay-1",
            arrowDir: "right",
            lessons: [
              "Snowflake separation of storage and compute",
              "Virtual warehouses, scaling and cost control",
              "Stages, Snowpipe and semi-structured VARIANT data",
              "Time Travel, zero-copy cloning and clustering",
              "Role-based access control and dbt integration",
            ],
            tasks: [
              { kind: "Task", title: "Load staged JSON/Parquet files via COPY INTO" },
              { kind: "Task", title: "Connect dbt marts and tune warehouse auto-suspend" },
              { kind: "Quiz", title: "Virtual warehouses, micro-partitions and credits" },
              { kind: "Quiz", title: "Snowpipe, cloning and Time Travel recovery" },
            ],
            projectIdea:
              "Ship an end-to-end cloud warehouse pipeline: ingest partitioned Parquet from object storage into Snowflake, run dbt marts on a schedule via Airflow, and verify freshness SLAs.",
            tutorTip:
              "want to estimate warehouse credit spend before scaling up? Ask the AI tutor to review your sizing.",
            unlocksNext: "Data engineer capstone",
          },
        ];

        function defaultProgress() {
          const out = {};
          ROADMAP_COURSES.forEach((c) => {
            if (c.id === "sql") {
              out[c.id] = {
                lessons: c.lessons.map(() => true),
                tasks: c.tasks.map(() => true),
              };
            } else if (c.id === "python") {
              out[c.id] = {
                lessons: c.lessons.map((_, idx) => idx < 3),
                tasks: [true, true, false, true, false],
              };
            } else {
              out[c.id] = {
                lessons: c.lessons.map(() => false),
                tasks: c.tasks.map(() => false),
              };
            }
          });
          return out;
        }

        function loadState() {
          const fallback = {
            selectedId: "python",
            progress: defaultProgress(),
          };
          try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (!raw) return fallback;
            const parsed = JSON.parse(raw);
            if (!parsed || typeof parsed !== "object" || !parsed.progress)
              return fallback;
            const cleanProgress = defaultProgress();
            ROADMAP_COURSES.forEach((c) => {
              const saved = parsed.progress[c.id];
              if (
                saved &&
                Array.isArray(saved.lessons) &&
                saved.lessons.length === c.lessons.length
              ) {
                cleanProgress[c.id].lessons = saved.lessons.map(Boolean);
              }
              if (
                saved &&
                Array.isArray(saved.tasks) &&
                saved.tasks.length === c.tasks.length
              ) {
                cleanProgress[c.id].tasks = saved.tasks.map(Boolean);
              }
            });
            const validSel = ROADMAP_COURSES.some(
              (c) => c.id === parsed.selectedId
            )
              ? parsed.selectedId
              : "python";
            return { selectedId: validSel, progress: cleanProgress };
          } catch (e) {
            return fallback;
          }
        }

        const state = loadState();

        function saveState() {
          try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
          } catch (e) {}
        }

        const COURSE_TIMELINE_DEFAULTS = {
          sql: {
            started: "Oct 04, 2026",
            finished: "Oct 19, 2026",
            lastActive: "Oct 19, 2026",
            avgQuiz: "94%",
          },
          python: {
            started: "Oct 22, 2026",
            estFinish: "Nov 26, 2026",
            lastActive: "2 hours ago",
            avgQuiz: "90%",
          },
        };

        const COURSE_MODULES = {
          sql: [
            {
              stage: "01",
              title: "Relational Foundations & Schema Design",
              desc: "Set up PostgreSQL, design normalized tables, define primary/foreign keys, and enforce data integrity constraints.",
              topics: ["Tables & Types", "Primary / Foreign Keys", "Normalization", "Constraints"],
              meta: "2 lessons · 1 lab",
            },
            {
              stage: "02",
              title: "Querying, Joins & Aggregations",
              desc: "Write multi-table analytical queries using INNER, LEFT, and FULL joins, GROUP BY rollups, and HAVING filters.",
              topics: ["Multi-table Joins", "GROUP BY & HAVING", "Subqueries", "Aggregations"],
              meta: "2 lessons · 1 lab · 1 quiz",
            },
            {
              stage: "03",
              title: "Window Functions & Analytical CTEs",
              desc: "Solve ranking, rolling-window, retention, and cohort analytics using CTEs, ROW_NUMBER, LAG/LEAD, and partitions.",
              topics: ["CTEs", "ROW_NUMBER & RANK", "Running Totals", "Cohort Queries"],
              meta: "2 lessons · 1 lab · 1 quiz",
            },
            {
              stage: "04",
              title: "Indexing, Query Plans & Transactions",
              desc: "Inspect execution plans with EXPLAIN ANALYZE, tune B-tree/GIN indexes, and manage ACID transactions and locks.",
              topics: ["EXPLAIN ANALYZE", "B-tree & GIN Indexes", "ACID & Locks", "Capstone Schema"],
              meta: "2 lessons · 1 lab · 1 quiz",
            },
          ],
          python: [
            {
              stage: "01",
              title: "Environment, Files & Data Parsing",
              desc: "Configure virtual environments, manage dependencies, read/write files with pathlib, and parse CSV/JSON datasets.",
              topics: ["Virtual Envs", "pathlib & File I/O", "CSV / JSON Parsing", "Logging"],
              meta: "2 lessons · 1 lab",
            },
            {
              stage: "02",
              title: "REST APIs & Database Ingestion",
              desc: "Consume paginated APIs with retries and auth headers, validate records, and load clean rows into PostgreSQL.",
              topics: ["HTTP & Pagination", "Retries & Backoff", "Data Validation", "Postgres Loader"],
              meta: "2 lessons · 1 lab · 1 quiz",
            },
            {
              stage: "03",
              title: "Shell Automation & CLI Tooling",
              desc: "Automate Linux workflows with subprocess, handle environment variables, exit codes, and build reusable CLI scripts.",
              topics: ["subprocess", "Env & Secrets", "Error Handling", "CLI Arguments"],
              meta: "1 lesson · 1 lab",
            },
            {
              stage: "04",
              title: "Testing, Packaging & Production Scripts",
              desc: "Write unit tests with pytest, mock external services, package Python modules, and ship an automated ETL CLI.",
              topics: ["pytest", "Mocking APIs", "Packaging", "Production ETL CLI"],
              meta: "1 lesson · 1 quiz",
            },
          ],
          airflow: [
            {
              stage: "01",
              title: "Airflow Architecture & First DAG",
              desc: "Understand schedulers, executors, and metadata DBs, then author clean workflows using the modern TaskFlow API.",
              topics: ["Scheduler & Executors", "DAG Lifecycle", "TaskFlow API", "Task Dependencies"],
              meta: "2 lessons",
            },
            {
              stage: "02",
              title: "Operators, Sensors & Connections",
              desc: "Integrate external systems with hooks, connections, file/table sensors, and pass small payloads via XComs.",
              topics: ["Operators & Hooks", "Sensors", "Connections", "XComs"],
              meta: "1 lesson · 1 lab · 1 quiz",
            },
            {
              stage: "03",
              title: "Scheduling, Retries & Backfills",
              desc: "Master cron schedules, logical_date intervals, idempotent backfills, SLAs, and automated failure alerting.",
              topics: ["Cron & Intervals", "Idempotent Backfills", "Retries & SLAs", "Failure Alerts"],
              meta: "1 lesson · 1 lab · 1 quiz",
            },
            {
              stage: "04",
              title: "Dynamic Mapping & Production Testing",
              desc: "Scale pipelines with dynamic task mapping, validate DAG integrity in CI, and deploy a daily ingest pipeline.",
              topics: ["Dynamic Mapping", "DAG Tests", "Run Monitoring", "Daily Ingest DAG"],
              meta: "1 lesson",
            },
          ],
          spark: [
            {
              stage: "01",
              title: "Distributed Execution & DataFrames",
              desc: "Learn driver/executor architecture, lazy evaluation, schemas, transformations vs. actions, and PySpark DataFrames.",
              topics: ["Drivers & Executors", "Lazy Evaluation", "DataFrame API", "Schemas"],
              meta: "2 lessons · 1 quiz",
            },
            {
              stage: "02",
              title: "Columnar Storage & Lakehouse Tables",
              desc: "Read and write large JSON/CSV feeds into partitioned Parquet and ACID-compliant Delta Lake tables.",
              topics: ["Parquet & Compression", "Partitioning", "Delta Tables", "Schema Evolution"],
              meta: "2 lessons · 1 lab",
            },
            {
              stage: "03",
              title: "Joins, Shuffles & Performance Tuning",
              desc: "Eliminate bottlenecks with broadcast joins, diagnose partition skew in Spark UI, and tune memory and shuffles.",
              topics: ["Broadcast Joins", "Shuffle Tuning", "Skew Mitigation", "Spark UI"],
              meta: "2 lessons · 2 labs · 1 quiz",
            },
            {
              stage: "04",
              title: "Structured Streaming & Micro-Batches",
              desc: "Process continuous event streams with watermarks, late-arrival deduplication, and scalable clickstream summaries.",
              topics: ["Structured Streaming", "Watermarks", "Deduplication", "Clickstream Pipeline"],
              meta: "1 lesson",
            },
          ],
          kafka: [
            {
              stage: "01",
              title: "Brokers, Topics & Partition Logs",
              desc: "Explore Kafka's distributed commit log, partition keys, offsets, replication, and broker fault tolerance.",
              topics: ["Topics & Partitions", "Offsets", "Replication", "Partition Keys"],
              meta: "2 lessons · 1 lab",
            },
            {
              stage: "02",
              title: "Producers, Consumer Groups & Guarantees",
              desc: "Configure batching, acks, idempotent producers, consumer group rebalancing, and delivery semantics.",
              topics: ["acks & Idempotence", "Consumer Groups", "Rebalancing", "Delivery Guarantees"],
              meta: "2 lessons · 1 lab · 1 quiz",
            },
            {
              stage: "03",
              title: "Schemas, Avro & Schema Registry",
              desc: "Enforce strict event contracts with Avro serialization, Schema Registry, and backward-compatible evolution.",
              topics: ["Avro Serialization", "Schema Registry", "Compatibility Rules", "Event Contracts"],
              meta: "1 lesson · 1 quiz",
            },
            {
              stage: "04",
              title: "Kafka Connect, CDC & Dead-Letter Queues",
              desc: "Stream live PostgreSQL row changes using CDC connectors and isolate malformed payloads into dead-letter topics.",
              topics: ["Kafka Connect", "Postgres CDC", "Dead-Letter Queues", "Stream Patterns"],
              meta: "1 lesson · 1 lab",
            },
          ],
          dbt: [
            {
              stage: "01",
              title: "Project Layout, Sources & ref() Lineage",
              desc: "Structure a dbt repository, declare raw warehouse sources, build dependency graphs with ref(), and compile SQL.",
              topics: ["dbt Project Layout", "Sources", "ref() Lineage", "Materializations"],
              meta: "1 lesson · 1 lab",
            },
            {
              stage: "02",
              title: "Layered Star-Schema Modeling",
              desc: "Transform raw tables through staging, intermediate, and mart layers into clean fact and dimension models.",
              topics: ["Staging Layer", "Intermediate Models", "Fact & Dim Marts", "Jinja Macros"],
              meta: "1 lesson · 1 quiz",
            },
            {
              stage: "03",
              title: "Testing, Freshness & Documentation",
              desc: "Guarantee data quality with uniqueness, not-null, and custom SQL tests, source freshness checks, and lineage docs.",
              topics: ["Schema Tests", "Custom SQL Tests", "Source Freshness", "Auto-Docs"],
              meta: "1 lesson · 1 lab",
            },
            {
              stage: "04",
              title: "Incremental Models, Snapshots & CI",
              desc: "Optimize warehouse cost with incremental merges, track historical changes via SCD snapshots, and automate CI runs.",
              topics: ["Incremental Models", "SCD Snapshots", "Slim CI", "Production Deploys"],
              meta: "1 lesson · 1 quiz",
            },
          ],
          snowflake: [
            {
              stage: "01",
              title: "Cloud Architecture & Virtual Warehouses",
              desc: "Leverage separated storage and compute, right-size virtual warehouses, configure auto-suspend, and control credits.",
              topics: ["Storage vs Compute", "Warehouse Sizing", "Auto-Suspend", "Cost Control"],
              meta: "2 lessons · 1 quiz",
            },
            {
              stage: "02",
              title: "Stages, Snowpipe & Semi-Structured Data",
              desc: "Load Parquet and JSON from cloud storage using stages, COPY INTO, Snowpipe, and native VARIANT queries.",
              topics: ["Cloud Stages", "COPY INTO", "Snowpipe", "VARIANT JSON"],
              meta: "1 lesson · 1 lab",
            },
            {
              stage: "03",
              title: "Time Travel, Cloning & Micro-Partitions",
              desc: "Recover dropped tables with Time Travel, create instant zero-copy clones, and optimize pruning with clustering.",
              topics: ["Time Travel", "Zero-Copy Cloning", "Micro-Partitions", "Clustering Keys"],
              meta: "1 lesson · 1 quiz",
            },
            {
              stage: "04",
              title: "Security, RBAC & End-to-End Integration",
              desc: "Configure role-based access control, connect dbt marts and Airflow schedules, and ship the capstone warehouse.",
              topics: ["RBAC Security", "dbt Integration", "Airflow Sync", "Capstone Pipeline"],
              meta: "1 lesson · 1 lab",
            },
          ],
        };

        function formatHours(val) {
          const rounded = Math.round(val * 10) / 10;
          return Number.isInteger(rounded) ? `${rounded}` : `${rounded.toFixed(1)}`;
        }

        function getCourseStats(course) {
          const p = state.progress[course.id];
          const lessonsDone = p.lessons.filter(Boolean).length;
          const totalLessons = course.lessons.length;
          const tasksDone = p.tasks.filter(Boolean).length;
          const totalTasks = course.tasks.length;
          const totalItems = totalLessons + totalTasks;
          const itemsDone = lessonsDone + tasksDone;

          let taskCount = 0;
          let onlyTasksDone = 0;
          let quizCount = 0;
          let quizzesDone = 0;
          course.tasks.forEach((t, idx) => {
            if (t.kind === "Task") {
              taskCount++;
              if (p.tasks[idx]) onlyTasksDone++;
            } else {
              quizCount++;
              if (p.tasks[idx]) quizzesDone++;
            }
          });

          const lessonsPct = totalLessons
            ? Math.round((lessonsDone / totalLessons) * 100)
            : 0;
          const tasksPct = taskCount
            ? Math.round((onlyTasksDone / taskCount) * 100)
            : 0;
          const quizzesPct = quizCount
            ? Math.round((quizzesDone / quizCount) * 100)
            : 0;
          const pct = totalItems
            ? Math.round((itemsDone / totalItems) * 100)
            : 0;

          const hoursDoneRaw = (course.hours * pct) / 100;
          const hoursLeftRaw = Math.max(0, course.hours - hoursDoneRaw);

          let status = "planned";
          if (itemsDone === totalItems && totalItems > 0) {
            status = "completed";
          } else if (itemsDone > 0) {
            status = "in_progress";
          }

          const firstIncompleteIdx = p.lessons.findIndex((done) => !done);
          const nextLessonNum =
            firstIncompleteIdx >= 0 ? firstIncompleteIdx + 1 : 1;

          return {
            status,
            lessonsDone,
            totalLessons,
            tasksDone,
            totalTasks,
            onlyTasksDone,
            quizzesDone,
            itemsDone,
            totalItems,
            lessonsPct,
            tasksPct,
            quizzesPct,
            pct,
            hoursDone: formatHours(hoursDoneRaw),
            hoursLeft: formatHours(hoursLeftRaw),
            taskCount,
            quizCount,
            firstIncompleteIdx,
            nextLessonNum,
          };
        }

        function statusIconSvg(status) {
          if (status === "completed") {
            return `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
          }
          if (status === "in_progress") {
            return `<svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor"><path d="M8 2a6 6 0 0 1 0 12V2z"/></svg>`;
          }
          return `<svg width="7" height="7" viewBox="0 0 8 8" fill="currentColor"><circle cx="4" cy="4" r="3"/></svg>`;
        }

        function statusDotHtml(itemState) {
          if (itemState === "completed") {
            return `<span class="rm-badge-dot is-completed" aria-hidden="true">${statusIconSvg("completed")}</span>`;
          }
          if (itemState === "in_progress") {
            return `<span class="rm-badge-dot is-progress" aria-hidden="true">${statusIconSvg("in_progress")}</span>`;
          }
          return "";
        }

        function connectorSvg(dir, solid) {
          const dashAttr = solid ? "" : ' stroke-dasharray="4 4"';
          if (dir === "right") {
            return `<svg width="28" height="14" viewBox="0 0 28 14" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><line x1="2" y1="7" x2="24" y2="7"${dashAttr}/><polyline points="19.5 2.5 24.5 7 19.5 11.5"/></svg>`;
          }
          if (dir === "left") {
            return `<svg width="28" height="14" viewBox="0 0 28 14" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><line x1="26" y1="7" x2="4" y2="7"${dashAttr}/><polyline points="8.5 2.5 3.5 7 8.5 11.5"/></svg>`;
          }
          return `<svg width="14" height="28" viewBox="0 0 14 28" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="2" x2="7" y2="24"${dashAttr}/><polyline points="2.5 19.5 7 25 11.5 19.5"/></svg>`;
        }

        function renderGrid() {
          const grid = document.getElementById("roadmapGrid");
          const frag = document.createDocumentFragment();
          const allCompleted = ROADMAP_COURSES.every(
            (c) => getCourseStats(c).status === "completed"
          );

          ROADMAP_COURSES.forEach((course, idx) => {
            const st = getCourseStats(course);
            const isSelected = course.id === state.selectedId;
            const hasConnector = idx < ROADMAP_COURSES.length - 1;

            const card = document.createElement("article");
            card.className = `rm-card ${course.gridClass} fade-up ${course.delayClass}${isSelected ? " is-selected" : ""}`;
            card.tabIndex = 0;
            card.setAttribute("role", "button");
            card.setAttribute(
              "aria-label",
              `${course.num}. ${course.title} (${st.status.replace("_", " ")})`
            );
            card.setAttribute("aria-pressed", isSelected ? "true" : "false");

            const showStatusBtn =
              st.status === "completed" || st.status === "in_progress";
            const statusCls =
              st.status === "completed"
                ? "is-completed"
                : st.status === "in_progress"
                  ? "is-progress"
                  : "";
            const statusLabel =
              st.status === "completed"
                ? "Completed"
                : st.status === "in_progress"
                  ? "In progress"
                  : "";
            const isSolidArrow = st.status === "completed";

            const connectorsHtml = hasConnector
              ? `
              <span class="rm-conn rm-conn-desk dir-${course.arrowDir}${isSolidArrow ? " is-solid" : ""}" aria-hidden="true">
                ${connectorSvg(course.arrowDir, isSolidArrow)}
              </span>
              <span class="rm-conn rm-conn-mob${isSolidArrow ? " is-solid" : ""}" aria-hidden="true">
                ${connectorSvg("down", isSolidArrow)}
              </span>
            `
              : "";

            card.innerHTML = `
              <div class="rm-card-top">
                <div class="rm-card-main">
                  <div class="rm-tool-ic" aria-hidden="true">${TOOL_ICONS[course.icon]}</div>
                  <div class="rm-card-copy">
                    <h3>${course.num}. ${course.title}</h3>
                  </div>
                </div>
                <div class="rm-card-actions">
                  ${
                    showStatusBtn
                      ? `<button
                    type="button"
                    class="rm-status-btn ${statusCls}"
                    data-toggle-course="${course.id}"
                    title="Status: ${statusLabel} (click to toggle)"
                    aria-label="Toggle ${course.title} completion (currently ${statusLabel})"
                  >
                    ${statusIconSvg(st.status)}
                  </button>`
                      : ""
                  }
                </div>
              </div>
              <p class="rm-card-desc">${course.desc}</p>
              <div class="rm-card-foot">
                <span>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M10 8l6 4-6 4V8z"/></svg>
                  <strong>${st.totalLessons}</strong> lessons
                </span>
                <span>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M8 12l2.5 2.5L16 9"/></svg>
                  <strong>${st.taskCount}</strong> tasks
                </span>
                <span>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 0 1 5 1c0 1.7-2.5 2.2-2.5 2.2"/><circle cx="12" cy="16.5" r=".7" fill="currentColor"/></svg>
                  <strong>${st.quizCount}</strong> quizzes
                </span>
                <span>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" aria-hidden="true"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15.5 14"/></svg>
                  <strong>${course.hours}</strong> h
                </span>
              </div>
              ${connectorsHtml}
            `;

            card.addEventListener("click", (e) => {
              const toggleBtn = e.target.closest("[data-toggle-course]");
              if (toggleBtn) {
                e.stopPropagation();
                toggleCourseCompletion(course.id);
                return;
              }
              state.selectedId = course.id;
              saveState();
              renderAll();
              scrollToCourseDetail();
            });

            card.addEventListener("keydown", (e) => {
              if (e.key === "Enter" || e.key === " ") {
                if (e.target !== card) return;
                e.preventDefault();
                state.selectedId = course.id;
                saveState();
                renderAll();
                scrollToCourseDetail();
              }
            });

            frag.appendChild(card);
          });

          const goalBanner = document.getElementById("roadmapGoalBanner");
          if (goalBanner) {
            goalBanner.classList.toggle("is-unlocked", allCompleted);
          }
          const goalSub = document.getElementById("roadmapGoalSub");
          if (goalSub) {
            goalSub.textContent = allCompleted
              ? "All 7 courses complete — ready to build and run production pipelines!"
              : "Build and run production pipelines.";
          }

          grid.replaceChildren(frag);
          if (window.__observeReveals) window.__observeReveals();
          if (window.__refreshReveals) window.__refreshReveals(true);
        }

        let detailPulseTimer = null;
        function scrollToCourseDetail() {
          const det = document.getElementById("course-detail");
          if (!det) return;
          det.classList.add("visible");
          det.scrollIntoView({ behavior: "smooth", block: window.innerWidth <= 768 ? "start" : "center" });
          det.classList.remove("is-focus-pulse");
          void det.offsetWidth;
          det.classList.add("is-focus-pulse");
          clearTimeout(detailPulseTimer);
          detailPulseTimer = setTimeout(() => {
            det.classList.remove("is-focus-pulse");
          }, 900);
        }

        function toggleCourseCompletion(courseId) {
          const course = ROADMAP_COURSES.find((c) => c.id === courseId);
          if (!course) return;
          const st = getCourseStats(course);
          const markDone = st.status !== "completed";
          state.progress[courseId] = {
            lessons: course.lessons.map(() => markDone),
            tasks: course.tasks.map(() => markDone),
          };
          state.selectedId = courseId;
          saveState();
          renderAll();
          toast(
            markDone
              ? `Marked ${course.num}. ${course.title} complete.`
              : `Reset ${course.num}. ${course.title}.`
          );
        }

        function renderDetail() {
          const panel = document.getElementById("course-detail");
          const course =
            ROADMAP_COURSES.find((c) => c.id === state.selectedId) ||
            ROADMAP_COURSES[1];
          const st = getCourseStats(course);

          const ctaText = "Continue to course";
          const isBlueBar = st.status === "in_progress";
          const modules = COURSE_MODULES[course.id] || [];

          const modulesHtml = modules
            .map((mod, idx) => {
              const totalMods = modules.length;
              const modThresholdStart = (idx / totalMods) * 100;
              const modThresholdEnd = ((idx + 1) / totalMods) * 100;
              let modState = "planned";
              if (st.status === "completed" || st.pct >= modThresholdEnd) {
                modState = "completed";
              } else if (st.status === "in_progress" && st.pct > modThresholdStart) {
                modState = "in_progress";
              }

              return `
                <div class="rm-course-item">
                  <div class="rm-course-item-head">
                    ${statusDotHtml(modState)}
                    <h3 class="rm-course-item-title">${mod.stage}. ${mod.title}</h3>
                  </div>
                  <p class="rm-course-item-desc">${mod.desc}</p>
                </div>
              `;
            })
            .join("");

          panel.innerHTML = `
            <div class="rm-detail-head">
              <div class="rm-detail-title-wrap">
                <div class="rm-tool-ic" aria-hidden="true">${TOOL_ICONS[course.icon]}</div>
                <div class="rm-detail-name-row">
                  <h2>${course.num}. ${course.title}</h2>
                </div>
              </div>
              <div class="rm-detail-right">
                <div class="rm-detail-prog">
                  <span class="rm-prog-label">${st.pct}% complete · ${st.hoursDone} of ${course.hours} h</span>
                  <div class="rm-bar-track" aria-hidden="true">
                    <div class="rm-bar-fill${isBlueBar ? " is-blue" : ""}" style="width: ${st.pct}%"></div>
                  </div>
                </div>
                <button type="button" class="btn p" id="detailActionBtn">${ctaText}</button>
              </div>
            </div>
            <div class="rm-course-cols">${modulesHtml}</div>
          `;

          const actionBtn = document.getElementById("detailActionBtn");
          if (actionBtn) {
            actionBtn.addEventListener("click", () => {
              const targetIdx =
                st.firstIncompleteIdx >= 0 ? st.firstIncompleteIdx : 0;
              toast(
                `Opening Lesson ${targetIdx + 1}: ${course.lessons[targetIdx]}`
              );
            });
          }
        }

        function renderTotals() {
          let totalLessons = 0;
          let totalTasks = 0;
          let totalQuizzes = 0;
          let totalHours = 0;
          ROADMAP_COURSES.forEach((c) => {
            totalLessons += c.lessons.length;
            totalHours += c.hours;
            c.tasks.forEach((t) => {
              if (t.kind === "Task") totalTasks++;
              else if (t.kind === "Quiz") totalQuizzes++;
            });
          });
          const set = (id, val) => {
            const el = document.getElementById(id);
            if (el) el.textContent = String(val);
          };
          set("metricCourses", ROADMAP_COURSES.length);
          set("metricLessons", totalLessons);
          set("metricTasks", totalTasks);
          set("metricQuizzes", totalQuizzes);
          set("metricHours", totalHours);
        }

        function renderAll() {
          renderTotals();
          renderGrid();
          renderDetail();
        }

        const startFreeBtn = document.getElementById("startFreeModulesBtn");
        if (startFreeBtn) {
          startFreeBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const firstCourse = ROADMAP_COURSES[0];
            state.selectedId = firstCourse.id;
            saveState();
            renderAll();
            const det = document.getElementById("course-detail");
            if (det) det.scrollIntoView({ behavior: "smooth", block: "start" });
            toast("First 2 modules of every course are unlocked free.");
          });
        }

        renderAll();
      })();
