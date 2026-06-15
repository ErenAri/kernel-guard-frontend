import type { Language } from '../context/LanguageContext';
import type { ArticleContent } from './articles';

export type NonEnglishLanguage = Exclude<Language, 'en'>;

export const articleTranslations: Record<string, Record<NonEnglishLanguage, ArticleContent>> = {
  'spf-dkim-dmarc-google-workspace-security-domain': {
    tr: {
      title: 'Google Workspace Güvenlik Alanı için SPF, DKIM ve DMARC Kurulumu',
      description:
        'Daha güçlü güven, daha düşük spoofing riski ve kurumsal e-posta itibarı isteyen şirket alan adları için pratik Google Workspace e-posta kimlik doğrulama rehberi.',
      tags: ['E-posta Güvenliği', 'Google Workspace', 'DMARC', 'DNS'],
      summary: [
        'SPF, alan adı adına e-posta göndermesine izin verilen posta sunucularını tanımlar.',
        'DKIM, alıcıların içeriğin aktarım sırasında değiştirilmediğini doğrulayabilmesi için mesajları imzalar.',
        'DMARC, SPF veya DKIM hizalaması başarısız olduğunda alıcılara nasıl davranacaklarını ve raporları nereye göndereceklerini söyler.',
      ],
      sections: [
        {
          heading: 'Yeni bir şirket alan adı için neden önemlidir',
          paragraphs: [
            'Bir şirket sitesi profesyonel görünebilir, fakat e-posta alan adı hâlâ kolayca taklit edilebilir durumda olabilir. SPF, DKIM ve DMARC; alıcılara kimin e-posta göndermeye yetkili olduğunu ve başarısız doğrulamaların nasıl ele alınacağını göstererek bu boşluğu kapatır.',
            'Güvenlik odaklı bir şirket için bu yalnızca estetik bir iyileştirme değildir. Site üzerinde contact, support, security, privacy, legal ve sales gibi posta kutuları yayınlanıyorsa, bu yapı kamuya açık güven yüzeyinin bir parçasıdır.',
          ],
        },
        {
          heading: 'Önerilen devreye alma sırası',
          bullets: [
            'Önce operasyonel posta kutularını oluşturun; dmarc@example.com gibi bir DMARC raporlama posta kutusu dahil olmalıdır.',
            'Google Workspace gibi aktif gönderici için SPF kaydını yayınlayın.',
            'Google Workspace DKIM imzalamayı etkinleştirin ve DKIM TXT kaydını DNS üzerinde yayınlayın.',
            'DMARC politikasını p=none ve raporlama açık şekilde başlatın; böylece yaptırıma geçmeden önce hatalar gözlemlenebilir.',
            'Yalnızca meşru göndericiler hizalandıktan sonra quarantine veya reject politikasına ilerleyin.',
          ],
        },
        {
          heading: 'Neler doğrulanmalı',
          paragraphs: [
            'Doğrulama hem DNS kayıtlarından hem de gerçek mesaj başlıklarından yapılmalıdır. DNS kayıtların varlığını doğrular. Mesaj başlıkları ise üretim gönderim yolundan çıkan e-postanın gerçekten SPF, DKIM ve DMARC hizalamasından geçtiğini gösterir.',
          ],
          bullets: [
            'SPF yalnızca alan adı adına gerçekten e-posta gönderen servisleri içermelidir.',
            'DKIM güncel bir selector kullanmalı ve alınan mesajlarda pass sonucu göstermelidir.',
            'DMARC raporları izlenen bir posta kutusuna teslim edilmelidir.',
            'Politika belgelenmelidir; böylece gelecekte eklenen e-posta araçları teslim edilebilirliği bozmaz.',
          ],
        },
        {
          heading: 'Şirket seviyesinde sonraki adım',
          paragraphs: [
            'Raporlar temiz göründükten sonra DMARC kademeli olarak sıkılaştırılmalıdır. En güçlü son durum reject politikasındır; ancak doğru zamanlama, bültenler, transactional mail, CRM araçları veya destek araçlarının da aynı alan adından gönderim yapıp yapmadığına bağlıdır.',
          ],
        },
      ],
      references: [
        { label: 'Google Workspace e-posta kimlik doğrulama yardımı', url: 'https://support.google.com/a/topic/2759254' },
        { label: 'DMARC spesifikasyon özeti', url: 'https://dmarc.org/' },
      ],
    },
    de: {
      title: 'SPF-, DKIM- und DMARC-Setup für eine Google-Workspace-Sicherheitsdomain',
      description:
        'Ein praxisnaher Leitfaden zur Google-Workspace-E-Mail-Authentifizierung für Unternehmensdomains, die mehr Vertrauen und ein geringeres Spoofing-Risiko benötigen.',
      tags: ['E-Mail-Sicherheit', 'Google Workspace', 'DMARC', 'DNS'],
      summary: [
        'SPF autorisiert die Mailserver, die für die Domain senden dürfen.',
        'DKIM signiert Nachrichten, damit Empfänger prüfen können, ob Inhalte unterwegs verändert wurden.',
        'DMARC sagt Empfängern, was bei fehlgeschlagener SPF- oder DKIM-Ausrichtung passieren soll und wohin Reports gesendet werden.',
      ],
      sections: [
        {
          heading: 'Warum das für eine junge Unternehmensdomain zählt',
          paragraphs: [
            'Eine Unternehmenswebsite kann professionell wirken, während die E-Mail-Domain weiterhin leicht zu imitieren ist. SPF, DKIM und DMARC schließen diese Lücke, indem sie Empfängern Belege liefern, wer senden darf und wie Fehler behandelt werden sollen.',
            'Für ein sicherheitsorientiertes Unternehmen ist das keine optionale Politur. Es gehört zur öffentlichen Vertrauensfläche, besonders wenn die Website Kontakt-, Support-, Security-, Privacy-, Legal- und Sales-Mailboxen veröffentlicht.',
          ],
        },
        {
          heading: 'Empfohlene Rollout-Reihenfolge',
          bullets: [
            'Legen Sie zuerst die operativen Mailboxen an, inklusive einer DMARC-Reporting-Mailbox wie dmarc@example.com.',
            'Veröffentlichen Sie SPF für den aktiven Sender, zum Beispiel Google Workspace.',
            'Aktivieren Sie DKIM-Signaturen in Google Workspace und veröffentlichen Sie den DKIM-TXT-Record.',
            'Starten Sie DMARC mit p=none und aktiviertem Reporting, damit Fehler vor der Durchsetzung beobachtet werden können.',
            'Wechseln Sie erst zu quarantine oder reject, wenn legitime Sender ausgerichtet sind.',
          ],
        },
        {
          heading: 'Was verifiziert werden sollte',
          paragraphs: [
            'Die Verifikation sollte über DNS und über echte Nachrichten-Header erfolgen. DNS bestätigt, dass die Records existieren. Header zeigen, ob E-Mails über den produktiven Pfad tatsächlich SPF, DKIM und DMARC Alignment bestehen.',
          ],
          bullets: [
            'SPF enthält nur Dienste, die wirklich für die Domain senden.',
            'DKIM nutzt einen aktuellen Selector und zeigt in empfangenen Nachrichten pass.',
            'DMARC-Reports werden an eine überwachte Mailbox zugestellt.',
            'Die Policy ist dokumentiert, damit künftige Mail-Tools die Zustellbarkeit nicht brechen.',
          ],
        },
        {
          heading: 'Nächster Schritt auf Unternehmensniveau',
          paragraphs: [
            'Wenn die Reports sauber aussehen, sollte DMARC schrittweise verschärft werden. Der stärkste Zielzustand ist reject, aber der richtige Zeitplan hängt davon ab, ob Newsletter, transaktionale E-Mails, CRM-Tools oder Support-Tools ebenfalls von der Domain senden.',
          ],
        },
      ],
      references: [
        { label: 'Google Workspace Hilfe zur E-Mail-Authentifizierung', url: 'https://support.google.com/a/topic/2759254' },
        { label: 'DMARC-Spezifikationsüberblick', url: 'https://dmarc.org/' },
      ],
    },
    ja: {
      title: 'Google Workspace セキュリティドメイン向け SPF・DKIM・DMARC 設定',
      description:
        '信頼性を高め、なりすましリスクを下げたい企業ドメインのための Google Workspace メール認証の実践ガイド。',
      tags: ['メールセキュリティ', 'Google Workspace', 'DMARC', 'DNS'],
      summary: [
        'SPF は、そのドメインから送信できるメールサーバーを認可します。',
        'DKIM はメッセージに署名し、受信側が転送中に内容が変更されていないことを確認できるようにします。',
        'DMARC は SPF または DKIM のアラインメントに失敗した場合の扱いと、レポート送信先を受信側に伝えます。',
      ],
      sections: [
        {
          heading: '新しい企業ドメインで重要な理由',
          paragraphs: [
            '企業サイトがプロフェッショナルに見えても、メールドメインが簡単になりすまされる状態のままでは信頼面に穴が残ります。SPF、DKIM、DMARC は、誰が送信を許可されているか、失敗時にどう扱うべきかを受信側に示し、その穴を埋めます。',
            'セキュリティを重視する会社にとって、これは任意の仕上げではありません。contact、support、security、privacy、legal、sales などのメールボックスを公開している場合、公開された信頼面そのものの一部です。',
          ],
        },
        {
          heading: '推奨する展開順序',
          bullets: [
            'まず運用メールボックスを作成します。dmarc@example.com のような DMARC レポート用メールボックスも含めます。',
            'Google Workspace など、実際に送信するサービスに対して SPF を公開します。',
            'Google Workspace の DKIM 署名を有効化し、DKIM TXT レコードを公開します。',
            'DMARC は p=none とレポート有効化から開始し、強制適用前に失敗を観測します。',
            '正当な送信元がアラインメントできてから quarantine または reject に進めます。',
          ],
        },
        {
          heading: '確認すべきこと',
          paragraphs: [
            '確認は DNS と実際のメッセージヘッダーの両方で行うべきです。DNS はレコードの存在を確認します。メッセージヘッダーは、本番の送信経路から送られたメールが実際に SPF、DKIM、DMARC のアラインメントを通過しているかを示します。',
          ],
          bullets: [
            'SPF には、そのドメインから本当に送信するサービスだけが含まれている。',
            'DKIM は現在の selector を使い、受信メッセージで pass を示している。',
            'DMARC レポートが監視対象のメールボックスに届いている。',
            '将来のメールツール追加で到達性を壊さないよう、ポリシーが文書化されている。',
          ],
        },
        {
          heading: '企業レベルの次の一手',
          paragraphs: [
            'レポートが安定してきたら、DMARC を段階的に厳格化します。最も強い最終状態は reject ですが、適切なタイミングはニュースレター、トランザクションメール、CRM、サポートツールが同じドメインから送信しているかによって変わります。',
          ],
        },
      ],
      references: [
        { label: 'Google Workspace メール認証ヘルプ', url: 'https://support.google.com/a/topic/2759254' },
        { label: 'DMARC 仕様の概要', url: 'https://dmarc.org/' },
      ],
    },
    'zh-CN': {
      title: '面向 Google Workspace 安全域名的 SPF、DKIM 与 DMARC 配置',
      description:
        '面向需要更强信任度和更低仿冒风险的公司域名，提供实用的 Google Workspace 邮件认证指南。',
      tags: ['邮件安全', 'Google Workspace', 'DMARC', 'DNS'],
      summary: [
        'SPF 授权哪些邮件服务器可以代表该域名发送邮件。',
        'DKIM 对消息进行签名，使接收方可以验证内容在传输过程中未被篡改。',
        'DMARC 告诉接收方在 SPF 或 DKIM 对齐失败时如何处理，以及将报告发送到哪里。',
      ],
      sections: [
        {
          heading: '为什么这对年轻公司域名很重要',
          paragraphs: [
            '公司网站可以看起来很专业，但邮件域名仍可能很容易被冒充。SPF、DKIM 和 DMARC 通过向接收方提供谁被允许发送邮件、失败应如何处理的证据，弥补这一缺口。',
            '对于一家强调安全的公司，这不是可有可无的装饰。尤其当网站公开 contact、support、security、privacy、legal 和 sales 等邮箱时，它就是公共信任面的组成部分。',
          ],
        },
        {
          heading: '建议的上线顺序',
          bullets: [
            '先创建运营邮箱，包括 dmarc@example.com 这样的 DMARC 报告邮箱。',
            '为实际发送方发布 SPF，例如 Google Workspace。',
            '启用 Google Workspace DKIM 签名，并发布 DKIM TXT 记录。',
            'DMARC 从 p=none 和报告启用开始，先观察失败情况再进入强制策略。',
            '只有在合法发送方完成对齐后，再切换到 quarantine 或 reject。',
          ],
        },
        {
          heading: '需要验证什么',
          paragraphs: [
            '验证应同时来自 DNS 和真实消息头。DNS 确认记录存在。消息头确认通过生产发送路径发出的邮件确实通过 SPF、DKIM 和 DMARC 对齐。',
          ],
          bullets: [
            'SPF 只包含真正代表该域名发送邮件的服务。',
            'DKIM 使用当前 selector，并在收到的消息中显示 pass。',
            'DMARC 报告会投递到受监控的邮箱。',
            '策略需要被记录下来，避免未来新增邮件工具破坏可送达性。',
          ],
        },
        {
          heading: '公司级下一步',
          paragraphs: [
            '当报告看起来干净后，应逐步收紧 DMARC。最强的最终状态是 reject，但正确节奏取决于新闻邮件、事务邮件、CRM 工具或支持工具是否也从该域名发送。',
          ],
        },
      ],
      references: [
        { label: 'Google Workspace 邮件认证帮助', url: 'https://support.google.com/a/topic/2759254' },
        { label: 'DMARC 规范概览', url: 'https://dmarc.org/' },
      ],
    },
    es: {
      title: 'Configuración de SPF, DKIM y DMARC para un dominio de seguridad en Google Workspace',
      description:
        'Guía práctica de autenticación de correo en Google Workspace para dominios de empresa que necesitan más confianza y menor riesgo de suplantación.',
      tags: ['Seguridad de correo', 'Google Workspace', 'DMARC', 'DNS'],
      summary: [
        'SPF autoriza los servidores de correo que pueden enviar en nombre del dominio.',
        'DKIM firma los mensajes para que los receptores verifiquen que el contenido no cambió en tránsito.',
        'DMARC indica qué hacer cuando falla la alineación SPF o DKIM y dónde enviar los informes.',
      ],
      sections: [
        {
          heading: 'Por qué importa para un dominio joven de empresa',
          paragraphs: [
            'Un sitio corporativo puede parecer profesional mientras su dominio de correo sigue siendo fácil de suplantar. SPF, DKIM y DMARC cierran esa brecha dando a los receptores evidencia sobre quién está autorizado a enviar y cómo deben manejarse los fallos.',
            'Para una empresa enfocada en seguridad, no es un detalle opcional. Es parte de la superficie pública de confianza, especialmente cuando el sitio publica buzones de contacto, soporte, seguridad, privacidad, legal y ventas.',
          ],
        },
        {
          heading: 'Orden recomendado de despliegue',
          bullets: [
            'Cree primero los buzones operativos, incluido un buzón de informes DMARC como dmarc@example.com.',
            'Publique SPF para el remitente activo, por ejemplo Google Workspace.',
            'Active la firma DKIM en Google Workspace y publique el registro TXT de DKIM.',
            'Empiece DMARC con p=none e informes habilitados para observar fallos antes de aplicar una política estricta.',
            'Pase a quarantine o reject solo después de alinear los remitentes legítimos.',
          ],
        },
        {
          heading: 'Qué verificar',
          paragraphs: [
            'La verificación debe hacerse tanto en DNS como en cabeceras reales de mensajes. DNS confirma que los registros existen. Las cabeceras confirman que el correo enviado por la ruta de producción está pasando la alineación SPF, DKIM y DMARC.',
          ],
          bullets: [
            'SPF incluye solo los servicios que realmente envían correo para el dominio.',
            'DKIM usa un selector actual y muestra pass en los mensajes recibidos.',
            'Los informes DMARC llegan a un buzón monitorizado.',
            'La política está documentada para que futuras herramientas de correo no rompan la entregabilidad.',
          ],
        },
        {
          heading: 'Siguiente paso de nivel empresa',
          paragraphs: [
            'Cuando los informes estén limpios, endurezca DMARC de forma gradual. El estado final más fuerte es reject, pero el calendario correcto depende de si newsletters, correo transaccional, CRM o herramientas de soporte también envían desde el dominio.',
          ],
        },
      ],
      references: [
        { label: 'Ayuda de autenticación de correo de Google Workspace', url: 'https://support.google.com/a/topic/2759254' },
        { label: 'Resumen de la especificación DMARC', url: 'https://dmarc.org/' },
      ],
    },
    fr: {
      title: 'Configuration SPF, DKIM et DMARC pour un domaine de sécurité Google Workspace',
      description:
        'Guide pratique d’authentification e-mail Google Workspace pour les domaines d’entreprise qui veulent renforcer la confiance et réduire le risque d’usurpation.',
      tags: ['Sécurité e-mail', 'Google Workspace', 'DMARC', 'DNS'],
      summary: [
        'SPF autorise les serveurs de messagerie pouvant envoyer pour le domaine.',
        'DKIM signe les messages afin que les destinataires vérifient que le contenu n’a pas été modifié en transit.',
        'DMARC indique quoi faire lorsque l’alignement SPF ou DKIM échoue et où envoyer les rapports.',
      ],
      sections: [
        {
          heading: 'Pourquoi c’est important pour un jeune domaine d’entreprise',
          paragraphs: [
            'Un site d’entreprise peut sembler professionnel alors que son domaine e-mail reste facile à usurper. SPF, DKIM et DMARC ferment cet écart en donnant aux destinataires des preuves sur les expéditeurs autorisés et le traitement attendu des échecs.',
            'Pour une entreprise orientée sécurité, ce n’est pas une finition optionnelle. C’est une partie de la surface publique de confiance, surtout lorsque le site publie des boîtes contact, support, security, privacy, legal et sales.',
          ],
        },
        {
          heading: 'Ordre de déploiement recommandé',
          bullets: [
            'Créez d’abord les boîtes opérationnelles, y compris une boîte de rapports DMARC comme dmarc@example.com.',
            'Publiez SPF pour l’expéditeur actif, par exemple Google Workspace.',
            'Activez la signature DKIM Google Workspace et publiez l’enregistrement TXT DKIM.',
            'Démarrez DMARC avec p=none et les rapports activés afin d’observer les échecs avant application stricte.',
            'Passez à quarantine ou reject seulement après alignement des expéditeurs légitimes.',
          ],
        },
        {
          heading: 'Ce qu’il faut vérifier',
          paragraphs: [
            'La vérification doit se faire à la fois dans le DNS et dans les en-têtes de vrais messages. Le DNS confirme l’existence des enregistrements. Les en-têtes confirment que le courrier envoyé par le chemin de production passe réellement l’alignement SPF, DKIM et DMARC.',
          ],
          bullets: [
            'SPF ne contient que les services qui envoient réellement pour le domaine.',
            'DKIM utilise un selector actuel et affiche pass dans les messages reçus.',
            'Les rapports DMARC arrivent dans une boîte surveillée.',
            'La politique est documentée pour éviter qu’un futur outil e-mail ne casse la délivrabilité.',
          ],
        },
        {
          heading: 'Étape suivante de niveau entreprise',
          paragraphs: [
            'Lorsque les rapports sont propres, durcissez DMARC progressivement. L’état final le plus fort est reject, mais le bon calendrier dépend des newsletters, e-mails transactionnels, outils CRM ou outils de support qui peuvent aussi envoyer depuis le domaine.',
          ],
        },
      ],
      references: [
        { label: 'Aide Google Workspace sur l’authentification e-mail', url: 'https://support.google.com/a/topic/2759254' },
        { label: 'Vue d’ensemble de la spécification DMARC', url: 'https://dmarc.org/' },
      ],
    },
    ko: {
      title: 'Google Workspace 보안 도메인을 위한 SPF, DKIM, DMARC 설정',
      description:
        '더 높은 신뢰와 낮은 스푸핑 위험이 필요한 회사 도메인을 위한 Google Workspace 이메일 인증 실무 가이드입니다.',
      tags: ['이메일 보안', 'Google Workspace', 'DMARC', 'DNS'],
      summary: [
        'SPF는 해당 도메인으로 메일을 보낼 수 있는 메일 서버를 승인합니다.',
        'DKIM은 메시지에 서명하여 수신자가 전송 중 콘텐츠가 변경되지 않았는지 확인할 수 있게 합니다.',
        'DMARC는 SPF 또는 DKIM 정렬이 실패했을 때 수신자가 무엇을 해야 하는지와 보고서를 어디로 보내야 하는지 알려줍니다.',
      ],
      sections: [
        {
          heading: '초기 회사 도메인에서 중요한 이유',
          paragraphs: [
            '회사 웹사이트가 전문적으로 보여도 이메일 도메인은 여전히 쉽게 사칭될 수 있습니다. SPF, DKIM, DMARC는 누가 메일을 보낼 수 있는지와 실패를 어떻게 처리해야 하는지에 대한 증거를 수신자에게 제공해 이 간극을 줄입니다.',
            '보안을 강조하는 회사라면 이것은 선택적인 마감 작업이 아닙니다. 사이트가 contact, support, security, privacy, legal, sales 같은 메일함을 공개한다면 이는 공개 신뢰 표면의 일부입니다.',
          ],
        },
        {
          heading: '권장 적용 순서',
          bullets: [
            '먼저 운영 메일함을 생성합니다. dmarc@example.com 같은 DMARC 보고 메일함도 포함합니다.',
            'Google Workspace처럼 실제 발신에 쓰이는 서비스에 대해 SPF를 게시합니다.',
            'Google Workspace DKIM 서명을 활성화하고 DKIM TXT 레코드를 게시합니다.',
            'DMARC는 p=none과 보고 활성화로 시작하여 강제 정책 전에 실패를 관찰합니다.',
            '정상 발신자가 정렬된 뒤에만 quarantine 또는 reject로 이동합니다.',
          ],
        },
        {
          heading: '확인해야 할 항목',
          paragraphs: [
            '검증은 DNS와 실제 메시지 헤더 양쪽에서 수행해야 합니다. DNS는 레코드 존재를 확인합니다. 메시지 헤더는 운영 발신 경로에서 보낸 메일이 실제로 SPF, DKIM, DMARC 정렬을 통과하는지 보여줍니다.',
          ],
          bullets: [
            'SPF에는 도메인을 대신해 실제로 메일을 보내는 서비스만 포함되어야 합니다.',
            'DKIM은 최신 selector를 사용하고 수신 메시지에서 pass를 보여야 합니다.',
            'DMARC 보고서는 모니터링되는 메일함으로 전달되어야 합니다.',
            '향후 메일 도구가 전달성을 깨뜨리지 않도록 정책을 문서화해야 합니다.',
          ],
        },
        {
          heading: '회사급 다음 단계',
          paragraphs: [
            '보고서가 안정적으로 깨끗해지면 DMARC를 단계적으로 강화합니다. 가장 강한 최종 상태는 reject이지만, 적절한 일정은 뉴스레터, 트랜잭션 메일, CRM 도구 또는 지원 도구가 같은 도메인에서 발신하는지에 따라 달라집니다.',
          ],
        },
      ],
      references: [
        { label: 'Google Workspace 이메일 인증 도움말', url: 'https://support.google.com/a/topic/2759254' },
        { label: 'DMARC 사양 개요', url: 'https://dmarc.org/' },
      ],
    },
  },
  'security-headers-cloudflare-pages-react': {
    tr: {
      title: 'Cloudflare Pages ve React Siteleri için Güvenlik Başlıkları',
      description:
        'Statik React dağıtımlarında yaygın tarayıcı tarafı riskleri azaltmak için güvenlik başlıkları, canonical metadata ve yanıt doğrulama nasıl kullanılmalı.',
      tags: ['Cloudflare', 'React', 'Güvenlik Başlıkları', 'Frontend Güvenliği'],
      summary: [
        'Güvenlik başlıkları yalnızca kod yorumu değil, dağıtım konfigürasyonu olarak ele alınmalıdır.',
        'Cloudflare Pages, yayın öncesi test edilebilen statik header kurallarını destekler.',
        'Wildcard CORS, özel bir cross-origin kullanım ihtiyacı yoksa genel statik yanıtlar için çoğu zaman fazla geniştir.',
      ],
      sections: [
        {
          heading: 'Temel başlık seti',
          paragraphs: [
            'Güçlendirilmiş bir React sitesi, tarayıcı davranışını açıkça tanımlamalıdır. Kesin politika uygulamaya bağlıdır; ancak temel set genellikle content type koruması, clickjacking koruması, referrer kontrolü, permissions policy ve dikkatle seçilmiş bir content security policy içerir.',
            'Statik hostlarda bunu unutmak kolaydır; çünkü uygulama başlıklar olmadan da render edilir. Güvenlik çalışması HTTP yanıt katmanında doğrulanmalıdır.',
          ],
        },
        {
          heading: 'Cloudflare Pages için dikkat edilmesi gerekenler',
          bullets: [
            'Header kurallarını mümkün olduğunda repoya yakın tutun; böylece değişiklikler kodla birlikte incelenir.',
            'Dokümante edilmemiş dashboard değişikliklerinden kaçının; gelecekte denetlenmeleri daha zordur.',
            'Hem www hem apex alan adları servis ediliyorsa ikisini de doğrulayın.',
            'Redirect zincirlerinin final yanıttan önemli başlıkları düşürmediğini kontrol edin.',
          ],
        },
        {
          heading: 'CORS bilinçli olmalı',
          paragraphs: [
            'Access-Control-Allow-Origin: * çoğu zaman sebep olmadan sitelere kopyalanır. Normal web sayfalarında geniş CORS genellikle ziyaretçiye fayda sağlamaz ve aynı politika altında ileride endpoint eklenirse istemeden veri açığa çıkmasını kolaylaştırabilir.',
          ],
        },
        {
          heading: 'Neler otomatikleştirilmeli',
          bullets: [
            'Statik header konfigürasyonunda wildcard CORS kullanımını reddeden bir test.',
            'Sitemap ve robots dosyalarını yayınlayan bir build adımı.',
            'Kritik sayfaların render edildiğini ve metadata bulunduğunu doğrulayan preview kontrolü.',
            'Dağıtım sonrası production domainleri için canlı yanıt kontrolü.',
          ],
        },
      ],
      references: [
        { label: 'Cloudflare Pages header dokümantasyonu', url: 'https://developers.cloudflare.com/pages/configuration/headers/' },
        { label: 'MDN HTTP güvenlik başlıkları özeti', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers' },
      ],
    },
    de: {
      title: 'Security Headers für Cloudflare Pages und React-Websites',
      description:
        'Wie Security Headers, kanonische Metadaten und Response-Verifikation typische browserseitige Risiken auf statischen React-Deployments reduzieren.',
      tags: ['Cloudflare', 'React', 'Security Headers', 'Frontend-Sicherheit'],
      summary: [
        'Security Headers sollten als Deployment-Konfiguration behandelt werden, nicht als bloße Code-Kommentare.',
        'Cloudflare Pages unterstützt statische Header-Regeln, die vor Release getestet werden können.',
        'Wildcard-CORS ist für öffentliche statische Antworten meist zu breit, wenn es keinen konkreten Cross-Origin-Anwendungsfall gibt.',
      ],
      sections: [
        {
          heading: 'Das Basis-Header-Set',
          paragraphs: [
            'Eine gehärtete React-Site sollte Browserverhalten explizit setzen. Die genaue Policy hängt von der Anwendung ab, enthält aber meist Content-Type-Schutz, Clickjacking-Schutz, Referrer-Kontrolle, Permissions Policy und eine bewusst gewählte Content Security Policy.',
            'Bei statischen Hosts wird das leicht vergessen, weil die App auch ohne Header rendert. Die Sicherheitsarbeit muss auf der HTTP-Response-Ebene verifiziert werden.',
          ],
        },
        {
          heading: 'Cloudflare-Pages-Besonderheiten',
          bullets: [
            'Halten Sie Header-Regeln möglichst nah am Repository, damit Änderungen mit Code reviewed werden.',
            'Vermeiden Sie reine Dashboard-Änderungen ohne Dokumentation, weil sie später schwerer zu auditieren sind.',
            'Prüfen Sie www und Apex-Domain, wenn beide ausgeliefert werden.',
            'Kontrollieren Sie, dass Redirects wichtige Header aus der finalen Response nicht entfernen.',
          ],
        },
        {
          heading: 'CORS braucht Absicht',
          paragraphs: [
            'Access-Control-Allow-Origin: * wird oft ohne Grund in Websites kopiert. Für normale Webseiten hilft breites CORS Besuchern meist nicht und kann unbeabsichtigte Datenexposition erleichtern, wenn später Endpunkte unter derselben Policy ergänzt werden.',
          ],
        },
        {
          heading: 'Was automatisiert werden sollte',
          bullets: [
            'Ein Test, der Wildcard-CORS in der statischen Header-Konfiguration ablehnt.',
            'Ein Build-Schritt, der Sitemap- und Robots-Dateien veröffentlicht.',
            'Ein Preview-Check, der Rendering kritischer Seiten und vorhandene Metadaten bestätigt.',
            'Ein Live-Response-Check nach dem Deployment für Produktionsdomains.',
          ],
        },
      ],
      references: [
        { label: 'Cloudflare Pages Dokumentation zu Headers', url: 'https://developers.cloudflare.com/pages/configuration/headers/' },
        { label: 'MDN Überblick zu HTTP-Sicherheitsheadern', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers' },
      ],
    },
    ja: {
      title: 'Cloudflare Pages と React サイトのセキュリティヘッダー',
      description:
        '静的 React デプロイで一般的なブラウザ側リスクを下げるために、セキュリティヘッダー、canonical メタデータ、レスポンス検証をどう使うか。',
      tags: ['Cloudflare', 'React', 'セキュリティヘッダー', 'フロントエンドセキュリティ'],
      summary: [
        'セキュリティヘッダーはコードコメントではなく、デプロイ設定として扱うべきです。',
        'Cloudflare Pages は、リリース前にテストできる静的ヘッダールールをサポートします。',
        '明確な cross-origin 用途がない限り、公開静的レスポンスに対する wildcard CORS は広すぎることが多いです。',
      ],
      sections: [
        {
          heading: 'ベースラインとなるヘッダーセット',
          paragraphs: [
            '強化された React サイトでは、ブラウザの挙動を明示的に設定すべきです。正確なポリシーはアプリに依存しますが、通常は content type 保護、clickjacking 対策、referrer 制御、permissions policy、慎重に設計した content security policy を含みます。',
            '静的ホストでは、ヘッダーがなくてもアプリが表示されるため、この作業が忘れられがちです。セキュリティは HTTP レスポンス層で検証する必要があります。',
          ],
        },
        {
          heading: 'Cloudflare Pages での考慮点',
          bullets: [
            '可能な限りヘッダールールをリポジトリ近くに置き、コードと一緒にレビューできるようにします。',
            'ドキュメント化されていない dashboard のみの変更は、将来の監査が難しくなるため避けます。',
            'www と apex の両方を配信している場合は、両方を確認します。',
            'redirect によって最終レスポンスから重要なヘッダーが落ちていないか確認します。',
          ],
        },
        {
          heading: 'CORS は意図を持って設定する',
          paragraphs: [
            'Access-Control-Allow-Origin: * は理由なくコピーされることがあります。通常の Web ページでは広い CORS は訪問者にほとんど利益を与えず、将来同じポリシー下に endpoint が追加された場合に偶発的なデータ露出を容易にする可能性があります。',
          ],
        },
        {
          heading: '自動化すべきこと',
          bullets: [
            '静的ヘッダー設定で wildcard CORS を拒否するテスト。',
            'sitemap と robots ファイルを公開する build ステップ。',
            '重要ページが render され、metadata が存在することを確認する preview チェック。',
            'デプロイ後に production ドメインで live response を確認するチェック。',
          ],
        },
      ],
      references: [
        { label: 'Cloudflare Pages ヘッダー設定ドキュメント', url: 'https://developers.cloudflare.com/pages/configuration/headers/' },
        { label: 'MDN HTTP セキュリティヘッダー概要', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers' },
      ],
    },
    'zh-CN': {
      title: 'Cloudflare Pages 与 React 站点的安全响应头',
      description:
        '如何通过安全响应头、规范化元数据和响应验证，降低静态 React 部署中的常见浏览器端风险。',
      tags: ['Cloudflare', 'React', '安全响应头', '前端安全'],
      summary: [
        '安全响应头应被视为部署配置，而不只是代码注释。',
        'Cloudflare Pages 支持可在发布前测试的静态 header 规则。',
        '除非有明确的跨源使用场景，通配 CORS 对公共静态响应通常过于宽泛。',
      ],
      sections: [
        {
          heading: '基线响应头集合',
          paragraphs: [
            '加固后的 React 站点应明确设置浏览器行为。具体策略取决于应用，但基线通常包括内容类型保护、点击劫持防护、referrer 控制、permissions policy，以及谨慎选择的 content security policy。',
            '静态托管很容易让人忽略这一点，因为即使没有这些响应头，应用仍然会渲染。安全工作必须在 HTTP 响应层进行验证。',
          ],
        },
        {
          heading: 'Cloudflare Pages 注意事项',
          bullets: [
            '尽可能将 header 规则放在仓库附近，使变更可以随代码一起审查。',
            '避免只有 dashboard 中存在、没有文档的更改，因为未来维护者更难审计。',
            '如果同时服务 www 和 apex 域名，需要验证两者。',
            '检查重定向不会从最终响应中移除重要响应头。',
          ],
        },
        {
          heading: 'CORS 应该有明确意图',
          paragraphs: [
            'Access-Control-Allow-Origin: * 经常被无理由复制到站点中。对于普通网页，宽泛 CORS 通常不会帮助访客；如果未来在同一策略下增加端点，还可能让意外数据暴露更容易发生。',
          ],
        },
        {
          heading: '应该自动化什么',
          bullets: [
            '拒绝静态 header 配置中 wildcard CORS 的测试。',
            '发布 sitemap 和 robots 文件的 build 步骤。',
            '确认关键页面可渲染且 metadata 存在的 preview 检查。',
            '部署后面向生产域名的 live-response 检查。',
          ],
        },
      ],
      references: [
        { label: 'Cloudflare Pages headers 文档', url: 'https://developers.cloudflare.com/pages/configuration/headers/' },
        { label: 'MDN HTTP 安全响应头概览', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers' },
      ],
    },
    es: {
      title: 'Cabeceras de seguridad para Cloudflare Pages y sitios React',
      description:
        'Cómo usar cabeceras de seguridad, metadatos canónicos y verificación de respuestas para reducir riesgos habituales del navegador en despliegues React estáticos.',
      tags: ['Cloudflare', 'React', 'Cabeceras de seguridad', 'Seguridad frontend'],
      summary: [
        'Las cabeceras de seguridad deben tratarse como configuración de despliegue, no como comentarios en el código.',
        'Cloudflare Pages permite reglas de cabeceras estáticas que se pueden probar antes del release.',
        'Wildcard CORS suele ser demasiado amplio para respuestas estáticas públicas salvo que exista un caso cross-origin específico.',
      ],
      sections: [
        {
          heading: 'El conjunto base de cabeceras',
          paragraphs: [
            'Un sitio React endurecido debe definir explícitamente el comportamiento del navegador. La política exacta depende de la aplicación, pero la base suele incluir protección de tipo de contenido, protección contra clickjacking, control de referrer, permissions policy y una content security policy cuidadosamente elegida.',
            'En hosting estático es fácil olvidarlo porque la aplicación sigue renderizando sin cabeceras. El trabajo de seguridad debe verificarse en la capa de respuesta HTTP.',
          ],
        },
        {
          heading: 'Consideraciones para Cloudflare Pages',
          bullets: [
            'Mantenga las reglas de cabeceras cerca del repositorio cuando sea posible para revisarlas junto con el código.',
            'Evite cambios solo en el dashboard si no están documentados, porque son más difíciles de auditar después.',
            'Verifique los dominios www y apex si ambos se sirven.',
            'Compruebe que las redirecciones no eliminan cabeceras importantes de la respuesta final.',
          ],
        },
        {
          heading: 'CORS debe ser intencional',
          paragraphs: [
            'Access-Control-Allow-Origin: * se copia a menudo sin una razón. Para páginas web normales, CORS amplio normalmente no ayuda al visitante y puede facilitar exposiciones accidentales si se añaden endpoints futuros bajo la misma política.',
          ],
        },
        {
          heading: 'Qué automatizar',
          bullets: [
            'Una prueba que rechace wildcard CORS en la configuración de cabeceras estáticas.',
            'Un paso de build que publique sitemap y robots.',
            'Una verificación de preview que confirme renderizado y metadata en páginas críticas.',
            'Una comprobación de respuesta viva tras el despliegue en dominios de producción.',
          ],
        },
      ],
      references: [
        { label: 'Documentación de cabeceras en Cloudflare Pages', url: 'https://developers.cloudflare.com/pages/configuration/headers/' },
        { label: 'Resumen de cabeceras HTTP de seguridad en MDN', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers' },
      ],
    },
    fr: {
      title: 'En-têtes de sécurité pour Cloudflare Pages et sites React',
      description:
        'Comment utiliser les en-têtes de sécurité, les métadonnées canoniques et la vérification des réponses pour réduire les risques côté navigateur sur des déploiements React statiques.',
      tags: ['Cloudflare', 'React', 'En-têtes de sécurité', 'Sécurité frontend'],
      summary: [
        'Les en-têtes de sécurité doivent être traités comme de la configuration de déploiement, pas comme de simples commentaires de code.',
        'Cloudflare Pages prend en charge des règles d’en-têtes statiques testables avant publication.',
        'Wildcard CORS est généralement trop large pour des réponses statiques publiques sans cas cross-origin précis.',
      ],
      sections: [
        {
          heading: 'Le jeu d’en-têtes de base',
          paragraphs: [
            'Un site React durci doit définir explicitement le comportement du navigateur. La politique exacte dépend de l’application, mais la base inclut souvent la protection du type de contenu, la protection contre le clickjacking, le contrôle referrer, permissions policy et une content security policy soigneusement choisie.',
            'Les hébergeurs statiques font oublier ce point, car l’application rend quand même sans en-têtes. Le travail de sécurité doit être vérifié au niveau de la réponse HTTP.',
          ],
        },
        {
          heading: 'Points d’attention Cloudflare Pages',
          bullets: [
            'Gardez les règles d’en-têtes près du dépôt lorsque possible afin que les changements soient revus avec le code.',
            'Évitez les changements uniquement dans le dashboard sans documentation, car ils sont plus difficiles à auditer ensuite.',
            'Vérifiez les domaines www et apex si les deux sont servis.',
            'Contrôlez que les redirections ne retirent pas les en-têtes importants de la réponse finale.',
          ],
        },
        {
          heading: 'CORS doit être intentionnel',
          paragraphs: [
            'Access-Control-Allow-Origin: * est souvent copié sans raison. Pour des pages web normales, un CORS large n’aide généralement pas les visiteurs et peut faciliter une exposition accidentelle si de futurs endpoints sont ajoutés sous la même politique.',
          ],
        },
        {
          heading: 'Ce qu’il faut automatiser',
          bullets: [
            'Un test qui refuse wildcard CORS dans la configuration d’en-têtes statiques.',
            'Une étape de build qui publie sitemap et robots.',
            'Un contrôle preview confirmant que les pages critiques rendent et que les métadonnées existent.',
            'Un contrôle de réponse live après déploiement pour les domaines de production.',
          ],
        },
      ],
      references: [
        { label: 'Documentation Cloudflare Pages sur les en-têtes', url: 'https://developers.cloudflare.com/pages/configuration/headers/' },
        { label: 'Vue d’ensemble MDN des en-têtes HTTP de sécurité', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers' },
      ],
    },
    ko: {
      title: 'Cloudflare Pages와 React 사이트를 위한 보안 헤더',
      description:
        '정적 React 배포에서 일반적인 브라우저 측 위험을 줄이기 위해 보안 헤더, canonical metadata, 응답 검증을 사용하는 방법입니다.',
      tags: ['Cloudflare', 'React', '보안 헤더', '프론트엔드 보안'],
      summary: [
        '보안 헤더는 코드 주석이 아니라 배포 설정으로 다뤄야 합니다.',
        'Cloudflare Pages는 릴리스 전에 테스트할 수 있는 정적 헤더 규칙을 지원합니다.',
        '명확한 cross-origin 사용 사례가 없다면 wildcard CORS는 공개 정적 응답에 대체로 지나치게 넓습니다.',
      ],
      sections: [
        {
          heading: '기본 헤더 세트',
          paragraphs: [
            '하드닝된 React 사이트는 브라우저 동작을 명시적으로 설정해야 합니다. 정확한 정책은 앱에 따라 다르지만 보통 content type 보호, clickjacking 보호, referrer 제어, permissions policy, 신중하게 선택한 content security policy가 포함됩니다.',
            '정적 호스팅에서는 헤더가 없어도 앱이 렌더링되기 때문에 이를 놓치기 쉽습니다. 보안 작업은 HTTP 응답 계층에서 검증해야 합니다.',
          ],
        },
        {
          heading: 'Cloudflare Pages 고려사항',
          bullets: [
            '가능하면 헤더 규칙을 저장소 가까이에 두어 코드와 함께 리뷰되도록 합니다.',
            '문서화되지 않은 dashboard 전용 변경은 향후 유지보수자가 감사하기 어렵기 때문에 피합니다.',
            'www와 apex 도메인을 모두 제공한다면 둘 다 검증합니다.',
            'redirect가 최종 응답에서 중요한 헤더를 제거하지 않는지 확인합니다.',
          ],
        },
        {
          heading: 'CORS는 의도적으로 설정해야 합니다',
          paragraphs: [
            'Access-Control-Allow-Origin: *는 이유 없이 사이트에 복사되는 경우가 많습니다. 일반 웹 페이지에서 넓은 CORS는 보통 방문자에게 도움이 되지 않으며, 같은 정책 아래 미래 endpoint가 추가될 경우 우발적인 데이터 노출을 쉽게 만들 수 있습니다.',
          ],
        },
        {
          heading: '자동화할 항목',
          bullets: [
            '정적 헤더 설정에서 wildcard CORS를 거부하는 테스트.',
            'sitemap과 robots 파일을 게시하는 build 단계.',
            '중요 페이지가 렌더링되고 metadata가 존재하는지 확인하는 preview 검사.',
            '배포 후 production 도메인에 대한 live-response 검사.',
          ],
        },
      ],
      references: [
        { label: 'Cloudflare Pages 헤더 문서', url: 'https://developers.cloudflare.com/pages/configuration/headers/' },
        { label: 'MDN HTTP 보안 헤더 개요', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers' },
      ],
    },
  },
  'vulnerability-disclosure-security-txt-website': {
    tr: {
      title: 'Şirket Web Siteleri için Vulnerability Disclosure ve security.txt',
      description:
        'Güvenilir bir güvenlik iletişim yolu isteyen küçük şirketler için pratik security.txt ve zafiyet bildirim iş akışı.',
      tags: ['Zafiyet Bildirimi', 'security.txt', 'Güven'],
      summary: [
        'security.txt, araştırmacıların güvenlik iletişimini bulması için öngörülebilir bir yer sağlar.',
        'Bu iletişimin arkasındaki posta kutusu izlenmeli ve içeride doğru kişilere yönlendirilmelidir.',
        'Kamuya açık bir politika, olay yaşanmadan önce belirsizliği azaltır.',
      ],
      sections: [
        {
          heading: 'security.txt neyi çözer',
          paragraphs: [
            'Araştırmacılar ve müşteriler güvenlik sorunlarının iletişim formuna mı, destek posta kutusuna mı yoksa sosyal medya mesajına mı gönderileceğini tahmin etmek zorunda kalmamalıdır. security.txt dosyası, zafiyet bildirimleri için standart bir yol oluşturur.',
            'Dosya küçüktür; ancak gerçek bir iletişim adresi, canonical URL, policy URL ve tercih edilen dil içerdiğinde operasyonel olgunluk sinyali verir.',
          ],
        },
        {
          heading: 'Minimum pratik kurulum',
          bullets: [
            'Canonical domain üzerinde /.well-known/security.txt yayınlayın.',
            'security@example.com gibi izlenen bir güvenlik posta kutusu kullanın.',
            'Bir zafiyet bildirim politikasına veya güvenlik sayfasına bağlantı verin.',
            'Support ve contact ekiplerinin güvenlik raporlarını nereye ileteceğini bildiğinden emin olun.',
          ],
        },
        {
          heading: 'Yanıt iş akışı',
          paragraphs: [
            'Web sitesi yalnızca giriş noktasıdır. Şirket seviyesinde kurulum ayrıca bir yanıt sahibi, severity triage, kanıt toplama, fix takibi ve geçerli raporları kabul etmek için kısa bir iletişim şablonu gerektirir.',
          ],
        },
        {
          heading: 'Yaygın hatalar',
          bullets: [
            'Kimsenin izlemediği bir güvenlik posta kutusu yayınlamak.',
            'Şirket aliası yerine kişisel e-posta adresi kullanmak.',
            'Alan adı geçişinden sonra canonical URL’yi güncellemeyi unutmak.',
            'Disclosure yönetimini operasyonel bir süreç yerine yalnızca hukuki sayfa olarak görmek.',
          ],
        },
      ],
      references: [{ label: 'RFC 9116 security.txt', url: 'https://www.rfc-editor.org/rfc/rfc9116' }],
    },
    de: {
      title: 'Vulnerability Disclosure und security.txt für Unternehmenswebsites',
      description:
        'Ein praktischer security.txt- und Vulnerability-Disclosure-Workflow für kleine Unternehmen, die einen glaubwürdigen Security-Kontaktweg brauchen.',
      tags: ['Vulnerability Disclosure', 'security.txt', 'Vertrauen'],
      summary: [
        'security.txt gibt Forschern einen vorhersehbaren Ort für den Security-Kontakt.',
        'Die Mailbox hinter diesem Kontakt muss überwacht und intern richtig geroutet werden.',
        'Eine öffentliche Policy reduziert Unklarheiten, bevor ein Incident passiert.',
      ],
      sections: [
        {
          heading: 'Was security.txt löst',
          paragraphs: [
            'Forscher und Kunden sollten nicht raten müssen, ob Security-Themen in ein Kontaktformular, ein Support-Postfach oder eine Social-Media-Nachricht gehören. Eine security.txt-Datei schafft einen Standardpfad für Vulnerability Reports.',
            'Die Datei ist klein, signalisiert aber operative Reife, wenn sie einen echten Kontakt, eine kanonische URL, eine Policy-URL und bevorzugte Sprache enthält.',
          ],
        },
        {
          heading: 'Praktisches Minimum',
          bullets: [
            'Veröffentlichen Sie /.well-known/security.txt auf der kanonischen Domain.',
            'Nutzen Sie eine überwachte Security-Mailbox wie security@example.com.',
            'Verlinken Sie eine Vulnerability-Disclosure-Policy oder Security-Seite.',
            'Stellen Sie sicher, dass Support- und Contact-Teams wissen, wohin Security Reports weitergeleitet werden.',
          ],
        },
        {
          heading: 'Response-Workflow',
          paragraphs: [
            'Die Website ist nur der Einstiegspunkt. Ein Setup auf Unternehmensniveau braucht zusätzlich einen Response Owner, Severity Triage, Evidence Capture, Fix Tracking und ein kurzes Kommunikationstemplate zur Bestätigung valider Reports.',
          ],
        },
        {
          heading: 'Häufige Fehler',
          bullets: [
            'Eine Security-Mailbox veröffentlichen, die niemand überwacht.',
            'Eine persönliche E-Mail-Adresse statt eines Unternehmensalias verwenden.',
            'Nach einer Domain-Migration die kanonische URL nicht aktualisieren.',
            'Disclosure Handling als reine Rechtsseite statt als operativen Workflow behandeln.',
          ],
        },
      ],
      references: [{ label: 'RFC 9116 security.txt', url: 'https://www.rfc-editor.org/rfc/rfc9116' }],
    },
    ja: {
      title: '企業サイト向け Vulnerability Disclosure と security.txt',
      description:
        '信頼できるセキュリティ連絡経路を持ちたい小規模企業のための、実践的な security.txt と脆弱性報告ワークフロー。',
      tags: ['脆弱性開示', 'security.txt', '信頼'],
      summary: [
        'security.txt は、研究者がセキュリティ連絡先を探すための予測可能な場所を提供します。',
        'その連絡先の背後にあるメールボックスは監視され、社内で適切にルーティングされる必要があります。',
        '公開ポリシーは、インシデントが起きる前に混乱を減らします。',
      ],
      sections: [
        {
          heading: 'security.txt が解決すること',
          paragraphs: [
            '研究者や顧客が、セキュリティ問題を問い合わせフォーム、サポート inbox、SNS メッセージのどこに送るべきか推測する必要はありません。security.txt は脆弱性報告の標準的な経路を作ります。',
            'ファイル自体は小さいものですが、実在する連絡先、canonical URL、policy URL、優先言語を含むことで運用成熟度を示します。',
          ],
        },
        {
          heading: '実務上の最小構成',
          bullets: [
            'canonical ドメインで /.well-known/security.txt を公開します。',
            'security@example.com のような監視対象の security メールボックスを使います。',
            '脆弱性開示ポリシーまたは security ページへリンクします。',
            'support と contact の担当者が security report の転送先を理解していることを確認します。',
          ],
        },
        {
          heading: '対応ワークフロー',
          paragraphs: [
            'Web サイトは入口にすぎません。企業レベルの構成には、対応責任者、severity triage、証拠の保存、修正追跡、有効な報告を受領したことを伝える短いテンプレートも必要です。',
          ],
        },
        {
          heading: 'よくある失敗',
          bullets: [
            '誰も監視していない security メールボックスを公開する。',
            '会社 alias ではなく個人メールアドレスを使う。',
            'ドメイン移行後に canonical URL を更新し忘れる。',
            '開示対応を運用ワークフローではなく法務ページだけとして扱う。',
          ],
        },
      ],
      references: [{ label: 'RFC 9116 security.txt', url: 'https://www.rfc-editor.org/rfc/rfc9116' }],
    },
    'zh-CN': {
      title: '公司网站的漏洞披露与 security.txt',
      description:
        '面向希望建立可信安全联系路径的小公司，提供实用的 security.txt 与漏洞披露工作流。',
      tags: ['漏洞披露', 'security.txt', '信任'],
      summary: [
        'security.txt 为研究人员提供一个可预测的位置来查找安全联系信息。',
        '该联系地址背后的邮箱必须被监控，并在内部正确流转。',
        '公开政策可以在事件发生前减少混乱。',
      ],
      sections: [
        {
          heading: 'security.txt 解决什么问题',
          paragraphs: [
            '研究人员和客户不应该猜测安全问题应发送到联系表单、支持邮箱还是社交媒体消息。security.txt 文件为漏洞报告创建标准路径。',
            '文件很小，但如果包含真实联系人、canonical URL、政策 URL 和首选语言，就能传递运营成熟度信号。',
          ],
        },
        {
          heading: '最低实用配置',
          bullets: [
            '在 canonical 域名上发布 /.well-known/security.txt。',
            '使用受监控的安全邮箱，例如 security@example.com。',
            '链接到漏洞披露政策或安全页面。',
            '确保 support 和 contact 团队知道将安全报告转发到哪里。',
          ],
        },
        {
          heading: '响应工作流',
          paragraphs: [
            '网站只是入口。公司级配置还需要响应负责人、严重程度分级、证据记录、修复跟踪，以及用于确认有效报告的简短沟通模板。',
          ],
        },
        {
          heading: '常见错误',
          bullets: [
            '发布一个无人监控的安全邮箱。',
            '使用个人邮箱而不是公司别名。',
            '域名迁移后忘记更新 canonical URL。',
            '把披露处理当成单纯法律页面，而不是运营工作流。',
          ],
        },
      ],
      references: [{ label: 'RFC 9116 security.txt', url: 'https://www.rfc-editor.org/rfc/rfc9116' }],
    },
    es: {
      title: 'Divulgación de vulnerabilidades y security.txt para sitios de empresa',
      description:
        'Un flujo práctico de security.txt y divulgación de vulnerabilidades para empresas pequeñas que quieren una vía de contacto de seguridad creíble.',
      tags: ['Divulgación de vulnerabilidades', 'security.txt', 'Confianza'],
      summary: [
        'security.txt da a los investigadores un lugar predecible para encontrar un contacto de seguridad.',
        'El buzón detrás de ese contacto debe monitorizarse y enrutarse internamente.',
        'Una política pública reduce la confusión antes de que ocurra un incidente.',
      ],
      sections: [
        {
          heading: 'Qué resuelve security.txt',
          paragraphs: [
            'Investigadores y clientes no deberían adivinar si un problema de seguridad pertenece al formulario de contacto, al buzón de soporte o a un mensaje en redes sociales. Un archivo security.txt crea una ruta estándar para reportar vulnerabilidades.',
            'El archivo es pequeño, pero señala madurez operativa cuando incluye contacto real, URL canónica, URL de política e idioma preferido.',
          ],
        },
        {
          heading: 'Configuración mínima práctica',
          bullets: [
            'Publique /.well-known/security.txt en el dominio canónico.',
            'Use un buzón de seguridad monitorizado, como security@example.com.',
            'Enlace a una política de divulgación de vulnerabilidades o página de seguridad.',
            'Asegúrese de que soporte y contacto sepan dónde reenviar reportes de seguridad.',
          ],
        },
        {
          heading: 'Flujo de respuesta',
          paragraphs: [
            'El sitio web es solo el punto de entrada. Una configuración de nivel empresa también necesita responsable de respuesta, triage de severidad, captura de evidencias, seguimiento de correcciones y una plantilla breve para acusar recibo de reportes válidos.',
          ],
        },
        {
          heading: 'Errores comunes',
          bullets: [
            'Publicar un buzón de seguridad que nadie monitoriza.',
            'Usar una dirección personal en lugar de un alias de empresa.',
            'Olvidar actualizar la URL canónica tras una migración de dominio.',
            'Tratar la divulgación como una página legal solamente, no como un flujo operativo.',
          ],
        },
      ],
      references: [{ label: 'RFC 9116 security.txt', url: 'https://www.rfc-editor.org/rfc/rfc9116' }],
    },
    fr: {
      title: 'Divulgation de vulnérabilités et security.txt pour sites d’entreprise',
      description:
        'Un workflow pratique security.txt et divulgation de vulnérabilités pour petites entreprises qui veulent un chemin de contact sécurité crédible.',
      tags: ['Divulgation de vulnérabilités', 'security.txt', 'Confiance'],
      summary: [
        'security.txt donne aux chercheurs un endroit prévisible pour trouver un contact sécurité.',
        'La boîte derrière ce contact doit être surveillée et routée en interne.',
        'Une politique publique réduit la confusion avant qu’un incident ne survienne.',
      ],
      sections: [
        {
          heading: 'Ce que security.txt résout',
          paragraphs: [
            'Chercheurs et clients ne devraient pas deviner si un problème sécurité doit aller dans un formulaire de contact, une boîte support ou un message social. Un fichier security.txt crée un chemin standard pour signaler les vulnérabilités.',
            'Le fichier est petit, mais il signale une maturité opérationnelle lorsqu’il contient un vrai contact, une URL canonique, une URL de politique et une langue préférée.',
          ],
        },
        {
          heading: 'Configuration minimale pratique',
          bullets: [
            'Publiez /.well-known/security.txt sur le domaine canonique.',
            'Utilisez une boîte sécurité surveillée, par exemple security@example.com.',
            'Liez une politique de divulgation de vulnérabilités ou une page sécurité.',
            'Assurez-vous que les équipes support et contact savent où transférer les rapports sécurité.',
          ],
        },
        {
          heading: 'Workflow de réponse',
          paragraphs: [
            'Le site web n’est que le point d’entrée. Une configuration de niveau entreprise nécessite aussi un responsable de réponse, un triage de sévérité, une capture des preuves, un suivi des corrections et un court modèle d’accusé de réception pour les rapports valides.',
          ],
        },
        {
          heading: 'Erreurs fréquentes',
          bullets: [
            'Publier une boîte sécurité que personne ne surveille.',
            'Utiliser une adresse personnelle au lieu d’un alias d’entreprise.',
            'Oublier de mettre à jour l’URL canonique après une migration de domaine.',
            'Traiter la divulgation comme une simple page juridique plutôt que comme un workflow opérationnel.',
          ],
        },
      ],
      references: [{ label: 'RFC 9116 security.txt', url: 'https://www.rfc-editor.org/rfc/rfc9116' }],
    },
    ko: {
      title: '회사 웹사이트를 위한 취약점 공개와 security.txt',
      description:
        '신뢰할 수 있는 보안 연락 경로가 필요한 소규모 회사를 위한 실용적인 security.txt와 취약점 공개 워크플로입니다.',
      tags: ['취약점 공개', 'security.txt', '신뢰'],
      summary: [
        'security.txt는 연구자가 보안 연락처를 찾을 수 있는 예측 가능한 위치를 제공합니다.',
        '그 연락처 뒤의 메일함은 모니터링되고 내부적으로 라우팅되어야 합니다.',
        '공개 정책은 사고가 발생하기 전에 혼란을 줄입니다.',
      ],
      sections: [
        {
          heading: 'security.txt가 해결하는 것',
          paragraphs: [
            '연구자와 고객은 보안 문제가 연락 양식, 지원 inbox, 소셜 메시지 중 어디로 가야 하는지 추측할 필요가 없어야 합니다. security.txt 파일은 취약점 보고를 위한 표준 경로를 만듭니다.',
            '파일은 작지만 실제 연락처, canonical URL, 정책 URL, 선호 언어를 포함하면 운영 성숙도를 보여줍니다.',
          ],
        },
        {
          heading: '최소 실무 구성',
          bullets: [
            'canonical 도메인에 /.well-known/security.txt를 게시합니다.',
            'security@example.com 같은 모니터링되는 보안 메일함을 사용합니다.',
            '취약점 공개 정책 또는 보안 페이지로 연결합니다.',
            'support와 contact 팀이 보안 보고서를 어디로 전달해야 하는지 알고 있는지 확인합니다.',
          ],
        },
        {
          heading: '응답 워크플로',
          paragraphs: [
            '웹사이트는 진입점일 뿐입니다. 회사급 구성에는 응답 담당자, severity triage, 증거 캡처, 수정 추적, 유효한 보고서를 확인하는 짧은 커뮤니케이션 템플릿도 필요합니다.',
          ],
        },
        {
          heading: '흔한 실수',
          bullets: [
            '아무도 모니터링하지 않는 보안 메일함을 게시하는 것.',
            '회사 alias 대신 개인 이메일 주소를 사용하는 것.',
            '도메인 이전 후 canonical URL 업데이트를 잊는 것.',
            '공개 처리를 운영 워크플로가 아니라 법률 페이지로만 다루는 것.',
          ],
        },
      ],
      references: [{ label: 'RFC 9116 security.txt', url: 'https://www.rfc-editor.org/rfc/rfc9116' }],
    },
  },
  'react-contact-form-spam-abuse-hardening': {
    tr: {
      title: 'React İletişim Formlarını Spam ve Kötüye Kullanıma Karşı Güçlendirme',
      description:
        'Bir React iletişim sayfasını validation, bot kontrolleri, yönlendirme disiplini ve daha güvenli e-posta işleme ile koruma yöntemi.',
      tags: ['React', 'İletişim Formları', 'Abuse Kontrolleri', 'E-posta'],
      summary: [
        'İletişim formları herkese açık yazma endpointleridir ve abuse hedefi olarak ele alınmalıdır.',
        'Bot kontrolleri yardımcı olur; ancak validation, rate limit ve hedef yönlendirme hâlâ önemlidir.',
        'Operasyonel posta kutuları satış, destek, gizlilik, hukuk ve güvenlik mesajlarını ayırmayı kolaylaştırır.',
      ],
      sections: [
        {
          heading: 'Risk yüzeyi',
          paragraphs: [
            'Bir iletişim sayfası basit görünür; ancak çoğu zaman saldırganların yazabildiği ilk herkese açık endpoint olur. Spam, phishing payloadları, aşırı büyük gönderimler ve otomatik probelar aynı iş akışını hedefleyebilir.',
            'Frontend kaliteyi artırabilir ve gürültüyü azaltabilir; fakat gerçek mail-sending endpointleri için server-side validation ve rate limiting gereklidir.',
          ],
        },
        {
          heading: 'Frontend kontrolleri',
          bullets: [
            'Gönderimden önce zorunlu alanları ve beklenen uzunlukları doğrulayın.',
            'Provider secretlarını veya private API keyleri client-side kodda açığa çıkarmayın.',
            'Kullanıcıların tekrar tekrar göndermemesi için açık başarı ve hata durumları gösterin.',
            'Sayfa ağırlığını azaltmak için bot korumasını yalnızca gerekli yerde yükleyin.',
          ],
        },
        {
          heading: 'Backend ve e-posta kontrolleri',
          bullets: [
            'Platformunuz izin verdiğinde IP, fingerprint veya session bazlı rate limit uygulayın.',
            'E-posta oluşturmadan önce payloadları normalize edin ve doğrulayın.',
            'Mesajları kişisel adresler yerine role-based posta kutularına yönlendirin.',
            'Gereksiz kişisel veri toplamadan abuse incelemesine yetecek bağlamı loglayın.',
          ],
        },
        {
          heading: 'Profesyonel yönlendirme',
          paragraphs: [
            'Şirket aliasları iş akışını işletmeyi kolaylaştırır. Support soruları support’a, zafiyet bildirimleri security’ye, privacy talepleri privacy’ye, legal talepler legal’a ve satış leadleri sales’e gidebilir. Bu ayrım public site üzerinde daha güvenilir de görünür.',
          ],
        },
      ],
      references: [{ label: 'OWASP otomatik tehditler özeti', url: 'https://owasp.org/www-project-automated-threats-to-web-applications/' }],
    },
    de: {
      title: 'React-Kontaktformulare gegen Spam und Missbrauch härten',
      description:
        'Wie eine React-Kontaktseite mit Validierung, Bot-Kontrollen, Routing-Disziplin und sichererem E-Mail-Handling geschützt wird.',
      tags: ['React', 'Kontaktformulare', 'Abuse Controls', 'E-Mail'],
      summary: [
        'Kontaktformulare sind öffentliche Schreib-Endpunkte und sollten als Abuse-Ziele behandelt werden.',
        'Bot-Kontrollen helfen, aber Validierung, Rate Limits und Ziel-Routing bleiben wichtig.',
        'Operative Mailboxen erleichtern die Trennung von Sales-, Support-, Privacy-, Legal- und Security-Nachrichten.',
      ],
      sections: [
        {
          heading: 'Die Risikofläche',
          paragraphs: [
            'Eine Kontaktseite wirkt einfach, wird aber oft der erste öffentliche Endpunkt, an den Angreifer schreiben können. Spam, Phishing-Payloads, übergroße Einreichungen und automatisierte Probes können denselben Workflow angreifen.',
            'Das Frontend kann Qualität erhöhen und Rauschen reduzieren, aber serverseitige Validierung und Rate Limiting bleiben für jeden echten Mail-Sending-Endpunkt notwendig.',
          ],
        },
        {
          heading: 'Frontend-Kontrollen',
          bullets: [
            'Validieren Sie Pflichtfelder und erwartete Längen vor dem Absenden.',
            'Legen Sie keine Provider-Secrets oder privaten API Keys im clientseitigen Code offen.',
            'Nutzen Sie klare Erfolgs- und Fehlerzustände, damit Nutzer nicht mehrfach senden.',
            'Laden Sie Bot-Schutz nur dort, wo er nötig ist, um Seitengewicht zu reduzieren.',
          ],
        },
        {
          heading: 'Backend- und E-Mail-Kontrollen',
          bullets: [
            'Setzen Sie Rate Limits nach IP, Fingerprint oder Session, wo die Plattform es erlaubt.',
            'Normalisieren und validieren Sie Payloads, bevor E-Mails zusammengesetzt werden.',
            'Routen Sie Nachrichten an rollenbasierte Mailboxen statt an persönliche Adressen.',
            'Loggen Sie genug Kontext für Abuse-Untersuchungen, ohne unnötige personenbezogene Daten zu sammeln.',
          ],
        },
        {
          heading: 'Professionelles Routing',
          paragraphs: [
            'Unternehmensaliasse machen den Workflow leichter betreibbar. Support-Fragen gehen an support, Vulnerability Reports an security, Privacy-Anfragen an privacy, rechtliche Anfragen an legal und Sales Leads an sales. Diese Trennung wirkt auch auf der öffentlichen Website glaubwürdiger.',
          ],
        },
      ],
      references: [{ label: 'OWASP Überblick zu automatisierten Bedrohungen', url: 'https://owasp.org/www-project-automated-threats-to-web-applications/' }],
    },
    ja: {
      title: 'React 問い合わせフォームをスパムと悪用から守る',
      description:
        'validation、bot 制御、routing discipline、より安全なメール処理で React の問い合わせページを保護する方法。',
      tags: ['React', '問い合わせフォーム', '悪用対策', 'メール'],
      summary: [
        '問い合わせフォームは公開された書き込み endpoint であり、悪用対象として扱うべきです。',
        'bot 制御は役立ちますが、validation、rate limit、送信先 routing も重要です。',
        '運用メールボックスにより、sales、support、privacy、legal、security のメッセージを分離しやすくなります。',
      ],
      sections: [
        {
          heading: 'リスク面',
          paragraphs: [
            '問い合わせページは単純に見えますが、攻撃者が書き込める最初の公開 endpoint になることがよくあります。spam、phishing payload、過大な送信、自動 probe が同じ workflow を標的にできます。',
            'Frontend は品質を上げノイズを減らせますが、実際にメールを送る endpoint には server-side validation と rate limiting が必要です。',
          ],
        },
        {
          heading: 'Frontend の制御',
          bullets: [
            '送信前に必須項目と想定される長さを検証します。',
            'provider secret や private API key を client-side code に露出しません。',
            'ユーザーが繰り返し送信しないよう、明確な成功・失敗状態を表示します。',
            'ページ重量を抑えるため、bot protection は必要な場所だけで読み込みます。',
          ],
        },
        {
          heading: 'Backend とメールの制御',
          bullets: [
            'プラットフォームが許す範囲で IP、fingerprint、session による rate limit を設定します。',
            'メールを組み立てる前に payload を normalize し、検証します。',
            '個人アドレスではなく role-based mailbox にメッセージを route します。',
            '不要な個人データを集めずに、悪用調査に必要な文脈だけを log します。',
          ],
        },
        {
          heading: 'プロフェッショナルな routing',
          paragraphs: [
            '会社 alias は workflow を運用しやすくします。support 質問は support、脆弱性報告は security、privacy 要求は privacy、legal 要求は legal、sales lead は sales に送れます。この分離は公開サイト上でも信頼性を高めます。',
          ],
        },
      ],
      references: [{ label: 'OWASP 自動化された脅威の概要', url: 'https://owasp.org/www-project-automated-threats-to-web-applications/' }],
    },
    'zh-CN': {
      title: '加固 React 联系表单以抵御垃圾信息与滥用',
      description:
        '如何通过校验、机器人控制、路由纪律和更安全的邮件处理来保护 React 联系页面。',
      tags: ['React', '联系表单', '滥用控制', '邮件'],
      summary: [
        '联系表单是公开写入端点，应被视为滥用目标。',
        '机器人控制有帮助，但校验、限流和目标路由仍然重要。',
        '运营邮箱更容易把销售、支持、隐私、法律和安全消息分开处理。',
      ],
      sections: [
        {
          heading: '风险面',
          paragraphs: [
            '联系页面看起来简单，但它经常成为攻击者可以写入的第一个公开端点。垃圾信息、钓鱼 payload、超大提交和自动探测都可能针对同一工作流。',
            '前端可以提高质量并减少噪声，但任何真正发送邮件的端点仍然需要服务端校验和限流。',
          ],
        },
        {
          heading: '前端控制',
          bullets: [
            '提交前校验必填字段和预期长度。',
            '不要在客户端代码中暴露服务商 secret 或私有 API key。',
            '提供清晰的成功和失败状态，避免用户重复提交。',
            '只在需要的地方加载机器人防护，以降低页面重量。',
          ],
        },
        {
          heading: '后端与邮件控制',
          bullets: [
            '在平台允许的情况下，按 IP、fingerprint 或 session 进行限流。',
            '在组合邮件前对 payload 进行规范化和校验。',
            '将消息路由到基于角色的邮箱，而不是个人地址。',
            '记录足以调查滥用的上下文，同时避免收集不必要的个人数据。',
          ],
        },
        {
          heading: '专业化路由',
          paragraphs: [
            '公司别名让工作流更容易运营。支持问题进入 support，漏洞报告进入 security，隐私请求进入 privacy，法律请求进入 legal，销售线索进入 sales。这种分离在公开网站上也更可信。',
          ],
        },
      ],
      references: [{ label: 'OWASP 自动化威胁概览', url: 'https://owasp.org/www-project-automated-threats-to-web-applications/' }],
    },
    es: {
      title: 'Endurecer formularios de contacto React contra spam y abuso',
      description:
        'Cómo proteger una página de contacto React con validación, controles de bot, disciplina de routing y manejo de correo más seguro.',
      tags: ['React', 'Formularios de contacto', 'Controles antiabuso', 'Correo'],
      summary: [
        'Los formularios de contacto son endpoints públicos de escritura y deben tratarse como objetivos de abuso.',
        'Los controles de bot ayudan, pero validación, rate limits y routing de destino siguen importando.',
        'Los buzones operativos facilitan separar mensajes de ventas, soporte, privacidad, legal y seguridad.',
      ],
      sections: [
        {
          heading: 'La superficie de riesgo',
          paragraphs: [
            'Una página de contacto parece simple, pero a menudo se convierte en el primer endpoint público al que pueden escribir atacantes. Spam, payloads de phishing, envíos sobredimensionados y probes automatizados pueden apuntar al mismo flujo.',
            'El frontend puede mejorar calidad y reducir ruido, pero la validación server-side y el rate limiting siguen siendo necesarios para cualquier endpoint real de envío de correo.',
          ],
        },
        {
          heading: 'Controles frontend',
          bullets: [
            'Valide campos obligatorios y longitudes esperadas antes del envío.',
            'No exponga secretos de proveedor ni API keys privadas en código cliente.',
            'Use estados claros de éxito y error para que los usuarios no envíen repetidamente.',
            'Cargue protección contra bots solo donde se necesita para reducir peso de página.',
          ],
        },
        {
          heading: 'Controles backend y de correo',
          bullets: [
            'Aplique rate limits por IP, fingerprint o sesión donde la plataforma lo permita.',
            'Normalice y valide payloads antes de componer correos.',
            'Enrute mensajes a buzones basados en roles en lugar de direcciones personales.',
            'Registre contexto suficiente para investigar abuso sin recolectar datos personales innecesarios.',
          ],
        },
        {
          heading: 'Routing profesional',
          paragraphs: [
            'Los alias de empresa facilitan operar el workflow. Preguntas de soporte van a support, reportes de vulnerabilidad a security, solicitudes de privacidad a privacy, legales a legal y leads comerciales a sales. Esa separación también se ve más creíble en el sitio público.',
          ],
        },
      ],
      references: [{ label: 'Resumen OWASP de amenazas automatizadas', url: 'https://owasp.org/www-project-automated-threats-to-web-applications/' }],
    },
    fr: {
      title: 'Durcir les formulaires de contact React contre le spam et les abus',
      description:
        'Comment protéger une page de contact React avec validation, contrôles anti-bot, discipline de routage et traitement e-mail plus sûr.',
      tags: ['React', 'Formulaires de contact', 'Contrôles anti-abus', 'E-mail'],
      summary: [
        'Les formulaires de contact sont des endpoints publics en écriture et doivent être traités comme des cibles d’abus.',
        'Les contrôles anti-bot aident, mais validation, rate limits et routage de destination restent essentiels.',
        'Les boîtes opérationnelles facilitent la séparation des messages sales, support, privacy, legal et security.',
      ],
      sections: [
        {
          heading: 'La surface de risque',
          paragraphs: [
            'Une page de contact semble simple, mais elle devient souvent le premier endpoint public auquel des attaquants peuvent écrire. Spam, payloads de phishing, soumissions trop volumineuses et sondes automatisées peuvent cibler le même workflow.',
            'Le frontend peut améliorer la qualité et réduire le bruit, mais la validation côté serveur et le rate limiting restent nécessaires pour tout endpoint réel d’envoi d’e-mail.',
          ],
        },
        {
          heading: 'Contrôles frontend',
          bullets: [
            'Validez les champs obligatoires et les longueurs attendues avant soumission.',
            'N’exposez pas de secrets fournisseur ni de clés API privées dans le code client.',
            'Utilisez des états de succès et d’échec clairs pour éviter les soumissions répétées.',
            'Chargez la protection anti-bot uniquement où elle est nécessaire afin de réduire le poids de page.',
          ],
        },
        {
          heading: 'Contrôles backend et e-mail',
          bullets: [
            'Appliquez des rate limits par IP, fingerprint ou session lorsque la plateforme le permet.',
            'Normalisez et validez les payloads avant de composer l’e-mail.',
            'Routez les messages vers des boîtes par rôle plutôt que vers des adresses personnelles.',
            'Journalisez assez de contexte pour enquêter sur les abus sans collecter de données personnelles inutiles.',
          ],
        },
        {
          heading: 'Routage professionnel',
          paragraphs: [
            'Les alias d’entreprise rendent le workflow plus exploitable. Les questions support vont à support, les rapports de vulnérabilité à security, les demandes privacy à privacy, les demandes legal à legal et les leads sales à sales. Cette séparation paraît aussi plus crédible sur le site public.',
          ],
        },
      ],
      references: [{ label: 'Vue d’ensemble OWASP des menaces automatisées', url: 'https://owasp.org/www-project-automated-threats-to-web-applications/' }],
    },
    ko: {
      title: 'React 연락 양식을 스팸과 남용으로부터 하드닝하기',
      description:
        'validation, bot control, 라우팅 규율, 더 안전한 이메일 처리를 통해 React 연락 페이지를 보호하는 방법입니다.',
      tags: ['React', '연락 양식', '남용 방지', '이메일'],
      summary: [
        '연락 양식은 공개 쓰기 endpoint이며 남용 대상처럼 다뤄야 합니다.',
        'bot control은 도움이 되지만 validation, rate limit, 목적지 routing도 여전히 중요합니다.',
        '운영 메일함은 sales, support, privacy, legal, security 메시지를 분리하기 쉽게 만듭니다.',
      ],
      sections: [
        {
          heading: '위험 표면',
          paragraphs: [
            '연락 페이지는 단순해 보이지만 공격자가 쓸 수 있는 첫 공개 endpoint가 되는 경우가 많습니다. 스팸, phishing payload, 과도하게 큰 제출, 자동 probe가 같은 workflow를 겨냥할 수 있습니다.',
            'Frontend는 품질을 높이고 노이즈를 줄일 수 있지만 실제 메일 발송 endpoint에는 server-side validation과 rate limiting이 필요합니다.',
          ],
        },
        {
          heading: 'Frontend 제어',
          bullets: [
            '제출 전에 필수 필드와 예상 길이를 검증합니다.',
            'provider secret이나 private API key를 client-side code에 노출하지 않습니다.',
            '사용자가 반복 제출하지 않도록 명확한 성공 및 실패 상태를 제공합니다.',
            '페이지 무게를 줄이기 위해 bot protection은 필요한 곳에서만 로드합니다.',
          ],
        },
        {
          heading: 'Backend와 이메일 제어',
          bullets: [
            '플랫폼이 허용하는 경우 IP, fingerprint, session 기준으로 rate limit을 적용합니다.',
            '이메일을 구성하기 전에 payload를 정규화하고 검증합니다.',
            '개인 주소 대신 role-based mailbox로 메시지를 라우팅합니다.',
            '불필요한 개인정보를 수집하지 않으면서 남용 조사에 충분한 맥락을 로그로 남깁니다.',
          ],
        },
        {
          heading: '전문적인 라우팅',
          paragraphs: [
            '회사 alias는 workflow 운영을 쉽게 만듭니다. support 질문은 support로, 취약점 보고서는 security로, privacy 요청은 privacy로, legal 요청은 legal로, sales lead는 sales로 보낼 수 있습니다. 이런 분리는 공개 사이트에서도 더 신뢰성 있게 보입니다.',
          ],
        },
      ],
      references: [{ label: 'OWASP 자동화 위협 개요', url: 'https://owasp.org/www-project-automated-threats-to-web-applications/' }],
    },
  },
  'ebpf-compatibility-testing-ci': {
    tr: {
      title: 'Kernel Hassas Projeler için CI’da eBPF Uyumluluk Testi',
      description:
        'Uyumluluk raporları, tekrarlanabilir kontroller ve CI kanıtları kernel hassas eBPF çalışmalarını daha güvenle yayınlamaya nasıl yardımcı olur.',
      tags: ['eBPF', 'CI', 'Kernel Güvenliği', 'Açık Kaynak'],
      summary: [
        'Kernel hassas araçların yalnızca başarılı local build’e değil, uyumluluk kanıtına ihtiyacı vardır.',
        'CI raporları verifier, helper ve kernel sürümü varsayımlarını incelemeyi kolaylaştırır.',
        'Kanıtı yayınlamak açık kaynak güvenlik projeleri için güveni artırır.',
      ],
      sections: [
        {
          heading: 'Uyumluluk kanıtı neden önemlidir',
          paragraphs: [
            'eBPF programları kernel davranışına, helper availability’ye, verifier kısıtlarına ve runtime ortam detaylarına bağlıdır. Bir araç bir geliştirici makinesinde çalışıp başka bir kernel hattındaki kullanıcıda başarısız olabilir.',
            'Uyumluluk testi bu varsayımları görünür kılar. Ayrıca maintainers’ın release öncesi regresyonları yakalaması için bir yol sağlar.',
          ],
        },
        {
          heading: 'Yararlı bir rapor neleri içermeli',
          bullets: [
            'Test edilen kernel sürümü ve mimari.',
            'Program yükleme durumu ve ilgili olduğunda verifier çıktısı.',
            'Helper, map ve feature varsayımları.',
            'Net pass, fail veya partial-support kararı.',
            'Sonucu üreten koda ve CI run’a bağlantılar.',
          ],
        },
        {
          heading: 'CI entegrasyon paterni',
          paragraphs: [
            'CI job hem insan tarafından okunabilir bir rapor hem de makine tarafından okunabilir bir artifact üretmelidir. Web sitesi daha sonra özetlenmiş bir sürüm yayınlayabilir; böylece kullanıcılar ve contributor’lar raw workflow loglarına dalmadan projeyi inceleyebilir.',
          ],
        },
        {
          heading: 'Güven faydası',
          paragraphs: [
            'Bir güvenlik mühendisliği şirketi için açık uyumluluk kanıtı iki iş yapar. Kullanıcıların aracın ortamlarına uyup uymadığını anlamasına yardımcı olur ve mühendislik iddialarının tekrarlanabilir kontrollerle desteklendiğini gösterir.',
          ],
        },
      ],
      references: [{ label: 'Kernel eBPF dokümantasyonu', url: 'https://docs.kernel.org/bpf/' }],
    },
    de: {
      title: 'eBPF-Kompatibilitätstests in CI für kernelnahe Projekte',
      description:
        'Wie Kompatibilitätsberichte, wiederholbare Checks und CI-Evidence Teams helfen, kernelnahe eBPF-Arbeit mit mehr Vertrauen auszuliefern.',
      tags: ['eBPF', 'CI', 'Kernel-Sicherheit', 'Open Source'],
      summary: [
        'Kernelnahe Tools brauchen Kompatibilitätsnachweise, nicht nur einen erfolgreichen lokalen Build.',
        'CI-Reports machen Verifier-, Helper- und Kernelversionsannahmen leichter reviewbar.',
        'Veröffentlichte Evidence stärkt Vertrauen in Open-Source-Sicherheitsprojekte.',
      ],
      sections: [
        {
          heading: 'Warum Kompatibilitätsnachweise wichtig sind',
          paragraphs: [
            'eBPF-Programme hängen von Kernelverhalten, Helper-Verfügbarkeit, Verifier-Grenzen und Laufzeitdetails ab. Ein Tool kann auf einer Entwickler-Maschine funktionieren und bei Nutzern auf einer anderen Kernel-Linie trotzdem scheitern.',
            'Kompatibilitätstests machen diese Annahmen sichtbar. Sie geben Maintainers auch einen Weg, Regressionen vor einem Release zu erkennen.',
          ],
        },
        {
          heading: 'Was ein nützlicher Report enthalten sollte',
          bullets: [
            'Kernelversion und Architektur unter Test.',
            'Program-Load-Status und Verifier-Ausgabe, wenn relevant.',
            'Annahmen zu Helpern, Maps und Features.',
            'Ein klares pass-, fail- oder partial-support-Ergebnis.',
            'Links zum Code und CI-Run, die das Ergebnis erzeugt haben.',
          ],
        },
        {
          heading: 'CI-Integrationsmuster',
          paragraphs: [
            'Der CI-Job sollte einen menschenlesbaren Bericht und ein maschinenlesbares Artefakt erzeugen. Die Website kann anschließend eine zusammengefasste Version veröffentlichen, damit Nutzer und Beitragende das Projekt prüfen können, ohne rohe Workflow-Logs zu durchsuchen.',
          ],
        },
        {
          heading: 'Vertrauensgewinn',
          paragraphs: [
            'Für ein Security-Engineering-Unternehmen erfüllt offene Kompatibilitäts-Evidence zwei Aufgaben. Sie hilft Nutzern zu entscheiden, ob ein Tool zu ihrer Umgebung passt, und zeigt, dass Engineering-Claims durch wiederholbare Checks gestützt werden.',
          ],
        },
      ],
      references: [{ label: 'Kernel-eBPF-Dokumentation', url: 'https://docs.kernel.org/bpf/' }],
    },
    ja: {
      title: 'カーネル依存プロジェクト向け CI での eBPF 互換性テスト',
      description:
        '互換性レポート、再現可能なチェック、CI evidence が kernel-sensitive な eBPF 開発をより安心して出荷する助けになる理由。',
      tags: ['eBPF', 'CI', 'カーネルセキュリティ', 'オープンソース'],
      summary: [
        'カーネル依存のツールには、ローカル build 成功だけでなく互換性 evidence が必要です。',
        'CI レポートは verifier、helper、kernel version の前提をレビューしやすくします。',
        'evidence を公開することで、オープンソースの security project への信頼が高まります。',
      ],
      sections: [
        {
          heading: '互換性 evidence が重要な理由',
          paragraphs: [
            'eBPF program は kernel behavior、helper availability、verifier constraints、runtime environment の詳細に依存します。ある開発者のマシンでは動作しても、別の kernel line を使うユーザーでは失敗することがあります。',
            '互換性テストはこれらの前提を可視化します。また、maintainer が release 前に regression を捕捉する手段にもなります。',
          ],
        },
        {
          heading: '有用なレポートに含めるべき内容',
          bullets: [
            'テスト対象の kernel version と architecture。',
            'program load status と、必要に応じた verifier output。',
            'helper、map、feature に関する前提。',
            '明確な pass、fail、または partial-support verdict。',
            '結果を生成した code と CI run へのリンク。',
          ],
        },
        {
          heading: 'CI 統合パターン',
          paragraphs: [
            'CI job は人間が読めるレポートと機械が読める artifact の両方を生成すべきです。Web サイトは要約版を公開でき、ユーザーや contributor は raw workflow log を掘らずにプロジェクトを確認できます。',
          ],
        },
        {
          heading: '信頼面での効果',
          paragraphs: [
            'セキュリティエンジニアリング会社にとって、公開された互換性 evidence は二つの役割を持ちます。ユーザーが自分の環境に tool が合うか判断しやすくし、engineering claim が再現可能な check に支えられていることを示します。',
          ],
        },
      ],
      references: [{ label: 'Kernel eBPF ドキュメント', url: 'https://docs.kernel.org/bpf/' }],
    },
    'zh-CN': {
      title: '面向内核敏感项目的 CI 中 eBPF 兼容性测试',
      description:
        '兼容性报告、可重复检查与 CI 证据如何帮助团队更有信心地交付内核敏感的 eBPF 工作。',
      tags: ['eBPF', 'CI', '内核安全', '开源'],
      summary: [
        '内核敏感工具需要兼容性证据，而不只是一次成功的本地构建。',
        'CI 报告让 verifier、helper 和内核版本假设更容易审查。',
        '公开证据可以提升开源安全项目的信任度。',
      ],
      sections: [
        {
          heading: '为什么兼容性证据很重要',
          paragraphs: [
            'eBPF 程序依赖内核行为、helper 可用性、verifier 约束和运行环境细节。一个工具可能在开发者机器上可用，却在另一条内核线的用户环境中失败。',
            '兼容性测试让这些假设可见，也给维护者提供了在发布前捕获回归的方式。',
          ],
        },
        {
          heading: '有用报告应包含什么',
          bullets: [
            '测试中的内核版本和架构。',
            '程序加载状态，以及相关情况下的 verifier 输出。',
            'helper、map 和 feature 假设。',
            '清晰的 pass、fail 或 partial-support 结论。',
            '生成结果的代码和 CI run 链接。',
          ],
        },
        {
          heading: 'CI 集成模式',
          paragraphs: [
            'CI job 应生成面向人的可读报告和面向机器的 artifact。网站随后可以发布摘要版本，让用户和贡献者无需深入原始 workflow 日志也能检查项目。',
          ],
        },
        {
          heading: '信任收益',
          paragraphs: [
            '对于安全工程公司，公开兼容性证据有两个作用。它帮助用户判断工具是否适合自己的环境，也证明工程主张有可重复检查作为支撑。',
          ],
        },
      ],
      references: [{ label: 'Kernel eBPF 文档', url: 'https://docs.kernel.org/bpf/' }],
    },
    es: {
      title: 'Pruebas de compatibilidad eBPF en CI para proyectos sensibles al kernel',
      description:
        'Cómo reportes de compatibilidad, checks repetibles y evidencia CI ayudan a publicar trabajo eBPF sensible al kernel con más confianza.',
      tags: ['eBPF', 'CI', 'Seguridad de kernel', 'Open Source'],
      summary: [
        'Las herramientas sensibles al kernel necesitan evidencia de compatibilidad, no solo un build local exitoso.',
        'Los reportes CI hacen más revisables las suposiciones de verifier, helpers y versiones de kernel.',
        'Publicar la evidencia mejora la confianza en proyectos open source de seguridad.',
      ],
      sections: [
        {
          heading: 'Por qué importa la evidencia de compatibilidad',
          paragraphs: [
            'Los programas eBPF dependen del comportamiento del kernel, disponibilidad de helpers, restricciones del verifier y detalles del entorno de ejecución. Una herramienta puede funcionar en la máquina de un desarrollador y fallar para usuarios en otra línea de kernel.',
            'Las pruebas de compatibilidad hacen visibles esas suposiciones. También dan a maintainers una forma de detectar regresiones antes de un release.',
          ],
        },
        {
          heading: 'Qué debe incluir un reporte útil',
          bullets: [
            'Versión de kernel y arquitectura bajo prueba.',
            'Estado de carga del programa y salida del verifier cuando aplique.',
            'Suposiciones sobre helpers, maps y features.',
            'Un veredicto claro de pass, fail o partial-support.',
            'Enlaces al código y al CI run que produjo el resultado.',
          ],
        },
        {
          heading: 'Patrón de integración CI',
          paragraphs: [
            'El job de CI debe generar un reporte legible para humanos y un artefacto legible por máquina. El sitio web puede publicar una versión resumida para que usuarios y contribuidores inspeccionen el proyecto sin bucear en logs crudos del workflow.',
          ],
        },
        {
          heading: 'Beneficio de confianza',
          paragraphs: [
            'Para una empresa de ingeniería de seguridad, la evidencia abierta de compatibilidad cumple dos funciones. Ayuda a usuarios a decidir si una herramienta encaja en su entorno y demuestra que las afirmaciones de ingeniería están respaldadas por checks repetibles.',
          ],
        },
      ],
      references: [{ label: 'Documentación eBPF del kernel', url: 'https://docs.kernel.org/bpf/' }],
    },
    fr: {
      title: 'Tests de compatibilité eBPF en CI pour projets sensibles au kernel',
      description:
        'Comment les rapports de compatibilité, contrôles répétables et preuves CI aident les équipes à livrer du travail eBPF sensible au kernel avec plus de confiance.',
      tags: ['eBPF', 'CI', 'Sécurité kernel', 'Open Source'],
      summary: [
        'Les outils sensibles au kernel ont besoin de preuves de compatibilité, pas seulement d’un build local réussi.',
        'Les rapports CI rendent les hypothèses verifier, helpers et versions kernel plus faciles à revoir.',
        'Publier les preuves renforce la confiance dans les projets de sécurité open source.',
      ],
      sections: [
        {
          heading: 'Pourquoi la preuve de compatibilité compte',
          paragraphs: [
            'Les programmes eBPF dépendent du comportement kernel, de la disponibilité des helpers, des contraintes du verifier et des détails runtime. Un outil peut fonctionner sur la machine d’un développeur et échouer chez des utilisateurs sur une autre ligne kernel.',
            'Les tests de compatibilité rendent ces hypothèses visibles. Ils donnent aussi aux maintainers un moyen de détecter les régressions avant release.',
          ],
        },
        {
          heading: 'Ce qu’un rapport utile doit contenir',
          bullets: [
            'Version kernel et architecture testées.',
            'Statut de chargement du programme et sortie verifier lorsque pertinent.',
            'Hypothèses sur helpers, maps et features.',
            'Un verdict clair pass, fail ou partial-support.',
            'Liens vers le code et le CI run ayant produit le résultat.',
          ],
        },
        {
          heading: 'Pattern d’intégration CI',
          paragraphs: [
            'Le job CI doit générer un rapport lisible par l’humain et un artefact lisible par machine. Le site peut ensuite publier une version résumée pour que utilisateurs et contributeurs inspectent le projet sans fouiller les logs bruts du workflow.',
          ],
        },
        {
          heading: 'Bénéfice de confiance',
          paragraphs: [
            'Pour une entreprise d’ingénierie sécurité, une preuve ouverte de compatibilité a deux rôles. Elle aide les utilisateurs à savoir si un outil correspond à leur environnement et montre que les affirmations d’ingénierie reposent sur des contrôles répétables.',
          ],
        },
      ],
      references: [{ label: 'Documentation eBPF du kernel', url: 'https://docs.kernel.org/bpf/' }],
    },
    ko: {
      title: '커널 민감 프로젝트를 위한 CI의 eBPF 호환성 테스트',
      description:
        '호환성 보고서, 반복 가능한 검사, CI evidence가 커널 민감 eBPF 작업을 더 자신 있게 배포하도록 돕는 방식입니다.',
      tags: ['eBPF', 'CI', '커널 보안', '오픈소스'],
      summary: [
        '커널 민감 도구에는 성공한 local build뿐 아니라 호환성 evidence가 필요합니다.',
        'CI 보고서는 verifier, helper, kernel version 가정을 리뷰하기 쉽게 만듭니다.',
        'evidence를 공개하면 오픈소스 보안 프로젝트의 신뢰가 향상됩니다.',
      ],
      sections: [
        {
          heading: '호환성 evidence가 중요한 이유',
          paragraphs: [
            'eBPF program은 kernel behavior, helper availability, verifier constraints, runtime environment 세부사항에 의존합니다. 도구가 한 개발자 머신에서는 동작하지만 다른 kernel line의 사용자에게는 실패할 수 있습니다.',
            '호환성 테스트는 이런 가정을 가시화합니다. 또한 maintainer가 release 전에 regression을 잡을 수 있는 방법을 제공합니다.',
          ],
        },
        {
          heading: '유용한 보고서에 포함할 내용',
          bullets: [
            '테스트한 kernel version과 architecture.',
            '관련 있을 경우 program load status와 verifier output.',
            'helper, map, feature 가정.',
            '명확한 pass, fail 또는 partial-support verdict.',
            '결과를 만든 code와 CI run 링크.',
          ],
        },
        {
          heading: 'CI 통합 패턴',
          paragraphs: [
            'CI job은 사람이 읽을 수 있는 보고서와 기계가 읽을 수 있는 artifact를 모두 생성해야 합니다. 웹사이트는 요약본을 게시하여 사용자와 contributor가 raw workflow log를 뒤지지 않고도 프로젝트를 확인할 수 있게 합니다.',
          ],
        },
        {
          heading: '신뢰 효과',
          paragraphs: [
            '보안 엔지니어링 회사에 공개 호환성 evidence는 두 가지 역할을 합니다. 사용자가 도구가 자기 환경에 맞는지 판단하도록 돕고, engineering claim이 반복 가능한 검사로 뒷받침된다는 점을 보여줍니다.',
          ],
        },
      ],
      references: [{ label: 'Kernel eBPF 문서', url: 'https://docs.kernel.org/bpf/' }],
    },
  },
};
