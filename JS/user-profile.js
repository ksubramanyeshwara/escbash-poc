/* =========================================
       OFFICIAL TECHNOLOGY & BRAND LOGOS
       ========================================= */
    const OFFICIAL_LOGOS = {
      escbash: 'data:image/webp;base64,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',
      linux: 'data:image/png;base64,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',
      docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon@2.18.0/icons/docker/docker-original.svg',
      kubernetes: 'https://cdn.jsdelivr.net/gh/devicons/devicon@2.18.0/icons/kubernetes/kubernetes-original.svg',
      aws: 'https://cdn.jsdelivr.net/gh/devicons/devicon@2.18.0/icons/amazonwebservices/amazonwebservices-original.svg',
      terraform: 'https://cdn.jsdelivr.net/gh/devicons/devicon@2.18.0/icons/terraform/terraform-original.svg',
      python: 'https://cdn.jsdelivr.net/gh/devicons/devicon@2.18.0/icons/python/python-original.svg',
      bash: 'https://cdn.jsdelivr.net/gh/devicons/devicon@2.18.0/icons/bash/bash-original.svg',
      githubactions: 'https://cdn.jsdelivr.net/gh/devicons/devicon@2.18.0/icons/githubactions/githubactions-original.svg',
      git: 'https://cdn.jsdelivr.net/gh/devicons/devicon@2.18.0/icons/git/git-plain.svg',
      grafana: 'https://cdn.jsdelivr.net/gh/devicons/devicon@2.18.0/icons/grafana/grafana-original.svg',
      nginx: 'https://cdn.jsdelivr.net/gh/devicons/devicon@2.18.0/icons/nginx/nginx-original.svg',
      prometheus: 'https://cdn.jsdelivr.net/gh/devicons/devicon@2.18.0/icons/prometheus/prometheus-original.svg'
    };

    function getTechLogoUrl(key) {
      if (!key) return OFFICIAL_LOGOS.linux;
      const k = String(key).toLowerCase().replace(/[^a-z0-9]/g, '');
      if (k.includes('linux') || k === 'lx') return OFFICIAL_LOGOS.linux;
      if (k.includes('docker') || k === 'dk') return OFFICIAL_LOGOS.docker;
      if (k.includes('kube') || k === 'k8' || k.includes('ccad') || k === 'ca') return OFFICIAL_LOGOS.kubernetes;
      if (k.includes('aws') || k.includes('amazon') || k === 'aw' || k.includes('ecs') || k.includes('fargate') || k.includes('alb')) return OFFICIAL_LOGOS.aws;
      if (k.includes('terraform') || k === 'tf') return OFFICIAL_LOGOS.terraform;
      if (k.includes('python') || k === 'py') return OFFICIAL_LOGOS.python;
      if (k.includes('bash') || k.includes('shell') || k === 'sh' || k.includes('cron')) return OFFICIAL_LOGOS.bash;
      if (k.includes('github')) return OFFICIAL_LOGOS.githubactions;
      if (k.includes('git')) return OFFICIAL_LOGOS.git;
      if (k.includes('nginx')) return OFFICIAL_LOGOS.nginx;
      if (k.includes('grafana')) return OFFICIAL_LOGOS.grafana;
      if (k.includes('prometheus')) return OFFICIAL_LOGOS.prometheus;
      return OFFICIAL_LOGOS[k] || OFFICIAL_LOGOS.linux;
    }

    function renderTechLogo(key, size = 22, extraClass = '') {
      const url = getTechLogoUrl(key);
      return `<img src="${url}" alt="${escapeHtml(key || '')}" class="tech-official-logo ${extraClass}" style="width:${size}px; height:${size}px; object-fit:contain; display:inline-block; vertical-align:middle; flex-shrink:0;" onerror="this.style.opacity='0.6';" />`;
    }
    /* =========================================
       APPLICATION STATE
       ========================================= */
    const AVATAR_COLORS = ['#16a34a', '#0284c7', '#7c3aed', '#db2777', '#ea580c'];
    const SUGGESTED_SKILLS = ['Ansible', 'Prometheus', 'Grafana', 'Nginx', 'CI/CD', 'Vault', 'ArgoCD'];
    const SUGGESTED_OPEN_TO = ['Internships', 'Junior DevOps roles', 'SRE internships', 'Contract roles', 'Full-time', 'Remote roles'];
    const EDIT_SECTIONS = [
      ['sec-basic', 'Basic info'],
      ['sec-socials', 'Social links'],
      ['sec-skills', 'Skills'],
      ['sec-exp', 'Work experience'],
      ['sec-edu', 'Education'],
      ['sec-vis', 'Public visibility'],
      ['sec-account', 'Account & privacy']
    ];

    const state = {
      theme: localStorage.getItem('escbash-theme') || 'dark',
      page: 'profile', // 'profile' | 'edit' | 'courses' | 'projects' | 'incidents' | 'project-detail' | 'incident-detail'
      previousPage: 'projects',
      selectedProjectId: 1,
      selectedIncidentId: 1,
      viewMode: 'user', // 'user' | 'public'
      editSection: 'sec-basic',
      isClickScrolling: false,
      activityFilter: 'All',
      monthIdx: 0,
      draft: null,
      // Page filters & searches
      courseFilter: 'All',
      courseSearch: '',
      projectFilter: 'All',
      projectSearch: '',
      incidentFilter: 'All',
      incidentSearch: '',
      expandedIncidentId: null,
      incidentsDisplayCount: 9,
      profile: {
        name: 'K Subramanyeshwara',
        initials: 'KS',
        avatarColor: '#16a34a',
        avatarImage: null,
        role: 'Learner',
        slug: 'k-subramanyeshwara',
        handle: '@k-subramanyeshwara',
        location: 'Bengaluru, India',
        openToWork: true,
        openTo: [],
        joined: 'Joined March 2026',
        views: 128,
        email: 'k.subramanyeshwara@example.com',
        plan: 'Pro Learner',
        notifyStreak: true,
        notifyOpportunities: true,
        bio: "I'm a DevOps learner building toward a cloud engineering role. I learn on escbash by doing every lab on a real machine, every project with a write-up. Right now I'm finishing Kubernetes and starting Terraform on AWS. Open to junior DevOps and SRE internships.",
        socials: {
          github: 'ksubramanyeshwara',
          linkedin: 'in/ksubramanyeshwara',
          twitter: 'ksubramanyaa',
          peerlist: 'subramaneshwara',
          website: 'https://ksubramanyeshwara.netlify.app/'
        },
        stats: {
          coursesCompleted: 2,
          projectsCompleted: 5,
          incidentsSolved: 23,
          certificates: 3,
          streakDays: '12 days',
          globalRank: '#142'
        },
        courses: [
          {
            id: 1,
            code: 'Lx',
            category: 'Linux',
            title: 'Linux',
            sub: 'From basics to advanced',
            pct: 100,
            done: true,
            hours: '≈13 h',
            topicsText: '22 of 22 topics · ≈13 h',
            topicsDone: 22,
            topicsTotal: 22,
            completedDate: 'Jun 2026',
            nextLab: null,
            href: 'linux-course.html',
            color: '#22c55e',
            border: 'rgba(34, 197, 94, 0.4)',
            bg: 'rgba(34, 197, 94, 0.12)'
          },
          {
            id: 2,
            code: 'Dk',
            category: 'Docker',
            title: 'Docker',
            sub: 'Hands-on labs',
            pct: 100,
            done: true,
            hours: '≈13 h',
            topicsText: '21 of 21 topics · ≈13 h',
            topicsDone: 21,
            topicsTotal: 21,
            completedDate: 'Aug 2026',
            nextLab: null,
            color: '#38bdf8',
            border: 'rgba(56, 189, 248, 0.4)',
            bg: 'rgba(56, 189, 248, 0.12)'
          },
          {
            id: 3,
            code: 'AW',
            category: 'AWS',
            title: 'AWS Fundamentals',
            sub: 'Cloud fundamentals',
            pct: 88,
            done: false,
            hours: '≈20 h',
            topicsText: '23 of 26 topics · ≈20 h',
            topicsDone: 23,
            topicsTotal: 26,
            completedDate: null,
            nextLab: 'Lab 24: IAM Roles & Policies',
            color: '#facc15',
            border: 'rgba(250, 204, 21, 0.4)',
            bg: 'rgba(250, 204, 21, 0.12)'
          },
          {
            id: 4,
            code: 'K8',
            category: 'Kubernetes',
            title: 'Kubernetes',
            sub: 'Zero to hero',
            pct: 80,
            done: false,
            hours: '≈18 h',
            topicsText: '24 of 30 topics · ≈18 h',
            topicsDone: 24,
            topicsTotal: 30,
            completedDate: null,
            nextLab: 'Lab 25: StatefulSets & PVCs',
            color: '#a855f7',
            border: 'rgba(168, 85, 247, 0.4)',
            bg: 'rgba(168, 85, 247, 0.12)'
          },
          {
            id: 5,
            code: 'Tf',
            category: 'Cloud & IaC',
            title: 'Terraform with AWS',
            sub: 'Infrastructure as code',
            pct: 24,
            done: false,
            hours: '≈20 h',
            topicsText: '8 of 33 topics · ≈20 h',
            topicsDone: 8,
            topicsTotal: 33,
            completedDate: null,
            nextLab: 'Lab 9: Remote State with S3',
            color: '#ec4899',
            border: 'rgba(236, 72, 153, 0.4)',
            bg: 'rgba(236, 72, 153, 0.12)'
          }
        ],
        projects: [
          {
            id: 1,
            code: 'Py',
            category: 'Python',
            title: 'Concurrent health monitor',
            desc: 'Python service that checks many endpoints in parallel and reports status.',
            flow: ['poll', 'check', 'report'],
            tags: ['Python', 'Concurrency', 'HTTP', 'Logging'],
            completedOn: 'Completed Sep 2026',
            links: [
              { label: 'Code', icon: 'code', url: '#' },
              { label: 'Live demo', icon: 'live', url: '#' }
            ],
            color: '#38bdf8',
            border: 'rgba(56, 189, 248, 0.4)',
            bg: 'rgba(56, 189, 248, 0.12)'
          },
          {
            id: 2,
            code: 'Dk',
            category: 'Docker',
            title: 'Docker project #3',
            desc: 'Multi-service app packaged with Compose, health checks and a private network.',
            flow: ['build', 'compose', 'run'],
            tags: ['Docker', 'Compose', 'Networking', 'Healthchecks'],
            completedOn: 'Completed Aug 2026',
            links: [
              { label: 'Code', icon: 'code', url: '#' },
              { label: 'Docs', icon: 'docs', url: '#' }
            ],
            color: '#38bdf8',
            border: 'rgba(56, 189, 248, 0.4)',
            bg: 'rgba(56, 189, 248, 0.12)'
          },
          {
            id: 3,
            code: 'AW',
            category: 'AWS',
            title: 'ECS on Fargate',
            desc: 'Container service on ECS Fargate behind a load balancer in a real AWS account.',
            flow: ['image', 'ECS', 'ALB'],
            tags: ['AWS', 'ECS', 'Fargate', 'ALB'],
            completedOn: 'Completed Oct 2026',
            links: [
              { label: 'Code', icon: 'code', url: '#' },
              { label: 'Docs', icon: 'docs', url: '#' }
            ],
            color: '#f59e0b',
            border: 'rgba(245, 158, 11, 0.4)',
            bg: 'rgba(245, 158, 11, 0.12)'
          },
          {
            id: 4,
            code: 'Sh',
            category: 'Shell',
            title: 'Backup script with cron',
            desc: 'Shell script that archives configs nightly, rotates old copies and logs the result.',
            flow: ['archive', 'rotate', 'log'],
            tags: ['Shell', 'Cron', 'Linux'],
            completedOn: 'Completed Jul 2026',
            links: [
              { label: 'Code', icon: 'code', url: '#' },
              { label: 'Docs', icon: 'docs', url: '#' }
            ],
            color: '#22c55e',
            border: 'rgba(34, 197, 94, 0.4)',
            bg: 'rgba(34, 197, 94, 0.12)'
          },
          {
            id: 5,
            code: 'Tf',
            category: 'AWS',
            title: 'Terraform VPC setup',
            desc: 'Multi-AZ VPC with public and private subnets, built and torn down with Terraform.',
            flow: ['plan', 'apply', 'destroy'],
            tags: ['Terraform', 'VPC', 'Subnets', 'AWS'],
            completedOn: 'Completed Oct 2026',
            links: [
              { label: 'Code', icon: 'code', url: '#' },
              { label: 'Docs', icon: 'docs', url: '#' }
            ],
            color: '#a855f7',
            border: 'rgba(168, 85, 247, 0.4)',
            bg: 'rgba(168, 85, 247, 0.12)'
          }
        ],
        incidents: [
          {
            id: 1,
            category: 'Linux',
            iconType: 'alert',
            title: 'Fixed disk full on /var',
            desc: 'Found runaway logs filling the partition and added rotation with logrotate.',
            tags: ['Linux', 'Logging', 'Monitoring'],
            time: '2 days ago',
            rootCause: 'Unbounded Nginx debug logging filled 100% of /var inodes and disk blocks.',
            fixCmd: 'sudo du -sh /var/log/* && sudo logrotate -f /etc/logrotate.d/nginx',
            prevention: 'Enabled daily logrotate compression with maxsize 100M and disk alert at 80%.'
          },
          {
            id: 2,
            category: 'Kubernetes',
            iconType: 'pulse',
            title: 'Fixed pod CrashLoopBackOff',
            desc: 'Traced a missing ConfigMap key and redeployed with the corrected value.',
            tags: ['Kubernetes', 'ConfigMaps', 'kubectl'],
            time: '1 week ago',
            rootCause: 'Deployment envFrom referenced DB_HOST which was renamed to DATABASE_HOST in ConfigMap.',
            fixCmd: 'kubectl describe pod api-7f9c && kubectl patch cm app-cfg -p \'{"data":{"DB_HOST":"postgres.svc"}}\'',
            prevention: 'Added kustomize config validation in CI before applying manifests.'
          },
          {
            id: 3,
            category: 'Docker',
            iconType: 'check',
            title: 'Freed port 8080 in use',
            desc: 'Found a stale container holding the port and cleaned it up before restart.',
            tags: ['Docker', 'Networking'],
            time: '2 weeks ago',
            rootCause: 'Orphaned container from a previous dev run remained bound to 0.0.0.0:8080.',
            fixCmd: 'sudo ss -tulpn | grep :8080 && docker rm -f stale-proxy',
            prevention: 'Added --rm and explicit compose project names in local scripts.'
          },
          {
            id: 4,
            category: 'AWS',
            iconType: 'alert',
            title: 'Fixed 502 from the load balancer',
            desc: 'Found an unhealthy target group and corrected the container port mapping.',
            tags: ['AWS', 'ALB', 'ECS'],
            time: '3 weeks ago',
            rootCause: 'ALB target group expected health checks on container port 80, but task definition exposed port 8080.',
            fixCmd: 'aws elbv2 modify-target-group --target-group-arn arn:aws:elasticloadbalancing:... --port 8080',
            prevention: 'Standardized port mapping templates in Terraform modules.'
          },
          {
            id: 5,
            category: 'Docker',
            iconType: 'pulse',
            title: 'Resolved high CPU in a container',
            desc: 'Traced a memory leak in a worker and set resource limits.',
            tags: ['Docker', 'Monitoring'],
            time: '3 weeks ago',
            rootCause: 'Worker thread cache leak caused unconstrained GC loops pegging 100% CPU.',
            fixCmd: 'docker update --cpus 1.5 --memory 1024m worker-service',
            prevention: 'Configured cgroup resource limits in docker-compose.yml and added Prometheus alerts.'
          },
          {
            id: 6,
            category: 'Linux',
            iconType: 'check',
            title: 'Fixed SSH permission denied',
            desc: 'Corrected private key permissions and an sshd setting.',
            tags: ['Linux', 'SSH'],
            time: '1 month ago',
            rootCause: 'id_ed25519 was world-readable (0644) and sshd PubkeyAuthentication was set to no.',
            fixCmd: 'chmod 600 ~/.ssh/id_ed25519 && sudo sed -i "s/PubkeyAuthentication no/PubkeyAuthentication yes/" /etc/ssh/sshd_config && sudo systemctl reload sshd',
            prevention: 'Enforced ~/.ssh permission checks in dotfile provisioning script.'
          },
          {
            id: 7,
            category: 'AWS',
            iconType: 'alert',
            title: 'Fixed GitHub Actions OIDC failure',
            desc: 'Debugged an IAM role trust policy blocking a deploy workflow.',
            tags: ['GitHub Actions', 'AWS', 'IAM'],
            time: '1 month ago',
            rootCause: 'StringLike condition in assume role policy omitted the repo branch sub-claim pattern.',
            fixCmd: 'aws iam update-assume-role-policy --role-name gha-deployer --policy-document file://trust-policy.json',
            prevention: 'Created reusable Terraform module for GitHub Actions federated credentials.'
          },
          {
            id: 8,
            category: 'Kubernetes',
            iconType: 'pulse',
            title: 'Fixed DNS lookups inside a pod',
            desc: 'Found a bad CoreDNS forward rule and restored name resolution.',
            tags: ['Kubernetes', 'DNS'],
            time: '2 months ago',
            rootCause: 'Custom upstream resolver IP was decommissioned, leaving CoreDNS forward plugin timed out.',
            fixCmd: 'kubectl -n kube-system edit configmap coredns && kubectl -n kube-system rollout restart deploy/coredns',
            prevention: 'Added secondary public DNS fallbacks and CoreDNS uptime healthchecks.'
          },
          {
            id: 9,
            category: 'AWS',
            iconType: 'check',
            title: 'Released a stale Terraform state lock',
            desc: 'Cleared a lock left by a failed run and re-ran apply safely.',
            tags: ['Terraform', 'AWS'],
            time: '2 months ago',
            rootCause: 'Aborted CI pipeline left an unreleased DynamoDB state lock entry.',
            fixCmd: 'terraform force-unlock -force 8f4e2c19-7b3a-4a21-9d10-e51c8901bce4',
            prevention: 'Added pipeline timeout traps to execute terraform cleanup handlers on cancel.'
          },
          {
            id: 10,
            category: 'Linux',
            iconType: 'alert',
            title: 'Recovered stuck systemd service',
            desc: 'Fixed permission drift on socket file preventing worker daemon startup after upgrade.',
            tags: ['Linux', 'Systemd'],
            time: '2 months ago',
            rootCause: 'Manual root run created /run/worker.sock owned by root instead of appuser.',
            fixCmd: 'journalctl -u worker.service -n 50 && sudo chown appuser:appuser /run/worker.sock',
            prevention: 'Configured RuntimeDirectory=worker in systemd unit file.'
          },
          {
            id: 11,
            category: 'Docker',
            iconType: 'check',
            title: 'Fixed OOMKilled build container',
            desc: 'Reduced parallel webpack workers and switched to multi-stage Alpine image.',
            tags: ['Docker', 'Optimization'],
            time: '2 months ago',
            rootCause: 'Node build exceeded 2GB cgroup memory limit inside CI runner container.',
            fixCmd: 'docker inspect build-12 --format "{{.State.OOMKilled}}" && NODE_OPTIONS="--max-old-space-size=1536"',
            prevention: 'Set explicit runner memory requests and cached node_modules layers.'
          },
          {
            id: 12,
            category: 'Kubernetes',
            iconType: 'pulse',
            title: 'Resolved ImagePullBackOff on private registry',
            desc: 'Re-created missing imagePullSecret and patched default ServiceAccount.',
            tags: ['Kubernetes', 'Secrets', 'Registry'],
            time: '3 months ago',
            rootCause: 'Docker registry token expired and Secret was deleted during cluster upgrade.',
            fixCmd: 'kubectl create secret docker-registry regcred --docker-server=ghcr.io ... && kubectl patch sa default -p \'{"imagePullSecrets": [{"name": "regcred"}]}\'',
            prevention: 'Configured automated secret rotation with External Secrets Operator.'
          },
          {
            id: 13,
            category: 'AWS',
            iconType: 'alert',
            title: 'Fixed S3 403 Access Denied on KMS bucket',
            desc: 'Updated KMS key policy to permit decrypt actions for the Lambda execution role.',
            tags: ['AWS', 'S3', 'KMS'],
            time: '3 months ago',
            rootCause: 'Default KMS key policy only permitted root account, blocking Lambda cross-account reads.',
            fixCmd: 'aws kms put-key-policy --key-id alias/prod-data --policy file://kms-policy.json',
            prevention: 'Included explicit KMS grants in role provisioning scripts.'
          },
          {
            id: 14,
            category: 'Linux',
            iconType: 'pulse',
            title: 'Resolved high iowait due to runaway rsync',
            desc: 'Throttled background backup bandwidth with ionice and rsync bwlimit.',
            tags: ['Linux', 'Performance', 'Storage'],
            time: '3 months ago',
            rootCause: 'Uncapped nightly sync saturated NVMe disk IOPS causing web server latency spikes.',
            fixCmd: 'ionice -c 3 -p $(pgrep rsync) && renice -n 19 -p $(pgrep rsync)',
            prevention: 'Scheduled backups during maintenance windows with ionice -c 3.'
          },
          {
            id: 15,
            category: 'Kubernetes',
            iconType: 'check',
            title: 'Fixed ingress TLS certificate expiration',
            desc: 'Renewed Let\'s Encrypt certificate via cert-manager and refreshed ACME challenge.',
            tags: ['Kubernetes', 'Ingress', 'TLS'],
            time: '4 months ago',
            rootCause: 'HTTP-01 solver ingress was misrouted due to an ingress-class clash.',
            fixCmd: 'kubectl get cert && kubectl describe certificaterequest && cmctl renew app-tls',
            prevention: 'Switched cert-manager ClusterIssuer from HTTP-01 to DNS-01 challenges.'
          },
          {
            id: 16,
            category: 'Docker',
            iconType: 'alert',
            title: 'Fixed container clock drift on VM host',
            desc: 'Configured chrony NTP synchronization on Docker daemon host machine.',
            tags: ['Docker', 'NTP', 'System'],
            time: '4 months ago',
            rootCause: 'Host hypervisor time sync failure skewed container clock by 4 minutes.',
            fixCmd: 'sudo systemctl restart chronyd && docker restart auth-service',
            prevention: 'Configured chrony monitoring with alert on offset > 200ms.'
          },
          {
            id: 17,
            category: 'Linux',
            iconType: 'check',
            title: 'Repaired corrupt fstab mounting failure',
            desc: 'Booted into recovery mode and replaced stale UUID with persistent disk label.',
            tags: ['Linux', 'Storage'],
            time: '4 months ago',
            rootCause: 'EBS volume replacement changed filesystem UUID leaving emergency shell on boot.',
            fixCmd: 'blkid /dev/xvdf && sudo sed -i "s/UUID=old/UUID=new/" /etc/fstab && mount -a',
            prevention: 'Added nofail mount option in /etc/fstab for non-root data disks.'
          },
          {
            id: 18,
            category: 'Kubernetes',
            iconType: 'pulse',
            title: 'Fixed NodeNotReady status on disk pressure',
            desc: 'Cleared unreferenced container images and configured kubelet image eviction.',
            tags: ['Kubernetes', 'Nodes'],
            time: '5 months ago',
            rootCause: 'Dangling images filled ephemeral root disk past 85% high threshold.',
            fixCmd: 'crictl rmi --prune && systemctl restart kubelet',
            prevention: 'Set imageMinimumGCAge: 2m and imageGCHighThresholdPercent: 80 in kubelet config.'
          },
          {
            id: 19,
            category: 'Docker',
            iconType: 'check',
            title: 'Resolved bridged network subnet collision',
            desc: 'Updated default-address-pools in /etc/docker/daemon.json to avoid VPN overlap.',
            tags: ['Docker', 'Networking'],
            time: '5 months ago',
            rootCause: 'Default 172.17.0.0/16 bridge clashed with corporate WireGuard VPN route.',
            fixCmd: 'sudo jq \'. + {"default-address-pools":[{"base":"10.200.0.0/16","size":24}]}\' /etc/docker/daemon.json | sudo tee /etc/docker/daemon.json && sudo systemctl restart docker',
            prevention: 'Provisioned standard daemon.json across all dev environments via Ansible.'
          },
          {
            id: 20,
            category: 'Linux',
            iconType: 'alert',
            title: 'Fixed iptables DROP rule blocking port 443',
            desc: 'Audited UFW ruleset and restored HTTPS traffic forwarding through the NAT chain.',
            tags: ['Linux', 'Firewall', 'Networking'],
            time: '5 months ago',
            rootCause: 'Stale security rule rejected non-established connections to TCP port 443.',
            fixCmd: 'sudo iptables -L -n -v --line-numbers && sudo iptables -I INPUT 1 -p tcp --dport 443 -j ACCEPT',
            prevention: 'Implemented persistent ufw rules version-controlled in Git.'
          },
          {
            id: 21,
            category: 'Kubernetes',
            iconType: 'alert',
            title: 'Resolved pod eviction loop on spot instances',
            desc: 'Added pod disruption budgets and tolerations with graceful preemption handlers.',
            tags: ['Kubernetes', 'PDB'],
            time: '6 months ago',
            rootCause: 'Spot instance termination notices evicted all replicas simultaneously.',
            fixCmd: 'kubectl apply -f pdb.yaml && kubectl patch deployment api-gateway -p \'{"spec":{"template":{"spec":{"terminationGracePeriodSeconds":60}}}}\'',
            prevention: 'Enforced minAvailable: 1 in PDBs across all production deployments.'
          },
          {
            id: 22,
            category: 'Linux',
            iconType: 'pulse',
            title: 'Fixed zombie processes exhausting PID table',
            desc: 'Reaped orphaned child processes and introduced tini init supervisor in the script.',
            tags: ['Linux', 'Processes'],
            time: '6 months ago',
            rootCause: 'Node worker script failed to register SIGCHLD handler for spawned shell subcommands.',
            fixCmd: 'ps -eo pid,stat,command | grep Z && kill -s SIGCHLD $(pgrep node-parent)',
            prevention: 'Adopted tini as init entrypoint in container images.'
          },
          {
            id: 23,
            category: 'Linux',
            iconType: 'check',
            title: 'Restored corrupted sudoers configuration',
            desc: 'Recovered syntax error via pkexec visudo without rebooting the production host.',
            tags: ['Linux', 'Security'],
            time: '6 months ago',
            rootCause: 'Manual edit bypassed visudo validation and introduced trailing comma typo.',
            fixCmd: 'pkexec visudo -c && pkexec visudo',
            prevention: 'Prohibited manual edits to /etc/sudoers; use drop-in files in /etc/sudoers.d/.'
          }
        ],
        skills: ['Linux', 'Bash', 'Python', 'Go', 'Git', 'Docker', 'Kubernetes', 'Helm', 'Terraform', 'GitHub Actions', 'AWS'],
        experience: [
          { role: 'DevOps Intern', company: 'Brightline Systems', period: 'Jun 2026 – Dec 2026', desc: 'Maintained CI pipelines and wrote runbooks for on-call.' },
          { role: 'Support engineer', company: 'Northwind Cloud', period: 'Jul 2025 – May 2026', desc: 'Handled Linux and networking tickets for small-team customers.' }
        ],
        education: [
          { degree: 'B.Tech, Computer Science', school: 'Riverbend Institute of Technology', years: '2021 – 2025' }
        ],
        certificates: [
          {
            id: 'esc-lnx-7da3de582a',
            code: 'Lx',
            category: 'Linux',
            title: 'Linux Skill',
            course: 'Linux — From basics to advanced',
            certNo: 'ESC-LNX-7DA3DE582A',
            date: 'Issued 12 Sep 2026',
            issuedFull: '12 September 2026',
            hours: '12.5 h (753 mins)',
            labsCount: '41 labs • 21 quizzes',
            topicsText: '22 topics • 12.5 h coursework',
            description: 'has successfully completed every lesson, all 41 hands-on labs, 21 quizzes and scenarios and the capstone project of the Linux skill on Escbash Labs — 22 topics and 12.5 hours of coursework (753 minutes), performed and graded in live lab environments.',
            issuer: 'Abhishek Veeramalla',
            issuerRole: 'Founder, Escbash Labs',
            color: '#22c55e',
            bg: 'rgba(34, 197, 94, 0.15)',
            border: 'rgba(34, 197, 94, 0.4)',
            image: 'images/certificate-linux-k-subramanyeshwara.png',
            verified: true,
            verifyUrl: 'https://escbash.com/certificates/ESC-LNX-7DA3DE582A'
          },
          {
            id: 'esc-dkr-89b4f120c3',
            code: 'Dk',
            category: 'Docker',
            title: 'Docker',
            course: 'Docker — Hands-on labs',
            certNo: 'ESC-DKR-89B4F120C3',
            date: 'Issued 18 Aug 2026',
            issuedFull: '18 August 2026',
            hours: '13.0 h',
            labsCount: '21 labs • 14 quizzes',
            topicsText: '21 topics • 13 h coursework',
            description: 'has successfully completed every lesson, all 21 hands-on labs, 14 quizzes and scenarios and the capstone project of Docker on Escbash Labs.',
            issuer: 'Abhishek Veeramalla',
            issuerRole: 'Founder, Escbash Labs',
            color: '#38bdf8',
            bg: 'rgba(56, 189, 248, 0.15)',
            border: 'rgba(56, 189, 248, 0.4)',
            image: null,
            verified: true,
            verifyUrl: 'https://escbash.com/certificates/ESC-DKR-89B4F120C3'
          },
          {
            id: 'esc-cca-45c2e991b7',
            code: 'CA',
            category: 'CCAD-P',
            title: 'CCAD-P Exam Prep',
            course: 'Certified Cloud Application Developer Prep',
            certNo: 'ESC-CCA-45C2E991B7',
            date: 'Issued 24 Oct 2026',
            issuedFull: '24 October 2026',
            hours: '14.0 h',
            labsCount: '18 labs • 20 quizzes',
            topicsText: '18 topics • 14 h coursework',
            description: 'has successfully completed the comprehensive exam preparation, scenarios, and mock exams for CCAD-P on Escbash Labs.',
            issuer: 'Abhishek Veeramalla',
            issuerRole: 'Founder, Escbash Labs',
            color: '#a855f7',
            bg: 'rgba(168, 85, 247, 0.15)',
            border: 'rgba(168, 85, 247, 0.4)',
            image: null,
            verified: true,
            verifyUrl: 'https://escbash.com/certificates/ESC-CCA-45C2E991B7'
          }
        ],
        months: [
          {
            name: 'October 2026', startOffset: 4,
            levels: [1,0,0,1,1,1,0,0,0,0,2,2,4,3,2,0,1,2,3,4,3,1,0,2,0,3,2,4,3,2,1],
            stats: {
              All: { contrib: 106, active: '24 of 31', best: '9 days', current: '12 days' },
              Modules: { contrib: 64, active: '19 of 31', best: '7 days', current: '8 days' },
              Projects: { contrib: 19, active: '11 of 31', best: '4 days', current: '3 days' },
              Incidents: { contrib: 23, active: '14 of 31', best: '5 days', current: '4 days' }
            }
          },
          {
            name: 'November 2026', startOffset: 0,
            levels: [2,3,2,1,0,2,3,4,2,1,3,4,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            stats: {
              All: { contrib: 48, active: '12 of 30', best: '7 days', current: '12 days' },
              Modules: { contrib: 29, active: '10 of 30', best: '5 days', current: '6 days' },
              Projects: { contrib: 8, active: '5 of 30', best: '2 days', current: '2 days' },
              Incidents: { contrib: 11, active: '7 of 30', best: '3 days', current: '4 days' }
            }
          }
        ]
      },
      visibility: {
        skills: true,
        workAndEdu: true,
        courses: true,
        projects: true,
        incidents: true,
        certificates: true,
        dailyStreak: true,
        globalRank: true
      }
    };

    /* =========================================
       HELPERS & NAVIGATION
       ========================================= */
    function escapeHtml(str = '') {
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    }

    function renderAvatarContent(profile) {
      if (profile.avatarImage) {
        return `<img src="${profile.avatarImage}" alt="${escapeHtml(profile.name)}" />`;
      }
      return escapeHtml(profile.initials);
    }

    function formatOpenToBadge(item = '') {
      const t = String(item).trim();
      if (/^open\s+to\b/i.test(t)) return t;
      return `Open to ${t.toLowerCase() === 'internships' ? 'internships' : t}`;
    }

    function applyTheme() {
      document.documentElement.setAttribute('data-theme', state.theme);
      localStorage.setItem('escbash-theme', state.theme);
      const tb = document.getElementById('theme-btn'); if (tb) tb.innerHTML = state.theme === 'dark'
        ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
        : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
    }

    function toggleTheme() {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      applyTheme();
    }

    function showToast(msg) {
      const el = document.getElementById('toast');
      el.textContent = msg;
      el.classList.add('show');
      setTimeout(() => el.classList.remove('show'), 2300);
    }

    function navigateTo(page) {
      state.page = page;
      state.draft = null;
      if (page === 'courses' && state.viewMode === 'public' && state.courseFilter === 'In progress') {
        state.courseFilter = 'All';
      }
      if (page === 'incidents') {
        state.incidentsDisplayCount = 9;
      }
      render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function openProjectDetail(id) {
      state.previousPage = (state.page === 'project-detail' || state.page === 'incident-detail') ? (state.previousPage || 'projects') : state.page;
      state.selectedProjectId = Number(id) || 1;
      state.page = 'project-detail';
      render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function openIncidentDetail(id) {
      state.previousPage = (state.page === 'project-detail' || state.page === 'incident-detail') ? (state.previousPage || 'incidents') : state.page;
      state.selectedIncidentId = Number(id) || 1;
      state.page = 'incident-detail';
      render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function openCourse(id) {
      const course = state.profile.courses.find(c => c.id === Number(id));
      if (!course) return;
      if (course.href) {
        showToast(`Opening ${course.title}...`);
        setTimeout(() => { window.location.href = course.href; }, 350);
      } else {
        const nextInfo = course.nextLab ? ` (${course.nextLab})` : '';
        showToast(`Launching ${course.title}${nextInfo}...`);
      }
    }

    function copyToClipboard(text, msg) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => showToast(msg || 'Copied to clipboard!')).catch(() => showToast('Failed to copy'));
      } else {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try {
          document.execCommand('copy');
          showToast(msg || 'Copied to clipboard!');
        } catch(e) {
          showToast('Failed to copy');
        }
        document.body.removeChild(ta);
      }
    }

    function setView(mode) {
      state.viewMode = mode;
      if (mode === 'public' && state.page === 'edit') {
        state.page = 'profile';
        state.draft = null;
      }
      if (mode === 'public' && state.courseFilter === 'In progress') {
        state.courseFilter = 'All';
      }
      document.getElementById('btn-user')?.classList.toggle('active', mode === 'user');
      document.getElementById('btn-public')?.classList.toggle('active', mode === 'public');
      render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function openEditPage(sectionId = 'sec-basic') {
      state.page = 'edit';
      state.viewMode = 'user';
      state.editSection = sectionId;
      document.getElementById('btn-user')?.classList.add('active');
      document.getElementById('btn-public')?.classList.remove('active');
      state.draft = {
        profile: JSON.parse(JSON.stringify(state.profile)),
        visibility: JSON.parse(JSON.stringify(state.visibility))
      };
      render();
      setTimeout(() => {
        if (sectionId === 'sec-basic') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          scrollToEditSection(sectionId);
        }
      }, 40);
    }

    /* =========================================
       SCROLLSPY & HORIZONTAL BUTTON HIGHLIGHTING
       ========================================= */
    function setActiveEditTab(id) {
      if (state.editSection === id) return;
      state.editSection = id;
      document.querySelectorAll('.edit-tab-btn').forEach(btn => {
        const isActive = btn.dataset.target === id;
        btn.classList.toggle('active', isActive);
        if (isActive) {
          btn.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' });
        }
      });
    }

    function scrollToEditSection(id) {
      state.isClickScrolling = true;
      setActiveEditTab(id);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      clearTimeout(window._scrollLockTimer);
      window._scrollLockTimer = setTimeout(() => { state.isClickScrolling = false; }, 650);
    }

    window.addEventListener('scroll', () => {
      if (state.page !== 'edit' || state.isClickScrolling) return;
      const scrollPos = window.scrollY + 165;
      const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 40;
      if (nearBottom) {
        setActiveEditTab(EDIT_SECTIONS[EDIT_SECTIONS.length - 1][0]);
        return;
      }
      let currentId = EDIT_SECTIONS[0][0];
      for (const [id] of EDIT_SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) currentId = id;
      }
      setActiveEditTab(currentId);
    }, { passive: true });

    /* =========================================
       EDIT PAGE ACTIONS
       ========================================= */
    function handlePhotoUpload(event) {
      const file = event.target.files && event.target.files[0];
      if (!file) return;
      if (!file.type.startsWith('image/')) {
        showToast('Please select a valid image file');
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        state.draft.profile.avatarImage = e.target.result;
        render();
        showToast('Photo uploaded');
      };
      reader.readAsDataURL(file);
    }

    function removeDraftPhoto() { state.draft.profile.avatarImage = null; render(); showToast('Photo removed'); }

    function updateDraftField(field, val) {
      state.draft.profile[field] = val;
      if (field === 'name') {
        const parts = val.trim().split(/\s+/).filter(Boolean);
        state.draft.profile.initials = parts.length ? parts.map(p => p[0]).join('').slice(0, 2).toUpperCase() : 'U';
        const avatarEl = document.getElementById('edit-avatar-preview');
        if (avatarEl && !state.draft.profile.avatarImage) avatarEl.textContent = state.draft.profile.initials;
      }
      if (field === 'bio') {
        const counter = document.getElementById('bio-count');
        if (counter) counter.textContent = `${val.length} / 320`;
      }
    }

    function updateDraftAvatarColor(color) { state.draft.profile.avatarColor = color; render(); }
    function updateDraftSocial(key, val) { state.draft.profile.socials[key] = val; }

    function addDraftSkill(skillText) {
      const inp = document.getElementById('new-skill-input');
      const val = (skillText || (inp ? inp.value : '')).trim();
      if (!val) return;
      if (!state.draft.profile.skills.includes(val)) {
        state.draft.profile.skills.push(val);
        render();
      } else showToast('Skill already added');
    }

    function removeDraftSkill(idx) { state.draft.profile.skills.splice(idx, 1); render(); }

    function addDraftOpenTo(itemText) {
      const inp = document.getElementById('new-open-to-input');
      const val = (itemText || (inp ? inp.value : '')).trim();
      if (!val) return;
      if (!state.draft.profile.openTo) state.draft.profile.openTo = [];
      if (!state.draft.profile.openTo.some(i => i.toLowerCase() === val.toLowerCase())) {
        state.draft.profile.openTo.push(val);
        render();
      } else showToast('Item already added');
    }

    function removeDraftOpenTo(idx) {
      if (!state.draft.profile.openTo) return;
      state.draft.profile.openTo.splice(idx, 1);
      render();
    }
    function updateExp(idx, key, val) { state.draft.profile.experience[idx][key] = val; }
    function addExp() { state.draft.profile.experience.unshift({ role: '', company: '', period: '', desc: '' }); render(); }
    function removeExp(idx) { state.draft.profile.experience.splice(idx, 1); render(); }
    function updateEdu(idx, key, val) { state.draft.profile.education[idx][key] = val; }
    function addEdu() { state.draft.profile.education.push({ degree: '', school: '', years: '' }); render(); }
    function removeEdu(idx) { state.draft.profile.education.splice(idx, 1); render(); }
    function toggleDraftVis(key) { state.draft.visibility[key] = !state.draft.visibility[key]; }

    function saveAllEdits() {
      const d = state.draft.profile;
      if (!d.name.trim() || !d.slug.trim()) {
        showToast('Name and profile handle are required');
        return;
      }
      d.slug = d.slug.trim().toLowerCase().replace(/[^a-z0-9-]/g, '-');
      d.handle = '@' + d.slug;
      d.experience = d.experience.filter(e => e.role.trim() || e.company.trim());
      d.education = d.education.filter(e => e.degree.trim() || e.school.trim());

      state.profile = JSON.parse(JSON.stringify(d));
      state.visibility = JSON.parse(JSON.stringify(state.draft.visibility));
      state.draft = null;
      state.page = 'profile';
      render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      showToast('Profile changes saved!');
    }

    function discardEdits() {
      state.draft = null;
      state.page = 'profile';
      render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      showToast('Changes discarded');
    }

    /* =========================================
       PROFILE PAGE RENDERERS
       ========================================= */
    function toggleVis(key) { state.visibility[key] = !state.visibility[key]; render(); }
    function setActivityFilter(f) { state.activityFilter = f; render(); }
    function changeMonth(delta) {
      const next = state.monthIdx + delta;
      if (next >= 0 && next < state.profile.months.length) {
        state.monthIdx = next;
        render();
      }
    }

    function renderHero(isPublic) {
      const p = state.profile;
      const v = state.visibility;

      const kpis = [
        { val: p.stats.coursesCompleted, lbl: 'Courses completed', show: true, target: 'courses' },
        { val: p.stats.projectsCompleted, lbl: 'Projects completed', show: true, target: 'projects' },
        { val: p.stats.incidentsSolved, lbl: 'Incidents solved', show: true, target: 'incidents' },
        { val: p.stats.certificates, lbl: 'Certificates', show: !isPublic || v.certificates, target: 'certificates' },
        { val: p.stats.streakDays, lbl: 'Current streak', show: !isPublic || v.dailyStreak, target: null },
        { val: p.stats.globalRank, lbl: 'Global rank', show: !isPublic || v.globalRank, target: null }
      ].filter(k => k.show);

      return `
        <section class="hero-grid">
          <div>
            <div class="profile-identity">
              <div class="avatar" style="background:${p.avatarColor};">${renderAvatarContent(p)}</div>
              <div>
                <div class="name-row">
                  <h1>${escapeHtml(p.name)}</h1>
                  <span class="learner-pill">${escapeHtml(p.role)}</span>
                  ${p.openTo && p.openTo.length ? p.openTo.map(item => `<span class="open-pill">${escapeHtml(formatOpenToBadge(item))}</span>`).join('') : ''}
                </div>
                <div class="sub-meta">
                  ${escapeHtml(p.handle)} · ${escapeHtml(p.location)} · ${escapeHtml(p.joined)}${!isPublic ? ` · ${p.views} profile views` : ''}
                </div>
              </div>
            </div>

            <p class="bio-text">${escapeHtml(p.bio)}</p>

            <div class="social-row">
              ${p.socials.github ? `<a class="social-btn" href="https://github.com/${encodeURIComponent(p.socials.github)}" target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.16c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg></a>` : ''}
              ${p.socials.linkedin ? `<a class="social-btn" href="https://linkedin.com/${escapeHtml(p.socials.linkedin.replace(/^\/+/, ''))}" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg></a>` : ''}
              ${p.socials.twitter ? `<a class="social-btn" href="https://x.com/${encodeURIComponent(p.socials.twitter)}" target="_blank" rel="noopener noreferrer" title="X" aria-label="X"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>` : ''}
              ${(p.socials.peerlist || p.socials.github) ? `<a class="social-btn" href="https://peerlist.io/${encodeURIComponent(p.socials.peerlist || p.socials.github)}" target="_blank" rel="noopener noreferrer" title="Peerlist" aria-label="Peerlist"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 20V4h6.5a4.5 4.5 0 0 1 0 9H7"/></svg></a>` : ''}
              ${p.socials.website ? `<a class="social-btn" href="${escapeHtml(/^https?:\/\//i.test(p.socials.website) ? p.socials.website : 'https://' + p.socials.website)}" target="_blank" rel="noopener noreferrer" title="Website" aria-label="Website"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></a>` : ''}
            </div>

            <div class="hero-actions">
              ${isPublic ? `
                <button class="btn btn-secondary" onclick="showToast('escbash.com/${escapeHtml(p.slug)} copied!')">Share profile</button>
                ${p.openTo && p.openTo.length ? `<button class="btn btn-primary" onclick="showToast('Contact request sent to ${escapeHtml(p.name)}')">Contact for ${escapeHtml(p.openTo[0].replace(/^open\s+to\s+/i, '').toLowerCase())}</button>` : ''}
              ` : `
                <button class="btn btn-primary" onclick="openEditPage('sec-basic')">Edit profile</button>
                <button class="btn btn-secondary" onclick="setView('public')">View as public</button>
              `}
            </div>
          </div>

          <div class="kpi-grid">
            ${kpis.map(k => `
              <div class="card kpi-card ${k.target ? 'clickable' : ''}" ${k.target ? `onclick="navigateTo('${k.target}')"` : ''}>
                <div class="kpi-val">${k.val}</div>
                <div class="kpi-lbl">${k.lbl}</div>
              </div>
            `).join('')}
          </div>
        </section>
      `;
    }

    function renderCourses(isPublic) {
      if (isPublic && !state.visibility.courses) return '';
      const inProgressCourses = state.profile.courses.filter(c => !c.done);
      const doneCourses = state.profile.courses.filter(c => c.done);
      const doneCount = doneCourses.length;
      const activeCount = inProgressCourses.length;

      const visibleCourses = isPublic
        ? doneCourses
        : (inProgressCourses.length > 0 ? inProgressCourses : doneCourses);

      return `
        <section class="card section-card">
          <div class="section-head">
            <div class="head-left">
              <h2 class="section-title">Courses</h2>
              <span class="count-pill">${isPublic ? `${doneCount} completed` : (activeCount > 0 ? `${activeCount} in progress` : `${doneCount} completed`)}</span>
            </div>
            <button class="view-all-link" onclick="navigateTo('courses')">View all ➜</button>
          </div>
          <div class="up-rm-grid">
            ${visibleCourses.length === 0 ? `
              <div style="padding: 16px 0; color: var(--text-muted); font-size: 0.84rem;">
                No courses currently in progress.
              </div>
            ` : visibleCourses.map(c => `
              <div class="up-rm-card">
                <div>
                  <div class="up-rm-head">
                    <div class="up-rm-head-left">
                      <div class="up-rm-icon" style="border:1px solid ${c.border}; background:${c.bg}; color:${c.color}; cursor:pointer;" onclick="openCourse(${c.id})">${renderTechLogo(c.category, 22)}</div>
                      <div class="up-rm-title" style="cursor:pointer;" onclick="openCourse(${c.id})">${escapeHtml(c.title)}</div>
                    </div>
                    ${c.done
                      ? `<span class="up-rm-status is-done" title="Completed" aria-label="Completed"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>`
                      : `<span class="up-rm-status is-prog" title="In progress" aria-label="In progress"><svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor"><path d="M8 2a6 6 0 0 1 0 12V2z"/></svg></span>`
                    }
                  </div>
                  <p class="up-rm-desc" style="margin-top:12px; margin-bottom:0;">${escapeHtml(c.sub)}</p>
                </div>
                <div class="up-rm-foot">
                  <div class="up-rm-metrics">
                    <span><strong>${c.topicsTotal}</strong> topics</span>
                    <span><strong>${escapeHtml(c.hours || '≈13 h')}</strong></span>
                  </div>
                  ${!c.done ? `
                    <button class="btn btn-primary btn-xs btn-course-action" onclick="openCourse(${c.id})" title="Go to ${escapeHtml(c.title)}">
                      <span>Resume</span>
                      <span>➜</span>
                    </button>
                  ` : `
                    <a class="btn btn-primary btn-xs btn-course-action" href="linux-course-v1.html" title="Open ${escapeHtml(c.title)}" style="text-decoration:none;">
                      <span>Open</span>
                      <span>➜</span>
                    </a>
                  `}
                </div>
              </div>
            `).join('')}
          </div>
        </section>
      `;
    }

    function renderIncidentIcon(type, size = 18) {
      if (type === 'alert') {
        return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
          <line x1="12" y1="9" x2="12" y2="13"/>
          <line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>`;
      }
      if (type === 'pulse') {
        return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
        </svg>`;
      }
      return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8 12l2.5 2.5L16 9"/>
      </svg>`;
    }

    function renderProjectCardHtml(pr, isPublic) {
      return `
        <div class="up-rm-card" style="cursor:pointer;" onclick="openProjectDetail(${pr.id})">
          <div>
            <div class="up-rm-head">
              <div class="up-rm-head-left">
                <div class="up-rm-icon" style="border:1px solid ${pr.border}; background:${pr.bg}; color:${pr.color};">${renderTechLogo(pr.category, 22)}</div>
                <div class="up-rm-title">${escapeHtml(pr.title)}</div>
              </div>
              <span class="up-rm-status is-done" title="Completed" aria-label="Completed"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
            </div>
            <p class="up-rm-desc" style="margin-top:12px; margin-bottom:0;">${escapeHtml(pr.desc)}</p>
            <div class="tags-row" style="margin-top:12px;">
              ${pr.tags.map(t => `<span class="tag-chip">${t}</span>`).join('')}
            </div>
          </div>
          <div class="up-rm-foot">
            <div class="up-rm-metrics">
              <span><strong>${pr.flow.length}</strong> steps</span>
              ${pr.completedOn ? `<span>${escapeHtml(pr.completedOn)}</span>` : ''}
            </div>
            <button type="button" class="btn btn-primary btn-xs btn-course-action" onclick="event.stopPropagation(); openProjectDetail(${pr.id})" title="View ${escapeHtml(pr.title)}">
              <span>Details</span>
              <span>➜</span>
            </button>
          </div>
        </div>
      `;
    }

    function renderProjects(isPublic) {
      if (isPublic && !state.visibility.projects) return '';
      const featured = state.profile.projects.slice(0, 2);
      return `
        <section class="card section-card">
          <div class="section-head">
            <div class="head-left">
              <h2 class="section-title">Projects</h2>
              <span class="count-pill">${state.profile.stats.projectsCompleted} completed</span>
            </div>
            <button class="view-all-link" onclick="navigateTo('projects')">View all ➜</button>
          </div>
          <div class="projects-grid">
            ${featured.map(pr => renderProjectCardHtml(pr, isPublic)).join('')}
          </div>
        </section>
      `;
    }

    function renderIncidents(isPublic) {
      if (isPublic && !state.visibility.incidents) return '';
      const recent = state.profile.incidents.slice(0, 3);
      return `
        <section class="card section-card">
          <div class="section-head">
            <div class="head-left">
              <h2 class="section-title">Incidents / problems solved</h2>
              <span class="count-pill">${state.profile.stats.incidentsSolved} solved</span>
            </div>
            <button class="view-all-link" onclick="navigateTo('incidents')">View all ➜</button>
          </div>
          <div>
            ${recent.map(inc => `
              <div class="incident-row" style="cursor:pointer;" onclick="openIncidentDetail(${inc.id})">
                <div class="inc-left">
                  <div class="incident-icon-box ${inc.iconType}" style="width:34px;height:34px;border-radius:6px; display:flex; align-items:center; justify-content:center;">${renderTechLogo(inc.category, 20)}</div>
                  <div>
                    <div class="inc-title">${escapeHtml(inc.title)}</div>
                    <div class="inc-desc">${escapeHtml(inc.desc)}</div>
                    <div class="tags-row">${inc.tags.map(t => `<span class="tag-chip">${t}</span>`).join('')}</div>
                  </div>
                </div>
                <div style="display:flex; flex-direction:column; align-items:flex-end; gap:3px;">
                  <span class="inc-time">${inc.time}</span>
                  <span style="color:var(--emerald); font-size:0.74rem; font-weight:600;">Details ➜</span>
                </div>
              </div>
            `).join('')}
          </div>
        </section>
      `;
    }

    function renderSidebar(isPublic) {
      const p = state.profile;
      const v = state.visibility;
      const editBtn = (sec) => !isPublic ? `<button class="btn btn-secondary btn-xs" onclick="openEditPage('${sec}')">Edit</button>` : '';

      return `
        <aside>
          ${(!isPublic || v.skills) ? `
            <section class="card section-card">
              <div class="section-head"><h2 class="section-title">Skills</h2>${editBtn('sec-skills')}</div>
              <div class="tags-row">${p.skills.map(s => `<span class="tag-chip">${escapeHtml(s)}</span>`).join('')}</div>
            </section>
          ` : ''}

          ${(!isPublic || v.workAndEdu) ? `
            <section class="card section-card">
              <div class="section-head"><h2 class="section-title">Work experience</h2>${editBtn('sec-exp')}</div>
              ${p.experience.map(e => `
                <div class="timeline-item">
                  <div class="tl-role">${escapeHtml(e.role)}</div>
                  <div class="tl-meta">${escapeHtml(e.company)}${e.period ? ` · ${escapeHtml(e.period)}` : ''}</div>
                  <div class="tl-desc">${escapeHtml(e.desc)}</div>
                </div>
              `).join('')}
            </section>

            <section class="card section-card">
              <div class="section-head"><h2 class="section-title">Education</h2>${editBtn('sec-edu')}</div>
              ${p.education.map(ed => `
                <div class="timeline-item">
                  <div class="tl-role">${escapeHtml(ed.degree)}</div>
                  <div class="tl-meta">${escapeHtml(ed.school)}</div>
                  <div class="tl-meta">${escapeHtml(ed.years)}</div>
                </div>
              `).join('')}
            </section>
          ` : ''}

          ${(!isPublic || v.certificates) ? `
            <section class="card section-card">
              <div class="section-head"><h2 class="section-title">Certificates</h2><button class="view-all-link" onclick="navigateTo('certificates')">View all ➜</button></div>
              <div class="certs-row">
                ${p.certificates.map(c => `
                  <div style="cursor:pointer;" onclick="openCertificateModal('${c.id}')" title="Click to view certificate">
                    <div class="cert-hex" style="background:${c.bg}; color:${c.color}; border:1px solid ${c.color}; display:flex; align-items:center; justify-content:center;">${renderTechLogo(c.title || c.code, 22)}</div>
                    <div class="cert-title">${escapeHtml(c.title)}</div>
                    <div class="cert-date">${c.date}</div>
                  </div>
                `).join('')}
              </div>
            </section>
          ` : ''}
        </aside>
      `;
    }

    function renderActivity() {
      const m = state.profile.months[state.monthIdx];
      const st = m.stats[state.activityFilter];
      const filters = ['All', 'Modules', 'Projects', 'Incidents'];
      const mult = state.activityFilter === 'All' ? 1 : 0.65;

      const blanks = Array.from({ length: m.startOffset }).map(() => `<div class="cal-cell cal-empty"></div>`).join('');
      const days = m.levels.map((lvl, idx) => {
        const adj = Math.min(4, Math.round(lvl * mult));
        return `<div class="cal-cell ${adj > 0 ? 'lvl-' + adj : ''}" title="${m.name} ${idx + 1}">${idx + 1}</div>`;
      }).join('');

      return `
        <section class="card section-card">
          <div class="section-head">
            <h2 class="section-title">Activity</h2>
            <div style="display:flex; align-items:center; gap:8px;">
              <button class="icon-btn" style="width:28px;height:28px;" onclick="changeMonth(-1)">‹</button>
              <span style="font-size:0.84rem; font-weight:600; min-width:110px; text-align:center;">${m.name}</span>
              <button class="icon-btn" style="width:28px;height:28px;" onclick="changeMonth(1)">›</button>
            </div>
          </div>

          <div class="filter-pills">
            ${filters.map(f => `<button class="pill-btn ${state.activityFilter === f ? 'active' : ''}" onclick="setActivityFilter('${f}')">${f}</button>`).join('')}
          </div>

          <div class="activity-body">
            <div>
              <div class="cal-weekdays"><span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span></div>
              <div class="cal-grid">${blanks}${days}</div>
              <div class="cal-legend">
                <span>Less</span>
                <span class="legend-sq" style="background:var(--cal-0)"></span>
                <span class="legend-sq" style="background:var(--cal-1)"></span>
                <span class="legend-sq" style="background:var(--cal-2)"></span>
                <span class="legend-sq" style="background:var(--cal-3)"></span>
                <span class="legend-sq" style="background:var(--cal-4)"></span>
                <span>More</span>
              </div>
            </div>

            <div class="act-stats-grid">
              <div><div class="act-num">${st.contrib}</div><div class="act-lbl">Contributions · ${m.name.slice(0,3)}</div></div>
              <div><div class="act-num">${st.active}</div><div class="act-lbl">Active days · ${m.name.slice(0,3)}</div></div>
              <div><div class="act-num">${st.best}</div><div class="act-lbl">Best streak · ${m.name.slice(0,3)}</div></div>
              <div><div class="act-num">${st.current}</div><div class="act-lbl">Current streak</div></div>
            </div>
          </div>
        </section>
      `;
    }

    function renderVisibilityControls() {
      const v = state.visibility;
      const items = [
        ['skills', 'Skills'], ['workAndEdu', 'Work and education'], ['courses', 'Completed courses'],
        ['projects', 'Projects'], ['incidents', 'Incidents solved'], ['certificates', 'Certificates'],
        ['dailyStreak', 'Daily streak'], ['globalRank', 'Global rank']
      ];

      return `
        <section class="card section-card">
          <div class="section-head" style="margin-bottom:6px;">
            <div>
              <h2 class="section-title">Public profile</h2>
              <p class="sub-meta">Choose what visitors see on your public page. Changes preview live in Public view.</p>
            </div>
          </div>

          <div class="visibility-grid" style="margin-top:16px;">
            <div>
              <span style="font-size:0.78rem; color:var(--text-muted); font-weight:600;">Profile link</span>
              <div class="link-box">
                <input type="text" class="mono" value="escbash.com/${escapeHtml(state.profile.slug)}" readonly />
                <button class="btn btn-secondary btn-xs" onclick="showToast('Link copied!')">Copy</button>
              </div>
            </div>

            <div class="checks-grid">
              ${items.map(([key, label]) => `
                <label class="check-item">
                  <input type="checkbox" ${v[key] ? 'checked' : ''} onchange="toggleVis('${key}')" />
                  <span>${label}</span>
                </label>
              `).join('')}
            </div>
          </div>

          <div class="vis-footer">
            <span class="sub-meta">Always private: email, plan, profile views, and courses in progress.</span>
            <button class="btn btn-primary" onclick="showToast('Public visibility saved!')">Save visibility</button>
          </div>
        </section>
      `;
    }

    /* =========================================
       DEDICATED PAGES: COURSES / PROJECTS / INCIDENTS
       ========================================= */
    function renderHiddenByPrivacy(sectionLabel) {
      return `
        <div class="card empty-state">
          <div style="font-size:1.6rem; margin-bottom:10px;">🔒</div>
          <h2 style="font-size:1.1rem; margin-bottom:6px;">${sectionLabel} hidden in Public view</h2>
          <p class="sub-meta" style="max-width:420px; margin:0 auto 16px;">
            ${escapeHtml(state.profile.name)} has chosen to keep ${sectionLabel.toLowerCase()} private on their public profile.
          </p>
          <div style="display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">
            <button class="btn btn-secondary" onclick="navigateTo('profile')"><span style="display:inline-block;transform:scaleX(-1);">➜</span> Back to profile</button>
            <button class="btn btn-primary" onclick="setView('user')">Switch to User view</button>
          </div>
        </div>
      `;
    }

    function renderCoursesPage(isPublic) {
      if (isPublic && !state.visibility.courses) return renderHiddenByPrivacy('Courses');

      const allCourses = state.profile.courses;
      const totalCourses = allCourses.length;
      const completedCourses = allCourses.filter(c => c.done).length;
      const inProgressCourses = allCourses.filter(c => !c.done).length;
      const topicsDone = allCourses.reduce((sum, c) => sum + (c.topicsDone || 0), 0);

      // Filters matching user view: All, In progress first, then Completed
      const filters = [
        { id: 'All', label: 'All', count: isPublic ? completedCourses : totalCourses },
        ...(!isPublic ? [{ id: 'In progress', label: 'In progress', count: inProgressCourses }] : []),
        { id: 'Completed', label: 'Completed', count: completedCourses }
      ];

      // View all shows in progress first and then completed
      let sortedCourses = [...allCourses].sort((a, b) => {
        if (a.done !== b.done) {
          return a.done ? 1 : -1; // in-progress (!a.done) comes first, then completed (a.done)
        }
        return a.id - b.id;
      });

      let filtered = sortedCourses;
      if (isPublic) {
        filtered = filtered.filter(c => c.done);
      }
      if (state.courseFilter === 'Completed') {
        filtered = filtered.filter(c => c.done);
      } else if (state.courseFilter === 'In progress') {
        filtered = filtered.filter(c => !c.done);
      }

      return `
        <div class="photo-subpage-wrap">
          <button class="back-link" onclick="navigateTo('profile')"><span style="display:inline-block;transform:scaleX(-1);">➜</span> Back to profile</button>

          <div class="photo-subpage-header">
            <div class="photo-title-row">
              <h1 class="photo-subpage-title">${isPublic ? 'Courses completed' : 'Courses'}</h1>
              <span class="photo-title-pill">${isPublic ? completedCourses : totalCourses} courses</span>
            </div>
            <p class="photo-subpage-desc">${isPublic ? "Courses completed on escbash, with certificate verification." : "Every course you've started on escbash, with progress per course."}</p>
          </div>

          <div class="photo-summary-strip ${isPublic ? 'cols-3' : 'cols-4'}">
            <div>
              <div class="summary-item-val">${isPublic ? completedCourses : totalCourses}</div>
              <div class="summary-item-lbl">Courses</div>
            </div>
            ${!isPublic ? `
              <div>
                <div class="summary-item-val">${inProgressCourses}</div>
                <div class="summary-item-lbl">In progress</div>
              </div>
            ` : ''}
            <div>
              <div class="summary-item-val">${completedCourses}</div>
              <div class="summary-item-lbl">Completed</div>
            </div>
            <div>
              <div class="summary-item-val">${topicsDone}</div>
              <div class="summary-item-lbl">Topics done</div>
            </div>
          </div>

          <div class="photo-filter-bar">
            ${filters.map(f => `
              <button class="pill-btn ${state.courseFilter === f.id ? 'active' : ''}" onclick="state.courseFilter='${f.id}'; render();">
                ${f.label} ${f.count}
              </button>
            `).join('')}
          </div>

          ${filtered.length === 0 ? `
            <div class="card empty-state">
              <p class="sub-meta">No courses match the selected filter.</p>
            </div>
          ` : `
            <div class="photo-cards-grid">
              ${filtered.map(c => `
                <div class="photo-course-card">
                  <div>
                    <div class="course-card-head">
                      <div class="course-badge-box" style="border-color:${c.border}; background:${c.bg}; color:${c.color}; display:flex; align-items:center; justify-content:center;">
                        ${renderTechLogo(c.category, 24)}
                      </div>
                      <div class="course-card-title-wrap">
                        <div class="course-card-title">${escapeHtml(c.title)}</div>
                        <div class="course-card-sub">${escapeHtml(c.sub)}</div>
                      </div>
                    </div>

                    <div class="course-progress-track">
                      <div class="course-progress-bar" style="width:${c.pct}%; background:${c.color};"></div>
                    </div>

                    <div class="course-status-row">
                      ${c.done ? `
                        <div class="course-completed-badge" style="color:${c.color};">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                            <circle cx="12" cy="12" r="10"/>
                            <path d="M8 12l2.5 2.5L16 9"/>
                          </svg>
                          <span>100% completed</span>
                        </div>
                      ` : `
                        <div class="course-pct-text">${c.pct}% completed</div>
                      `}
                    </div>

                    <div class="course-topics-meta">
                      ${escapeHtml(c.topicsText)}
                    </div>
                  </div>

                  <div class="course-card-action">
                    ${c.done ? `
                      <a href="#" class="course-cert-link" onclick="event.preventDefault(); openCertificateModal('${c.code === 'Lx' ? 'esc-lnx-7da3de582a' : c.code === 'Dk' ? 'esc-dkr-89b4f120c3' : 'esc-lnx-7da3de582a'}')">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <circle cx="12" cy="8" r="6"/>
                          <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                        </svg>
                        <span>View certificate</span>
                      </a>
                    ` : `
                      <button class="btn-resume-course" onclick="openCourse(${c.id})">
                        Resume course
                      </button>
                    `}
                  </div>
                </div>
              `).join('')}
            </div>
          `}
        </div>
      `;
    }

    function renderProjectsPage(isPublic) {
      if (isPublic && !state.visibility.projects) return renderHiddenByPrivacy('Projects');

      const allProjects = state.profile.projects;
      const totalProjects = allProjects.length;

      // Count distinct technologies (18 technologies)
      const techSet = new Set();
      allProjects.forEach(p => p.tags.forEach(t => techSet.add(t)));
      const techCount = techSet.size;

      // Filters matching Photo 2: All 5, Python 1, Docker 1, AWS 2, Shell 1
      const filterCounts = {
        All: totalProjects,
        Python: allProjects.filter(p => p.category === 'Python').length,
        Docker: allProjects.filter(p => p.category === 'Docker').length,
        AWS: allProjects.filter(p => p.category === 'AWS').length,
        Shell: allProjects.filter(p => p.category === 'Shell').length
      };

      const filters = [
        { id: 'All', label: 'All', count: filterCounts.All },
        { id: 'Python', label: 'Python', count: filterCounts.Python },
        { id: 'Docker', label: 'Docker', count: filterCounts.Docker },
        { id: 'AWS', label: 'AWS', count: filterCounts.AWS },
        { id: 'Shell', label: 'Shell', count: filterCounts.Shell }
      ];

      let filtered = allProjects;
      if (state.projectFilter !== 'All') {
        filtered = filtered.filter(p => p.category === state.projectFilter);
      }

      return `
        <div class="photo-subpage-wrap">
          <button class="back-link" onclick="navigateTo('profile')"><span style="display:inline-block;transform:scaleX(-1);">➜</span> Back to profile</button>

          <div class="photo-subpage-header">
            <div class="photo-title-row">
              <h1 class="photo-subpage-title">Projects completed</h1>
              <span class="photo-title-pill">${totalProjects} projects</span>
            </div>
            <p class="photo-subpage-desc">Hands-on projects built on real machines, with code and docs for each.</p>
          </div>

          <div class="photo-summary-strip cols-3">
            <div>
              <div class="summary-item-val">${totalProjects}</div>
              <div class="summary-item-lbl">Projects</div>
            </div>
            <div>
              <div class="summary-item-val">${techCount}</div>
              <div class="summary-item-lbl">Technologies</div>
            </div>
            <div>
              <div class="summary-item-val">Oct 2026</div>
              <div class="summary-item-lbl">Latest project</div>
            </div>
          </div>

          <div class="photo-filter-bar">
            ${filters.map(f => `
              <button class="pill-btn ${state.projectFilter === f.id ? 'active' : ''}" onclick="state.projectFilter='${f.id}'; render();">
                ${f.label} ${f.count}
              </button>
            `).join('')}
          </div>

          ${filtered.length === 0 ? `
            <div class="card empty-state">
              <p class="sub-meta">No projects match the selected filter.</p>
            </div>
          ` : `
            <div class="photo-cards-grid">
              ${filtered.map(pr => `
                <div class="photo-project-card" style="cursor:pointer;" onclick="openProjectDetail(${pr.id})">
                  <div>
                    <div class="project-card-head">
                      <div class="course-badge-box" style="border-color:${pr.border}; background:${pr.bg}; color:${pr.color}; display:flex; align-items:center; justify-content:center;">
                        ${renderTechLogo(pr.category, 24)}
                      </div>
                      <div class="project-card-title-wrap">
                        <div class="project-card-title">${escapeHtml(pr.title)}</div>
                        <div class="project-card-sub">${escapeHtml(pr.desc)}</div>
                      </div>
                    </div>

                    <div class="project-flow-chain">
                      ${pr.flow.map((step, idx) => `
                        ${idx > 0 ? `<span class="flow-chain-sep">-</span>` : ''}
                        <span class="flow-chain-pill">${escapeHtml(step)}</span>
                      `).join('')}
                    </div>

                    <div class="project-tech-tags">
                      ${pr.tags.map(t => `<span class="tag-chip">${escapeHtml(t)}</span>`).join('')}
                    </div>
                  </div>

                  <div>
                    <div class="project-date-row">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                      <span>${escapeHtml(pr.completedOn)}</span>
                    </div>

                    <div class="project-action-links">
                      ${pr.links.map(l => `
                        <a href="#" class="proj-link-item" onclick="event.stopPropagation(); ${l.icon === 'live' ? `showToast('Opening ${escapeHtml(l.label)} for ${escapeHtml(pr.title)}')` : `openProjectDetail(${pr.id})`}">
                          ${l.icon === 'code' ? `
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <polyline points="16 18 22 12 16 6"/>
                              <polyline points="8 6 2 12 8 18"/>
                            </svg>
                          ` : l.icon === 'live' ? `
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                              <polyline points="15 3 21 3 21 9"/>
                              <line x1="10" y1="14" x2="21" y2="3"/>
                            </svg>
                          ` : `
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                              <polyline points="14 2 14 8 20 8"/>
                              <line x1="16" y1="13" x2="8" y2="13"/>
                              <line x1="16" y1="17" x2="8" y2="17"/>
                              <polyline points="10 9 9 9 8 9"/>
                            </svg>
                          `}
                          <span>${escapeHtml(l.label)}</span>
                        </a>
                      `).join('')}
                      <a href="#" class="proj-link-item" onclick="event.stopPropagation(); openProjectDetail(${pr.id})" style="margin-left:auto; color:var(--emerald); font-weight:600;">
                        <span>Details ➜</span>
                      </a>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          `}
        </div>
      `;
    }

    function toggleIncidentExpand(id) {
      state.expandedIncidentId = state.expandedIncidentId === id ? null : id;
      render();
    }

    function loadMoreIncidents() {
      state.incidentsDisplayCount = (state.incidentsDisplayCount || 9) + 9;
      render();
    }

    function renderIncidentsPage(isPublic) {
      if (isPublic && !state.visibility.incidents) return renderHiddenByPrivacy('Incidents / problems solved');

      const allIncidents = state.profile.incidents;
      const totalSolved = allIncidents.length;

      // Filter counts matching Photo 3: All 23, Linux 8, Docker 5, Kubernetes 6, AWS 4
      const filterCounts = {
        All: totalSolved,
        Linux: allIncidents.filter(i => i.category === 'Linux').length,
        Docker: allIncidents.filter(i => i.category === 'Docker').length,
        Kubernetes: allIncidents.filter(i => i.category === 'Kubernetes').length,
        AWS: allIncidents.filter(i => i.category === 'AWS').length
      };

      const filters = [
        { id: 'All', label: 'All', count: filterCounts.All },
        { id: 'Linux', label: 'Linux', count: filterCounts.Linux },
        { id: 'Docker', label: 'Docker', count: filterCounts.Docker },
        { id: 'Kubernetes', label: 'Kubernetes', count: filterCounts.Kubernetes },
        { id: 'AWS', label: 'AWS', count: filterCounts.AWS }
      ];

      let filtered = allIncidents;
      if (state.incidentFilter !== 'All') {
        filtered = filtered.filter(i => i.category === state.incidentFilter);
      }

      // Pagination matching Photo 3: "Showing 9 of 23" + "Load more"
      const displayLimit = state.incidentsDisplayCount || 9;
      const visibleIncidents = filtered.slice(0, displayLimit);
      const showingCount = Math.min(displayLimit, filtered.length);

      return `
        <div class="photo-subpage-wrap">
          <button class="back-link" onclick="navigateTo('profile')"><span style="display:inline-block;transform:scaleX(-1);">➜</span> Back to profile</button>

          <div class="photo-subpage-header">
            <div class="photo-title-row">
              <h1 class="photo-subpage-title">Recent incidents / problems solved</h1>
              <span class="photo-title-pill">${totalSolved} solved</span>
            </div>
            <p class="photo-subpage-desc">Real faults found and fixed in lab environments, newest first.</p>
          </div>

          <div class="photo-summary-strip cols-4">
            <div>
              <div class="summary-item-val">${totalSolved}</div>
              <div class="summary-item-lbl">Solved</div>
            </div>
            <div>
              <div class="summary-item-val">6</div>
              <div class="summary-item-lbl">This month</div>
            </div>
            <div>
              <div class="summary-item-val">18 min</div>
              <div class="summary-item-lbl">Avg. time to fix</div>
            </div>
            <div>
              <div class="summary-item-val">Linux</div>
              <div class="summary-item-lbl">Most common area</div>
            </div>
          </div>

          <div class="photo-filter-bar">
            ${filters.map(f => `
              <button class="pill-btn ${state.incidentFilter === f.id ? 'active' : ''}" onclick="state.incidentFilter='${f.id}'; state.incidentsDisplayCount=9; render();">
                ${f.label} ${f.count}
              </button>
            `).join('')}
          </div>

          ${filtered.length === 0 ? `
            <div class="card empty-state">
              <p class="sub-meta">No incidents match the selected filter.</p>
            </div>
          ` : `
            <div class="photo-cards-grid">
              ${visibleIncidents.map(inc => {
                return `
                  <div class="photo-incident-card" style="cursor:pointer;" onclick="openIncidentDetail(${inc.id})">
                    <div>
                      <div class="incident-card-head">
                        <div class="incident-icon-box ${inc.iconType}" style="display:flex; align-items:center; justify-content:center;">
                          ${renderTechLogo(inc.category, 22)}
                        </div>
                        <div class="incident-card-title-wrap">
                          <div class="incident-card-title">${escapeHtml(inc.title)}</div>
                          <div class="incident-card-sub">${escapeHtml(inc.desc)}</div>
                        </div>
                      </div>

                      <div class="incident-tech-tags">
                        ${inc.tags.map(t => `<span class="tag-chip">${escapeHtml(t)}</span>`).join('')}
                      </div>
                    </div>

                    <div>
                      <div class="incident-date-row" style="display:flex; justify-content:space-between; align-items:center;">
                        <div style="display:flex; align-items:center; gap:6px;">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12 6 12 12 16 14"/>
                          </svg>
                          <span>${escapeHtml(inc.time)}</span>
                        </div>
                        <span style="color:var(--emerald); font-size:0.75rem; font-weight:600;">View postmortem ➜</span>
                      </div>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>

            <div class="photo-pagination-row">
              <span class="sub-meta">Showing ${showingCount} of ${filtered.length}</span>
              ${showingCount < filtered.length ? `
                <button class="btn-load-more" onclick="loadMoreIncidents()">Load more</button>
              ` : ''}
            </div>
          `}
        </div>
      `;
    }

    /* =========================================
       CERTIFICATES PAGE & VIEWER
       ========================================= */
    function renderCertificatesPage(isPublic) {
      if (isPublic && !state.visibility.certificates) return renderHiddenByPrivacy('Certificates');

      const certs = state.profile.certificates || [];
      const totalCerts = certs.length;

      return `
        <div class="photo-subpage-wrap">
          <button class="back-link" onclick="navigateTo('profile')"><span style="display:inline-block;transform:scaleX(-1);">➜</span> Back to profile</button>

          <div class="photo-subpage-header">
            <div class="photo-title-row">
              <h1 class="photo-subpage-title">Certificates completed</h1>
              <span class="photo-title-pill">${totalCerts} certificates</span>
            </div>
            <p class="photo-subpage-desc">Official certificates of completion earned on escbash by finishing every lesson, hands-on lab, quiz, and capstone project on live machines.</p>
          </div>

          <div class="photo-summary-strip cols-4">
            <div>
              <div class="summary-item-val">${totalCerts}</div>
              <div class="summary-item-lbl">Certificates earned</div>
            </div>
            <div>
              <div class="summary-item-val">39.5 h</div>
              <div class="summary-item-lbl">Total coursework</div>
            </div>
            <div>
              <div class="summary-item-val">80+</div>
              <div class="summary-item-lbl">Labs & quizzes solved</div>
            </div>
            <div>
              <div class="summary-item-val" style="color:var(--emerald);">100%</div>
              <div class="summary-item-lbl">Verified credentials</div>
            </div>
          </div>

          <div class="photo-cards-grid">
            ${certs.map(c => `
              <div class="photo-cert-card">
                <div>
                  <div class="course-card-head">
                    <div class="course-badge-box" style="border-color:${c.border}; background:${c.bg}; color:${c.color}; display:flex; align-items:center; justify-content:center;">
                      ${renderTechLogo(c.category || c.code, 24)}
                    </div>
                    <div class="course-card-title-wrap">
                      <div class="course-card-title">${escapeHtml(c.title)}</div>
                      <div class="course-card-sub">${escapeHtml(c.course)}</div>
                    </div>
                  </div>

                  <div class="cert-card-preview" onclick="openCertificateModal('${c.id}')" title="Click to view full certificate">
                    ${c.image ? `
                      <img src="${c.image}" alt="Certificate for ${escapeHtml(c.title)} - ${escapeHtml(state.profile.name)}" class="cert-card-thumb-img" />
                      <div class="cert-card-thumb-overlay">
                        <span class="cert-zoom-btn">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                          View Certificate
                        </span>
                      </div>
                    ` : `
                      <div class="cert-preview-fallback">
                        <div class="cert-hex" style="background:${c.bg}; color:${c.color}; border:1px solid ${c.color}; width:52px; height:52px; border-radius:12px; font-size:1.1rem; display:flex; align-items:center; justify-content:center;">
                          ${renderTechLogo(c.category || c.code, 28)}
                        </div>
                        <div style="font-weight:700; font-size:0.9rem; color:var(--text-primary);">${escapeHtml(c.title)}</div>
                        <div style="font-size:0.75rem; color:var(--text-muted); font-family:'JetBrains Mono', monospace;">${escapeHtml(c.certNo)}</div>
                        <div class="cert-card-thumb-overlay">
                          <span class="cert-zoom-btn">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                            View Certificate
                          </span>
                        </div>
                      </div>
                    `}
                  </div>

                  <div class="cert-meta-grid">
                    <div>
                      <div class="cert-meta-lbl">Credential ID</div>
                      <div class="cert-meta-val">${escapeHtml(c.certNo)}</div>
                    </div>
                    <div>
                      <div class="cert-meta-lbl">Issued date</div>
                      <div class="cert-meta-val">${escapeHtml(c.issuedFull || c.date)}</div>
                    </div>
                    <div>
                      <div class="cert-meta-lbl">Coursework</div>
                      <div class="cert-meta-val">${escapeHtml(c.hours)}</div>
                    </div>
                    <div>
                      <div class="cert-meta-lbl">Status</div>
                      <div class="cert-meta-val" style="color:var(--emerald);">✓ Verified</div>
                    </div>
                  </div>
                </div>

                <div class="cert-card-actions">
                  <button class="cert-btn-view" onclick="openCertificateModal('${c.id}')">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    <span>View certificate</span>
                  </button>
                  <a href="#" class="cert-verify-link" onclick="event.preventDefault(); copyCertLink('${c.certNo}', '${c.verifyUrl}')" title="Copy verification URL">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                    <span>Verify</span>
                  </a>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    function openCertificateModal(certId) {
      const certs = state.profile.certificates;
      const c = certs.find(item => item.id === certId || item.code.toLowerCase() === (certId || '').toLowerCase() || item.category.toLowerCase() === (certId || '').toLowerCase()) || certs[0];
      if (!c) return;

      let modalEl = document.getElementById('certModal');
      if (!modalEl) {
        modalEl = document.createElement('div');
        modalEl.id = 'certModal';
        modalEl.className = 'cert-modal-backdrop';
        modalEl.setAttribute('role', 'dialog');
        modalEl.setAttribute('aria-modal', 'true');
        modalEl.addEventListener('click', (e) => {
          if (e.target === modalEl) closeCertificateModal();
        });
        document.body.appendChild(modalEl);
      }

      modalEl.innerHTML = `
        <div class="cert-modal-dialog">
          <div class="cert-modal-head">
            <div class="cert-modal-title-wrap">
              <span class="cert-modal-title">${escapeHtml(c.title)} — Certificate of Completion</span>
              <span class="cert-modal-badge">${escapeHtml(c.certNo)}</span>
            </div>
            <button class="cert-modal-close" onclick="closeCertificateModal()" aria-label="Close modal">✕</button>
          </div>

          <div class="cert-modal-body">
            <div class="cert-modal-image-wrap">
              ${c.image ? `
                <img src="${c.image}" alt="Certificate of Completion - ${escapeHtml(c.title)} - ${escapeHtml(state.profile.name)}" />
              ` : `
                <div style="background:#ffffff; color:#172b1d; padding:48px 40px; font-family:'Manrope', sans-serif; position:relative; min-height:460px; display:flex; flex-direction:column; justify-content:space-between;">
                  <div>
                    <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <span style="background:#172b1d; color:#22c55e; font-weight:800; font-family:'JetBrains Mono', monospace; padding:4px 8px; border-radius:6px; font-size:0.9rem;">&gt;_ esc</span>
                        <span style="font-weight:800; font-size:1.15rem; color:#172b1d; letter-spacing:-0.02em;">bash</span>
                      </div>
                      <div style="text-align:right; font-family:'JetBrains Mono', monospace; font-size:0.75rem; color:#4a5568;">
                        <div>Certificate no. ${escapeHtml(c.certNo)}</div>
                        <div>Issued ${escapeHtml(c.issuedFull || c.date)}</div>
                        <div>Course hours ${escapeHtml(c.hours.split(' ')[0])} h</div>
                      </div>
                    </div>
                    <div style="margin-top:28px;">
                      <div style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.12em; color:#4a5568; font-weight:700;">ESCBASH LABS</div>
                      <div style="font-size:2rem; font-weight:800; letter-spacing:0.04em; color:#172b1d; line-height:1.1; margin-top:4px;">CERTIFICATE<br>OF COMPLETION</div>
                    </div>
                    <div style="margin-top:20px; font-style:italic; font-family:serif; font-size:0.95rem; color:#4a5568;">This is to certify that</div>
                    <div style="font-size:2.4rem; font-weight:800; color:#172b1d; margin-top:8px; line-height:1.1; letter-spacing:-0.02em;">
                      ${escapeHtml(state.profile.name)}
                    </div>
                    <div style="margin-top:14px; font-size:0.88rem; color:#334155; max-width:680px; line-height:1.5;">
                      ${escapeHtml(c.description)}
                    </div>
                  </div>
                  <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-top:36px; padding-top:20px; border-top:1px solid #e2e8f0;">
                    <div>
                      <div style="font-family:'Caveat', cursive, serif; font-size:1.8rem; font-weight:700; color:#172b1d; line-height:1;">Abhishek Veeramalla</div>
                      <div style="font-size:0.8rem; font-weight:700; color:#172b1d; margin-top:4px;">Abhishek Veeramalla</div>
                      <div style="font-size:0.72rem; color:#64748b;">Founder, Escbash Labs</div>
                    </div>
                    <div style="text-align:center; display:flex; flex-direction:column; align-items:center;">
                      <div style="width:64px; height:64px; border-radius:50%; border:2px dashed #15803d; display:flex; align-items:center; justify-content:center; color:#15803d; font-size:0.68rem; font-weight:700; text-transform:uppercase;">
                        VERIFIED
                      </div>
                    </div>
                  </div>
                </div>
              `}
            </div>
          </div>

          <div class="cert-modal-foot">
            <div class="cert-modal-info">
              Recipient: <strong>${escapeHtml(state.profile.name)}</strong> · Signatory: <strong>${escapeHtml(c.issuer)}</strong> (${escapeHtml(c.issuerRole)})
            </div>
            <div class="cert-modal-actions">
              ${c.image ? `
                <a href="${c.image}" download="escbash-certificate-${c.code.toLowerCase()}-${state.profile.slug}.png" class="btn btn-secondary btn-sm" style="display:inline-flex; align-items:center; gap:6px;">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  <span>Download</span>
                </a>
              ` : ''}
              <button class="btn btn-secondary btn-sm" onclick="copyCertLink('${c.certNo}', '${c.verifyUrl}')" style="display:inline-flex; align-items:center; gap:6px;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                <span>Copy link</span>
              </button>
              <button class="btn btn-primary btn-sm" onclick="closeCertificateModal()">Done</button>
            </div>
          </div>
        </div>
      `;

      modalEl.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeCertificateModal() {
      const modalEl = document.getElementById('certModal');
      if (modalEl) {
        modalEl.classList.remove('open');
      }
      document.body.style.overflow = '';
    }

    function copyCertLink(certNo, url) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).catch(() => {});
      }
      showToast(`Credential link for ${certNo} copied!`);
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeCertificateModal();
    });

    /* =========================================
       PROJECT DETAILS & SPECS
       ========================================= */
    const PROJECT_DETAILS = {
      1: {
        filename: 'health_checker.py',
        runtime: 'Python 3.12 / AsyncIO / aiohttp',
        sla: '99.95% Availability',
        latency: '18ms p95 across 100 targets',
        overview: 'A high-performance asynchronous HTTP health checking daemon designed to probe hundreds of microservice endpoints simultaneously without blocking. Incorporates jittered backoff, TCP connection pooling, and structured JSON output for log aggregators.',
        flowDetails: [
          { name: 'poll', desc: 'Asynchronously polls target endpoints from dynamic registry at 15s intervals using asyncio.Semaphore(20) to prevent socket starvation.' },
          { name: 'check', desc: 'Evaluates HTTP status codes (2xx), measures exact microsecond roundtrip latency, and inspects response payloads for JSON health signatures.' },
          { name: 'report', desc: 'Emits structured JSON metrics to stdout and exports Prometheus-compatible gauge metrics (endpoint_up, endpoint_latency_seconds).' }
        ],
        code: `"""
escbash lab: Concurrent HTTP Endpoint Health Monitor
Author: Ananya Rao (@ananya-rao)
"""
import asyncio
import aiohttp
import time
import logging
import json
from typing import Dict, Any

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s")
logger = logging.getLogger("health_checker")

ENDPOINTS = [
    {"name": "auth-service", "url": "https://auth.internal.escbash/healthz", "timeout": 2.0},
    {"name": "payment-gateway", "url": "https://pay.internal.escbash/ready", "timeout": 3.0},
    {"name": "order-processor", "url": "https://orders.internal.escbash/ping", "timeout": 1.5},
    {"name": "user-registry", "url": "https://users.internal.escbash/health", "timeout": 2.0},
    {"name": "notification-worker", "url": "https://notify.internal.escbash/alive", "timeout": 2.5},
]

async def check_target(session: aiohttp.ClientSession, target: Dict[str, Any], semaphore: asyncio.Semaphore) -> Dict[str, Any]:
    async with semaphore:
        start_time = time.perf_counter()
        name, url, timeout = target["name"], target["url"], target["timeout"]
        try:
            async with session.get(url, timeout=aiohttp.ClientTimeout(total=timeout)) as resp:
                latency_ms = round((time.perf_counter() - start_time) * 1000, 2)
                is_up = 200 <= resp.status < 300
                logger.info(f"CHECK SUCCESS | {name:20} | status={resp.status} | latency={latency_ms}ms")
                return {"name": name, "status": "UP" if is_up else "DOWN", "http_code": resp.status, "latency_ms": latency_ms}
        except Exception as exc:
            latency_ms = round((time.perf_counter() - start_time) * 1000, 2)
            logger.error(f"CHECK FAILED  | {name:20} | error={exc.__class__.__name__} | latency={latency_ms}ms")
            return {"name": name, "status": "DOWN", "error": str(exc), "latency_ms": latency_ms}

async def run_monitor_cycle(concurrency_limit: int = 20):
    semaphore = asyncio.Semaphore(concurrency_limit)
    connector = aiohttp.TCPConnector(limit_per_host=10, ttl_dns_cache=300)
    async with aiohttp.ClientSession(connector=connector) as session:
        tasks = [check_target(session, ep, semaphore) for ep in ENDPOINTS]
        results = await asyncio.gather(*tasks)
        up_count = sum(1 for r in results if r.get("status") == "UP")
        print(f"\n[SUMMARY] {up_count}/{len(results)} services UP.")

if __name__ == "__main__":
    asyncio.run(run_monitor_cycle())`,
        decisions: [
          'Chose asyncio + aiohttp.ClientSession over multi-threading to achieve 1,200+ checks/sec with <45MB RAM footprint.',
          'Configured TCPConnector with DNS caching (ttl=300s) to avoid slamming CoreDNS during heavy burst cycles.',
          'Enforced concurrency bounding via Semaphore(20) to prevent OS file descriptor exhaustion (ulimit -n).'
        ],
        tests: [
          'Tested against 100 mock HTTP endpoints with simulated network delays (10ms - 2500ms).',
          'Zero leaked sockets confirmed via netstat / lsof -p during a 60-minute continuous run.',
          'Automated retry assertion: verified backoff kicks in immediately on 503 Service Unavailable.'
        ]
      },
      2: {
        filename: 'docker-compose.yml',
        runtime: 'Docker Engine v27.2 / Compose v2.29',
        sla: 'Zero-Downtime Local Restart',
        latency: '<5ms internal bridge latency',
        overview: 'Production-grade multi-tier containerized stack featuring an API gateway (Nginx reverse proxy), FastAPI backend service, Redis cache, and Postgres DB, isolated across public and private bridge networks with native health checks.',
        flowDetails: [
          { name: 'build', desc: 'Multi-stage Dockerfile builds minimizing final container image sizes (<35MB using Alpine runtime) and caching dependency layers.' },
          { name: 'compose', desc: 'Orchestrates service startup order using depends_on conditions mapped to container healthchecks (service_healthy).' },
          { name: 'run', desc: 'Deploys stack with resource reservations (CPU/RAM limits), persistent Docker volumes for DB data, and non-root UID execution.' }
        ],
        code: `# escbash lab: Docker Compose Multi-Tier App Architecture
# Author: Ananya Rao (@ananya-rao)
version: '3.9'

services:
  gateway:
    image: nginx:1.27-alpine
    container_name: escbash-gateway
    restart: unless-stopped
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
    depends_on:
      api:
        condition: service_healthy
    networks:
      - frontend-net

  api:
    build:
      context: ./backend
      dockerfile: Dockerfile
    container_name: escbash-api
    restart: unless-stopped
    environment:
      - DATABASE_URL=postgres://app_user:secret_pw@postgres:5432/app_db
      - REDIS_URL=redis://redis:6379/0
      - APP_ENV=production
    healthcheck:
      test: ["CMD-SHELL", "wget --no-verbose --tries=1 --spider http://127.0.0.1:8000/healthz || exit 1"]
      interval: 10s
      timeout: 3s
      retries: 3
      start_period: 15s
    depends_on:
      postgres:
        condition: service_healthy
      redis:
        condition: service_healthy
    networks:
      - frontend-net
      - backend-net

  redis:
    image: redis:7.2-alpine
    container_name: escbash-redis
    restart: unless-stopped
    command: ["redis-server", "--appendonly", "yes", "--requirepass", "redis_pw"]
    healthcheck:
      test: ["CMD", "redis-cli", "-a", "redis_pw", "ping"]
      interval: 8s
      timeout: 2s
      retries: 3
    networks:
      - backend-net

  postgres:
    image: postgres:16-alpine
    container_name: escbash-db
    restart: unless-stopped
    environment:
      POSTGRES_DB: app_db
      POSTGRES_USER: app_user
      POSTGRES_PASSWORD: secret_pw
    volumes:
      - db-data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U app_user -d app_db"]
      interval: 10s
      timeout: 4s
      retries: 5
    networks:
      - backend-net

networks:
  frontend-net:
    driver: bridge
  backend-net:
    driver: bridge
    internal: true

volumes:
  db-data:`,
        decisions: [
          'Segregated public ingress (frontend-net) from internal services (backend-net with internal: true) preventing direct DB exposure.',
          'Used native healthcheck blocks rather than wait-for-it.sh scripts to integrate with Compose engine status.',
          'Configured named volume db-data with proper permissions to safeguard data persistence across image upgrades.'
        ],
        tests: [
          'Simulated sudden database crash (docker kill escbash-db); Compose healthcheck detected failure within 5s and restarted service automatically.',
          'Verified network isolation: backend database cannot reach external internet; frontend gateway cannot query Redis directly.'
        ]
      },
      3: {
        filename: 'ecs_fargate.tf',
        runtime: 'AWS ECS Fargate / Terraform / ALB',
        sla: '99.99% High Availability',
        latency: '24ms p95 end-to-end',
        overview: 'Serverless container deployment on AWS ECS Fargate fronted by an Application Load Balancer (ALB). Implements zero-downtime rolling deployments, target group health probes, and IAM least-privilege task execution roles.',
        flowDetails: [
          { name: 'image', desc: 'Docker image built and pushed to Amazon Elastic Container Registry (ECR) with immutable image tags and vulnerability scanning.' },
          { name: 'ECS', desc: 'Fargate task definition with AWS CloudWatch log routing (awslogs), memory/CPU hard caps, and secret injection from AWS SSM.' },
          { name: 'ALB', desc: 'Dual-subnet ALB with SSL/TLS termination on port 443, dynamic port mapping, and automatic deregistration delay (30s) for graceful connection draining.' }
        ],
        code: `# escbash lab: AWS ECS on Fargate with Application Load Balancer
# Author: Ananya Rao (@ananya-rao)

resource "aws_ecs_cluster" "main" {
  name = "escbash-production-cluster"
  setting {
    name  = "containerInsights"
    value = "enabled"
  }
}

resource "aws_ecs_task_definition" "api" {
  family                   = "escbash-api-task"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = "256"
  memory                   = "512"
  execution_role_arn       = aws_iam_role.ecs_execution.arn
  task_role_arn            = aws_iam_role.ecs_task.arn

  container_definitions = jsonencode([{
    name      = "api-app"
    image     = "\${aws_ecr_repository.api.repository_url}:v1.4.2"
    essential = true
    portMappings = [{
      containerPort = 8080
      hostPort      = 8080
      protocol      = "tcp"
    }]
    logConfiguration = {
      logDriver = "awslogs"
      options = {
        "awslogs-group"         = "/ecs/escbash-api"
        "awslogs-region"        = "us-east-1"
        "awslogs-stream-prefix" = "ecs"
      }
    }
  }])
}

resource "aws_ecs_service" "api" {
  name            = "escbash-api-service"
  cluster         = aws_ecs_cluster.main.id
  task_definition = aws_ecs_task_definition.api.arn
  desired_count   = 2
  launch_type     = "FARGATE"

  network_configuration {
    subnets          = [aws_subnet.private_a.id, aws_subnet.private_b.id]
    security_groups  = [aws_security_group.ecs_tasks.id]
    assign_public_ip = false
  }

  load_balancer {
    target_group_arn = aws_lb_target_group.api.arn
    container_name   = "api-app"
    container_port   = 8080
  }

  deployment_controller {
    type = "ECS"
  }
}`,
        decisions: [
          'Selected serverless Fargate over self-managed EC2 instances to eliminate OS patching, security kernel updates, and capacity provisioning.',
          'Assigned tasks only to private subnets without public IPs; outbound traffic routed through NAT Gateway for security hardening.',
          'Configured deregistration_delay.timeout_seconds to 30s to allow in-flight HTTP connections to drain cleanly during deploys.'
        ],
        tests: [
          'Continuous curl probe loop (50 req/sec) during a rolling task deployment; 0 failed requests (100% 200 OK maintained).',
          'Verified CloudWatch Container Insights metrics: CPU utilization stayed below 35% during peak simulated traffic.'
        ]
      },
      4: {
        filename: 'backup-rotate.sh',
        runtime: 'POSIX Bash 5.2 / Linux Cron',
        sla: 'Nightly RPO 24h / RTO < 10m',
        latency: '2m 14s execution time',
        overview: 'Resilient POSIX Bash backup utility triggered nightly via cron. Creates timestamped tarball archives of critical configuration directories (/etc, /var/www, app configs), checks integrity with sha256 checksums, and enforces a 14-day retention policy.',
        flowDetails: [
          { name: 'archive', desc: 'Creates gzip-compressed tar archives with strict error handling (set -euo pipefail), excluding temporary files and sockets.' },
          { name: 'rotate', desc: 'Prunes backup snapshots older than 14 days using find -mtime +14 -delete and tracks remaining storage space on backup mount.' },
          { name: 'log', desc: 'Writes timestamped operational logs to /var/log/escbash-backup.log and dispatches alert webhooks on any non-zero exit code.' }
        ],
        code: `#!/usr/bin/env bash
# ==============================================================================
# escbash lab: Production Backup & Retention Rotation Script
# Author: Ananya Rao (@ananya-rao)
# Schedule: 0 2 * * * (Nightly at 02:00 UTC)
# ==============================================================================
set -euo pipefail
IFS=$'\n\t'

# Configuration
readonly BACKUP_SRC=("/etc/nginx" "/etc/systemd/system" "/var/www/production")
readonly DEST_DIR="/mnt/backups/escbash"
readonly LOG_FILE="/var/log/escbash-backup.log"
readonly LOCK_FILE="/var/lock/escbash-backup.lock"
readonly RETENTION_DAYS=14
readonly DATE_TAG=$(date +"%Y%m%d_%H%M%S")
readonly ARCHIVE_NAME="backup_\${DATE_TAG}.tar.gz"

log() {
  local level="$1"; shift
  echo "[\$(date -u +"%Y-%m-%dT%H:%M:%SZ")] [\${level}] $*" | tee -a "\${LOG_FILE}"
}

# Prevent overlapping cron runs with flock
exec 200>"\${LOCK_FILE}"
flock -n 200 || { log "ERROR" "Backup already in progress. Exiting."; exit 1; }

main() {
  log "INFO" "Starting backup routine. Target: \${DEST_DIR}/\${ARCHIVE_NAME}"
  mkdir -p "\${DEST_DIR}"

  # Stage 1: Archive & Compress
  tar -czf "\${DEST_DIR}/\${ARCHIVE_NAME}" "\${BACKUP_SRC[@]}" 2>>"\${LOG_FILE}"
  local checksum
  checksum=\$(sha256sum "\${DEST_DIR}/\${ARCHIVE_NAME}" | awk '{print $1}')
  echo "\${checksum}  \${ARCHIVE_NAME}" > "\${DEST_DIR}/\${ARCHIVE_NAME}.sha256"
  log "INFO" "Archive created successfully (SHA256: \${checksum:0:12}...)"

  # Stage 2: Rotate Old Archives (> 14 days)
  local pruned_count
  pruned_count=\$(find "\${DEST_DIR}" -name "backup_*.tar.gz" -mtime +\${RETENTION_DAYS} | wc -l)
  find "\${DEST_DIR}" -name "backup_*.tar.gz*" -mtime +\${RETENTION_DAYS} -delete
  log "INFO" "Retention rotation complete. Pruned \${pruned_count} old archives."

  # Stage 3: Disk Space & Integrity Summary
  local disk_avail
  disk_avail=\$(df -h "\${DEST_DIR}" | awk 'NR==2 {print $4}')
  log "INFO" "Backup completed. Available storage on mount: \${disk_avail}"
}

trap 'log "ERROR" "Backup encountered fatal failure on line $LINENO"' ERR
main "$@"`,
        decisions: [
          'Implemented atomic locking with flock on file descriptor 200 to guarantee parallel cron jobs never collide.',
          'Generated accompanying .sha256 checksum files alongside every archive to verify bit-level integrity before recovery.',
          'Configured ERR trap to log line number and failure context for rapid triage upon alert.'
        ],
        tests: [
          'Dry-run recovery test: unpacked archive in sandboxed /tmp directory and diffed configuration files; 100% exact match.',
          'Simulated concurrent job trigger: second process exited immediately with status code 1 and logged lock contention message.'
        ]
      },
      5: {
        filename: 'vpc.tf',
        runtime: 'Terraform v1.9 / AWS Provider v5.50',
        sla: 'Multi-AZ Fault Tolerant',
        latency: '<1.2ms intra-AZ network latency',
        overview: 'Infrastructure as Code (IaC) project establishing an enterprise AWS VPC across 3 Availability Zones with segregated public, private, and database subnets, NAT Gateways for outbound egress, and strict Network ACLs.',
        flowDetails: [
          { name: 'plan', desc: 'Validates syntax with terraform validate and previews 28 planned resources with terraform plan -out=tfplan, calculating resource drift.' },
          { name: 'apply', desc: 'Provisions Internet Gateway, 3 public subnets, 3 private subnets, routing tables, and Elastic IPs with deterministic dependency graphing.' },
          { name: 'destroy', desc: 'Cleanly tears down ephemeral test environments with single-command terraform destroy preventing runaway cloud spend.' }
        ],
        code: `# escbash lab: Multi-AZ Enterprise VPC Architecture
# Author: Ananya Rao (@ananya-rao)

terraform {
  required_version = ">= 1.5.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

variable "vpc_cidr" { default = "10.0.0.0/16" }
variable "azs" { default = ["us-east-1a", "us-east-1b", "us-east-1c"] }

resource "aws_vpc" "main" {
  cidr_block           = var.vpc_cidr
  enable_dns_hostnames = true
  enable_dns_support   = true
  tags = { Name = "escbash-vpc-prod", ManagedBy = "Terraform" }
}

resource "aws_internet_gateway" "igw" {
  vpc_id = aws_vpc.main.id
  tags   = { Name = "escbash-igw" }
}

resource "aws_subnet" "public" {
  count                   = length(var.azs)
  vpc_id                  = aws_vpc.main.id
  cidr_block              = cidrsubnet(var.vpc_cidr, 4, count.index)
  availability_zone       = var.azs[count.index]
  map_public_ip_on_launch = true
  tags = { Name = "escbash-public-\${var.azs[count.index]}" }
}

resource "aws_subnet" "private" {
  count             = length(var.azs)
  vpc_id            = aws_vpc.main.id
  cidr_block        = cidrsubnet(var.vpc_cidr, 4, count.index + 4)
  availability_zone = var.azs[count.index]
  tags = { Name = "escbash-private-\${var.azs[count.index]}" }
}

resource "aws_eip" "nat" {
  domain = "vpc"
  tags   = { Name = "escbash-nat-eip" }
}

resource "aws_nat_gateway" "nat" {
  allocation_id = aws_eip.nat.id
  subnet_id     = aws_subnet.public[0].id
  tags          = { Name = "escbash-nat-gw" }
}`,
        decisions: [
          'Calculated CIDR block allocations using terraform cidrsubnet function to guarantee non-overlapping subnet spaces.',
          'Placed single NAT Gateway in public[0] for cost optimization in staging, parameterized for multi-NAT in production.',
          'Configured remote state storage with S3 and DynamoDB lock tables to prevent state file corruption during team deploys.'
        ],
        tests: [
          'Spawned test instance in private subnet; confirmed outbound HTTPS package installations through NAT gateway succeeded.',
          'Verified zero inbound public accessibility from external IP into private subnet instances.'
        ]
      }
    };

    /* =========================================
       INCIDENT DIAGNOSTICS GENERATOR
       ========================================= */
    function getIncidentDiagnostics(inc) {
      const cat = inc.category || 'Linux';
      let ttd = '2m';
      let mttr = '14m';
      let blastRadius = 'Single Host / Pod';
      let diagCmd = 'sudo journalctl -xe -n 25';
      let diagOutput = '[FAILED] Service encountered unhandled error state.\nProcess terminated with return code 1.';
      let verifyCmd = 'curl -s -o /dev/null -w "%{http_code}" http://localhost:8080/healthz';

      if (inc.id === 1) {
        ttd = '1m';
        mttr = '12m';
        blastRadius = 'Local filesystem /var';
        diagCmd = 'df -h /var && sudo du -sh /var/log/* | sort -hr | head -n 5';
        diagOutput = 'Filesystem      Size  Used Avail Use% Mounted on\n/dev/sda1        20G   20G     0 100% /var\n\n16G\t/var/log/nginx\n2.4G\t/var/log/journal\n1.1G\t/var/log/syslog';
        verifyCmd = 'df -h /var && sudo logrotate -d /etc/logrotate.d/nginx';
      } else if (inc.id === 2) {
        ttd = '2m';
        mttr = '15m';
        blastRadius = 'Single Pod (api-7f9c)';
        diagCmd = 'kubectl get pods && kubectl describe pod -l app=api';
        diagOutput = 'NAME                     READY   STATUS             RESTARTS   AGE\napi-7f9c-859fb598c7      0/1     CrashLoopBackOff   4          3m\n\nEvents:\n  Warning  BackOff  8s (x5 over 90s)  kubelet  Back-off restarting failed container\n  Warning  Failed   8s                kubelet  Error: KeyError: DATABASE_HOST not found in environment';
        verifyCmd = 'kubectl get pods -l app=api -o jsonpath="{.items[*].status.phase}"';
      } else if (inc.id === 3) {
        ttd = '1m';
        mttr = '8m';
        blastRadius = 'Host Port 8080';
        diagCmd = 'sudo ss -tulpn | grep :8080';
        diagOutput = 'tcp   LISTEN 0      128    0.0.0.0:8080    0.0.0.0:*    users:(("docker-proxy",pid=14298,fd=4))';
        verifyCmd = 'docker ps --filter "publish=8080"';
      } else if (inc.id === 4) {
        ttd = '3m';
        mttr = '18m';
        blastRadius = 'ALB Target Group';
        diagCmd = 'aws elbv2 describe-target-health --target-group-arn arn:aws:elasticloadbalancing:...';
        diagOutput = '{\n  "TargetHealthDescriptions": [\n    {\n      "Target": { "Id": "10.0.2.45", "Port": 80 },\n      "TargetHealth": {\n        "State": "unhealthy",\n        "Reason": "Target.ResponseCodeMismatch",\n        "Description": "Target connection failed on port 80 (Container listening on 8080)"\n      }\n    }\n  ]\n}';
        verifyCmd = 'aws elbv2 describe-target-health --target-group-arn arn:aws:elasticloadbalancing:... --query "TargetHealthDescriptions[*].TargetHealth.State"';
      } else if (cat === 'Kubernetes') {
        ttd = '2m';
        mttr = '16m';
        blastRadius = 'Namespace Pod Cluster';
        diagCmd = 'kubectl get events --sort-by=.metadata.creationTimestamp | tail -n 8';
        diagOutput = 'LAST SEEN   TYPE      REASON      OBJECT              MESSAGE\n2m          Warning   FailedSync  pod/worker-99bf8    Error syncing pod: ' + escapeHtml(inc.desc);
        verifyCmd = 'kubectl get pods --field-selector status.phase!=Running';
      } else if (cat === 'Docker') {
        ttd = '2m';
        mttr = '11m';
        blastRadius = 'Container Daemon';
        diagCmd = 'docker stats --no-stream && docker ps -a --filter status=exited';
        diagOutput = 'CONTAINER ID   IMAGE          CPU %     MEM USAGE / LIMIT     PIDS\n9a8f21bc034d   worker:app     194.2%    1.89GiB / 2.00GiB     42';
        verifyCmd = 'docker ps --format "{{.Names}}: {{.Status}}"';
      } else if (cat === 'AWS') {
        ttd = '4m';
        mttr = '20m';
        blastRadius = 'AWS Cloud Provider / VPC';
        diagCmd = 'aws sts get-caller-identity && aws cloudwatch describe-alarms --state-value ALARM';
        diagOutput = '{\n  "MetricAlarms": [\n    {\n      "AlarmName": "' + escapeHtml(inc.title) + '",\n      "StateValue": "ALARM",\n      "StateReason": "' + escapeHtml(inc.desc) + '"\n    }\n  ]\n}';
        verifyCmd = 'aws cloudwatch describe-alarms --state-value ALARM';
      }

      return {
        ttd,
        mttr,
        blastRadius,
        diagCmd,
        diagOutput,
        verifyCmd,
        executiveSummary: inc.desc + ' Root cause was isolated to ' + inc.rootCause,
        impactDetails: 'Service observed anomalous behavior or rejected requests until resolution was applied. Impact was contained within the lab environment.',
        timeline: [
          { t: 'T+00m', event: 'Automated telemetry monitor fired alert for ' + inc.title + '.' },
          { t: 'T+03m', event: 'Investigator connected to environment and initiated live diagnostics.' },
          { t: 'T+07m', event: 'Root cause confirmed: ' + inc.rootCause },
          { t: 'T+12m', event: 'Remediation command applied: ' + inc.fixCmd },
          { t: 'T+15m', event: 'Verification checks passed; system telemetry returned to baseline.' }
        ],
        whys: [
          'Observed fault: ' + inc.desc,
          'Underlying condition: ' + inc.rootCause,
          'Configuration or resource limits lacked strict isolation threshold',
          'Remediation applied directly via validated command',
          'Permanent guard established: ' + inc.prevention
        ],
        guards: [
          inc.prevention,
          'Automated CI/CD manifest validation rule',
          'Configured proactive threshold alert in monitoring dashboard'
        ]
      };
    }

    /* =========================================
       PROJECT DETAIL PAGE RENDERER
       ========================================= */
    function renderProjectDetailPage(isPublic) {
      const pr = state.profile.projects.find(p => p.id === state.selectedProjectId) || state.profile.projects[0];
      const spec = PROJECT_DETAILS[pr.id] || {
        filename: 'main.py',
        runtime: 'Python 3.12 / Linux',
        sla: '99.9% Uptime',
        latency: '<20ms p95',
        overview: pr.desc,
        flowDetails: pr.flow.map(f => ({ name: f, desc: 'Step in the ' + pr.title + ' pipeline.' })),
        code: '# Project: ' + pr.title + '\n# Description: ' + pr.desc + '\n',
        decisions: ['Configured for production-level reliability', 'Integrated telemetry and automated health assertions'],
        tests: ['100% automated test pass rate', 'Zero resource leakage under stress testing']
      };

      const otherProjects = state.profile.projects.filter(p => p.id !== pr.id);
      const backLabel = state.previousPage === 'profile' ? 'profile' : 'projects';
      const backAction = state.previousPage === 'profile' ? "navigateTo('profile')" : "navigateTo('projects')";

      return `
        <div class="photo-subpage-wrap detail-container">
          <div class="detail-breadcrumb-bar">
            <div class="breadcrumb-trail">
              <a href="#" style="color:var(--text-muted); text-decoration:none;" onclick="event.preventDefault(); navigateTo('profile');">Profile</a>
              <span class="breadcrumb-sep">/</span>
              <a href="#" style="color:var(--text-muted); text-decoration:none;" onclick="event.preventDefault(); navigateTo('projects');">Projects</a>
              <span class="breadcrumb-sep">/</span>
              <span class="breadcrumb-active">${escapeHtml(pr.title)}</span>
            </div>
            <div class="detail-actions-row">
              <button class="back-link" style="margin-bottom:0;" onclick="${backAction}"><span style="display:inline-block;transform:scaleX(-1);">➜</span> Back to ${backLabel}</button>
              <button class="btn btn-secondary btn-sm" onclick="copyToClipboard(window.location.href, 'Project link copied!')">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
                Share
              </button>
              <button class="btn btn-primary btn-sm" onclick="showToast('Launching interactive sandbox for ${escapeHtml(pr.title)}...')">
                ▶ Interactive Lab
              </button>
            </div>
          </div>

          <div class="detail-hero-card">
            <div class="detail-hero-top">
              <div class="course-badge-box" style="width:52px; height:52px; border-color:${pr.border}; background:${pr.bg}; color:${pr.color}; flex-shrink:0; display:flex; align-items:center; justify-content:center;">
                ${renderTechLogo(pr.category, 32)}
              </div>
              <div class="detail-title-wrap">
                <div style="display:flex; align-items:center; gap:8px; margin-bottom:6px; flex-wrap:wrap;">
                  <span class="badge-resolved">Verified Lab Project</span>
                  <span class="tag-chip" style="font-weight:600;">${pr.category}</span>
                  <span style="font-size:0.75rem; color:var(--text-muted);">${escapeHtml(pr.completedOn)}</span>
                </div>
                <h1 class="detail-main-title">${escapeHtml(pr.title)}</h1>
                <p class="detail-main-sub">${escapeHtml(pr.desc)}</p>
              </div>
            </div>

            <div class="detail-stat-pill-row">
              <div class="detail-stat-item">
                <div class="detail-stat-label">Platform / Stack</div>
                <div class="detail-stat-val">${escapeHtml(spec.runtime)}</div>
              </div>
              <div class="detail-stat-item">
                <div class="detail-stat-label">Target SLA / Uptime</div>
                <div class="detail-stat-val">${escapeHtml(spec.sla)}</div>
              </div>
              <div class="detail-stat-item">
                <div class="detail-stat-label">Observed Latency</div>
                <div class="detail-stat-val">${escapeHtml(spec.latency)}</div>
              </div>
              <div class="detail-stat-item">
                <div class="detail-stat-label">Verification Status</div>
                <div class="detail-stat-val" style="color:var(--emerald);">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Passed & Deployed
                </div>
              </div>
            </div>

            <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:10px;">
              <div class="project-tech-tags" style="margin-bottom:0;">
                ${pr.tags.map(t => `<span class="tag-chip">${escapeHtml(t)}</span>`).join('')}
              </div>
              <div class="detail-actions-row">
                ${pr.links.map(l => `
                  <a href="#" class="btn btn-secondary btn-sm" onclick="event.preventDefault(); showToast('Accessing ${escapeHtml(l.label)} for ${escapeHtml(pr.title)}')">
                    ${l.label === 'Live demo' ? '🌐 Live Demo' : l.label === 'Code' ? '💻 Repository' : '📄 Documentation'}
                  </a>
                `).join('')}
              </div>
            </div>
          </div>

          <div class="detail-grid-2">
            <div>
              <!-- Architecture & Overview -->
              <div class="detail-section-card">
                <h2 class="detail-sec-title">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                  Architecture & Overview
                </h2>
                <p class="detail-prose">${escapeHtml(spec.overview)}</p>
                
                <div style="font-size:0.8rem; font-weight:700; color:var(--text-primary); margin:18px 0 10px 0;">Pipeline & Execution Flow:</div>
                <div class="project-flow-chain" style="margin-bottom:14px;">
                  ${pr.flow.map((step, idx) => `
                    ${idx > 0 ? `<span class="flow-chain-sep">-</span>` : ''}
                    <span class="flow-chain-pill" style="padding:4px 12px; font-weight:700;">${escapeHtml(step)}</span>
                  `).join('')}
                </div>

                <div style="display:flex; flex-direction:column; gap:10px; margin-top:14px;">
                  ${spec.flowDetails.map((f, i) => `
                    <div style="background:var(--bg-surface-2); border:1px solid var(--border); border-radius:8px; padding:10px 14px; font-size:0.83rem;">
                      <span style="font-weight:700; color:var(--text-primary); font-family:'JetBrains Mono', monospace;">Stage ${i+1} [${escapeHtml(f.name)}]:</span>
                      <span style="color:var(--text-secondary); margin-left:6px;">${escapeHtml(f.desc)}</span>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Production Source Code & Manifest -->
              <div class="detail-section-card">
                <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:12px;">
                  <h2 class="detail-sec-title" style="margin-bottom:0;">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                    Source Code & Configuration
                  </h2>
                  <span class="tag-chip" style="font-family:'JetBrains Mono', monospace; font-size:0.75rem;">${escapeHtml(spec.filename)}</span>
                </div>

                <div class="code-box-header">
                  <span>escbash-labs / ${escapeHtml(spec.filename)}</span>
                  <button class="copy-code-btn" onclick="copyToClipboard(document.getElementById('code-proj-${pr.id}').innerText, 'Source code copied!')">Copy Code</button>
                </div>
                <pre class="code-box-pre" id="code-proj-${pr.id}"><code>${escapeHtml(spec.code)}</code></pre>
              </div>

              <!-- Verification & Test Results -->
              <div class="detail-section-card">
                <h2 class="detail-sec-title">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  Verification & Test Metrics
                </h2>
                <div style="display:flex; flex-direction:column; gap:8px;">
                  ${spec.tests.map(t => `
                    <div style="display:flex; align-items:flex-start; gap:10px; font-size:0.84rem; color:var(--text-secondary);">
                      <span style="color:var(--emerald); font-weight:700; margin-top:1px;">✓</span>
                      <span>${escapeHtml(t)}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>

            <div>
              <!-- Key Design Decisions -->
              <div class="detail-section-card">
                <h3 class="detail-sec-title">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                  Key Design Decisions
                </h3>
                <div style="display:flex; flex-direction:column; gap:10px;">
                  ${spec.decisions.map(d => `
                    <div style="font-size:0.82rem; color:var(--text-secondary); line-height:1.5; padding-left:12px; border-left:2px solid var(--emerald);">
                      ${escapeHtml(d)}
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Project Metadata Card -->
              <div class="detail-section-card">
                <h3 class="detail-sec-title">Specification</h3>
                <div style="display:flex; flex-direction:column; gap:12px; font-size:0.82rem;">
                  <div style="display:flex; justify-content:space-between; border-bottom:1px solid var(--border); padding-bottom:8px;">
                    <span style="color:var(--text-muted);">Author</span>
                    <span style="font-weight:600; color:var(--text-primary);">Ananya Rao</span>
                  </div>
                  <div style="display:flex; justify-content:space-between; border-bottom:1px solid var(--border); padding-bottom:8px;">
                    <span style="color:var(--text-muted);">Category</span>
                    <span style="font-weight:600; color:var(--text-primary);">${pr.category}</span>
                  </div>
                  <div style="display:flex; justify-content:space-between; border-bottom:1px solid var(--border); padding-bottom:8px;">
                    <span style="color:var(--text-muted);">Lab Environment</span>
                    <span style="font-weight:600; color:var(--text-primary);">escbash Cloud Sandbox</span>
                  </div>
                  <div style="display:flex; justify-content:space-between; border-bottom:1px solid var(--border); padding-bottom:8px;">
                    <span style="color:var(--text-muted);">Completed</span>
                    <span style="font-weight:600; color:var(--text-primary);">${pr.completedOn.replace('Completed ', '')}</span>
                  </div>
                  <div style="display:flex; justify-content:space-between;">
                    <span style="color:var(--text-muted);">Artifact License</span>
                    <span style="font-weight:600; color:var(--text-primary);">MIT / Open Source</span>
                  </div>
                </div>
              </div>

              <!-- Other Projects -->
              <div class="detail-section-card">
                <h3 class="detail-sec-title">Other Projects</h3>
                <div style="display:flex; flex-direction:column; gap:10px;">
                  ${otherProjects.map(op => `
                    <div style="display:flex; align-items:center; justify-content:space-between; gap:10px; padding:8px 10px; border-radius:8px; background:var(--bg-surface-2); border:1px solid var(--border); cursor:pointer; transition:all 0.15s;" onclick="openProjectDetail(${op.id})">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <div class="course-badge-box" style="width:28px; height:28px; border-color:${op.border}; background:${op.bg}; color:${op.color}; display:flex; align-items:center; justify-content:center;">
                          ${renderTechLogo(op.category, 18)}
                        </div>
                        <div>
                          <div style="font-size:0.8rem; font-weight:600; color:var(--text-primary);">${escapeHtml(op.title)}</div>
                          <div style="font-size:0.72rem; color:var(--text-muted);">${op.category}</div>
                        </div>
                      </div>
                      <span style="color:var(--emerald); font-size:0.8rem;">➜</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    /* =========================================
       INCIDENT DETAIL PAGE RENDERER
       ========================================= */
    function renderIncidentDetailPage(isPublic) {
      const inc = state.profile.incidents.find(i => i.id === state.selectedIncidentId) || state.profile.incidents[0];
      const diag = getIncidentDiagnostics(inc);

      const severityBadge = inc.iconType === 'alert'
        ? '<span class="badge-severity-high">P1 - High Severity</span>'
        : inc.iconType === 'pulse'
        ? '<span class="badge-severity-med">P2 - Medium Severity</span>'
        : '<span class="badge-severity-low">P3 - Minor Lab Issue</span>';

      const otherIncidents = state.profile.incidents.filter(i => i.id !== inc.id).slice(0, 3);
      const backLabel = state.previousPage === 'profile' ? 'profile' : 'incidents';
      const backAction = state.previousPage === 'profile' ? "navigateTo('profile')" : "navigateTo('incidents')";

      return `
        <div class="photo-subpage-wrap detail-container">
          <div class="detail-breadcrumb-bar">
            <div class="breadcrumb-trail">
              <a href="#" style="color:var(--text-muted); text-decoration:none;" onclick="event.preventDefault(); navigateTo('profile');">Profile</a>
              <span class="breadcrumb-sep">/</span>
              <a href="#" style="color:var(--text-muted); text-decoration:none;" onclick="event.preventDefault(); navigateTo('incidents');">Incidents</a>
              <span class="breadcrumb-sep">/</span>
              <span class="breadcrumb-active">INC-${String(1000 + inc.id)}</span>
            </div>
            <div class="detail-actions-row">
              <button class="back-link" style="margin-bottom:0;" onclick="${backAction}"><span style="display:inline-block;transform:scaleX(-1);">➜</span> Back to ${backLabel}</button>
              <button class="btn btn-secondary btn-sm" onclick="copyToClipboard(window.location.href, 'Postmortem link copied!')">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
                Share Postmortem
              </button>
              <button class="btn btn-primary btn-sm" onclick="showToast('Replaying incident environment for INC-${1000 + inc.id}...')">
                ▶ Replay Lab Fault
              </button>
            </div>
          </div>

          <div class="detail-hero-card">
            <div class="detail-hero-top">
              <div class="incident-icon-box ${inc.iconType}" style="width:52px; height:52px; border-radius:10px; flex-shrink:0; display:flex; align-items:center; justify-content:center;">
                ${renderTechLogo(inc.category, 32)}
              </div>
              <div class="detail-title-wrap">
                <div style="display:flex; align-items:center; gap:8px; margin-bottom:6px; flex-wrap:wrap;">
                  ${severityBadge}
                  <span class="badge-resolved">✓ Resolved</span>
                  <span class="tag-chip" style="font-weight:600;">${inc.category}</span>
                  <span style="font-size:0.75rem; color:var(--text-muted);">Resolved ${escapeHtml(inc.time)}</span>
                </div>
                <h1 class="detail-main-title">${escapeHtml(inc.title)}</h1>
                <p class="detail-main-sub">${escapeHtml(inc.desc)}</p>
              </div>
            </div>

            <div class="detail-stat-pill-row">
              <div class="detail-stat-item">
                <div class="detail-stat-label">Detection Time (TTD)</div>
                <div class="detail-stat-val">${escapeHtml(diag.ttd)}</div>
              </div>
              <div class="detail-stat-item">
                <div class="detail-stat-label">Time to Resolve (MTTR)</div>
                <div class="detail-stat-val">${escapeHtml(diag.mttr)}</div>
              </div>
              <div class="detail-stat-item">
                <div class="detail-stat-label">Blast Radius</div>
                <div class="detail-stat-val">${escapeHtml(diag.blastRadius)}</div>
              </div>
              <div class="detail-stat-item">
                <div class="detail-stat-label">Postmortem Status</div>
                <div class="detail-stat-val" style="color:var(--emerald);">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Root Cause Closed
                </div>
              </div>
            </div>

            <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:10px;">
              <div class="incident-tech-tags" style="margin-bottom:0;">
                ${inc.tags.map(t => `<span class="tag-chip">${escapeHtml(t)}</span>`).join('')}
              </div>
              <div style="font-size:0.78rem; color:var(--text-muted);">
                Investigated by <strong>Ananya Rao</strong>
              </div>
            </div>
          </div>

          <div class="detail-grid-2">
            <div>
              <!-- Executive Summary & Impact -->
              <div class="detail-section-card">
                <h2 class="detail-sec-title">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  Executive Summary & Impact
                </h2>
                <p class="detail-prose">${escapeHtml(diag.executiveSummary)}</p>
                <div style="background:var(--bg-surface-2); border-left:3px solid var(--emerald); padding:10px 14px; border-radius:6px; font-size:0.82rem; color:var(--text-secondary);">
                  <strong>User & Service Impact:</strong> ${escapeHtml(diag.impactDetails)}
                </div>
              </div>

              <!-- Incident Timeline -->
              <div class="detail-section-card">
                <h2 class="detail-sec-title">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  Incident Timeline
                </h2>
                <div class="detail-timeline-list">
                  ${diag.timeline.map(node => `
                    <div class="detail-timeline-node">
                      <span class="detail-timeline-time">${escapeHtml(node.t)}</span>
                      <span class="detail-timeline-event">${escapeHtml(node.event)}</span>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Triage Diagnostics & Terminal Output -->
              <div class="detail-section-card">
                <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:12px;">
                  <h2 class="detail-sec-title" style="margin-bottom:0;">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
                    Triage Diagnostics
                  </h2>
                  <span class="tag-chip" style="font-family:'JetBrains Mono', monospace; font-size:0.72rem;">bash / telemetry</span>
                </div>

                <div class="code-box-header">
                  <span>$ ${escapeHtml(diag.diagCmd)}</span>
                  <button class="copy-code-btn" onclick="copyToClipboard('${escapeHtml(diag.diagCmd)}', 'Diagnostic command copied!')">Copy Command</button>
                </div>
                <pre class="code-box-pre"><code>${escapeHtml(diag.diagOutput)}</code></pre>
              </div>

              <!-- Root Cause (5 Whys) -->
              <div class="detail-section-card">
                <h2 class="detail-sec-title">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                  Root Cause Analysis (5 Whys)
                </h2>
                <div style="display:flex; flex-direction:column; gap:10px;">
                  <div style="background:var(--bg-surface-2); border:1px solid var(--border); border-radius:8px; padding:12px 14px;">
                    <div style="font-size:0.75rem; text-transform:uppercase; color:var(--text-muted); font-weight:700; margin-bottom:4px;">Direct Trigger</div>
                    <div style="font-size:0.84rem; color:var(--text-primary); font-weight:600;">${escapeHtml(inc.rootCause)}</div>
                  </div>
                  <div style="display:flex; flex-direction:column; gap:8px; font-size:0.82rem; color:var(--text-secondary); padding-left:6px;">
                    ${diag.whys.map((why, i) => `
                      <div style="display:flex; gap:8px;">
                        <span style="color:var(--emerald); font-weight:700;">W${i+1}:</span>
                        <span>${escapeHtml(why)}</span>
                      </div>
                    `).join('')}
                  </div>
                </div>
              </div>

              <!-- Resolution Command & Verification -->
              <div class="detail-section-card">
                <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:12px;">
                  <h2 class="detail-sec-title" style="margin-bottom:0;">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                    Resolution Command & Verification
                  </h2>
                </div>
                
                <div class="code-box-header">
                  <span>remediation.sh</span>
                  <button class="copy-code-btn" onclick="copyToClipboard('${escapeHtml(inc.fixCmd)}', 'Resolution command copied!')">Copy Fix</button>
                </div>
                <pre class="code-box-pre"><code style="color:var(--emerald);">$ ${escapeHtml(inc.fixCmd)}</code></pre>
                
                <div style="margin-top:14px; font-size:0.82rem; color:var(--text-secondary); line-height:1.5;">
                  <div style="font-weight:700; color:var(--text-primary); margin-bottom:6px;">Resolution Steps:</div>
                  <ol style="margin-left:18px; display:flex; flex-direction:column; gap:6px;">
                    <li>Executed fix command directly in affected environment sandbox.</li>
                    <li>Validated service recovery using healthcheck assertions and process monitors.</li>
                    <li>Confirmed zero error regression across subsequent request batches.</li>
                  </ol>
                </div>
              </div>

              <!-- Preventative Measures -->
              <div class="detail-section-card">
                <h2 class="detail-sec-title">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  Preventative Measures & Long-term Guards
                </h2>
                <p class="detail-prose">${escapeHtml(inc.prevention)}</p>
                <div style="display:flex; flex-direction:column; gap:8px;">
                  ${diag.guards.map(g => `
                    <div style="display:flex; align-items:flex-start; gap:8px; font-size:0.83rem; color:var(--text-secondary);">
                      <span style="color:var(--emerald); font-weight:700;">✓</span>
                      <span>${escapeHtml(g)}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>

            <div>
              <!-- Meta Card -->
              <div class="detail-section-card">
                <h3 class="detail-sec-title">Postmortem Information</h3>
                <div style="display:flex; flex-direction:column; gap:12px; font-size:0.82rem;">
                  <div style="display:flex; justify-content:space-between; border-bottom:1px solid var(--border); padding-bottom:8px;">
                    <span style="color:var(--text-muted);">Incident ID</span>
                    <span style="font-family:'JetBrains Mono', monospace; font-weight:600; color:var(--text-primary);">INC-${1000 + inc.id}</span>
                  </div>
                  <div style="display:flex; justify-content:space-between; border-bottom:1px solid var(--border); padding-bottom:8px;">
                    <span style="color:var(--text-muted);">Lead On-Call</span>
                    <span style="font-weight:600; color:var(--text-primary);">Ananya Rao</span>
                  </div>
                  <div style="display:flex; justify-content:space-between; border-bottom:1px solid var(--border); padding-bottom:8px;">
                    <span style="color:var(--text-muted);">Environment</span>
                    <span style="font-weight:600; color:var(--text-primary);">Linux / ${inc.category} Cluster</span>
                  </div>
                  <div style="display:flex; justify-content:space-between; border-bottom:1px solid var(--border); padding-bottom:8px;">
                    <span style="color:var(--text-muted);">Resolved</span>
                    <span style="font-weight:600; color:var(--text-primary);">${escapeHtml(inc.time)}</span>
                  </div>
                  <div style="display:flex; justify-content:space-between;">
                    <span style="color:var(--text-muted);">Sign-off</span>
                    <span style="font-weight:600; color:var(--emerald);">Completed & Verified</span>
                  </div>
                </div>
              </div>

              <!-- Quick Lab Verification -->
              <div class="detail-section-card">
                <h3 class="detail-sec-title">Runbook & Telemetry</h3>
                <p style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:12px;">
                  Test assertion verified in escbash interactive terminal.
                </p>
                <div style="background:var(--bg-surface-2); border:1px solid var(--border); border-radius:6px; padding:10px; font-family:'JetBrains Mono', monospace; font-size:0.75rem; color:var(--text-muted); margin-bottom:12px;">
                  $ ${escapeHtml(diag.verifyCmd)}
                </div>
                <button class="btn btn-secondary btn-sm" style="width:100%;" onclick="copyToClipboard('${escapeHtml(diag.verifyCmd)}', 'Verification command copied!')">
                  Copy Verification Probe
                </button>
              </div>

              <!-- More Incidents -->
              <div class="detail-section-card">
                <h3 class="detail-sec-title">Related Solved Issues</h3>
                <div style="display:flex; flex-direction:column; gap:10px;">
                  ${otherIncidents.map(oi => `
                    <div style="display:flex; align-items:center; justify-content:space-between; gap:10px; padding:8px 10px; border-radius:8px; background:var(--bg-surface-2); border:1px solid var(--border); cursor:pointer; transition:all 0.15s;" onclick="openIncidentDetail(${oi.id})">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <div class="incident-icon-box ${oi.iconType}" style="width:28px; height:28px; border-radius:5px; display:flex; align-items:center; justify-content:center;">
                          ${renderTechLogo(oi.category, 18)}
                        </div>
                        <div>
                          <div style="font-size:0.78rem; font-weight:600; color:var(--text-primary);">${escapeHtml(oi.title)}</div>
                          <div style="font-size:0.7rem; color:var(--text-muted);">${oi.category} · ${oi.time}</div>
                        </div>
                      </div>
                      <span style="color:var(--emerald); font-size:0.8rem;">➜</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    /* =========================================
       EDIT PROFILE PAGE RENDERER
       ========================================= */
    function renderEditPage() {
      const p = state.draft.profile;
      const v = state.draft.visibility;
      const visItems = [
        ['skills', 'Skills'], ['workAndEdu', 'Work and education'], ['courses', 'Completed courses'],
        ['projects', 'Projects'], ['incidents', 'Incidents solved'], ['certificates', 'Certificates'],
        ['dailyStreak', 'Daily streak'], ['globalRank', 'Global rank']
      ];
      const availableSuggestions = SUGGESTED_SKILLS.filter(s => !p.skills.includes(s));
      const availableOpenToSuggestions = SUGGESTED_OPEN_TO.filter(s => !(p.openTo || []).includes(s));

      return `
        <div class="edit-wrap">
          <div class="edit-topbar">
            <button class="back-link" onclick="discardEdits()"><span style="display:inline-block;transform:scaleX(-1);">➜</span> Back to profile</button>
            <h1 style="font-size:1.4rem; font-weight:700;">Edit profile</h1>
            <p class="sub-meta">Update your photo, identity, DevOps skills, experience, and visibility preferences.</p>
          </div>

          <nav class="edit-tabs-bar" aria-label="Edit profile sections">
            ${EDIT_SECTIONS.map(([id, label]) => `
              <button type="button" class="edit-tab-btn ${state.editSection === id ? 'active' : ''}" data-target="${id}" onclick="scrollToEditSection('${id}')">${label}</button>
            `).join('')}
          </nav>

          <section class="card section-card edit-section" id="sec-basic">
            <div class="section-head"><h2 class="section-title">Basic info</h2></div>
            <div class="avatar-picker-row">
              <div class="avatar-upload-controls">
                <div class="avatar" id="edit-avatar-preview" style="background:${p.avatarColor};">${renderAvatarContent(p)}</div>
                <div>
                  <div style="font-size:0.86rem; font-weight:600; margin-bottom:4px;">Profile photo</div>
                  <div style="display:flex; gap:8px; flex-wrap:wrap; align-items:center;">
                    <input type="file" id="photo-upload-input" accept="image/*" style="display:none;" onchange="handlePhotoUpload(event)" />
                    <button type="button" class="btn btn-secondary btn-xs" onclick="document.getElementById('photo-upload-input').click()">Upload photo</button>
                    ${p.avatarImage ? `<button type="button" class="btn btn-danger-ghost" onclick="removeDraftPhoto()">Remove</button>` : ''}
                  </div>
                  <div class="sub-meta" style="margin-top:4px;">PNG, JPG or WebP. Shown on both User and Public views.</div>
                </div>
              </div>
              <div>
                <div style="font-size:0.78rem; font-weight:600; color:var(--text-secondary);">Fallback badge color</div>
                <div class="swatch-row">
                  ${AVATAR_COLORS.map(c => `<button type="button" class="swatch ${p.avatarColor === c ? 'active' : ''}" style="background:${c};" onclick="updateDraftAvatarColor('${c}')"></button>`).join('')}
                </div>
              </div>
            </div>

            <div class="form-grid-2">
              <div class="field"><label>Full name</label><input class="input" type="text" value="${escapeHtml(p.name)}" oninput="updateDraftField('name', this.value)" /></div>
              <div class="field">
                <label>Profile URL slug</label>
                <div class="input-prefix-wrap"><span class="input-prefix mono">escbash.com/</span><input class="mono" type="text" value="${escapeHtml(p.slug)}" oninput="updateDraftField('slug', this.value)" /></div>
              </div>
            </div>

            <div class="form-grid-2">
              <div class="field">
                <label>Role badge</label>
                <select class="select" onchange="updateDraftField('role', this.value)">
                  ${['Learner', 'Student', 'DevOps Engineer', 'SRE', 'Cloud Architect'].map(r => `<option value="${r}" ${p.role === r ? 'selected' : ''}>${r}</option>`).join('')}
                </select>
              </div>
              <div class="field"><label>Location</label><input class="input" type="text" value="${escapeHtml(p.location)}" oninput="updateDraftField('location', this.value)" /></div>
            </div>

            <div class="field">
              <label><span>Bio</span><span class="field-hint" id="bio-count">${p.bio.length} / 320</span></label>
              <textarea class="textarea" rows="4" maxlength="320" oninput="updateDraftField('bio', this.value)">${escapeHtml(p.bio)}</textarea>
            </div>

            <div style="padding-top:6px;">
              <div style="font-size:0.86rem; font-weight:600;">Open to</div>
              <div class="sub-meta">Displays badges and a Contact CTA on your public profile for the roles you add below.</div>
            </div>

            <div style="margin-top:12px; margin-bottom:8px;">
              <div style="display:flex; gap:8px; margin-bottom:10px;">
                <input class="input" id="new-open-to-input" type="text" placeholder="Add what you're open to (e.g. Internships, Junior DevOps, SRE)" onkeydown="if(event.key==='Enter'){event.preventDefault(); addDraftOpenTo();}" />
                <button type="button" class="btn btn-secondary" onclick="addDraftOpenTo()">Add</button>
              </div>
              <div class="tags-row" style="margin-bottom:10px;">
                ${(p.openTo || []).map((item, idx) => `
                  <span class="tag-chip" style="background:var(--emerald-soft); border-color:var(--emerald-border); color:var(--emerald); display:inline-flex; align-items:center; gap:6px;">
                    ${escapeHtml(item)}
                    <button type="button" class="skill-remove" onclick="removeDraftOpenTo(${idx})">✕</button>
                  </span>
                `).join('')}
              </div>
              ${availableOpenToSuggestions.length ? `
                <div>
                  <div class="sub-meta" style="margin-bottom:6px;">Quick add suggestions:</div>
                  <div class="tags-row">
                    ${availableOpenToSuggestions.map(s => `<button type="button" class="suggest-chip" onclick="addDraftOpenTo('${escapeHtml(s)}')">+ ${escapeHtml(s)}</button>`).join('')}
                  </div>
                </div>
              ` : ''}
            </div>
          </section>

          <section class="card section-card edit-section" id="sec-socials">
            <div class="section-head"><h2 class="section-title">Social links</h2></div>
            <div class="form-grid-2">
              <div class="field"><label>GitHub</label><div class="input-prefix-wrap"><span class="input-prefix mono">github.com/</span><input type="text" value="${escapeHtml(p.socials.github)}" oninput="updateDraftSocial('github', this.value)" /></div></div>
              <div class="field"><label>LinkedIn</label><div class="input-prefix-wrap"><span class="input-prefix mono">linkedin.com/</span><input type="text" value="${escapeHtml(p.socials.linkedin)}" oninput="updateDraftSocial('linkedin', this.value)" /></div></div>
              <div class="field"><label>X / Twitter</label><div class="input-prefix-wrap"><span class="input-prefix mono">x.com/</span><input type="text" value="${escapeHtml(p.socials.twitter)}" oninput="updateDraftSocial('twitter', this.value)" /></div></div>
              <div class="field"><label>Personal website</label><input class="input" type="url" value="${escapeHtml(p.socials.website)}" placeholder="https://" oninput="updateDraftSocial('website', this.value)" /></div>
            </div>
          </section>

          <section class="card section-card edit-section" id="sec-skills">
            <div class="section-head"><div class="head-left"><h2 class="section-title">Skills</h2><span class="count-pill">${p.skills.length} added</span></div></div>
            <div style="display:flex; gap:8px; margin-bottom:14px;">
              <input class="input" id="new-skill-input" type="text" placeholder="Add a tool or skill (e.g. Prometheus)" onkeydown="if(event.key==='Enter'){event.preventDefault(); addDraftSkill();}" />
              <button type="button" class="btn btn-secondary" onclick="addDraftSkill()">Add</button>
            </div>
            <div class="tags-row" style="margin-bottom:14px;">
              ${p.skills.map((s, idx) => `<span class="tag-chip">${escapeHtml(s)}<button type="button" class="skill-remove" onclick="removeDraftSkill(${idx})">✕</button></span>`).join('')}
            </div>
            ${availableSuggestions.length ? `<div><div class="sub-meta" style="margin-bottom:8px;">Quick add popular DevOps skills:</div><div class="tags-row">${availableSuggestions.map(s => `<button type="button" class="suggest-chip" onclick="addDraftSkill('${s}')">+ ${s}</button>`).join('')}</div></div>` : ''}
          </section>

          <section class="card section-card edit-section" id="sec-exp">
            <div class="section-head"><h2 class="section-title">Work experience</h2><button type="button" class="btn btn-secondary btn-xs" onclick="addExp()">+ Add experience</button></div>
            ${p.experience.map((e, idx) => `
              <div class="repeat-box">
                <div class="repeat-head"><span>Position #${idx + 1}</span><button type="button" class="btn btn-danger-ghost" onclick="removeExp(${idx})">Remove</button></div>
                <div class="form-grid-2">
                  <div class="field"><label>Role / Title</label><input class="input" type="text" value="${escapeHtml(e.role)}" oninput="updateExp(${idx}, 'role', this.value)" /></div>
                  <div class="field"><label>Company</label><input class="input" type="text" value="${escapeHtml(e.company)}" oninput="updateExp(${idx}, 'company', this.value)" /></div>
                </div>
                <div class="field"><label>Period</label><input class="input" type="text" value="${escapeHtml(e.period)}" oninput="updateExp(${idx}, 'period', this.value)" /></div>
                <div class="field"><label>Summary</label><textarea class="textarea" rows="2" oninput="updateExp(${idx}, 'desc', this.value)">${escapeHtml(e.desc)}</textarea></div>
              </div>
            `).join('')}
          </section>

          <section class="card section-card edit-section" id="sec-edu">
            <div class="section-head"><h2 class="section-title">Education</h2><button type="button" class="btn btn-secondary btn-xs" onclick="addEdu()">+ Add education</button></div>
            ${p.education.map((ed, idx) => `
              <div class="repeat-box">
                <div class="repeat-head"><span>Entry #${idx + 1}</span><button type="button" class="btn btn-danger-ghost" onclick="removeEdu(${idx})">Remove</button></div>
                <div class="field"><label>Degree / Program</label><input class="input" type="text" value="${escapeHtml(ed.degree)}" oninput="updateEdu(${idx}, 'degree', this.value)" /></div>
                <div class="form-grid-2">
                  <div class="field"><label>Institution</label><input class="input" type="text" value="${escapeHtml(ed.school)}" oninput="updateEdu(${idx}, 'school', this.value)" /></div>
                  <div class="field"><label>Years</label><input class="input" type="text" value="${escapeHtml(ed.years)}" oninput="updateEdu(${idx}, 'years', this.value)" /></div>
                </div>
              </div>
            `).join('')}
          </section>

          <section class="card section-card edit-section" id="sec-vis">
            <div class="section-head"><div><h2 class="section-title">Public visibility</h2><p class="sub-meta">Select which sections appear when someone opens your public profile.</p></div></div>
            <div class="checks-grid">
              ${visItems.map(([key, label]) => `<label class="check-item"><input type="checkbox" ${v[key] ? 'checked' : ''} onchange="toggleDraftVis('${key}')" /><span>${label}</span></label>`).join('')}
            </div>
            <p class="sub-meta" style="margin-top:14px;">Always private: email, plan, profile views, and courses in progress.</p>
          </section>

          <section class="card section-card edit-section" id="sec-account">
            <div class="section-head"><div class="head-left"><h2 class="section-title">Account & privacy</h2><span class="private-badge">🔒 Always private</span></div></div>
            <div class="form-grid-2" style="margin-bottom:14px;">
              <div class="field"><label>Account email</label><input class="input" type="email" value="${escapeHtml(p.email)}" oninput="updateDraftField('email', this.value)" /></div>
              <div class="field"><label>Current plan</label><input class="input" type="text" value="${escapeHtml(p.plan)}" readonly /></div>
            </div>
            <div class="switch-row">
              <div><div style="font-size:0.86rem; font-weight:600;">Daily streak reminders</div><div class="sub-meta">Get a gentle nudge if you haven't completed a lab today.</div></div>
              <label class="switch"><input type="checkbox" ${p.notifyStreak ? 'checked' : ''} onchange="updateDraftField('notifyStreak', this.checked)" /><span class="slider"></span></label>
            </div>
            <div class="switch-row">
              <div><div style="font-size:0.86rem; font-weight:600;">Recruiter & internship messages</div><div class="sub-meta">Receive email notifications when someone uses your Contact button.</div></div>
              <label class="switch"><input type="checkbox" ${p.notifyOpportunities ? 'checked' : ''} onchange="updateDraftField('notifyOpportunities', this.checked)" /><span class="slider"></span></label>
            </div>
          </section>

          <div class="card edit-bottom-bar">
            <span class="sub-meta">Review your updates before saving to your profile.</span>
            <div style="display:flex; gap:10px;">
              <button type="button" class="btn btn-secondary" onclick="discardEdits()">Discard changes</button>
              <button type="button" class="btn btn-primary" onclick="saveAllEdits()">Save changes</button>
            </div>
          </div>
        </div>
      `;
    }

    /* =========================================
       MASTER RENDER
       ========================================= */
    function render() {
      const isPublic = state.viewMode === 'public';

      // Highlight active top nav link
      document.getElementById('nav-courses')?.classList.toggle('active', state.page === 'courses');
      document.getElementById('nav-projects')?.classList.toggle('active', state.page === 'projects' || state.page === 'project-detail');
      document.getElementById('nav-incidents')?.classList.toggle('active', state.page === 'incidents' || state.page === 'incident-detail');
      document.getElementById('nav-certificates')?.classList.toggle('active', state.page === 'certificates');

      document.getElementById('top-banner-slot').innerHTML = (state.page !== 'edit' && isPublic)
        ? `
          <div class="promo-strip">
            <div class="container promo-strip-inner">
              <span>The first 2 modules of every course are free.</span>
              <button class="promo-cta-sm" onclick="showToast('Starting Linux Module 1...')">Start your first module</button>
            </div>
          </div>
        `
        : '';

      if (state.page === 'edit') {
        document.getElementById('app').innerHTML = renderEditPage();
        return;
      }

      if (state.page === 'courses') {
        document.getElementById('app').innerHTML = renderCoursesPage(isPublic);
        return;
      }

      if (state.page === 'projects') {
        document.getElementById('app').innerHTML = renderProjectsPage(isPublic);
        return;
      }

      if (state.page === 'project-detail') {
        document.getElementById('app').innerHTML = renderProjectDetailPage(isPublic);
        return;
      }

      if (state.page === 'incidents') {
        document.getElementById('app').innerHTML = renderIncidentsPage(isPublic);
        return;
      }

      if (state.page === 'incident-detail') {
        document.getElementById('app').innerHTML = renderIncidentDetailPage(isPublic);
        return;
      }

      document.getElementById('app').innerHTML = `
        ${renderHero(isPublic)}
        <div class="content-grid">
          <div>
            ${renderCourses(isPublic)}
            ${renderProjects(isPublic)}
            ${renderIncidents(isPublic)}
          </div>
          ${renderSidebar(isPublic)}
        </div>
        ${renderActivity()}
        ${!isPublic ? renderVisibilityControls() : `
          <div class="bottom-cta">
            <div>
              <div style="font-weight:700; font-size:1rem;">Learn DevOps by doing on real machines</div>
              <div style="font-size:0.84rem; opacity:0.9;">Pick any course and start with its first 2 modules free.</div>
            </div>
            <button class="promo-cta-sm" style="padding:9px 16px; font-size:0.84rem;" onclick="showToast('Opening course catalog...')">Start your first module</button>
          </div>
        `}
      `;
    }

    
    /* Dropdown menu handler for user-profile.html */
    (() => {
      const courseBtn = document.getElementById('courseMenuBtn');
      const courseDrop = document.getElementById('courseMenuDropdown');
      const roadBtn = document.getElementById('roadmapMenuBtn');
      const roadDrop = document.getElementById('roadmapMenuDropdown');
      const headerInner = document.querySelector('.header-inner');

      function computePos(btn) {
        if (!headerInner || !btn) return { left: '0px', width: '640px' };
        if (window.innerWidth <= 768) return { left: '12px', width: 'calc(100% - 24px)' };
        const hRect = headerInner.getBoundingClientRect();
        const bRect = btn.getBoundingClientRect();
        const maxW = Math.max(320, hRect.width - 24);
        let left = Math.round(bRect.left - hRect.left);
        let width = Math.min(640, maxW);
        if (left + width > hRect.width - 12) {
          left = Math.max(12, Math.round(hRect.width - width - 12));
        }
        return { left: left + 'px', width: width + 'px' };
      }

      function setDropdown(kind, open) {
        const isC = kind === 'course';
        const btn = isC ? courseBtn : roadBtn;
        const drop = isC ? courseDrop : roadDrop;
        const otherBtn = isC ? roadBtn : courseBtn;
        const otherDrop = isC ? roadDrop : courseDrop;
        if (open) {
          if (otherDrop) otherDrop.classList.remove('open');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          const pos = computePos(btn);
          drop.style.left = pos.left;
          drop.style.width = pos.width;
          drop.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        } else {
          drop.classList.remove('open');
          btn.setAttribute('aria-expanded', 'false');
        }
      }

      if (courseBtn && courseDrop) {
        const COURSE_HREFS = {
          Linux: 'linux-course.html',
          Networking: 'linux-course.html',
          'Shell Scripting': 'linux-course-v1.html',
          Docker: 'course-complete.html',
        };
        courseBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          setDropdown('course', !courseDrop.classList.contains('open'));
        });
        courseDrop.addEventListener('click', (e) => {
          const card = e.target.closest('.cm-card');
          if (!card) return;
          const href = COURSE_HREFS[card.dataset.courseName];
          if (href) {
            setDropdown('course', false);
            window.location.href = href;
          }
        });
      }
      if (roadBtn && roadDrop) {
        roadBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          setDropdown('roadmap', !roadDrop.classList.contains('open'));
        });
      }
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.top-header')) {
          if (courseDrop) courseDrop.classList.remove('open');
          if (roadDrop) roadDrop.classList.remove('open');
          if (courseBtn) courseBtn.setAttribute('aria-expanded', 'false');
          if (roadBtn) roadBtn.setAttribute('aria-expanded', 'false');
        }
      });
    })();

    applyTheme();
    render();
