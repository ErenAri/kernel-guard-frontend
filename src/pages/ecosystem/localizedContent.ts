import type { Language } from '../../context/LanguageContext';
import {
  ecosystemCopy as baseCopy,
  type DownstreamRelationship,
  type EcosystemCopy,
  type IntegrationPageCopy,
} from './content';

function relation(
  base: DownstreamRelationship,
  name: string,
  category: string,
  relationship: string,
  evidenceLabel: string,
): DownstreamRelationship {
  return { ...base, name, category, relationship, evidenceLabel };
}

function integration(
  base: IntegrationPageCopy,
  values: Omit<IntegrationPageCopy, 'logo'>,
): IntegrationPageCopy {
  return { ...base, ...values, logo: base.logo };
}

const de: EcosystemCopy = {
  index: {
    kicker: 'ÖKOSYSTEM // ÖFFENTLICHE_EVIDENZ',
    title1: 'Upstream',
    title2: 'Integrationen',
    description: 'Kernel Guard bringt Kompatibilitätsvalidierung in Open-Source-Cybersecurity-Projekte ein, deren Nutzer auf zuverlässiges Verhalten auf Kernel-Ebene angewiesen sind.',
    whyTitle: 'Warum Upstream-Integration wichtig ist',
    whyP1: 'Kompatibilitätsprüfungen sind besonders aussagekräftig, wenn sie dort laufen, wo die zugrunde liegende Technologie entwickelt und veröffentlicht wird. BPFCompat verschiebt die Validierung aus isolierten Demos in die Upstream-CI.',
    whyP2: 'Das macht nicht jeden Downstream-Nutzer zu einem BPFCompat-Kunden. Es bedeutet, dass Upstream-Projekte Kompatibilitätsregressionen früher erkennen können und Teams, die diese Projekte einsetzen, indirekt von stärkerer Release-Evidenz profitieren können.',
    chainTitle: 'Wie die Wirkung weitergegeben wird',
    chainSteps: ['Kernel Guard / BPFCompat', 'Upstream-Sicherheitsprojekt', 'Downstream-Produkte & Security-Teams'],
    integrationsTitle: 'Aktuelle Upstream-Integrationen',
    integrationsDescription: 'Die folgenden Seiten dokumentieren, was gemergt wurde, warum es technisch relevant ist und welche öffentlich dokumentierten Produkte oder Nutzer hinter dem jeweiligen Upstream-Projekt stehen.',
    view: 'Integration ansehen',
    downstreamTitle: 'Downstream-Relevanz, keine Kundenliste',
    downstreamDescription: 'Wir unterscheiden direkte BPFCompat-Nutzung klar von Ökosystem-Reichweite. Unternehmen und Produkte werden nur genannt, wenn ihre Beziehung zu Falco oder Inspektor Gadget öffentlich dokumentiert ist.',
    claimTitle: 'Saubere Aussagen',
    claimBody: 'Falco, Inspektor Gadget, Microsoft, Sysdig, AWS, Shopify, Qonto, Frame.io und weitere Namen auf diesen Seiten werden nicht als BPFCompat-Kunden dargestellt, sofern eine direkte Nutzung nicht ausdrücklich belegt ist. Gezeigt wird die öffentlich nachvollziehbare Upstream-/Downstream-Beziehung.',
  },
  labels: {
    back: 'Zurück zu den Upstream-Integrationen',
    publicEvidence: 'Öffentliche Evidenz',
    merged: 'Upstream gemergt',
    downstream: 'Downstream-Beziehung',
    upstreamIntegration: 'Upstream-Integration',
  },
  integrations: {
    falco: integration(baseCopy.en.integrations.falco, {
      name: 'Falco',
      kicker: 'CLOUD-NATIVE RUNTIME SECURITY',
      title: 'BPFCompat im Falco-Kompatibilitätspfad',
      description: 'Falco ist ein CNCF-graduated Runtime-Security-Projekt. Kernel Guard hat wiederkehrende BPFCompat-Validierung rund um Falcos eBPF-Probe-Pfad integriert, damit Kompatibilitätsannahmen gegen reale Kernel-Umgebungen geprüft werden können.',
      whatTitle: 'Was Falco ist',
      whatBody: 'Falco erkennt verdächtiges Verhalten auf Hosts, in Containern, Kubernetes- und Cloud-Umgebungen. Seine Runtime-Sichtbarkeit hängt von zuverlässigem Zugriff auf Linux-Kernel-Ereignisse ab, einschließlich eBPF-basierter Probe-Pfade.',
      contributionTitle: 'Was Kernel Guard integriert hat',
      contribution: [
        'PR #3024 mergte die geplante BPFCompat-Kompatibilitäts-Lane für Falcos modern_bpf-Pfad; der anschließende Proof Run in #3061 nutzte den realen scap-open --modern_bpf Loader-Pfad.',
        'PR #3061 erweiterte die Matrix um AlmaLinux 8 und 9. Der Dress Rehearsal führte alle fünf Kernel erfolgreich über den realen Loader-Pfad aus, einschließlich AlmaLinux 8 mit 4.18-Basis und zurückportierter BPF-Ring-Buffer- sowie BTF-Unterstützung.',
        'Damit entsteht ausführbare Kompatibilitätsevidenz: Load- und Attach-Verhalten wird in realen Kernel-Profilen geprüft statt aus Versionsnummern abgeleitet.',
      ],
      whyTitle: 'Warum das für Cybersecurity wichtig ist',
      why: [
        'Runtime Detection verliert an Wert, wenn der Kernel-Probe auf der geschützten Flotte nicht zuverlässig geladen oder angehängt werden kann.',
        'Enterprise-Linux-Anbieter backporten eBPF-Funktionen; deshalb sind reine Versionsheuristiken unzuverlässig.',
        'Upstream-CI schafft einen Kontrollpunkt, an dem Kompatibilitätsregressionen vor Downstream-Deployments erkannt werden können.',
      ],
      downstreamTitle: 'Wer downstream von Falco steht',
      downstreamIntro: 'Diese Beziehungen zu Falco sind öffentlich dokumentiert. Sie zeigen Ökosystem-Reichweite, nicht direkte BPFCompat-Nutzung.',
      downstream: [
        relation(baseCopy.en.integrations.falco.downstream[0], 'Sysdig Secure / Sysdig Cloud Security', 'Kommerzielle Sicherheitsprodukte', 'Sysdig erklärt, dass Falco im Kern seiner Cloud-Security-Produkte steht. Die BPFCompat-Arbeit in Falcos CI ist daher indirekt für einen kommerziellen Security-Stack relevant, der auf derselben Upstream-Technologie basiert.', 'Sysdig — Falco'),
        relation(baseCopy.en.integrations.falco.downstream[1], 'Stratoshark', 'Open-Source Cloud Forensics', 'Falco kann SCAP-Captures erzeugen, die in Stratoshark-Untersuchungsabläufe einfließen. Kompatibilitätsvertrauen in Falcos Kernel-Event-Pfad ist damit upstream dieses Forensik-Workflows relevant.', 'Sysdig — Stratoshark'),
        relation(baseCopy.en.integrations.falco.downstream[2], 'AWS · Qonto · Shopify', 'Öffentlich dokumentierte Falco-Nutzer', 'Falcos Graduation-Material nennt diese Organisationen öffentlich als Falco-Nutzer. Sie werden nicht als BPFCompat-Nutzer dargestellt, sondern als Teams downstream des Upstream-Projekts.', 'Falco Graduation-Evidenz'),
        relation(baseCopy.en.integrations.falco.downstream[3], 'Frame.io', 'CNCF-Fallstudie', 'CNCF dokumentierte, dass Frame.io ein End-to-End-Sicherheitssystem auf Falco-Daten aufgebaut hat. Das ist ein Beispiel für einen Produktions-Security-Workflow downstream von Falco und keine direkte BPFCompat-Adoptionsaussage.', 'CNCF-Fallstudie'),
      ],
      evidenceTitle: 'Öffentliche Contribution-Evidenz',
      evidenceIntro: 'Die Integrationsaussagen auf dieser Seite verweisen auf gemergte öffentliche Pull Requests im Upstream-Repository falcosecurity/libs.',
      claimTitle: 'Was wir nicht behaupten',
      claimBody: 'Kernel Guard behauptet nicht, dass Sysdig, AWS, Qonto, Shopify, Frame.io oder jeder Falco-Nutzer BPFCompat direkt ausführt. Die belastbare Aussage ist enger: BPFCompat ist in einen Upstream-Falco-Kompatibilitätsworkflow integriert, und Downstream-Falco-Nutzer können indirekt von der dadurch erzeugten Release-Evidenz profitieren.',
    }),
    'inspektor-gadget': integration(baseCopy.en.integrations['inspektor-gadget'], {
      name: 'Inspektor Gadget',
      kicker: 'KUBERNETES & LINUX OBSERVABILITY',
      title: 'BPFCompat für veröffentlichte eBPF-Gadgets',
      description: 'Inspektor Gadget paketiert eBPF-Programme als OCI-basierte Gadgets für Kubernetes- und Linux-Inspektion. Kernel Guard hat eine wöchentliche BPFCompat-Lane integriert, die veröffentlichte Gadgets über Kernel-Profile hinweg validiert.',
      whatTitle: 'Was Inspektor Gadget ist',
      whatBody: 'Inspektor Gadget ist ein Framework und Toolset zur Erfassung systemnaher Daten aus Kubernetes-Clustern und Linux-Hosts mit eBPF. Gadgets werden als OCI-Images paketiert und können interaktiv oder kontinuierlich ausgeführt werden.',
      contributionTitle: 'Was Kernel Guard integriert hat',
      contribution: [
        'PR #5708 mergte eine nicht blockierende wöchentliche Kernel-Kompatibilitäts-Lane für veröffentlichte Gadgets.',
        'Der Workflow löst veröffentlichte OCI-Gadget-Referenzen auf und zeichnet pro Kernel Kompatibilitätsevidenz für Baseline- und aktuelle Versionen auf. Der vollständige Proof Run deckte 49 Gadgets über 11 Kernel-Profile ab: 539 Baseline-zu-Current-Vergleiche.',
        'Die Lane unterscheidet Regressionen, Verbesserungen, erwartete fehlende Artefakte und unvollständige Profilergebnisse. Der Proof Run meldete 0 Regressionen, 4 Verbesserungen und 0 unerwartet fehlende Reports.',
      ],
      whyTitle: 'Warum das für Cybersecurity & Betrieb wichtig ist',
      why: [
        'Security- und Observability-Gadgets hängen von Kernel-Funktionen ab, die sich zwischen Distributionen, Vendor-Backports und Architekturen unterscheiden.',
        'Veröffentlichte OCI-Artefakte können so geprüft werden, wie Nutzer sie tatsächlich konsumieren, statt nur Quellcode oder Entwicklerrechner zu validieren.',
        'Eine wiederkehrende Kompatibilitäts-Lane liefert Maintainern frühere Evidenz, wenn ein Gadget-Release sein Verhalten in der Kernel-Matrix verändert.',
      ],
      downstreamTitle: 'Wer downstream von Inspektor Gadget steht',
      downstreamIntro: 'Die stärkste namentlich dokumentierte Downstream-Beziehung ist Microsoft Azure Kubernetes Service. Das ist keine Aussage über direkte BPFCompat-Nutzung durch Microsoft.',
      downstream: [
        relation(baseCopy.en.integrations['inspektor-gadget'].downstream[0], 'Microsoft Azure Kubernetes Service (AKS)', 'Managed-Kubernetes-Produkt', 'Microsoft bietet eine Inspektor-Gadget-Cluster-Erweiterung für AKS als Preview an. Der Extension-Typ lautet microsoft.inspektorgadget und stellt das Upstream-Tool als DaemonSet bereit. Upstream-Kompatibilitätsarbeit kann daher indirekt für Teams relevant sein, die Inspektor Gadget über AKS nutzen.', 'Microsoft Learn — AKS-Erweiterung'),
        relation(baseCopy.en.integrations['inspektor-gadget'].downstream[1], 'Azure Monitor Managed Prometheus', 'Telemetrie-Integration', 'Die AKS-Erweiterung kann Gadget-Metriken an Azure Monitor Managed Prometheus exportieren. Damit ist Inspektor Gadget Teil eines breiteren Microsoft-Observability-Workflows, ohne dass dies direkte BPFCompat-Nutzung impliziert.', 'Microsoft Learn — Konfiguration'),
        relation(baseCopy.en.integrations['inspektor-gadget'].downstream[2], 'Kubernetes-Betreiber mit kubectl gadget / Helm', 'Open-Source-Deployment-Pfade', 'Inspektor Gadget wird für Kubernetes über das kubectl-Plugin und Helm-basierte Deployment-Pfade verteilt. Diese Betreiber sind Downstream-Nutzer desselben veröffentlichten Gadget-Ökosystems, das die Kompatibilitäts-Lane prüft.', 'Inspektor-Gadget-Dokumentation'),
      ],
      evidenceTitle: 'Öffentliche Contribution-Evidenz',
      evidenceIntro: 'Die Integrationsaussage verweist auf den gemergten Upstream-Pull-Request, der den wöchentlichen Kompatibilitätsworkflow hinzugefügt hat.',
      claimTitle: 'Was wir nicht behaupten',
      claimBody: 'Kernel Guard behauptet nicht, dass Microsoft, Azure, AKS-Kunden oder jeder Inspektor-Gadget-Nutzer BPFCompat direkt ausführt. Die Aussage lautet: BPFCompat-gestützte Kompatibilitätsvalidierung ist in das Upstream-Projekt integriert, dessen Gadgets über diese Downstream-Pfade genutzt werden.',
    }),
  },
};

const ja: EcosystemCopy = {
  index: {
    kicker: 'エコシステム // 公開証拠',
    title1: 'Upstream',
    title2: '統合',
    description: 'Kernel Guard は、信頼できるカーネルレベルの動作に依存するオープンソースのサイバーセキュリティプロジェクトへ互換性検証を統合しています。',
    whyTitle: 'Upstream 統合が重要な理由',
    whyP1: '互換性チェックは、基盤技術が実際に開発・リリースされる場所で実行されるほど価値が高まります。BPFCompat の統合は、検証を孤立したデモから upstream CI へ移します。',
    whyP2: 'これは downstream の全ユーザーが BPFCompat の顧客になるという意味ではありません。Upstream プロジェクトが互換性リグレッションを早期に検出でき、そのプロジェクトを利用するチームがより強いリリース証拠から間接的に恩恵を受けられるという意味です。',
    chainTitle: '影響が伝わる流れ',
    chainSteps: ['Kernel Guard / BPFCompat', 'Upstream セキュリティプロジェクト', 'Downstream 製品・セキュリティチーム'],
    integrationsTitle: '現在の Upstream 統合',
    integrationsDescription: '以下のページでは、何がマージされたのか、なぜ重要なのか、そして upstream プロジェクトの先にどの公開製品・利用組織があるのかを説明します。',
    view: '統合を見る',
    downstreamTitle: '顧客リストではなく downstream の関連性',
    downstreamDescription: 'BPFCompat の直接採用とエコシステム上の到達範囲を明確に分けています。企業・製品名は、Falco または Inspektor Gadget との関係が公開情報で確認できる場合にのみ掲載します。',
    claimTitle: '表現上の境界',
    claimBody: 'Falco、Inspektor Gadget、Microsoft、Sysdig、AWS、Shopify、Qonto、Frame.io などは、直接採用が明示的に確認できない限り BPFCompat の顧客として表示していません。示しているのは公開情報で追跡できる upstream / downstream の関係です。',
  },
  labels: { back: 'Upstream 統合へ戻る', publicEvidence: '公開証拠', merged: 'Upstream にマージ済み', downstream: 'Downstream の関係', upstreamIntegration: 'Upstream 統合' },
  integrations: {
    falco: integration(baseCopy.en.integrations.falco, {
      name: 'Falco', kicker: 'クラウドネイティブ・ランタイムセキュリティ', title: 'Falco の互換性経路における BPFCompat',
      description: 'Falco は CNCF Graduated のランタイムセキュリティプロジェクトです。Kernel Guard は Falco の eBPF probe 経路に継続的な BPFCompat 検証を追加し、互換性の仮定を実カーネル環境で確認できるようにしました。',
      whatTitle: 'Falco とは', whatBody: 'Falco はホスト、コンテナ、Kubernetes、クラウド環境で不審な挙動を検出します。そのランタイム可視性は、eBPF ベースの probe を含む Linux カーネルイベントへの安定したアクセスに依存します。',
      contributionTitle: 'Kernel Guard が統合したもの', contribution: [
        'PR #3024 で Falco の modern_bpf 経路向け scheduled BPFCompat compatibility lane がマージされ、続く #3061 の proof run では実際の scap-open --modern_bpf loader 経路が実行されました。',
        'PR #3061 は AlmaLinux 8/9 を追加しました。Dress rehearsal では 5 つすべてのカーネルが実 loader 経路を通過し、AlmaLinux 8 の 4.18 ベースでも backport された BPF ring buffer と BTF 対応が確認されました。',
        'これにより、load / attach の挙動をバージョン番号から推測するのではなく、実カーネルプロファイル上で実行可能な証拠として確認できます。',
      ],
      whyTitle: 'サイバーセキュリティ上なぜ重要か', why: [
        '保護対象の環境で kernel probe が安定して load / attach できなければ、ランタイム検知の価値は下がります。',
        'Enterprise Linux ベンダーは eBPF 機能を backport するため、単純なカーネルバージョン推測は信頼できません。',
        'Upstream CI によって、互換性リグレッションを downstream deployment に届く前に発見できるポイントが生まれます。',
      ],
      downstreamTitle: 'Falco の downstream にある組織・製品', downstreamIntro: '以下は公開情報で確認できる Falco との関係です。エコシステム上の到達範囲を示すもので、BPFCompat の直接採用を意味しません。',
      downstream: [
        relation(baseCopy.en.integrations.falco.downstream[0], 'Sysdig Secure / Sysdig Cloud Security', '商用セキュリティ製品', 'Sysdig は Falco が同社のクラウドセキュリティ製品の中核にあると説明しています。そのため Falco CI 内の BPFCompat 作業は、同じ upstream 技術を基盤とする商用セキュリティスタックに間接的な関連性があります。', 'Sysdig — Falco'),
        relation(baseCopy.en.integrations.falco.downstream[1], 'Stratoshark', 'オープンソース・クラウドフォレンジック', 'Falco は Stratoshark の調査ワークフローへ渡せる SCAP capture を生成できます。Falco の kernel-event 経路に対する互換性の信頼性は、このフォレンジックワークフローの upstream で重要になります。', 'Sysdig — Stratoshark'),
        relation(baseCopy.en.integrations.falco.downstream[2], 'AWS · Qonto · Shopify', '公開情報で確認できる Falco ユーザー', 'Falco の Graduation 資料では、これらの組織が Falco ユーザーとして公開されています。BPFCompat ユーザーとして主張しているわけではなく、upstream プロジェクトの downstream にいるチームの例です。', 'Falco Graduation の証拠'),
        relation(baseCopy.en.integrations.falco.downstream[3], 'Frame.io', 'CNCF ケーススタディ', 'CNCF は Frame.io が Falco データ上に end-to-end のセキュリティシステムを構築した事例を公開しています。これは Falco downstream の本番セキュリティワークフローの例であり、BPFCompat の直接採用を意味しません。', 'CNCF ケーススタディ'),
      ],
      evidenceTitle: '公開 contribution の証拠', evidenceIntro: 'このページの統合に関する記述は、upstream の falcosecurity/libs リポジトリでマージ済みの公開 Pull Request に基づいています。',
      claimTitle: '主張していないこと', claimBody: 'Kernel Guard は Sysdig、AWS、Qonto、Shopify、Frame.io、またはすべての Falco ユーザーが BPFCompat を直接実行しているとは主張していません。確認できる事実は、BPFCompat が Falco の upstream compatibility workflow に統合され、その workflow が生み出す release evidence を downstream の Falco ユーザーが間接的に活用し得るということです。',
    }),
    'inspektor-gadget': integration(baseCopy.en.integrations['inspektor-gadget'], {
      name: 'Inspektor Gadget', kicker: 'KUBERNETES & LINUX オブザーバビリティ', title: '公開 eBPF Gadget 向け BPFCompat',
      description: 'Inspektor Gadget は eBPF プログラムを Kubernetes / Linux 向け OCI Gadget として配布します。Kernel Guard は公開 Gadget を複数のカーネルプロファイルで検証する週次 BPFCompat lane を追加しました。',
      whatTitle: 'Inspektor Gadget とは', whatBody: 'Inspektor Gadget は eBPF を使って Kubernetes cluster や Linux host から低レベルのシステムデータを収集する framework / toolset です。Gadget は OCI image として配布され、対話的にも継続的にも実行できます。',
      contributionTitle: 'Kernel Guard が統合したもの', contribution: [
        'PR #5708 で、公開 Gadget 向けの non-blocking な週次 kernel compatibility lane がマージされました。',
        'Workflow は公開 OCI Gadget reference を解決し、baseline / current version のカーネル別 compatibility evidence を記録します。Full proof run は 49 Gadget × 11 kernel profile、合計 539 comparison cell を対象にしました。',
        'Lane は regression、improvement、想定された missing artifact、incomplete profile result を区別できます。Proof run の結果は 0 regression、4 improvement、0 unexpected missing report でした。',
      ],
      whyTitle: 'サイバーセキュリティと運用上なぜ重要か', why: [
        'Security / observability Gadget は distro family、vendor backport、architecture ごとに異なるカーネル機能へ依存します。',
        'Source code だけでなく、ユーザーが実際に取得する公開 OCI artifact をそのまま検証できます。',
        '継続的な compatibility lane により、Gadget release が kernel matrix 上で挙動を変えた際に maintainer が早く証拠を得られます。',
      ],
      downstreamTitle: 'Inspektor Gadget の downstream にある製品', downstreamIntro: '最も明確に公開されている downstream 関係は Microsoft Azure Kubernetes Service です。Microsoft が BPFCompat を直接採用しているという意味ではありません。',
      downstream: [
        relation(baseCopy.en.integrations['inspektor-gadget'].downstream[0], 'Microsoft Azure Kubernetes Service (AKS)', 'マネージド Kubernetes 製品', 'Microsoft は AKS 向け Inspektor Gadget cluster extension を preview 提供しています。Extension type は microsoft.inspektorgadget で、upstream tool を DaemonSet として展開します。そのため upstream の Gadget compatibility 作業は AKS 経由で Inspektor Gadget を利用するチームに間接的に関係します。', 'Microsoft Learn — AKS extension'),
        relation(baseCopy.en.integrations['inspektor-gadget'].downstream[1], 'Azure Monitor managed Prometheus', 'テレメトリ統合', 'AKS extension は Gadget metrics を Azure Monitor managed Prometheus へ export できます。これは Inspektor Gadget がより広い Microsoft observability workflow に組み込まれていることを示しますが、BPFCompat の直接利用を意味しません。', 'Microsoft Learn — 設定'),
        relation(baseCopy.en.integrations['inspektor-gadget'].downstream[2], 'kubectl gadget / Helm を利用する Kubernetes 運用者', 'オープンソース deployment 経路', 'Inspektor Gadget は kubectl plugin と Helm ベースの deployment 経路で Kubernetes に導入できます。これらの運用者は compatibility lane が検証する公開 Gadget ecosystem の downstream 利用者です。', 'Inspektor Gadget ドキュメント'),
      ],
      evidenceTitle: '公開 contribution の証拠', evidenceIntro: '統合に関する記述は、週次 compatibility workflow を追加したマージ済み upstream Pull Request に基づきます。',
      claimTitle: '主張していないこと', claimBody: 'Kernel Guard は Microsoft、Azure、AKS ユーザー、またはすべての Inspektor Gadget ユーザーが BPFCompat を直接実行しているとは主張していません。主張しているのは、BPFCompat による compatibility validation が、これら downstream 経路で Gadget が利用される upstream project に統合されているという事実です。',
    }),
  },
};

const zhCN: EcosystemCopy = {
  index: {
    kicker: '生态系统 // 公开证据', title1: 'Upstream', title2: '集成',
    description: 'Kernel Guard 将兼容性验证集成到依赖可靠内核级行为的开源网络安全项目中。',
    whyTitle: '为什么 upstream 集成很重要',
    whyP1: '当兼容性检查运行在底层技术实际开发和发布的位置时，它的价值更高。BPFCompat 集成把验证从孤立演示推进到 upstream CI。',
    whyP2: '这并不意味着每个 downstream 用户都是 BPFCompat 客户。它意味着 upstream 项目可以更早发现兼容性回归，而使用这些项目的团队可能间接受益于更强的发布证据。',
    chainTitle: '影响如何传递', chainSteps: ['Kernel Guard / BPFCompat', 'Upstream 安全项目', 'Downstream 产品与安全团队'],
    integrationsTitle: '当前 upstream 集成', integrationsDescription: '以下页面说明具体合并了什么、为什么重要，以及 upstream 项目背后有哪些公开记录的 downstream 产品或用户。', view: '查看集成',
    downstreamTitle: 'Downstream 相关性，而不是客户名单', downstreamDescription: '我们明确区分 BPFCompat 的直接采用与生态系统触达。只有当企业或产品与 Falco / Inspektor Gadget 的关系有公开记录时才会列出。',
    claimTitle: '声明边界', claimBody: '除非有明确的直接采用证据，否则页面中的 Falco、Inspektor Gadget、Microsoft、Sysdig、AWS、Shopify、Qonto、Frame.io 等名称不会被描述为 BPFCompat 客户。页面展示的是可公开验证的 upstream / downstream 关系。',
  },
  labels: { back: '返回 upstream 集成', publicEvidence: '公开证据', merged: '已合并到 upstream', downstream: 'Downstream 关系', upstreamIntegration: 'Upstream 集成' },
  integrations: {
    falco: integration(baseCopy.en.integrations.falco, {
      name: 'Falco', kicker: '云原生运行时安全', title: 'Falco 兼容性路径中的 BPFCompat',
      description: 'Falco 是 CNCF Graduated 的运行时安全项目。Kernel Guard 在 Falco 的 eBPF probe 路径中加入周期性 BPFCompat 验证，使兼容性假设能够在真实内核环境中被实际测试。',
      whatTitle: 'Falco 是什么', whatBody: 'Falco 用于检测主机、容器、Kubernetes 和云环境中的可疑行为。其运行时可见性依赖对 Linux 内核事件的可靠访问，包括基于 eBPF 的 probe 路径。',
      contributionTitle: 'Kernel Guard 集成了什么', contribution: [
        'PR #3024 合并了用于 Falco modern_bpf 路径的计划性 BPFCompat 兼容性 lane；后续 #3061 proof run 通过真实 scap-open --modern_bpf loader 路径执行。',
        'PR #3061 将 AlmaLinux 8/9 加入矩阵。Dress rehearsal 中 5 个内核全部通过真实 loader 路径，包括基于 4.18 且具有 backport BPF ring buffer 与 BTF 支持的 AlmaLinux 8。',
        '结果是可执行的兼容性证据：load / attach 行为在真实内核 profile 中验证，而不是根据内核版本号推测。',
      ],
      whyTitle: '为什么这对网络安全重要', why: ['如果内核 probe 无法在受保护环境中可靠 load / attach，运行时检测的价值就会下降。','Enterprise Linux 厂商会 backport eBPF 能力，因此仅依赖版本号的 heuristics 并不可靠。','Upstream CI 提供了一个在兼容性回归进入 downstream 部署前将其发现的控制点。'],
      downstreamTitle: 'Falco 的 downstream 有哪些产品和组织', downstreamIntro: '以下关系均有公开资料。它们用于说明生态系统触达，不代表直接采用 BPFCompat。',
      downstream: [
        relation(baseCopy.en.integrations.falco.downstream[0], 'Sysdig Secure / Sysdig 云安全', '商业安全产品', 'Sysdig 表示 Falco 位于其云安全产品的核心。因此，Falco CI 中的 BPFCompat 工作对基于同一 upstream 技术构建的商业安全栈具有间接相关性。', 'Sysdig — Falco'),
        relation(baseCopy.en.integrations.falco.downstream[1], 'Stratoshark', '开源云取证', 'Falco 可以生成供 Stratoshark 调查流程使用的 SCAP capture。Falco 内核事件路径的兼容性可信度因此位于该取证流程的 upstream。', 'Sysdig — Stratoshark'),
        relation(baseCopy.en.integrations.falco.downstream[2], 'AWS · Qonto · Shopify', '公开记录的 Falco 用户', 'Falco 的 Graduation 材料公开将这些组织列为 Falco 用户。这里并不将其描述为 BPFCompat 用户，而是作为 upstream 项目 downstream 团队的示例。', 'Falco Graduation 证据'),
        relation(baseCopy.en.integrations.falco.downstream[3], 'Frame.io', 'CNCF 案例研究', 'CNCF 记录了 Frame.io 基于 Falco 数据构建端到端安全系统的案例。这是 Falco downstream 生产安全工作流的例子，而不是 BPFCompat 的直接采用声明。', 'CNCF 案例研究'),
      ],
      evidenceTitle: '公开 contribution 证据', evidenceIntro: '本页的集成声明对应 upstream falcosecurity/libs 仓库中已合并的公开 Pull Request。',
      claimTitle: '我们没有声明什么', claimBody: 'Kernel Guard 不声称 Sysdig、AWS、Qonto、Shopify、Frame.io 或所有 Falco 用户都直接运行 BPFCompat。可验证的声明更窄：BPFCompat 已合并进 upstream Falco 兼容性 workflow，而 downstream Falco 用户可能间接受益于该 workflow 产生的发布证据。',
    }),
    'inspektor-gadget': integration(baseCopy.en.integrations['inspektor-gadget'], {
      name: 'Inspektor Gadget', kicker: 'KUBERNETES 与 LINUX 可观测性', title: '面向已发布 eBPF Gadget 的 BPFCompat',
      description: 'Inspektor Gadget 将 eBPF 程序打包为面向 Kubernetes 和 Linux 检查的 OCI Gadget。Kernel Guard 添加了每周 BPFCompat lane，在多个内核 profile 上验证已发布 Gadget。',
      whatTitle: 'Inspektor Gadget 是什么', whatBody: 'Inspektor Gadget 是利用 eBPF 从 Kubernetes 集群和 Linux 主机采集底层系统数据的 framework 与工具集。Gadget 以 OCI image 形式分发，可交互运行，也可持续运行。',
      contributionTitle: 'Kernel Guard 集成了什么', contribution: ['PR #5708 合并了一个针对已发布 Gadget 的 non-blocking 每周内核兼容性 lane。','Workflow 解析已发布 OCI Gadget reference，并记录 baseline / current 版本的逐内核兼容性证据。完整 proof run 覆盖 49 个 Gadget × 11 个内核 profile，共 539 个 baseline-to-current comparison cell。','该 lane 可区分 regression、improvement、预期缺失 artifact 和不完整 profile 结果。Proof run 报告 0 regression、4 improvement、0 unexpected missing report。'],
      whyTitle: '为什么这对网络安全和运维重要', why: ['安全与可观测性 Gadget 依赖的内核能力会因发行版、vendor backport 和架构而不同。','可以验证用户实际消费的已发布 OCI artifact，而不仅是 source code 或开发者工作站。','持续 compatibility lane 可以在 Gadget release 改变其跨内核矩阵行为时更早向 maintainer 提供证据。'],
      downstreamTitle: 'Inspektor Gadget 的 downstream 有哪些产品', downstreamIntro: '最明确的具名 downstream 关系是 Microsoft Azure Kubernetes Service。这并不表示 Microsoft 直接采用了 BPFCompat。',
      downstream: [
        relation(baseCopy.en.integrations['inspektor-gadget'].downstream[0], 'Microsoft Azure Kubernetes Service (AKS)', '托管 Kubernetes 产品', 'Microsoft 为 AKS 提供 preview 状态的 Inspektor Gadget cluster extension。其 extension type 为 microsoft.inspektorgadget，并以 DaemonSet 方式部署 upstream 工具。因此，upstream Gadget 兼容性工作对通过 AKS 使用 Inspektor Gadget 的团队具有间接相关性。', 'Microsoft Learn — AKS 扩展'),
        relation(baseCopy.en.integrations['inspektor-gadget'].downstream[1], 'Azure Monitor managed Prometheus', '遥测集成', 'AKS extension 可以将 Gadget metrics 导出到 Azure Monitor managed Prometheus，使 Inspektor Gadget 进入更广泛的 Microsoft observability workflow；这仍不代表直接使用 BPFCompat。', 'Microsoft Learn — 配置'),
        relation(baseCopy.en.integrations['inspektor-gadget'].downstream[2], '使用 kubectl gadget / Helm 的 Kubernetes 运维团队', '开源部署路径', 'Inspektor Gadget 通过 kubectl plugin 和 Helm 部署方式进入 Kubernetes。这些运维团队是 compatibility lane 所测试的已发布 Gadget 生态的 downstream 用户。', 'Inspektor Gadget 文档'),
      ],
      evidenceTitle: '公开 contribution 证据', evidenceIntro: '集成声明对应添加每周 compatibility workflow 的已合并 upstream Pull Request。',
      claimTitle: '我们没有声明什么', claimBody: 'Kernel Guard 不声称 Microsoft、Azure、AKS 客户或所有 Inspektor Gadget 用户都直接运行 BPFCompat。我们的声明是：BPFCompat 支持的 compatibility validation 已合并进 upstream 项目，而这些 Gadget 会通过上述 downstream 路径被使用。',
    }),
  },
};

const es: EcosystemCopy = {
  index: {
    kicker: 'ECOSISTEMA // EVIDENCIA_PÚBLICA', title1: 'Integraciones', title2: 'Upstream',
    description: 'Kernel Guard integra validación de compatibilidad en proyectos open source de ciberseguridad cuyos usuarios dependen de un comportamiento fiable a nivel de kernel.',
    whyTitle: 'Por qué importa la integración upstream',
    whyP1: 'Las comprobaciones de compatibilidad son más valiosas cuando se ejecutan donde la tecnología subyacente se desarrolla y publica. Las integraciones de BPFCompat trasladan la validación desde una demo aislada a la CI upstream.',
    whyP2: 'Eso no convierte a cada usuario downstream en cliente de BPFCompat. Significa que los proyectos upstream pueden detectar regresiones antes y que los equipos que consumen esos proyectos pueden beneficiarse indirectamente de una evidencia de release más sólida.',
    chainTitle: 'Cómo fluye el impacto', chainSteps: ['Kernel Guard / BPFCompat', 'Proyecto de seguridad upstream', 'Productos downstream y equipos de seguridad'],
    integrationsTitle: 'Integraciones upstream actuales', integrationsDescription: 'Cada página documenta qué se fusionó, por qué importa y qué productos o usuarios públicamente documentados se encuentran downstream del proyecto upstream.', view: 'Ver integración',
    downstreamTitle: 'Relevancia downstream, no una lista de clientes', downstreamDescription: 'Separamos adopción directa de BPFCompat y exposición en el ecosistema. Solo nombramos empresas y productos cuando su relación con Falco o Inspektor Gadget está documentada públicamente.',
    claimTitle: 'Disciplina de afirmaciones', claimBody: 'Falco, Inspektor Gadget, Microsoft, Sysdig, AWS, Shopify, Qonto, Frame.io y otros nombres no se presentan como clientes de BPFCompat salvo que exista evidencia explícita de adopción directa. Mostramos la cadena upstream/downstream documentada públicamente.',
  },
  labels: { back: 'Volver a integraciones upstream', publicEvidence: 'Evidencia pública', merged: 'Fusionado upstream', downstream: 'Relación downstream', upstreamIntegration: 'Integración upstream' },
  integrations: {
    falco: integration(baseCopy.en.integrations.falco, {
      name:'Falco', kicker:'SEGURIDAD RUNTIME CLOUD-NATIVE', title:'BPFCompat en la ruta de compatibilidad de Falco',
      description:'Falco es un proyecto CNCF Graduated de seguridad runtime. Kernel Guard añadió validación recurrente de BPFCompat alrededor de la ruta eBPF de Falco para probar supuestos de compatibilidad en kernels reales.',
      whatTitle:'Qué es Falco', whatBody:'Falco detecta comportamiento sospechoso en hosts, contenedores, Kubernetes y cloud. Su visibilidad runtime depende de un acceso fiable a eventos del kernel Linux, incluidas rutas de probe basadas en eBPF.',
      contributionTitle:'Qué integró Kernel Guard', contribution:['El PR #3024 fusionó el lane programado de compatibilidad BPFCompat para la ruta modern_bpf de Falco; el proof run posterior de #3061 ejecutó la ruta real del loader scap-open --modern_bpf.','El PR #3061 añadió AlmaLinux 8 y 9. El dress rehearsal hizo pasar los cinco kernels por la ruta real del loader, incluido AlmaLinux 8 con base 4.18 y soporte BPF ring buffer y BTF incorporado mediante backports.','El resultado es evidencia ejecutable de compatibilidad: load y attach se comprueban en perfiles reales de kernel en lugar de inferirse por números de versión.'],
      whyTitle:'Por qué importa para ciberseguridad', why:['La detección runtime pierde valor si el probe del kernel no puede cargar o adjuntarse de forma fiable en la flota protegida.','Los proveedores de Enterprise Linux hacen backport de capacidades eBPF, por lo que las heurísticas basadas solo en versión son poco fiables.','La CI upstream permite detectar regresiones de compatibilidad antes de que lleguen a despliegues downstream.'],
      downstreamTitle:'Quién está downstream de Falco', downstreamIntro:'Estas relaciones con Falco están documentadas públicamente. Muestran alcance del ecosistema, no adopción directa de BPFCompat.',
      downstream:[relation(baseCopy.en.integrations.falco.downstream[0],'Sysdig Secure / Sysdig Cloud Security','Productos comerciales de seguridad','Sysdig afirma que Falco se encuentra en el núcleo de sus productos de cloud security. Por ello, el trabajo BPFCompat en la CI de Falco tiene relevancia indirecta para un stack comercial construido sobre la misma tecnología upstream.','Sysdig — Falco'),relation(baseCopy.en.integrations.falco.downstream[1],'Stratoshark','Forense cloud open source','Falco puede producir capturas SCAP utilizadas por flujos de investigación de Stratoshark. La confianza de compatibilidad en la ruta de eventos de kernel de Falco importa upstream de ese flujo forense.','Sysdig — Stratoshark'),relation(baseCopy.en.integrations.falco.downstream[2],'AWS · Qonto · Shopify','Usuarios Falco documentados públicamente','El material de graduación de Falco identificó públicamente estas organizaciones como usuarios de Falco. No se presentan como usuarios de BPFCompat; representan equipos downstream del proyecto upstream.','Evidencia de graduación de Falco'),relation(baseCopy.en.integrations.falco.downstream[3],'Frame.io','Caso de estudio CNCF','CNCF documentó cómo Frame.io construyó un sistema de seguridad end-to-end sobre datos de Falco. Es un ejemplo de un flujo de seguridad en producción downstream de Falco, no una afirmación de adopción directa de BPFCompat.','Caso de estudio CNCF')],
      evidenceTitle:'Evidencia pública de la contribución', evidenceIntro:'Las afirmaciones de integración de esta página apuntan a pull requests públicos fusionados en el repositorio upstream falcosecurity/libs.',
      claimTitle:'Lo que no afirmamos', claimBody:'Kernel Guard no afirma que Sysdig, AWS, Qonto, Shopify, Frame.io o todos los usuarios de Falco ejecuten BPFCompat directamente. La afirmación verificable es más limitada: BPFCompat está integrado en un workflow upstream de compatibilidad de Falco y los usuarios downstream pueden beneficiarse indirectamente de la evidencia de release que produce.',
    }),
    'inspektor-gadget': integration(baseCopy.en.integrations['inspektor-gadget'], {
      name:'Inspektor Gadget', kicker:'OBSERVABILIDAD KUBERNETES & LINUX', title:'BPFCompat para eBPF Gadgets publicados',
      description:'Inspektor Gadget empaqueta programas eBPF como Gadgets OCI para inspección de Kubernetes y Linux. Kernel Guard añadió un lane semanal de BPFCompat que valida Gadgets publicados en distintos perfiles de kernel.',
      whatTitle:'Qué es Inspektor Gadget', whatBody:'Inspektor Gadget es un framework y conjunto de herramientas que recopila datos de bajo nivel de clusters Kubernetes y hosts Linux mediante eBPF. Los Gadgets se distribuyen como imágenes OCI y pueden ejecutarse de forma interactiva o continua.',
      contributionTitle:'Qué integró Kernel Guard', contribution:['El PR #5708 fusionó un lane semanal no bloqueante de compatibilidad de kernel para Gadgets publicados.','El workflow resuelve referencias OCI publicadas y registra evidencia por kernel para versiones baseline y actuales. El proof run completo cubrió 49 Gadgets × 11 perfiles de kernel: 539 celdas de comparación baseline→current.','El lane clasifica regresiones, mejoras, artefactos ausentes esperados y resultados incompletos. El proof run reportó 0 regresiones, 4 mejoras y 0 informes ausentes inesperados.'],
      whyTitle:'Por qué importa para ciberseguridad y operaciones', why:['Los Gadgets de seguridad y observabilidad dependen de funciones de kernel que cambian entre distribuciones, backports y arquitecturas.','Los artefactos OCI publicados se prueban tal como los consumen los usuarios, no solo como código fuente o en un equipo de desarrollo.','Un lane recurrente da evidencia temprana a los maintainers cuando una release cambia de comportamiento en la matriz de kernels.'],
      downstreamTitle:'Quién está downstream de Inspektor Gadget', downstreamIntro:'La relación downstream con nombre más fuerte es Microsoft Azure Kubernetes Service. Esto no se presenta como adopción directa de BPFCompat por Microsoft.',
      downstream:[relation(baseCopy.en.integrations['inspektor-gadget'].downstream[0],'Microsoft Azure Kubernetes Service (AKS)','Producto Kubernetes gestionado','Microsoft ofrece en preview una extensión de cluster de Inspektor Gadget para AKS. El tipo es microsoft.inspektorgadget y despliega la herramienta upstream como DaemonSet. El trabajo upstream de compatibilidad puede ser indirectamente relevante para equipos que consumen Inspektor Gadget a través de AKS.','Microsoft Learn — extensión AKS'),relation(baseCopy.en.integrations['inspektor-gadget'].downstream[1],'Azure Monitor managed Prometheus','Integración de telemetría','La extensión de AKS puede exportar métricas de Gadget a Azure Monitor managed Prometheus. Esto sitúa Inspektor Gadget dentro de un flujo de observabilidad más amplio de Microsoft, sin implicar uso directo de BPFCompat.','Microsoft Learn — configuración'),relation(baseCopy.en.integrations['inspektor-gadget'].downstream[2],'Operadores Kubernetes con kubectl gadget / Helm','Rutas de despliegue open source','Inspektor Gadget se distribuye para Kubernetes mediante su plugin kubectl y despliegues basados en Helm. Esos operadores son consumidores downstream del mismo ecosistema de Gadgets publicado que valida el lane de compatibilidad.','Documentación de Inspektor Gadget')],
      evidenceTitle:'Evidencia pública de la contribución', evidenceIntro:'La afirmación de integración apunta al pull request upstream fusionado que añadió el workflow semanal de compatibilidad.',
      claimTitle:'Lo que no afirmamos', claimBody:'Kernel Guard no afirma que Microsoft, Azure, clientes de AKS o todos los usuarios de Inspektor Gadget ejecuten BPFCompat directamente. La afirmación es que la validación de compatibilidad respaldada por BPFCompat está fusionada en el proyecto upstream cuyos Gadgets se consumen mediante estas rutas downstream.',
    }),
  },
};

const fr: EcosystemCopy = {
  index: {
    kicker:'ÉCOSYSTÈME // PREUVE_PUBLIQUE', title1:'Intégrations', title2:'Upstream', description:'Kernel Guard intègre la validation de compatibilité dans des projets open source de cybersécurité dont les utilisateurs dépendent d’un comportement fiable au niveau du noyau.',
    whyTitle:'Pourquoi l’intégration upstream compte', whyP1:'Les contrôles de compatibilité sont plus utiles lorsqu’ils s’exécutent là où la technologie sous-jacente est réellement développée et publiée. Les intégrations BPFCompat déplacent la validation d’une démonstration isolée vers la CI upstream.', whyP2:'Cela ne fait pas de chaque utilisateur downstream un client BPFCompat. Cela permet aux projets upstream de détecter plus tôt les régressions et aux équipes qui les utilisent de bénéficier indirectement de preuves de release plus solides.',
    chainTitle:'Comment l’impact se propage', chainSteps:['Kernel Guard / BPFCompat','Projet de sécurité upstream','Produits downstream & équipes sécurité'], integrationsTitle:'Intégrations upstream actuelles', integrationsDescription:'Chaque page documente ce qui a été fusionné, pourquoi cela compte et quels produits ou utilisateurs publiquement documentés se trouvent downstream du projet upstream.', view:'Voir l’intégration', downstreamTitle:'Pertinence downstream, pas une liste de clients', downstreamDescription:'Nous distinguons clairement l’adoption directe de BPFCompat de la portée dans l’écosystème. Les entreprises et produits ne sont cités que lorsque leur relation avec Falco ou Inspektor Gadget est publiquement documentée.', claimTitle:'Discipline des affirmations', claimBody:'Falco, Inspektor Gadget, Microsoft, Sysdig, AWS, Shopify, Qonto, Frame.io et les autres noms ne sont pas présentés comme clients BPFCompat sauf preuve explicite d’une adoption directe. Nous montrons la chaîne upstream/downstream publiquement vérifiable.',
  },
  labels:{back:'Retour aux intégrations upstream',publicEvidence:'Preuve publique',merged:'Fusionné upstream',downstream:'Relation downstream',upstreamIntegration:'Intégration upstream'},
  integrations:{
    falco:integration(baseCopy.en.integrations.falco,{name:'Falco',kicker:'SÉCURITÉ RUNTIME CLOUD-NATIVE',title:'BPFCompat dans le chemin de compatibilité Falco',description:'Falco est un projet de sécurité runtime CNCF Graduated. Kernel Guard a ajouté une validation BPFCompat récurrente autour du chemin eBPF de Falco afin que les hypothèses de compatibilité soient testées sur de vrais environnements kernel.',whatTitle:'Qu’est-ce que Falco ?',whatBody:'Falco détecte les comportements suspects sur les hôtes, conteneurs, environnements Kubernetes et cloud. Sa visibilité runtime dépend d’un accès fiable aux événements du noyau Linux, notamment via des probes eBPF.',contributionTitle:'Ce que Kernel Guard a intégré',contribution:['La PR #3024 a fusionné le lane BPFCompat planifié pour le chemin modern_bpf de Falco ; le proof run suivant dans #3061 a utilisé le vrai chemin loader scap-open --modern_bpf.','La PR #3061 a ajouté AlmaLinux 8 et 9. Le dress rehearsal a fait passer les cinq kernels par le vrai loader, y compris AlmaLinux 8 basé sur 4.18 avec prise en charge BPF ring buffer et BTF backportée.','Le résultat est une preuve de compatibilité exécutable : les comportements load et attach sont vérifiés sur de vrais profils kernel plutôt que déduits des numéros de version.'],whyTitle:'Pourquoi c’est important pour la cybersécurité',why:['La détection runtime perd de sa valeur si le probe kernel ne peut pas se charger ou s’attacher de façon fiable sur la flotte protégée.','Les fournisseurs Enterprise Linux backportent des capacités eBPF ; les heuristiques basées uniquement sur la version sont donc peu fiables.','La CI upstream permet d’identifier les régressions de compatibilité avant qu’elles n’atteignent les déploiements downstream.'],downstreamTitle:'Qui se trouve downstream de Falco',downstreamIntro:'Ces relations avec Falco sont documentées publiquement. Elles montrent la portée de l’écosystème, pas une adoption directe de BPFCompat.',downstream:[relation(baseCopy.en.integrations.falco.downstream[0],'Sysdig Secure / Sysdig Cloud Security','Produits de sécurité commerciaux','Sysdig indique que Falco se trouve au cœur de ses produits de cloud security. Le travail BPFCompat dans la CI de Falco a donc une pertinence indirecte pour un stack commercial construit sur la même technologie upstream.','Sysdig — Falco'),relation(baseCopy.en.integrations.falco.downstream[1],'Stratoshark','Forensic cloud open source','Falco peut produire des captures SCAP utilisées par les workflows d’investigation de Stratoshark. La confiance dans la compatibilité du chemin kernel-event de Falco est donc pertinente en amont de ce workflow forensic.','Sysdig — Stratoshark'),relation(baseCopy.en.integrations.falco.downstream[2],'AWS · Qonto · Shopify','Utilisateurs Falco documentés publiquement','Le dossier de graduation de Falco identifie publiquement ces organisations comme utilisateurs de Falco. Elles ne sont pas présentées comme utilisateurs de BPFCompat ; elles représentent des équipes downstream du projet upstream.','Preuve de graduation Falco'),relation(baseCopy.en.integrations.falco.downstream[3],'Frame.io','Étude de cas CNCF','CNCF a documenté Frame.io construisant un système de sécurité de bout en bout à partir des données Falco. Il s’agit d’un exemple de workflow de sécurité en production downstream de Falco, pas d’une adoption directe de BPFCompat.','Étude de cas CNCF')],evidenceTitle:'Preuve publique de la contribution',evidenceIntro:'Les affirmations d’intégration de cette page renvoient à des pull requests publics fusionnés dans le dépôt upstream falcosecurity/libs.',claimTitle:'Ce que nous ne prétendons pas',claimBody:'Kernel Guard ne prétend pas que Sysdig, AWS, Qonto, Shopify, Frame.io ou tous les utilisateurs de Falco exécutent BPFCompat directement. L’affirmation vérifiable est plus précise : BPFCompat est intégré à un workflow upstream de compatibilité Falco, dont les utilisateurs downstream peuvent indirectement bénéficier.'}),
    'inspektor-gadget':integration(baseCopy.en.integrations['inspektor-gadget'],{name:'Inspektor Gadget',kicker:'OBSERVABILITÉ KUBERNETES & LINUX',title:'BPFCompat pour les eBPF Gadgets publiés',description:'Inspektor Gadget empaquette des programmes eBPF sous forme de Gadgets OCI pour l’inspection Kubernetes et Linux. Kernel Guard a ajouté un lane BPFCompat hebdomadaire qui valide les Gadgets publiés sur plusieurs profils kernel.',whatTitle:'Qu’est-ce qu’Inspektor Gadget ?',whatBody:'Inspektor Gadget est un framework et un ensemble d’outils qui collecte des données système bas niveau depuis des clusters Kubernetes et des hôtes Linux avec eBPF. Les Gadgets sont distribués comme images OCI et peuvent fonctionner de manière interactive ou continue.',contributionTitle:'Ce que Kernel Guard a intégré',contribution:['La PR #5708 a fusionné un lane hebdomadaire non bloquant de compatibilité kernel pour les Gadgets publiés.','Le workflow résout les références OCI publiées et enregistre une preuve par kernel pour les versions baseline et actuelles. Le proof run complet couvre 49 Gadgets × 11 profils kernel, soit 539 cellules de comparaison baseline→current.','Le lane classe les régressions, améliorations, artefacts absents attendus et résultats de profil incomplets. Le proof run a rapporté 0 régression, 4 améliorations et 0 rapport manquant inattendu.'],whyTitle:'Pourquoi c’est important pour la cybersécurité et les opérations',why:['Les Gadgets de sécurité et d’observabilité dépendent de fonctions kernel qui varient selon les distributions, les backports fournisseurs et les architectures.','Les artefacts OCI publiés sont testés tels que les utilisateurs les consomment, et pas uniquement sous forme de code source ou sur un poste développeur.','Un lane récurrent fournit plus tôt aux maintainers des preuves lorsqu’une release de Gadget change de comportement dans la matrice kernel.'],downstreamTitle:'Qui se trouve downstream d’Inspektor Gadget',downstreamIntro:'La relation downstream nommée la plus forte est Microsoft Azure Kubernetes Service. Cela ne signifie pas que Microsoft adopte directement BPFCompat.',downstream:[relation(baseCopy.en.integrations['inspektor-gadget'].downstream[0],'Microsoft Azure Kubernetes Service (AKS)','Produit Kubernetes managé','Microsoft propose en preview une extension cluster Inspektor Gadget pour AKS. Son type est microsoft.inspektorgadget et elle déploie l’outil upstream comme DaemonSet. Le travail upstream de compatibilité peut donc être indirectement pertinent pour les équipes qui consomment Inspektor Gadget via AKS.','Microsoft Learn — extension AKS'),relation(baseCopy.en.integrations['inspektor-gadget'].downstream[1],'Azure Monitor managed Prometheus','Intégration télémétrie','L’extension AKS peut exporter les métriques Gadget vers Azure Monitor managed Prometheus. Inspektor Gadget s’inscrit ainsi dans un workflow d’observabilité Microsoft plus large, sans impliquer un usage direct de BPFCompat.','Microsoft Learn — configuration'),relation(baseCopy.en.integrations['inspektor-gadget'].downstream[2],'Opérateurs Kubernetes utilisant kubectl gadget / Helm','Chemins de déploiement open source','Inspektor Gadget est distribué sur Kubernetes via son plugin kubectl et des déploiements Helm. Ces opérateurs sont des consommateurs downstream du même écosystème de Gadgets publié que le lane de compatibilité valide.','Documentation Inspektor Gadget')],evidenceTitle:'Preuve publique de la contribution',evidenceIntro:'L’affirmation d’intégration renvoie à la pull request upstream fusionnée qui a ajouté le workflow hebdomadaire de compatibilité.',claimTitle:'Ce que nous ne prétendons pas',claimBody:'Kernel Guard ne prétend pas que Microsoft, Azure, les clients AKS ou tous les utilisateurs d’Inspektor Gadget exécutent BPFCompat directement. Nous affirmons que la validation de compatibilité soutenue par BPFCompat est fusionnée dans le projet upstream dont les Gadgets sont consommés via ces chemins downstream.'}),
  },
};

const ko: EcosystemCopy = {
  index:{kicker:'에코시스템 // 공개_증거',title1:'Upstream',title2:'통합',description:'Kernel Guard는 신뢰할 수 있는 커널 수준 동작에 의존하는 오픈소스 사이버보안 프로젝트에 호환성 검증을 통합합니다.',whyTitle:'Upstream 통합이 중요한 이유',whyP1:'호환성 검사는 기반 기술이 실제로 개발되고 릴리스되는 곳에서 실행될 때 더 의미가 있습니다. BPFCompat 통합은 검증을 고립된 데모에서 upstream CI로 옮깁니다.',whyP2:'그렇다고 모든 downstream 사용자가 BPFCompat 고객이 되는 것은 아닙니다. Upstream 프로젝트가 호환성 회귀를 더 일찍 발견하고, 이를 사용하는 팀이 더 강한 릴리스 증거의 간접적인 이점을 얻을 수 있다는 뜻입니다.',chainTitle:'영향이 전달되는 방식',chainSteps:['Kernel Guard / BPFCompat','Upstream 보안 프로젝트','Downstream 제품 및 보안 팀'],integrationsTitle:'현재 upstream 통합',integrationsDescription:'각 페이지는 무엇이 병합되었는지, 왜 중요한지, 그리고 upstream 프로젝트 downstream에 어떤 공개 제품이나 사용자가 있는지 설명합니다.',view:'통합 보기',downstreamTitle:'고객 목록이 아닌 downstream 관련성',downstreamDescription:'직접적인 BPFCompat 도입과 에코시스템 노출을 구분합니다. 회사와 제품은 Falco 또는 Inspektor Gadget과의 관계가 공개적으로 문서화된 경우에만 표시합니다.',claimTitle:'주장 범위',claimBody:'Falco, Inspektor Gadget, Microsoft, Sysdig, AWS, Shopify, Qonto, Frame.io 등은 직접 도입이 명시적으로 확인되지 않는 한 BPFCompat 고객으로 표시하지 않습니다. 이 페이지는 공개적으로 확인 가능한 upstream/downstream 관계를 보여 줍니다.'},
  labels:{back:'Upstream 통합으로 돌아가기',publicEvidence:'공개 증거',merged:'Upstream 병합',downstream:'Downstream 관계',upstreamIntegration:'Upstream 통합'},
  integrations:{
    falco:integration(baseCopy.en.integrations.falco,{name:'Falco',kicker:'클라우드 네이티브 런타임 보안',title:'Falco 호환성 경로의 BPFCompat',description:'Falco는 CNCF Graduated 런타임 보안 프로젝트입니다. Kernel Guard는 Falco의 eBPF probe 경로에 반복적인 BPFCompat 검증을 추가해 호환성 가정을 실제 커널 환경에서 시험할 수 있게 했습니다.',whatTitle:'Falco란?',whatBody:'Falco는 호스트, 컨테이너, Kubernetes, 클라우드 환경의 의심스러운 동작을 탐지합니다. 런타임 가시성은 eBPF 기반 probe 경로를 포함한 Linux 커널 이벤트에 안정적으로 접근하는 데 달려 있습니다.',contributionTitle:'Kernel Guard가 통합한 것',contribution:['PR #3024는 Falco modern_bpf 경로를 위한 scheduled BPFCompat compatibility lane을 병합했고, 후속 #3061 proof run은 실제 scap-open --modern_bpf loader 경로를 실행했습니다.','PR #3061은 AlmaLinux 8/9를 matrix에 추가했습니다. Dress rehearsal에서 5개 커널 모두 실제 loader 경로를 통과했으며, AlmaLinux 8의 4.18 기반에서도 backport된 BPF ring buffer와 BTF 지원이 확인됐습니다.','결과적으로 load/attach 동작을 버전 번호에서 추정하지 않고 실제 커널 profile에서 실행 가능한 호환성 증거로 확인할 수 있습니다.'],whyTitle:'사이버보안에서 왜 중요한가',why:['보호 대상 fleet에서 kernel probe가 안정적으로 load/attach되지 않으면 런타임 탐지의 가치가 떨어집니다.','Enterprise Linux 벤더는 eBPF 기능을 backport하므로 단순 버전 heuristics는 신뢰하기 어렵습니다.','Upstream CI는 호환성 회귀가 downstream deployment로 퍼지기 전에 발견할 수 있는 지점을 제공합니다.'],downstreamTitle:'Falco downstream의 제품과 조직',downstreamIntro:'아래 관계는 공개적으로 문서화된 Falco 관계입니다. 에코시스템 도달 범위를 보여 주며 BPFCompat의 직접 도입을 의미하지 않습니다.',downstream:[relation(baseCopy.en.integrations.falco.downstream[0],'Sysdig Secure / Sysdig Cloud Security','상용 보안 제품','Sysdig는 Falco가 자사 클라우드 보안 제품의 핵심에 있다고 밝히고 있습니다. 따라서 Falco CI의 BPFCompat 작업은 같은 upstream 기술을 기반으로 한 상용 보안 stack에 간접적인 관련성이 있습니다.','Sysdig — Falco'),relation(baseCopy.en.integrations.falco.downstream[1],'Stratoshark','오픈소스 클라우드 포렌식','Falco는 Stratoshark 조사 workflow에 사용되는 SCAP capture를 만들 수 있습니다. Falco kernel-event 경로의 호환성 신뢰도는 이 포렌식 workflow의 upstream에서 중요합니다.','Sysdig — Stratoshark'),relation(baseCopy.en.integrations.falco.downstream[2],'AWS · Qonto · Shopify','공개 문서에 나온 Falco 사용자','Falco Graduation 자료는 이 조직들을 Falco 사용자로 공개했습니다. 이들은 BPFCompat 사용자로 주장되지 않으며 upstream 프로젝트 downstream 팀의 예로 표시됩니다.','Falco Graduation 증거'),relation(baseCopy.en.integrations.falco.downstream[3],'Frame.io','CNCF 사례 연구','CNCF는 Frame.io가 Falco 데이터를 기반으로 end-to-end 보안 시스템을 구축한 사례를 문서화했습니다. 이는 Falco downstream의 프로덕션 보안 workflow 예이며 BPFCompat 직접 도입 주장이 아닙니다.','CNCF 사례 연구')],evidenceTitle:'공개 contribution 증거',evidenceIntro:'이 페이지의 통합 주장은 upstream falcosecurity/libs 저장소에 병합된 공개 Pull Request에 연결됩니다.',claimTitle:'우리가 주장하지 않는 것',claimBody:'Kernel Guard는 Sysdig, AWS, Qonto, Shopify, Frame.io 또는 모든 Falco 사용자가 BPFCompat를 직접 실행한다고 주장하지 않습니다. 검증 가능한 주장은 더 좁습니다. BPFCompat가 upstream Falco compatibility workflow에 병합되었고 downstream 사용자는 그 workflow가 만드는 릴리스 증거의 간접적인 이점을 얻을 수 있습니다.'}),
    'inspektor-gadget':integration(baseCopy.en.integrations['inspektor-gadget'],{name:'Inspektor Gadget',kicker:'KUBERNETES & LINUX 관측성',title:'배포된 eBPF Gadget을 위한 BPFCompat',description:'Inspektor Gadget은 eBPF 프로그램을 Kubernetes와 Linux 검사를 위한 OCI 기반 Gadget으로 패키징합니다. Kernel Guard는 공개된 Gadget을 여러 커널 profile에서 검증하는 주간 BPFCompat lane을 추가했습니다.',whatTitle:'Inspektor Gadget이란?',whatBody:'Inspektor Gadget은 eBPF를 이용해 Kubernetes cluster와 Linux host에서 저수준 시스템 데이터를 수집하는 framework 및 toolset입니다. Gadget은 OCI image로 배포되며 대화형 또는 지속 실행 방식으로 사용할 수 있습니다.',contributionTitle:'Kernel Guard가 통합한 것',contribution:['PR #5708은 공개 Gadget을 위한 non-blocking 주간 kernel compatibility lane을 병합했습니다.','Workflow는 공개 OCI Gadget reference를 해석하고 baseline/current 버전에 대해 커널별 호환성 증거를 기록합니다. Full proof run은 49 Gadget × 11 kernel profile, 총 539 comparison cell을 다뤘습니다.','Lane은 regression, improvement, expected missing artifact, incomplete profile result를 구분합니다. Proof run 결과는 0 regression, 4 improvement, 0 unexpected missing report였습니다.'],whyTitle:'사이버보안과 운영에서 왜 중요한가',why:['보안 및 관측성 Gadget은 distro family, vendor backport, architecture에 따라 달라지는 커널 기능에 의존합니다.','Source code나 개발자 환경만이 아니라 사용자가 실제로 소비하는 공개 OCI artifact를 검증할 수 있습니다.','반복적인 compatibility lane은 Gadget release의 커널 matrix 동작이 바뀔 때 maintainer에게 더 이른 증거를 제공합니다.'],downstreamTitle:'Inspektor Gadget downstream의 제품',downstreamIntro:'가장 명확하게 문서화된 downstream 관계는 Microsoft Azure Kubernetes Service입니다. 이는 Microsoft가 BPFCompat를 직접 도입했다는 뜻이 아닙니다.',downstream:[relation(baseCopy.en.integrations['inspektor-gadget'].downstream[0],'Microsoft Azure Kubernetes Service (AKS)','관리형 Kubernetes 제품','Microsoft는 AKS용 Inspektor Gadget cluster extension을 preview로 제공합니다. Extension type은 microsoft.inspektorgadget이며 upstream 도구를 DaemonSet으로 배포합니다. 따라서 upstream Gadget 호환성 작업은 AKS를 통해 Inspektor Gadget을 사용하는 팀에 간접적으로 관련될 수 있습니다.','Microsoft Learn — AKS extension'),relation(baseCopy.en.integrations['inspektor-gadget'].downstream[1],'Azure Monitor managed Prometheus','텔레메트리 통합','AKS extension은 Gadget metrics를 Azure Monitor managed Prometheus로 export할 수 있습니다. 이는 Inspektor Gadget이 더 넓은 Microsoft observability workflow에 포함된다는 의미이며 BPFCompat 직접 사용을 의미하지 않습니다.','Microsoft Learn — 설정'),relation(baseCopy.en.integrations['inspektor-gadget'].downstream[2],'kubectl gadget / Helm을 사용하는 Kubernetes 운영자','오픈소스 deployment 경로','Inspektor Gadget은 kubectl plugin과 Helm 기반 deployment 경로로 Kubernetes에 배포됩니다. 이 운영자들은 compatibility lane이 검증하는 공개 Gadget ecosystem의 downstream 사용자입니다.','Inspektor Gadget 문서')],evidenceTitle:'공개 contribution 증거',evidenceIntro:'통합 주장은 주간 compatibility workflow를 추가한 병합 완료 upstream Pull Request에 연결됩니다.',claimTitle:'우리가 주장하지 않는 것',claimBody:'Kernel Guard는 Microsoft, Azure, AKS 고객 또는 모든 Inspektor Gadget 사용자가 BPFCompat를 직접 실행한다고 주장하지 않습니다. BPFCompat 기반 compatibility validation이 이러한 downstream 경로를 통해 Gadget이 소비되는 upstream 프로젝트에 병합되었다는 사실을 말합니다.'}),
  },
};

export const ecosystemCopy: Record<Language, EcosystemCopy> = {
  en: baseCopy.en,
  tr: baseCopy.tr,
  de,
  ja,
  'zh-CN': zhCN,
  es,
  fr,
  ko,
};
