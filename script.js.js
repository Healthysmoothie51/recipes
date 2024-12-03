<script async='async' custom-element='amp-auto-ads' src='https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js'>


!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version=&#39;2.0&#39;;
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,&#39;script&#39;,
&#39;https://connect.facebook.net/en_US/fbevents.js&#39;);
fbq(&#39;init&#39;, &#39;1008814093984424&#39;);
fbq(&#39;track&#39;, &#39;PageView&#39;);


<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag(&#39;js&#39;, new Date());
  gtag(&#39;config&#39;, &#39;G-ZDZ9ZCWVMD&#39;);


<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag(&#39;js&#39;, new Date());
  gtag(&#39;config&#39;, &#39;G-ZDZ9ZCWVMD&#39;);

{&quot;@context&quot;:&quot;http://schema.org&quot;,&quot;@type&quot;:&quot;WebSite&quot;,&quot;name&quot;:&quot;<data:view.title.escaped/>&quot;,&quot;url&quot;:&quot;<data:view.url.canonical/>&quot;,&quot;potentialAction&quot;:{&quot;@type&quot;:&quot;SearchAction&quot;,&quot;target&quot;:&quot;<data:view.url.canonical/>search?q={search_term_string}&quot;,&quot;query-input&quot;:&quot;required name=search_term_string&quot;}}

//<![CDATA[
// Global variables with content. "Available for Edit"
var monthsName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
noThumb = "",
relatedPostsNum = 3,
commentsSystem = "blogger",
showMoreText = "",
followByEmailText = "",
relatedPostsText = "",
loadMorePosts = "",
postPerPage= 6,
pageOfText = ["Page", "of"],
fixedSidebar = true,
fixedMenu = false,
disqusShortname = "pikitemplates";
//]]>


        </b:loop>
        <b:else/>
        <div class='widget-content'>
          <ul>
            <b:loop values='data:items' var='item'>
              <li><data:item/></li>
            </b:loop>
          </ul>
        </div>
      </b:if>
    </b:includable>
  </b:defaultmarkup>
     <b:defaultmarkup type='AdSense,Blog'>
        <b:includable id='defaultAdUnit'>
          <!-- Clear out style (need non-empty string) -->
          <b:with value='&quot;/* Done in css. */&quot;' var='style'>
            <b:include name='super.defaultAdUnit'/>
          </b:with>
        </b:includable>
      </b:defaultmarkup>
 <b:defaultmarkup type='PopularPosts'>
    <b:includable id='main' var='this'>
      <b:include name='widget-title'/>
      <div class='widget-content'>
        <b:if cond='data:widget.sectionId == &quot;hot-posts&quot;'>
           <div class='xx0xx-bticker'>
              <b:loop index='i' values='data:posts' var='post'>
                <b:include data='post' name='content'/>
              </b:loop>
              </div>
              <div class='mydivs-bt'>
               <a class='prev' href='javascript:;' role='button'/>
              <a class='next' href='javascript:;' role='button'/>
               </div>
          <b:elseif cond='data:widget.sectionId == &quot;ft-post&quot;'/>
          <div class='GalaxyPSpeed-holds'>
            <b:loop index='i' values='data:posts' var='post'>
              <b:include cond='data:i in [0,1,2,3,4]' data='post' name='content'/>
            </b:loop>
          </div>
          <b:else/>
          <b:class name='sidebar-posts'/>
          <b:loop index='i' values='data:posts' var='post'>
            <b:include data='post' name='content'/>
          </b:loop>
        </b:if>
      </div>
    </b:includable>
    <b:includable id='blogThisShare'/>
    <b:includable id='bylineByName'/>
    <b:includable id='bylineRegion'/>
    <b:includable id='commentsLink'/>
    <b:includable id='commentsLinkIframe'/>
    <b:includable id='content' var='post'>
      <div>
        <b:if cond='data:widget.sectionId == &quot;hot-posts&quot;'>
          <b:class name='GalaxyTicker'/>
          <b:elseif cond='data:widget.sectionId == &quot;ft-post&quot;'/>
          <b:class name='GalaxyPSpeedArea'/>
          <b:else/>
          <b:class expr:name='data:i == 0 ? &quot;popular-post post gaint-post&quot; : &quot;popular-post post&quot;'/>
        </b:if>
        <b:class expr:name='&quot;item&quot;+data:i'/>
          <b:if cond='data:widget.sectionId not in [&quot;hot-posts&quot;]'>
          <a class='post-filter-link background-layer image-nos' expr:href='data:post.url.canonical' expr:title='data:post.title ? data:post.title : data:messages.noTitle'>
          <b:if cond='data:post.featuredImage'>
          <img class='snip-thumbnail' expr:alt='data:post.title ? data:post.title : data:messages.noTitle' expr:src='data:post.featuredImage.isYouTube ? resizeImage(data:post.featuredImage.youtubeMaxResDefaultUrl.jsonEscaped, 680) : resizeImage(data:post.featuredImage, 680)'/>
          <b:else/>
          <img class='snip-thumbnail' expr:alt='data:post.title ? data:post.title : data:messages.noTitle' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh07i6j2rAGyBOcdrUnrcDJY7gjDHwCb-1YK9yHXnM3tv90LXRvPho8aiKUfEx2AiZOZSy0mQUXzQbcMSFWqeVq-jjKLBTzw2e1RnnCTF9Y66a7zlZ2r-RdhXh3jWGqfIb7ROsgsBdsLfU/w680/nth.png'/>
          </b:if><b:class expr:name='data:post.featuredImage.isYouTube ? &quot;video-nos&quot; : &quot;image-nos&quot;'/>
          </a>
          </b:if>
          <b:if cond='data:widget.sectionId == &quot;ft-post&quot;'>
           <div class='featured-meta'>
          <b:if cond='data:post.labels and ((data:widget.sectionId in [&quot;ft-post&quot;]) or (data:widget.sectionId == &quot;sidebar&quot; and data:i == 0))'><span class='label-news-flex'><data:post.labels.first.name/></span></b:if>
          <h2 class='entry-title vcard'><a expr:href='data:post.url' expr:title='data:post.title' rel='bookmark'><b:eval expr='data:post.title ? data:post.title : data:messages.noTitle'/></a></h2>
           <b:if cond='data:widgets.Blog.first.allBylineItems.timestamp'><div class='post-snip'><span class='post-date'><time class='published' expr:datetime='data:post.date.iso8601'><data:post.date/></time></span></div></b:if>
        </div>
          <b:else/>
          <b:if cond='data:widget.sectionId not in [&quot;ft-post&quot;,&quot;hot-posts&quot;]'>
           <div class='GalaxyPSpeedSet-box'>
          <b:if cond='data:post.labels and ((data:widget.sectionId in [&quot;ft-post&quot;]) or (data:widget.sectionId == &quot;sidebar&quot; and data:i == 0))'><span class='label-news-flex'><data:post.labels.first.name/></span></b:if>
          <h2 class='entry-title vcard'><a expr:href='data:post.url' expr:title='data:post.title' rel='bookmark'><b:eval expr='data:post.title ? data:post.title : data:messages.noTitle'/></a></h2>
           <b:if cond='data:widgets.Blog.first.allBylineItems.timestamp'><div class='post-snip'><span class='post-date'><time class='published' expr:datetime='data:post.date.iso8601'><data:post.date/></time></span></div></b:if>
        </div>
         </b:if>
           <b:if cond='data:widget.sectionId == &quot;hot-posts&quot;'>
          <h2 class='entry-title vcard'><a expr:href='data:post.url' expr:title='data:post.title' rel='bookmark'><b:eval expr='data:post.title ? data:post.title : data:messages.noTitle'/></a></h2>
         </b:if>
           </b:if>
      </div>
    </b:includable>
    <b:includable id='emailPostIcon'/>
    <b:includable id='facebookShare'/>
    <b:includable id='footerBylines'/>
    <b:includable id='googlePlusShare'/>
    <b:includable id='headerByline'/>
    <b:includable id='linkShare'/>
    <b:includable id='otherSharingButton'/>
    <b:includable id='platformShare'/>
    <b:includable id='postAuthor'/>
    <b:includable id='postCommentsLink'/>
    <b:includable id='postJumpLink'/>
    <b:includable id='postLabels'/>
    <b:includable id='postLocation'/>
    <b:includable id='postReactions'/>
    <b:includable id='postShareButtons'/>
    <b:includable id='postTimestamp'/>
    <b:includable id='sharingButton'/>
    <b:includable id='sharingButtonContent'/>
    <b:includable id='sharingButtons'/>
    <b:includable id='sharingButtonsMenu'/>
    <b:includable id='sharingPlatformIcon'/>
    <b:includable id='snippetedPostByline'/>
    <b:includable id='snippetedPostContent'/>
    <b:includable id='snippetedPostThumbnail'/>
    <b:includable id='snippetedPostTitle'/>
    <b:includable id='snippetedPosts'/>
  </b:defaultmarkup>
  <b:defaultmarkup type='Header'>
    <b:includable id='main' var='this'>
        /*-- Don&#39;t show description on the item page --*/
      <div class='header-widget'>
      /*-- If we are replacing the title, force it to render anyway, and it&#39;ll be hidden in CSS. --*/
        <b:include cond='data:imagePlacement in {&quot;REPLACE&quot;, &quot;BEFORE_DESCRIPTION&quot;}' name='image'/>
        <b:include cond='data:imagePlacement == &quot;BEHIND&quot;' name='title'/>
      </div>
    </b:includable>
    <b:includable id='image'>
      <a class='header-image-wrapper' expr:href='data:blog.homepageUrl'>
        <img expr:alt='data:blog.title.escaped' expr:data-height='data:height' expr:data-width='data:width' expr:src='data:image'/>
      </a>
    </b:includable>
  </b:defaultmarkup>
  <b:defaultmarkup type='FeaturedPost'>
    <b:includable id='main' var='this'>
      <b:include name='widget-title'/>
      <div class='widget-content'>
        <b:loop values='data:posts' var='post'>
          <b:include data='post' name='postContent'/>
        </b:loop>
      </div>
    </b:includable>
    <b:includable id='blogThisShare'/>
    <b:includable id='bylineByName'/>
    <b:includable id='bylineRegion'/>
    <b:includable id='commentsLink'/>
    <b:includable id='commentsLinkIframe'/>
     <b:includable id='emailPostIcon'/>
    <b:includable id='facebookShare'/>
    <b:includable id='footerBylines'/>
    <b:includable id='googlePlusShare'/>
    <b:includable id='headerByline'/>
    <b:includable id='linkShare'/>
    <b:includable id='otherSharingButton'/>
    <b:includable id='platformShare'/>
    <b:includable id='postAuthor'/>
    <b:includable id='postCommentsLink'/>
    <b:includable id='postJumpLink'/>
    <b:includable id='postLabels'/>
    <b:includable id='postLocation'/>
    <b:includable id='postReactions'/>
    <b:includable id='postShareButtons'/>
    <b:includable id='postTimestamp'/>
    <b:includable id='sharingButton'/>
    <b:includable id='sharingButtonContent'/>
    <b:includable id='sharingButtons'/>
    <b:includable id='sharingButtonsMenu'/>
    <b:includable id='sharingPlatformIcon'/>
    <b:includable id='snippetedPostByline'/>
    <b:includable id='snippetedPostContent'/>
    <b:includable id='snippetedPostThumbnail'/>
    <b:includable id='snippetedPostTitle'/>
    <b:includable id='snippetedPosts'/>
    <b:includable id='postContent' var='post'>
      <div class='post'>
        <div class='post-content'>
          <a class='post-filter-link' expr:href='data:post.url'>
            <b:if cond='data:post.featuredImage'>
             <img class='snip-thumbnail' expr:alt='data:post.title ? data:post.title : data:messages.noTitle' expr:src='data:post.featuredImage.isYouTube ? resizeImage(data:post.featuredImage.youtubeMaxResDefaultUrl.jsonEscaped, 680) : resizeImage(data:post.featuredImage, 680)'/>
              <b:else/>
              <img class='snip-thumbnail' expr:alt='data:post.title ? data:post.title : data:messages.noTitle' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh07i6j2rAGyBOcdrUnrcDJY7gjDHwCb-1YK9yHXnM3tv90LXRvPho8aiKUfEx2AiZOZSy0mQUXzQbcMSFWqeVq-jjKLBTzw2e1RnnCTF9Y66a7zlZ2r-RdhXh3jWGqfIb7ROsgsBdsLfU/w680/nth.png'/>
            </b:if><b:class expr:name='data:post.featuredImage.isYouTube ? &quot;video-nos&quot; : &quot;image-nos&quot;'/>
            <span class='label-news-flex'><data:post.labels.last.name/></span>
          </a>
          <div class='GalaxyPSpeedSet-box'>
            <h2 class='entry-title vcard'>
              <a expr:href='data:post.url' expr:title='data:post.title' rel='bookmark'><b:eval expr='data:post.title ? data:post.title : data:messages.noTitle'/></a>
            </h2>
            <div class='post-snip'>
              <span class='post-date published' expr:datetime='data:post.date.iso8601'><data:post.date/></span>
            </div>
          </div>
        </div>
      </div>
    </b:includable>
  </b:defaultmarkup>
  <b:defaultmarkup type='Label'>
    <b:includable id='main' var='this'>
      <b:include name='widget-title'/>
      <b:include name='content'/>
    </b:includable>
    <b:includable id='content'>
      <div class='widget-content'>
        <b:class expr:name='data:this.display + &quot;-label&quot;'/>
        <b:include cond='data:this.display == &quot;list&quot;' name='list'/>
        <b:include cond='data:this.display == &quot;cloud&quot;' name='list'/>
      </div>
    </b:includable>
    <b:includable id='list'>
      <ul>
        <b:loop values='data:labels' var='label'>
          <li>
            <a class='label-name' expr:href='data:label.url'>
              <data:label.name/>
              <b:if cond='data:this.showFreqNumbers'>
                <span class='label-count'><data:label.count/></span>
              </b:if>
            </a>
          </li>
        </b:loop>
      </ul>
    </b:includable>
  </b:defaultmarkup>
  <b:defaultmarkup type='FollowByEmail'>
    <b:includable id='main' var='this'>
      <b:include name='content'/>
    </b:includable>
    <b:includable id='content'>
      <div class='widget-content'>
            <div class='follow-by-email'>
        <b:if cond='data:defaultTitle or data:title'>
          <h3 class='follow-by-email-title'>
            <data:title/>
          </h3>
        </b:if>
        <span class='before-text'><b:include data='{ message: &quot;followByEmailText&quot; }' name='translate'/></span>
        <div class='follow-by-email-inner'>
          <form action='https://feedburner.google.com/fb/a/mailverify' expr:onsubmit='&quot;window.open(\&quot;https://feedburner.google.com/fb/a/mailverify?uri=&quot; + data:feedPath + &quot;\&quot;, \&quot;popupwindow\&quot;, \&quot;scrollbars=yes,width=550,height=520\&quot;); return true&quot;' method='post' target='popupwindow'>
            <input autocomplete='off' class='follow-by-email-address' expr:aria-label='data:messages.searchThisBlog' expr:placeholder='data:messages.emailAddress' name='email' type='email'/>
            <input class='follow-by-email-submit' expr:value='data:messages.subscribe' type='submit'/>
            <input expr:value='data:feedPath' name='uri' type='hidden'/>
            <input name='loc' type='hidden' value='en_US'/>
          </form>
        </div>
      </div>
            </div>
    </b:includable>
  </b:defaultmarkup>
  <b:defaultmarkup type='BlogSearch'>
    <b:includable id='main' var='this'>
      <b:include name='widget-title'/>
      <b:include name='content'/>
    </b:includable>
    <b:includable id='content'>
      <div class='widget-content' role='search'>
        <form class='search-form' expr:action='data:blog.searchUrl'>
          <b:attr cond='not data:view.isPreview' name='target' value='_top'/>
          <b:include name='urlParamsAsFormInput'/>
          <input autocomplete='off' class='search-input' expr:aria-label='data:messages.searchThisBlog' expr:placeholder='data:messages.searchThisBlog' expr:value='data:view.isSearch ? data:view.search.query.escaped : &quot;&quot;' name='q'/>
          <input class='search-action' expr:value='data:messages.search.escaped' type='submit'/>
        </form>
      </div>
    </b:includable>
  </b:defaultmarkup>
  <b:defaultmarkup type='BlogArchive'>
    <b:includable id='main' var='this'>
      <b:include name='widget-title'/>
      <b:include name='content'/>
    </b:includable>
    <b:includable id='content'>
      <div class='widget-content'>
        <div id='ArchiveList'>
          <div expr:id='data:widget.instanceId + &quot;_ArchiveList&quot;'>
            <b:include cond='data:this.style in {&quot;FLAT&quot;, &quot;MENU&quot;, &quot;HIERARCHY&quot;}' name='flat'/>
          </div>
        </div>
      </div>
    </b:includable>
    <b:includable id='flat'>
      <ul class='flat'>
        <b:loop values='data:data' var='i'>
          <li class='archivedate'>
            <a expr:href='data:i.url'>
              <data:i.name/><span class='post-count'><data:i.post-count/></span>
            </a>
          </li>
        </b:loop>
      </ul>
    </b:includable>
  </b:defaultmarkup>
      <b:defaultmarkup type='TextList'>
    <b:includable id='main' var='this'>
      <b:include name='widget-title'/>
      <b:include name='content'/>
    </b:includable>
    <b:includable id='content'>
      <b:include name='textlist-content'/>
    </b:includable>
  </b:defaultmarkup>
     <b:defaultmarkup type='LinkList'>
    <b:includable id='main'>
  <b:include name='widget-title'/>
  <b:include name='content'/>
</b:includable>
 <b:includable id='content'>
 <div class='widget-content widget-control'>
   <ul>
     <b:loop values='data:links' var='link'>
       <li><a expr:href='data:link.target'><data:link.name/></a></li>
     </b:loop>
   </ul>
 </div>
</b:includable>
  </b:defaultmarkup>
   <b:defaultmarkup type='PageList'>
    <b:includable id='main'>
        <b:include name='widget-title'/>
        <b:include name='content'/>
    </b:includable>
    <b:includable id='content'>
        <div class='widget-content widget-control'>
            <ul><b:loop values='data:links' var='link'><li><a expr:href='data:link.href'><data:link.title/></a></li></b:loop></ul>
 </div>
</b:includable>
  </b:defaultmarkup>
</b:defaultmarkups>
    <!-- Google Analytics -->
    <b:include data='blog' name='google-analytics'/>
</head>
<body expr:class='data:blog.pageType' id='mainContent'>
<script type='text/javascript'>
//<![CDATA[
(localStorage.getItem('mode')) === 'darkmode' ? document.querySelector('#mainContent').classList.add('dark'): document.querySelector('#mainContent').classList.remove('dark')
//]]>
 


  <b:class cond='data:view.isError' name='error-view'/>
<!-- Theme Options -->
  <div class='admin-area' style='display:none'>
    <b:section class='admin-section' id='admin' maxwidgets='1' name='Theme Options (Admin Panel)' showaddelement='no'>
      <b:widget id='TextList15' locked='true' title='Facebook SDK (Plugin)' type='TextList' visible='false'>
        <b:widget-settings>
          <b:widget-setting name='shownum'/>
          <b:widget-setting name='sorting'>NONE</b:widget-setting>
          <b:widget-setting name='item-0'><![CDATA[https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v8.0]]></b:widget-setting>
        </b:widget-settings>
        <b:includable id='main' var='this'>
      <b:include name='widget-title'/>
      <b:include name='content'/>
    </b:includable>
        <b:includable id='content'>
      <b:include name='textlist-content'/>
    </b:includable>
      </b:widget>
      <b:widget id='LinkList25' locked='true' title='Variables / Comments' type='LinkList' version='2' visible='false'>
        <b:widget-settings>
          <b:widget-setting name='sorting'>NONE</b:widget-setting>
          <b:widget-setting name='text-1'>commentsSystem</b:widget-setting>
          <b:widget-setting name='link-1'>blogger</b:widget-setting>
          <b:widget-setting name='text-0'>disqusShortname</b:widget-setting>
          <b:widget-setting name='link-2'>noThumb</b:widget-setting>
          <b:widget-setting name='link-0'>pikitemplates</b:widget-setting>
          <b:widget-setting name='text-2'>noThumb</b:widget-setting>
        </b:widget-settings>
        <b:includable id='main'>
          <b:include name='content'/>
        </b:includable>
        <b:includable id='content'>
          &lt;script type=&#39;text/javascript&#39;&gt;
          //&lt;![CDATA[
          <b:loop values='data:links' var='link'>
            <b:if cond='data:link.name == &quot;noThumb&quot;'>
              var noThumb = &quot;<data:link.target/>&quot;;
            </b:if>
            <b:if cond='data:link.name == &quot;commentsSystem&quot;'>
              var commentsSystem = &quot;<data:link.target/>&quot;;
            </b:if>
            <b:if cond='data:link.name == &quot;disqusShortname&quot;'>
              var disqusShortname = &quot;<data:link.target/>&quot;;
            </b:if>
          </b:loop>
          //]]&gt;
          &lt;/script&gt;
        </b:includable>
      </b:widget>
      <b:widget id='LinkList26' locked='true' title='Related Post / Email Box' type='LinkList' version='2' visible='true'>
        <b:widget-settings>
          <b:widget-setting name='link-3'>Load More</b:widget-setting>
          <b:widget-setting name='sorting'>NONE</b:widget-setting>
          <b:widget-setting name='text-1'>relatedPostsText</b:widget-setting>
          <b:widget-setting name='link-1'>You May Like</b:widget-setting>
          <b:widget-setting name='text-0'>followByEmailText</b:widget-setting>
          <b:widget-setting name='link-2'>3</b:widget-setting>
          <b:widget-setting name='text-3'>loadMorePosts</b:widget-setting>
          <b:widget-setting name='link-0'>Get Notified About Next Update.</b:widget-setting>
          <b:widget-setting name='text-2'>relatedPostsNum</b:widget-setting>
        </b:widget-settings>
        <b:includable id='main'>
          <b:include name='content'/>
        </b:includable>
        <b:includable id='content'>
          &lt;script type=&#39;text/javascript&#39;&gt;
          //&lt;![CDATA[
          <b:loop values='data:links' var='link'>
            <b:if cond='data:link.name == &quot;relatedPostsNum&quot;'>
              var relatedPostsNum = <data:link.target/>;
            </b:if>
             <b:if cond='data:link.name == &quot;followByEmailText&quot;'>
              var followByEmailText = &quot;<data:link.target/>&quot;;
            </b:if>
            <b:if cond='data:link.name == &quot;relatedPostsText&quot;'>
              var relatedPostsText = &quot;<data:link.target/>&quot;;
            </b:if>
            <b:if cond='data:link.name == &quot;loadMorePosts&quot;'>
              var loadMorePosts = &quot;<data:link.target/>&quot;;
            </b:if>
          </b:loop>
          //]]&gt;
          &lt;/script&gt;
        </b:includable>
      </b:widget>
      <b:widget id='LinkList27' locked='true' title='Lazy Scrolls / More Text' type='LinkList' version='2' visible='false'>
        <b:widget-settings>
          <b:widget-setting name='sorting'>NONE</b:widget-setting>
          <b:widget-setting name='text-1'>fixedMenu</b:widget-setting>
          <b:widget-setting name='link-1'>true</b:widget-setting>
          <b:widget-setting name='text-0'>fixedSidebar</b:widget-setting>
          <b:widget-setting name='link-2'>Show More</b:widget-setting>
          <b:widget-setting name='link-0'>true</b:widget-setting>
          <b:widget-setting name='text-2'>Show More</b:widget-setting>
        </b:widget-settings>
        <b:includable id='main'>
          <b:include name='content'/>
        </b:includable>
        <b:includable id='content'>
          &lt;script type=&#39;text/javascript&#39;&gt;
          //&lt;![CDATA[
          <b:loop values='data:links' var='link'>
            <b:if cond='data:link.name == &quot;fixedSidebar&quot;'>
              var fixedSidebar = <data:link.target/>;
            </b:if>
            <b:if cond='data:link.name == &quot;fixedMenu&quot;'>
              var fixedMenu = <data:link.target/>;
            </b:if>
            <b:if cond='data:link.name == &quot;showMoreText&quot;'>
              var showMoreText = &quot;<data:link.target/>&quot;;
            </b:if>
          </b:loop>
          //]]&gt;
          &lt;/script&gt;
        </b:includable>
      </b:widget>
    </b:section>
  </div>
<!-- Outer Wrapper -->
<div id='outer-wrapper'>
 <!-- Top Menu Wrapper -->
  <div class='top-bar'>
          <div class='container'>
            <div class='row'>
              <div id='top-menu'>
                <b:section class='menu-top' id='menu-top' maxwidgets='1' name='Top Menu' showaddelement='no'>
                  <b:widget id='LinkList3' locked='true' title='Top menu' type='LinkList' version='2' visible='true'>
                    <b:widget-settings>
                      <b:widget-setting name='sorting'>NONE</b:widget-setting>
                      <b:widget-setting name='text-1'>Sitemaps</b:widget-setting>
                      <b:widget-setting name='link-1'>https://www.healthysmoothie.blog/p/sitemap.html</b:widget-setting>
                      <b:widget-setting name='text-0'>Home</b:widget-setting>
                      <b:widget-setting name='link-0'>/</b:widget-setting>
                    </b:widget-settings>
                    <b:includable id='main'>
              <b:include name='content'/>
            </b:includable>
                    <b:includable id='content'>
                      <div class='widget-content'>
                        <ul class='nav1'>
                          <b:loop values='data:links' var='link'>
                            <li>
                              <a expr:href='data:link.target'>
                                <data:link.name/>
                              </a>
                            </li>
                          </b:loop>
                        </ul>
                      </div>
                    </b:includable>
                  </b:widget>
                </b:section>
              </div>
              <div id='top-social'>
                <b:section class='social-sec' id='social-sec' maxwidgets='1' name='Top Social icons' showaddelement='no'>
                  <b:widget id='LinkList4' locked='true' title='top social' type='LinkList' version='2' visible='true'>
                    <b:widget-settings>
                      <b:widget-setting name='link-3'>https://www.healthysmoothie.blog/feeds/posts/default?alt=rss</b:widget-setting>
                      <b:widget-setting name='sorting'>NONE</b:widget-setting>
                      <b:widget-setting name='link-4'>https://x.com/healthysmo94356/media</b:widget-setting>
                      <b:widget-setting name='text-1'>instagram</b:widget-setting>
                      <b:widget-setting name='link-1'>https://www.instagram.com/healthysmoothiesrecipes/reels/</b:widget-setting>
                      <b:widget-setting name='text-0'>facebook</b:widget-setting>
                      <b:widget-setting name='link-2'>https://pin.it/7fpCo8pxU</b:widget-setting>
                      <b:widget-setting name='text-3'>rss</b:widget-setting>
                      <b:widget-setting name='link-0'>https://www.facebook.com/healthysmoothiesrecipe/reels/</b:widget-setting>
                      <b:widget-setting name='text-2'>pinterest</b:widget-setting>
                      <b:widget-setting name='text-4'>twitter</b:widget-setting>
                    </b:widget-settings>
                    <b:includable id='main'>
              <b:include name='content'/>
            </b:includable>
                    <b:includable id='content'>
                      <div class='widget-content'>
                        <ul class='social'>
                          <b:loop values='data:links' var='link'>
                         <li><a expr:class='data:link.name' expr:href='data:link.target' rel='noopener noreferrer' target='_blank'/></li>
                          </b:loop>
                        </ul>
                      </div>
                    </b:includable>
                  </b:widget>
                </b:section>
              </div>
            </div>
          </div>
        </div>
 <!-- Header Wrapper -->
  <header id='Menu-GalaxyNew' itemscope='itemscope' itemtype='https://schema.org/WPHeader' role='banner'>
    <div class='pro-GalaxyNew-wrap'>
      <div class='pro-GalaxyNew'>
        <div class='container'>
          <div class='SuperLogo-wrap'>
          <div class='row-1 '>
          <div class='header-section'>
              <div class='header-left'>
            <b:section class='SuperLogo' id='SuperLogo' maxwidgets='1' name='Main Logo' showaddelement='no'>
              <b:widget id='Header1' locked='true' title='Healthy Smoothie Recipes Delicious Fruit &amp;amp; Veggie Blends  (Header)' type='Header' version='2' visible='true'>
                <b:widget-settings>
                  <b:widget-setting name='displayUrl'>https://blogger.googleusercontent.com/img/a/AVvXsEjTl6JDdSqR8FEae2zxG-_FOsgPCspLT1L2BXi9eUGo0J3dbIYMv3EjCYAAjyvnMw9xsPFDwwzrjd-0Vj94UtaY9XSMJ6TnOq9XPW8mWUrt4jJpArG9xQ1-U-w9uLqilMZPNjsK1oJH5e38NYHUfJkv7l_eM3DrU2X_I3KN7d4WB6aoLI8mdmZzbtPpzUmw=s150</b:widget-setting>
                  <b:widget-setting name='displayHeight'>46</b:widget-setting>
                  <b:widget-setting name='sectionWidth'>150</b:widget-setting>
                  <b:widget-setting name='useImage'>true</b:widget-setting>
                  <b:widget-setting name='shrinkToFit'>true</b:widget-setting>
                  <b:widget-setting name='imagePlacement'>REPLACE</b:widget-setting>
                  <b:widget-setting name='displayWidth'>150</b:widget-setting>
                </b:widget-settings>
                <b:includable id='main' var='this'>
                 <a class='show-Globecontainer' href='javascript:;'/>
                    <b:include cond='data:imagePlacement in {&quot;REPLACE&quot;, &quot;BEFORE_DESCRIPTION&quot;}' name='image'/>
                    <b:include cond='data:imagePlacement == &quot;BEHIND&quot;' name='title'/>
                </b:includable>
                <b:includable id='behindImageStyle'>
                  <b:if cond='data:sourceUrl'>
                    <b:include cond='data:this.image' data='{                    image: data:this.image,                    selector: &quot;.header-widget&quot;                  }' name='responsiveImageStyle'/>
                    <style type='text/css'>
                      .header-widget {
                        background-position: <data:blog.locale.languageAlignment/>;
                        background-repeat: no-repeat;
                      }
                    </style>
                  </b:if>
                </b:includable>
                <b:includable id='description'>
                  <p>
                    <data:this.description/>
                  </p>
                </b:includable>
                <b:includable id='image'>
                  <a class='SuperLogo-img' expr:href='data:blog.homepageUrl'>
                    <img expr:alt='data:blog.title.escaped' expr:data-height='data:height' expr:data-width='data:width' expr:src='data:image'/>
 
                  </a>
                </b:includable>
                <b:includable id='logo-label'>
      <b:if cond='data:view.search.label'><h2 class='blog-title'><b:tag expr:href='data:blog.homepageUrl' name='a'><data:view.search.label/></b:tag></h2></b:if>
    </b:includable>
                <b:includable id='title'>
                  <h1 class='blog title'>
                    <b:tag expr:href='data:blog.homepageUrl' name='a'>
                      <data:title/>
                    </b:tag>
                  </h1>
                </b:includable>
              </b:widget>
            </b:section>
            <b:section class='xx0xx-promenu' id='xx0xx-promenu' maxwidgets='1' name='Main Menu' showaddelement='no'>
              <b:widget id='LinkList56' locked='true' title='Main Menu' type='LinkList' version='2' visible='true'>
                <b:widget-settings>
                  <b:widget-setting name='text-30'>_Privacy policy</b:widget-setting>
                  <b:widget-setting name='text-31'><![CDATA[_Terms & Disclaimers]]></b:widget-setting>
                  <b:widget-setting name='text-32'>_FAQs</b:widget-setting>
                  <b:widget-setting name='text-26'>Documentation</b:widget-setting>
                  <b:widget-setting name='text-27'>_About us</b:widget-setting>
                  <b:widget-setting name='text-28'>_Contact us</b:widget-setting>
                  <b:widget-setting name='text-29'>_DMCA policy</b:widget-setting>
                  <b:widget-setting name='text-22'>__Dairy-Free smoothie</b:widget-setting>
                  <b:widget-setting name='link-31'>https://www.healthysmoothie.blog/p/terms-disclaimers.html</b:widget-setting>
                  <b:widget-setting name='text-23'>__Avocado spinach smoothie</b:widget-setting>
                  <b:widget-setting name='link-30'>https://www.healthysmoothie.blog/p/privacy-policy-and-cookie-consent.html</b:widget-setting>
                  <b:widget-setting name='text-24'>__Low-Sugar Smoothie</b:widget-setting>
                  <b:widget-setting name='link-33'>https://www.healthysmoothie.blog/p/sitemap.html</b:widget-setting>
                  <b:widget-setting name='text-25'>__Beet Berry Smoothie</b:widget-setting>
                  <b:widget-setting name='link-32'>https://www.healthysmoothie.blog/p/list-of-healthy-smoothie-recipe-toc.html</b:widget-setting>
                  <b:widget-setting name='text-9'><![CDATA[__>Blueberry Smoothie]]></b:widget-setting>
                  <b:widget-setting name='text-8'>__Pre-Workout Smoothies</b:widget-setting>
                  <b:widget-setting name='text-20'>__cookies cream</b:widget-setting>
                  <b:widget-setting name='text-21'>_Diet Smoothies</b:widget-setting>
                  <b:widget-setting name='text-1'>_Breakfast Smoothies</b:widget-setting>
                  <b:widget-setting name='text-0'>Smoothies Recipes Card</b:widget-setting>
                  <b:widget-setting name='text-3'><![CDATA[__>strawberry banana ]]></b:widget-setting>
                  <b:widget-setting name='text-2'>__Fruit Smoothie</b:widget-setting>
                  <b:widget-setting name='text-5'>__Green smoothie</b:widget-setting>
                  <b:widget-setting name='text-4'><![CDATA[__>pineapple smoothie]]></b:widget-setting>
                  <b:widget-setting name='text-7'>_Workout Smoothies</b:widget-setting>
                  <b:widget-setting name='text-6'><![CDATA[__>matcha mint smoothie]]></b:widget-setting>
                  <b:widget-setting name='text-19'>_Dessert Smoothies</b:widget-setting>
                  <b:widget-setting name='text-15'>__protien Smoothies</b:widget-setting>
                  <b:widget-setting name='text-16'><![CDATA[__>Peach Smoothie]]></b:widget-setting>
                  <b:widget-setting name='text-17'>_Kids-Friendly Smoothies</b:widget-setting>
                  <b:widget-setting name='text-18'>__Dates Banana smoothie</b:widget-setting>
                  <b:widget-setting name='text-11'><![CDATA[__>chocolate peanut]]></b:widget-setting>
                  <b:widget-setting name='text-12'>__Detox Smoothies</b:widget-setting>
                  <b:widget-setting name='text-13'>__apple kale smoothie</b:widget-setting>
                  <b:widget-setting name='text-14'>_Meal Replacement</b:widget-setting>
                  <b:widget-setting name='text-10'>__Post-Workout Smoothies</b:widget-setting>
                  <b:widget-setting name='link-17'>#</b:widget-setting>
                  <b:widget-setting name='link-16'>https://drive.google.com/file/d/1notEAVPRxPAjrtJ2Ta8CtWk98EYmKuzc/view?usp=sharing</b:widget-setting>
                  <b:widget-setting name='link-19'>#</b:widget-setting>
                  <b:widget-setting name='sorting'>NONE</b:widget-setting>
                  <b:widget-setting name='link-18'>https://drive.google.com/file/d/1RltjmVYBS53F3GyJRfGDD3wgyxV0QIRh/view?usp=sharing</b:widget-setting>
                  <b:widget-setting name='link-1'>#</b:widget-setting>
                  <b:widget-setting name='link-13'>https://drive.google.com/file/d/19QWoYa4FlSmzjHVKzGZQ14i-FGXCjHtG/view?usp=sharing</b:widget-setting>
                  <b:widget-setting name='link-2'>#</b:widget-setting>
                  <b:widget-setting name='link-12'>#</b:widget-setting>
                  <b:widget-setting name='link-15'>#</b:widget-setting>
                  <b:widget-setting name='link-0'>#</b:widget-setting>
                  <b:widget-setting name='link-14'>#</b:widget-setting>
                  <b:widget-setting name='link-11'>https://drive.google.com/file/d/1uUH7ztkxcm9xN58MeNr1QOuIKK314ubc/view?usp=sharing</b:widget-setting>
                  <b:widget-setting name='link-10'>#</b:widget-setting>
                  <b:widget-setting name='link-9'>https://drive.google.com/file/d/1ccmKdUuFbgCVsh9ykvpcMqAx1V5hxMzu/view?usp=sharing</b:widget-setting>
                  <b:widget-setting name='link-7'>#</b:widget-setting>
                  <b:widget-setting name='link-8'>#</b:widget-setting>
                  <b:widget-setting name='link-5'>#</b:widget-setting>
                  <b:widget-setting name='link-6'>https://drive.google.com/file/d/11d33fkf4Mq0VkdBs9o38pYbu3LxKyzoP/view?usp=sharing</b:widget-setting>
                  <b:widget-setting name='link-3'>https://drive.google.com/file/d/1TH__ropCh6uiXbKThnpzyV-hBAuWQUzv/view?usp=sharing</b:widget-setting>
                  <b:widget-setting name='link-4'>https://drive.google.com/file/d/1YcskafiCeGLu6nFgqFMP6G9yZ6M4C60N/view?usp=sharing</b:widget-setting>
                  <b:widget-setting name='link-28'>https://www.healthysmoothie.blog/p/contact-us.html</b:widget-setting>
                  <b:widget-setting name='link-27'>https://www.healthysmoothie.blog/p/about-us.html</b:widget-setting>
                  <b:widget-setting name='link-29'>https://www.healthysmoothie.blog/p/dmca-policy.html</b:widget-setting>
                  <b:widget-setting name='link-24'>#</b:widget-setting>
                  <b:widget-setting name='link-23'>https://drive.google.com/file/d/17aAqVDuleb5aEyvswAx8974Is5gL1tVf/view?usp=sharing</b:widget-setting>
                  <b:widget-setting name='link-26'>#</b:widget-setting>
                  <b:widget-setting name='link-25'>https://drive.google.com/file/d/1mOf7-LD96fAN53qZ43VqZ6Jn-G1V1DMt/view?usp=sharing</b:widget-setting>
                  <b:widget-setting name='link-20'>https://drive.google.com/file/d/1PEJVrMhgdBchDCCb_MKi3ab5sVRX8WEv/view?usp=sharing</b:widget-setting>
                  <b:widget-setting name='text-33'>_Sitemaps</b:widget-setting>
                  <b:widget-setting name='link-22'>#</b:widget-setting>
                  <b:widget-setting name='link-21'>#</b:widget-setting>
                </b:widget-settings>
                <b:includable id='main'>
                  <b:include name='content'/>
                </b:includable>
                <b:includable id='content'>
                  <ul id='xxqo-menuaflex-list' role='menubar'>
                    <b:loop values='data:links' var='link'>
                      <li itemprop='name'><a expr:href='data:link.target' itemprop='url'><data:link.name/></a></li>
                    </b:loop>
                  </ul>
                </b:includable>
              </b:widget>
            </b:section>
         </div>
          <div class='header-right'>
        <div class='search-wrap'>
         <div class='mega-mode'>
        <input class='dark-button dark-mode' id='dark' type='checkbox'/>
         <span class='dark-toggle'/></div>
         <a class='search-button' href='#'/></div>
      </div>
      <div class='search-container-overlay'>
        <a class='search-container-close' href='#'/>
        <div class='search-container-wrapper'>
        <div class='search-msg'>Type Here to Get Search Results !</div>
          <form action='/search' class='search-container' method='get' role='search'>
            <input class='search-input' name='q' placeholder='Search Here...' spellcheck='false' type='text'/>
            <i class='fa fa-search'>
              <input type='submit' value=''/>
            </i>
          </form>
        </div>
      </div>
     </div>
       </div>
        </div>
      </div>
      </div>
    </div>
  </header>
  <div class='clearfix'/>
  <b:if cond='data:view.isHomepage'>
 <div class='ticker'>
<div class='container'>
  <b:section class='GalaxyPSpeedTic' id='hot-posts' maxwidgets='1' name='Breaking Ticker' showaddelement='yes'>
    <b:widget id='PopularPosts3' locked='false' title='Breaking Ticker' type='PopularPosts' version='2' visible='true'>
      <b:widget-settings>
        <b:widget-setting name='numItemsToShow'>6</b:widget-setting>
        <b:widget-setting name='showThumbnails'>true</b:widget-setting>
        <b:widget-setting name='showSnippets'>true</b:widget-setting>
        <b:widget-setting name='timeRange'>ALL_TIME</b:widget-setting>
      </b:widget-settings>
      <b:includable id='main' var='this'>
      <b:include name='widget-title'/>
      <div class='widget-content'>
        <b:if cond='data:widget.sectionId == &quot;hot-posts&quot;'>
           <div class='xx0xx-bticker'>
              <b:loop index='i' values='data:posts' var='post'>
                <b:include data='post' name='content'/>
              </b:loop>
              </div>
              <div class='mydivs-bt'>
               <a class='prev' href='javascript:;' role='button'/>
              <a class='next' href='javascript:;' role='button'/>
               </div>
          <b:elseif cond='data:widget.sectionId == &quot;ft-post&quot;'/>
          <div class='GalaxyPSpeed-holds'>
            <b:loop index='i' values='data:posts' var='post'>
              <b:include cond='data:i in [0,1,2,3,4]' data='post' name='content'/>
            </b:loop>
          </div>
          <b:else/>
          <b:class name='sidebar-posts'/>
          <b:loop index='i' values='data:posts' var='post'>
            <b:include data='post' name='content'/>
          </b:loop>
        </b:if>
      </div>
    </b:includable>
      <b:includable id='blogThisShare'/>
      <b:includable id='bylineByName'/>
      <b:includable id='bylineRegion'/>
      <b:includable id='commentsLink'/>
      <b:includable id='commentsLinkIframe'/>
      <b:includable id='content' var='post'>
      <div>
        <b:if cond='data:widget.sectionId == &quot;hot-posts&quot;'>
          <b:class name='GalaxyTicker'/>
          <b:elseif cond='data:widget.sectionId == &quot;ft-post&quot;'/>
          <b:class name='GalaxyPSpeedArea'/>
          <b:else/>
          <b:class expr:name='data:i == 0 ? &quot;popular-post post gaint-post&quot; : &quot;popular-post post&quot;'/>
        </b:if>
        <b:class expr:name='&quot;item&quot;+data:i'/>
          <b:if cond='data:widget.sectionId not in [&quot;hot-posts&quot;]'>
          <a class='post-filter-link background-layer image-nos' expr:href='data:post.url.canonical' expr:title='data:post.title ? data:post.title : data:messages.noTitle'>
          <b:if cond='data:post.featuredImage'>
          <img class='snip-thumbnail' expr:alt='data:post.title ? data:post.title : data:messages.noTitle' expr:src='data:post.featuredImage.isYouTube ? resizeImage(data:post.featuredImage.youtubeMaxResDefaultUrl.jsonEscaped, 680) : resizeImage(data:post.featuredImage, 680)'/>
          <b:else/>
          <img class='snip-thumbnail' expr:alt='data:post.title ? data:post.title : data:messages.noTitle' src='https://4.bp.blogspot.com/-O3EpVMWcoKw/WxY6-6I4--I/AAAAAAAAB2s/KzC0FqUQtkMdw7VzT6oOR_8vbZO6EJc-ACK4BGAYYCw/w680/nth.png'/>
          </b:if><b:class expr:name='data:post.featuredImage.isYouTube ? &quot;video-nos&quot; : &quot;image-nos&quot;'/>
          </a>
          </b:if>
          <b:if cond='data:widget.sectionId == &quot;ft-post&quot;'>
           <div class='featured-meta'>
          <b:if cond='data:post.labels and ((data:widget.sectionId in [&quot;ft-post&quot;]) or (data:widget.sectionId == &quot;sidebar&quot; and data:i == 0))'><span class='label-news-flex'><data:post.labels.first.name/></span></b:if>
          <h2 class='entry-title vcard'><a expr:href='data:post.url' expr:title='data:post.title' rel='bookmark'><b:eval expr='data:post.title ? data:post.title : data:messages.noTitle'/></a></h2>
           <b:if cond='data:widgets.Blog.first.allBylineItems.timestamp'><div class='post-snip'><span class='post-date'><time class='published' expr:datetime='data:post.date.iso8601'><data:post.date/></time></span></div></b:if>
        </div>
          <b:else/>
          <b:if cond='data:widget.sectionId not in [&quot;ft-post&quot;,&quot;hot-posts&quot;]'>
           <div class='GalaxyPSpeedSet-box'>
          <b:if cond='data:post.labels and ((data:widget.sectionId in [&quot;ft-post&quot;]) or (data:widget.sectionId == &quot;sidebar&quot; and data:i == 0))'><span class='label-news-flex'><data:post.labels.first.name/></span></b:if>
          <h2 class='entry-title vcard'><a expr:href='data:post.url' expr:title='data:post.title' rel='bookmark'><b:eval expr='data:post.title ? data:post.title : data:messages.noTitle'/></a></h2>
           <b:if cond='data:widgets.Blog.first.allBylineItems.timestamp'><div class='post-snip'><span class='post-date'><time class='published' expr:datetime='data:post.date.iso8601'><data:post.date/></time></span></div></b:if>
        </div>
         </b:if>
           <b:if cond='data:widget.sectionId == &quot;hot-posts&quot;'>
          <h2 class='entry-title vcard'><a expr:href='data:post.url' expr:title='data:post.title' rel='bookmark'><b:eval expr='data:post.title ? data:post.title : data:messages.noTitle'/></a></h2>
         </b:if>
           </b:if>
      </div>
    </b:includable>
      <b:includable id='emailPostIcon'/>
      <b:includable id='facebookShare'/>
      <b:includable id='footerBylines'/>
      <b:includable id='googlePlusShare'/>
      <b:includable id='headerByline'/>
      <b:includable id='linkShare'/>
      <b:includable id='otherSharingButton'/>
      <b:includable id='platformShare'/>
      <b:includable id='postAuthor'/>
      <b:includable id='postCommentsLink'/>
      <b:includable id='postJumpLink'/>
      <b:includable id='postLabels'/>
      <b:includable id='postLocation'/>
      <b:includable id='postReactions'/>
      <b:includable id='postShareButtons'/>
      <b:includable id='postTimestamp'/>
      <b:includable id='sharingButton'/>
      <b:includable id='sharingButtonContent'/>
      <b:includable id='sharingButtons'/>
      <b:includable id='sharingButtonsMenu'/>
      <b:includable id='sharingPlatformIcon'/>
      <b:includable id='snippetedPostByline'/>
      <b:includable id='snippetedPostContent'/>
      <b:includable id='snippetedPostThumbnail'/>
      <b:includable id='snippetedPostTitle'/>
      <b:includable id='snippetedPosts'/>
    </b:widget>
  </b:section>
    </div></div>
    <div class='clearfix'/>
  </b:if>
    <div class='mega-wrap'>
    <div class='container'>
               <b:section class='main-ads-pikihome' id='main-ads1' maxwidgets='2' name='Ads Placement' showaddelement='yes'>
                 <b:widget id='HTML4' locked='false' title='' type='HTML' visible='false'>
                   <b:widget-settings>
                     <b:widget-setting name='content'><![CDATA[<a href="https://seranking.com/?ga=3839645&source=banner"><img src="https://promo.seranking.com/promo-banners/ba4faa818660ec0f8a12d559254214ec.png" width="728" height="90" /></a>]]></b:widget-setting>
                   </b:widget-settings>
                   <b:includable id='main'>
  <b:include name='widget-title'/>
  <div class='widget-content'>
    <data:content/>
  </div>
</b:includable>
                 </b:widget>
               </b:section>
          <div class='clearfix'/>
  <b:if cond='data:view.isHomepage'>
      <b:section class='GlobeGalaxy flex' id='ft-post' maxwidgets='1' name='Top Feature Section' showaddelement='yes'>
        <b:widget id='PopularPosts4' locked='false' title='Featured Section' type='PopularPosts' version='2' visible='false'>
          <b:widget-settings>
            <b:widget-setting name='numItemsToShow'>3</b:widget-setting>
            <b:widget-setting name='showThumbnails'>true</b:widget-setting>
            <b:widget-setting name='showSnippets'>true</b:widget-setting>
            <b:widget-setting name='timeRange'>LAST_WEEK</b:widget-setting>
          </b:widget-settings>
          <b:includable id='main' var='this'>
      <b:include name='widget-title'/>
      <div class='widget-content'>
        <b:if cond='data:widget.sectionId == &quot;hot-posts&quot;'>
              <b:loop index='i' values='data:posts' var='post'>
                <b:include data='post' name='content'/>
              </b:loop>
          <b:elseif cond='data:widget.sectionId == &quot;ft-post&quot;'/>
          <div class='GalaxyPSpeed-holds'>
            <b:loop index='i' values='data:posts' var='post'>
              <b:include cond='data:i in [0,1,2,3,4]' data='post' name='content'/>
            </b:loop>
          </div>
          <b:else/>
          <b:class name='sidebar-posts'/>
          <b:loop index='i' values='data:posts' var='post'>
            <b:include data='post' name='content'/>
          </b:loop>
        </b:if>
      </div>
    </b:includable>
          <b:includable id='blogThisShare'/>
          <b:includable id='bylineByName'/>
          <b:includable id='bylineRegion'/>
          <b:includable id='commentsLink'/>
          <b:includable id='commentsLinkIframe'/>
          <b:includable id='content' var='post'>
      <div>
        <b:if cond='data:widget.sectionId == &quot;hot-posts&quot;'>
          <b:class name='hot-item'/>
          <b:elseif cond='data:widget.sectionId == &quot;ft-post&quot;'/>
          <b:class name='GalaxyPSpeedArea'/>
          <b:else/>
          <b:class expr:name='data:i == 0 ? &quot;popular-post post gaint-post&quot; : &quot;popular-post post&quot;'/>
        </b:if>
        <b:class expr:name='&quot;item&quot;+data:i'/>
          <b:if cond='data:widget.sectionId not in [&quot;hot-posts&quot;]'>
          <a class='post-filter-link background-layer image-nos' expr:href='data:post.url.canonical' expr:title='data:post.title ? data:post.title : data:messages.noTitle'>
          <b:if cond='data:post.featuredImage'>
          <img class='snip-thumbnail' expr:alt='data:post.title ? data:post.title : data:messages.noTitle' expr:src='data:post.featuredImage.isYouTube ? resizeImage(data:post.featuredImage.youtubeMaxResDefaultUrl.jsonEscaped, 680) : resizeImage(data:post.featuredImage, 680)'/>
          <b:else/>
          <img class='snip-thumbnail' expr:alt='data:post.title ? data:post.title : data:messages.noTitle' src='https://4.bp.blogspot.com/-O3EpVMWcoKw/WxY6-6I4--I/AAAAAAAAB2s/KzC0FqUQtkMdw7VzT6oOR_8vbZO6EJc-ACK4BGAYYCw/w680/nth.png'/>
          </b:if><b:class expr:name='data:post.featuredImage.isYouTube ? &quot;video-nos&quot; : &quot;image-nos&quot;'/>
          </a>
          </b:if>
          <b:if cond='data:widget.sectionId == &quot;ft-post&quot;'>
           <div class='featured-meta'>
          <b:if cond='data:post.labels and ((data:widget.sectionId in [&quot;ft-post&quot;]) or (data:widget.sectionId == &quot;sidebar&quot; and data:i == 0))'><span class='label-news-flex'><data:post.labels.first.name/></span></b:if>
          <h2 class='entry-title vcard'><a expr:href='data:post.url' expr:title='data:post.title' rel='bookmark'><b:eval expr='data:post.title ? data:post.title : data:messages.noTitle'/></a></h2>
           <b:if cond='data:widgets.Blog.first.allBylineItems.timestamp'><div class='post-snip'><span class='post-date'><time class='published' expr:datetime='data:post.date.iso8601'><data:post.date/></time></span></div></b:if>
        </div>
          <b:else/>
          <b:if cond='data:widget.sectionId not in [&quot;ft-post&quot;,&quot;hot-posts&quot;]'>
           <div class='GalaxyPSpeedSet-box'>
          <b:if cond='data:post.labels and ((data:widget.sectionId in [&quot;ft-post&quot;]) or (data:widget.sectionId == &quot;sidebar&quot; and data:i == 0))'><span class='label-news-flex'><data:post.labels.first.name/></span></b:if>
          <h2 class='entry-title vcard'><a expr:href='data:post.url' expr:title='data:post.title' rel='bookmark'><b:eval expr='data:post.title ? data:post.title : data:messages.noTitle'/></a></h2>
           <b:if cond='data:widgets.Blog.first.allBylineItems.timestamp'><div class='post-snip'><span class='post-date'><time class='published' expr:datetime='data:post.date.iso8601'><data:post.date/></time></span></div></b:if>
        </div>
         </b:if>
           <b:if cond='data:widget.sectionId == &quot;hot-posts&quot;'>
          <h2 class='entry-title vcard'><a expr:href='data:post.url' expr:title='data:post.title' rel='bookmark'><b:eval expr='data:post.title ? data:post.title : data:messages.noTitle'/></a></h2>
         </b:if>
           </b:if>
      </div>
    </b:includable>
          <b:includable id='emailPostIcon'/>
          <b:includable id='facebookShare'/>
          <b:includable id='footerBylines'/>
          <b:includable id='googlePlusShare'/>
          <b:includable id='headerByline'/>
          <b:includable id='linkShare'/>
          <b:includable id='otherSharingButton'/>
          <b:includable id='platformShare'/>
          <b:includable id='postAuthor'/>
          <b:includable id='postCommentsLink'/>
          <b:includable id='postJumpLink'/>
          <b:includable id='postLabels'/>
          <b:includable id='postLocation'/>
          <b:includable id='postReactions'/>
          <b:includable id='postShareButtons'/>
          <b:includable id='postTimestamp'/>
          <b:includable id='sharingButton'/>
          <b:includable id='sharingButtonContent'/>
          <b:includable id='sharingButtons'/>
          <b:includable id='sharingButtonsMenu'/>
          <b:includable id='sharingPlatformIcon'/>
          <b:includable id='snippetedPostByline'/>
          <b:includable id='snippetedPostContent'/>
          <b:includable id='snippetedPostThumbnail'/>
          <b:includable id='snippetedPostTitle'/>
          <b:includable id='snippetedPosts'/>
        </b:widget>
      </b:section>
  </b:if>
      </div>
      </div>
       <div class='clearfix'/>
  <!-- Content Wrapper -->
  <div id='center-container'>
    <div class='container outer-container'>
      <!-- Main Wrapper -->
      <main id='feed-view'>
      <b:if cond='data:view.isHomepage'>
       <b:section class='GalaxyPSpeedPro' id='top-NewsPro-main-widget-2' maxwidgets='1' name='Fresh Posts Section' showaddelement='no'>
         <b:widget id='HTML42' locked='false' title='Top Stories' type='HTML' visible='false'>
           <b:widget-settings>
             <b:widget-setting name='content'>megagrid/recent</b:widget-setting>
           </b:widget-settings>
           <b:includable id='main'>
  <b:include name='widget-title'/>
  <div class='widget-content'>
    <data:content/>
  </div>
</b:includable>
         </b:widget>
         <b:widget id='HTML43' locked='false' title='What&apos;s New' type='HTML' visible='false'>
           <b:widget-settings>
             <b:widget-setting name='content'>block/recent</b:widget-setting>
           </b:widget-settings>
           <b:includable id='main'>
  <b:include name='widget-title'/>
  <div class='widget-content'>
    <data:content/>
  </div>
</b:includable>
         </b:widget>
       </b:section>
    <div class='clearfix'/>
  </b:if>
        <b:section class='main' id='main' maxwidgets='1' name='Main Recent Posts' showaddelement='yes'>
          <b:widget id='Blog1' locked='true' title='Blog Posts' type='Blog' version='2' visible='true'>
            <b:widget-settings>
              <b:widget-setting name='showDateHeader'>false</b:widget-setting>
              <b:widget-setting name='commentLabel'>Comments</b:widget-setting>
              <b:widget-setting name='style.textcolor'>#ffffff</b:widget-setting>
              <b:widget-setting name='showShareButtons'>true</b:widget-setting>
              <b:widget-setting name='authorLabel'>by</b:widget-setting>
              <b:widget-setting name='showCommentLink'>false</b:widget-setting>
              <b:widget-setting name='style.urlcolor'>#ffffff</b:widget-setting>
              <b:widget-setting name='showAuthor'>true</b:widget-setting>
              <b:widget-setting name='style.linkcolor'>#ffffff</b:widget-setting>
              <b:widget-setting name='style.unittype'>TextAndImage</b:widget-setting>
              <b:widget-setting name='style.bgcolor'>#ffffff</b:widget-setting>
              <b:widget-setting name='timestampLabel'/>
              <b:widget-setting name='reactionsLabel'/>
              <b:widget-setting name='showAuthorProfile'>true</b:widget-setting>
              <b:widget-setting name='style.layout'>1x1</b:widget-setting>
              <b:widget-setting name='showLabels'>true</b:widget-setting>
              <b:widget-setting name='showLocation'>false</b:widget-setting>
              <b:widget-setting name='postLabelsLabel'>Tags</b:widget-setting>
              <b:widget-setting name='showTimestamp'>true</b:widget-setting>
              <b:widget-setting name='postsPerAd'>1</b:widget-setting>
              <b:widget-setting name='showBacklinks'>false</b:widget-setting>
              <b:widget-setting name='style.bordercolor'>#ffffff</b:widget-setting>
              <b:widget-setting name='showInlineAds'>false</b:widget-setting>
              <b:widget-setting name='showReactions'>false</b:widget-setting>
            </b:widget-settings>
            <b:includable id='main' var='this'>
              <b:include name='searchMessage'/>
              <div class='blog-posts hfeed container'>
                <b:class cond='data:view.isMultipleItems' name='post-filter-wrap'/>
                <b:class cond='data:view.isSingleItem' name='item-post-wrap'/>
                <b:if cond='data:view.isHomepage'>
                  <div class='main-title'><h3 class='title'><span><data:blog.jumpLinkMessage/></span></h3><a class='simple-viewmore' href='/search'><data:messages.showMore/></a></div>
                </b:if>
              <b:if cond='data:view.isMultipleItems and data:posts.empty'><div class='queryEmpty'><data:messages.noResultsFound/></div></b:if>
                <b:tag class='grid-posts' cond='data:view.isMultipleItems' name='div'>
                  <b:loop index='i' values='data:posts' var='post'>
                    <b:include data='post' name='postCommentsAndAd'/>
                  </b:loop>
                </b:tag>
              </div>
              <b:include cond='data:view.isMultipleItems' name='postPaginationNext'/>
              <b:include cond='data:view.isMultipleItems' name='indexBlogPager'/>
              <b:include name='feedLinks'/>
              <b:include name='pikiMessages'/>
            </b:includable>
            <b:includable id='aboutPostAuthor' var='post'>
              <div class='xx0o-authord'>
                <div class='avatar-container'>
                  <b:if cond='data:post.author.authorPhoto.image'>
                     <img class='author-avatar snip-thumbnail' expr:alt='data:post.author.name' expr:src='data:post.author.authorPhoto.image resizeImage 200'/>               <b:else/>
                    <img class='author-avatar' expr:alt='data:post.author.name' src='https://4.bp.blogspot.com/-uCjYgVFIh70/VuOLn-mL7PI/AAAAAAAADUs/Kcu9wJbv790hIo83rI_s7lLW3zkLY01EA/s100/avatar.png'/>
                  </b:if>
                </div>
                <h3 class='author-name'>
                <a expr:alt='data:post.author.name' expr:href='data:post.author.profileUrl' target='_blank'> <data:post.author.name/></a>
                </h3>
                <div class='author-description'>
                <span class='description-alt'><data:post.author.aboutMe/></span>
                <ul class='description-links social-footer social-color-hover'/>
              </div> </div>
            </b:includable>
            <b:includable id='addComments'>
              <a expr:href='data:post.commentsUrl' expr:onclick='data:post.commentsUrlOnclick'>
                <b:message name='messages.postAComment'/>
              </a>
            </b:includable>
            <b:includable id='backLinks' var='post'>
              <b:comment>Disabled</b:comment>
            </b:includable>
            <b:includable id='blogThisShare'>
  <b:comment>Disabled</b:comment>
</b:includable>
            <b:includable id='bylineByName' var='byline'>
  <b:switch var='data:byline.name'>
  <b:case value='share'/>
    <b:include cond='data:post.shareUrl' name='postShareButtons'/>
  <b:case value='comments'/>
    <b:include cond='data:post.allowComments' name='postCommentsLink'/>
  <b:case value='location'/>
    <b:include cond='data:post.location' name='postLocation'/>
  <b:case value='timestamp'/>
    <b:include cond='not data:view.isPage' name='postTimestamp'/>
  <b:case value='author'/>
    <b:include name='postAuthor'/>
  <b:case value='labels'/>
    <b:include cond='data:post.labels' name='postLabels'/>
  <b:case value='icons'/>
    <b:include cond='data:post.emailPostUrl' name='emailPostIcon'/>
  </b:switch>
</b:includable>
            <b:includable id='bylineRegion' var='regionItems'>
  <b:loop values='data:regionItems' var='byline'>
    <b:include data='byline' name='bylineByName'/>
  </b:loop>
</b:includable>
            <b:includable id='commentAuthorAvatar'>
              <div class='avatar-image-container'>
                <img class='author-avatar' expr:src='data:comment.authorAvatarSrc' height='45' width='45'/>
              </div>
            </b:includable>
            <b:includable id='commentDeleteIcon' var='comment'>
              <span expr:class='&quot;item-control &quot; + data:comment.adminClass'>
                <b:if cond='data:showCmtPopup'>
                  <div class='goog-toggle-button'>
                    <div class='goog-inline-block comment-action-icon'/>
                  </div>
                  <b:else/>
                  <a class='comment-delete' expr:href='data:comment.deleteUrl' expr:title='data:messages.deleteComment'>
                    <img src='https://resources.blogblog.com/img/icon_delete13.gif'/>
                  </a>
                </b:if>
              </span>
            </b:includable>
            <b:includable id='commentForm' var='post'>
              <div class='comment-form'>
                <a name='comment-form'/>
                <b:if cond='data:this.messages.blogComment != &quot;&quot;'>
                  <p><data:this.messages.blogComment/></p>
                </b:if>
                <b:include data='post' name='commentFormIframeSrc'/>
                <iframe allowtransparency='allowtransparency' class='blogger-iframe-colorize blogger-comment-from-post' frameborder='0' height='90px' id='comment-editor' name='comment-editor' width='100%'/>
                <data:post.cmtfpIframe/>
                <script type='text/javascript'>
                 window.addEventListener(&quot;scroll&quot;, () =&gt; {BLOG_CMT_createIframe(&#39;<data:post.appRpcRelayPath/>&#39;);}, { once: true });
                

   (adsbygoogle = window.adsbygoogle || []).push({});
  

                <div class='cmt_iframe_holder' expr:data-href='data:post.url.canonical' expr:data-viewtype='data:post.viewType'/>
                <b:if cond='!data:post.embedCommentForm'>
                  <b:include data='post' name='commentsLink'/>
                </b:if>
              </b:if>
            </b:includable>
            <b:includable id='indexBlogPager'>
              <!-- Post Pagination Index -->
              <div class='blog-pager container' id='blog-pager'>
            <b:include cond='data:newerPageUrl' name='previousPageLink'/>
                <b:include cond='data:olderPageUrl' name='nextPageLink'/>
                <b:include cond='data:view.url != data:blog.homepageUrl' name='homePageLink'/>
              </div>
            </b:includable>
            <b:includable id='indexPost' var='post'>
                     	  <div class='post-filter-inside-wrap'>
              <!-- Index Post Content -->
              <b:include data='post' name='postFeaturedImage'/>
              <b:include cond='!data:view.isPage' data='post' name='postCategory'/>
              <div class='GalaxyPSpeedSet-box'>
                <b:include data='post' name='postHeader'/>
              </div>
              </div>
            </b:includable>
            <b:includable id='inlineAd' var='post'>
              <b:comment>Disabled</b:comment>
            </b:includable>
            <b:includable id='itemPost' var='post'>
              <!-- Item Post Content -->
               <div class='post-inner-area'>
              <b:include data='post' name='postMeta'/>
              <b:include data='post' name='postHeader'/>
              <b:include data='post' name='postBody'/>
              <b:include cond='data:view.isPost' data='post' name='footerBylines'/>
              </div>
              <b:include cond='data:view.isPost' data='post' name='postFooter'/>
            </b:includable>
            <b:includable id='linkShare'/>
            <b:includable id='manageComments'>
  <a expr:href='data:post.manageCommentsUrl' expr:onclick='data:post.manageCommentsUrlOnclick'>
    <b:message name='messages.manageComments'/>
  </a>
</b:includable>
            <b:includable id='nextPageLink'>
              <a class='blog-pager-older-link' expr:href='data:olderPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-older-link&quot;' expr:title='data:messages.olderPosts'>
                <data:messages.olderPosts/>
              </a>
            </b:includable>
            <b:includable id='otherSharingButton'/>
            <b:includable id='pikiMessages'>
           <b:tag name='script' type='text/javascript'>
        var pikiMessages = {
        showMore: &quot;<data:messages.showMore/>&quot;,
        noTitle: &quot;<data:messages.noTitle/>&quot;,
        }
       </b:tag>
      </b:includable>
            <b:includable id='platformShare'/>
            <b:includable id='post' var='post'>
              <!-- Post Index -->
              <b:if cond='data:view.isMultipleItems'>
                <b:include data='post' name='indexPost'/>
              </b:if>
              <!-- Post Item -->
              <b:if cond='data:view.isSingleItem'>
                <b:include data='post' name='itemPost'/>
              </b:if>
            </b:includable>
            <b:includable id='postAuthor' var='post'>
            <b:if cond='!data:view.isPage'>
              <!-- Post Author -->
                <span class='post-author' itemprop='name'><data:post.author.name/></span>
                 </b:if>
            </b:includable>
            <b:includable id='postAuthorImage' var='post'>
             <b:if cond='data:post.author.authorPhoto.image and data:allBylineItems.author'>
             <span class='author-image'><img class='snip-thumbnail' expr:src='resizeImage(data:post.author.authorPhoto.image, 70)'/></span>
                  </b:if>
           </b:includable>
            <b:includable id='postBody' var='post'>
              <!-- Post Body Entry Content-->
              <div class='post-body entry-content'>
                  <!-- Ads before post content, if post page. -->
              <b:if cond='data:view.isPost'><div id='bottom-ad-placeholder'/></b:if>
                <data:post.body/>
              </div>
              <!-- Ads after post content, if post page. -->
              <b:if cond='data:view.isPost'><div id='top-ad-placeholder'/></b:if>
                             <span class='post-author vcard'>
                                <b:if cond='data:top.showAuthor'>
                                  <b:if cond='data:post.author.profileUrl'>
                                    <span class='fn' itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person'>
                                      <meta expr:content='data:post.author.profileUrl' itemprop='url'/>
                                      <a expr:href='data:post.author.profileUrl' rel='author' title='author profile'>
                                        <span itemprop='name'>
                                          <data:post.author/>
                                        </span>
                                      </a>
                                    </span>
                                    <b:else/>
                                    <span class='fn' itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person'>
                                      <span itemprop='name'>
                                        <data:post.author/>
                                      </span>
                                    </span>
                                  </b:if>
                                </b:if>
                              </span>
            </b:includable>
            <b:includable id='postBodySnippet' var='post'>
  <b:include data='post' name='postBody'/>
</b:includable>
            <b:includable id='postBreadcrumbs' var='post'>
              <!-- Post Breadcrumbs -->
              <nav id='breadcrumb'><a expr:href='data:blog.homepageUrl'><data:messages.home/></a><b:if cond='data:post.labels'><em class='delimiter'/><a class='b-label' expr:href='data:post.labels.last.url'><data:post.labels.last.name/></a></b:if><em class='delimiter'/><span class='current'><b:eval expr='data:post.title ? data:post.title : data:messages.noTitle'/></span></nav>
              <script type='application/ld+json'>
              {
                &quot;@context&quot;: &quot;http://schema.org&quot;,
                &quot;@type&quot;: &quot;BreadcrumbList&quot;,
                &quot;@id&quot;: &quot;#Breadcrumb&quot;,
                &quot;itemListElement&quot;: [{
                  &quot;@type&quot;: &quot;ListItem&quot;,
                  &quot;position&quot;: 1,
                  &quot;item&quot;: {
                    &quot;name&quot;: &quot;<data:messages.home/>&quot;,
                    &quot;@id&quot;: &quot;<data:blog.homepageUrl.jsonEscaped/>&quot;
                  }
                },{
                  &quot;@type&quot;: &quot;ListItem&quot;,
                  &quot;position&quot;: 2,
                  &quot;item&quot;: {
                    &quot;name&quot;: &quot;<b:if cond='data:post.labels'><data:post.labels.last.name/></b:if>&quot;,
                    &quot;@id&quot;: &quot;<data:post.labels.last.url.jsonEscaped/>&quot;
                  }
                },{
                  &quot;@type&quot;: &quot;ListItem&quot;,
                  &quot;position&quot;: 3,
                  &quot;item&quot;: {
                    &quot;name&quot;: &quot;<data:post.title/>&quot;,
                    &quot;@id&quot;: &quot;<data:post.url.jsonEscaped/>&quot;
                  }
                }]
              }
            
{&quot;@context&quot;:&quot;https://schema.org&quot;,&quot;@type&quot;:&quot;NewsArticle&quot;,&quot;mainEntityOfPage&quot;:{&quot;@type&quot;:&quot;WebPage&quot;,&quot;@id&quot;:&quot;<data:post.url.canonical.jsonEscaped/>&quot;},&quot;headline&quot;:&quot;<data:post.title.jsonEscaped/>&quot;,&quot;description&quot;:&quot;<data:post.snippets.short.jsonEscaped/>&quot;,&quot;image&quot;:[&quot;<data:post.featuredImage.jsonEscaped/>&quot;],&quot;datePublished&quot;:&quot;<data:post.date.iso8601.jsonEscaped/>&quot;,&quot;dateModified&quot;:&quot;<data:post.lastUpdated.iso8601.jsonEscaped/>&quot;,&quot;author&quot;:{&quot;@type&quot;:&quot;Person&quot;,&quot;name&quot;:&quot;<data:post.author.name.jsonEscaped/>&quot;,&quot;url&quot;:&quot;<data:post.url.canonical.jsonEscaped/>&quot;},&quot;publisher&quot;:{&quot;@type&quot;:&quot;Organization&quot;,&quot;name&quot;:&quot;<data:blog.title/>&quot;,&quot;logo&quot;:{&quot;@type&quot;:&quot;ImageObject&quot;,&quot;url&quot;:&quot;https://lh3.googleusercontent.com/ULB6iBuCeTVvSjjjU1A-O8e9ZpVba6uvyhtiWRti_rBAs9yMYOFBujxriJRZ-A=h60&quot;,&quot;width&quot;:206,&quot;height&quot;:60}}}

                 window.addEventListener(&quot;scroll&quot;, () =&gt; {BLOG_CMT_createIframe(&#39;<data:post.appRpcRelayPath/>&#39;);}, { once: true });
                

              <b:template-script inline='true' name='threaded_comments'/>
              <script type='text/javascript'>
                blogger.widgets.blog.initThreadedComments(
                  <data:post.commentJso/>,
                  <data:post.commentMsgs/>,
                  <data:post.commentConfig/>);
              

                var disqus_blogger_current_url = &quot;<data:blog.canonicalUrl/>&quot;;
                if (!disqus_blogger_current_url.length) {
                  disqus_blogger_current_url = &quot;<data:blog.url/>&quot;;
                }
                var disqus_blogger_homepage_url = &quot;<data:blog.homepageUrl/>&quot;;
                var disqus_blogger_canonical_homepage_url = &quot;<data:blog.canonicalHomepageUrl/>&quot;;
              

    function googleTranslateElementInit() {
      new google.translate.TranslateElement({
        pageLanguage: &#39;<b:eval expr='data:blog.locale.language ?: &quot;auto&quot;'/>&#39;,
        autoDisplay: &#39;true&#39;,
        layout: google.translate.TranslateElement.InlineLayout.<data:layout/>
      }, &#39;google_translate_element&#39;);
    }
  

</b:includable>
          </b:widget>
          <b:widget id='HTML5' locked='false' title='' type='HTML' visible='false'>
            <b:widget-settings>
              <b:widget-setting name='content'><![CDATA[<div class="fb-page" data-href="https://www.facebook.com/healthysmoothiesrecipe" data-width="500" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"></div>]]></b:widget-setting>
            </b:widget-settings>
            <b:includable id='main'>
  <b:include name='widget-title'/>
  <div class='widget-content'>
    <data:content/>
  </div>
</b:includable>
          </b:widget>
          <b:widget id='HTML11' locked='false' title='&apos;' type='HTML' visible='false'>
            <b:widget-settings>
              <b:widget-setting name='content'><![CDATA[<a href="https://seranking.com/website-audit.html?ga=3839645&source=banner"><img src="https://promo.seranking.com/promo-banners/3d465c15bbb23200d4270cb2d39d969f.png" width="300" height="250" /></a>]]></b:widget-setting>
            </b:widget-settings>
            <b:includable id='main'>
  <b:include name='widget-title'/>
  <div class='widget-content'>
    <data:content/>
  </div>
</b:includable>
          </b:widget>
          <b:widget id='LinkList76' locked='true' title='Social Plugin' type='LinkList' version='2' visible='true'>
            <b:widget-settings>
              <b:widget-setting name='link-3'>https://www.healthysmoothie.blog/feeds/posts/default?alt=rss</b:widget-setting>
              <b:widget-setting name='sorting'>NONE</b:widget-setting>
              <b:widget-setting name='text-1'>pinterest</b:widget-setting>
              <b:widget-setting name='link-1'>https://in.pinterest.com/Healthysmoothierecipe/recipe-card/</b:widget-setting>
              <b:widget-setting name='text-0'>facebook</b:widget-setting>
              <b:widget-setting name='link-2'>https://www.instagram.com/healthysmoothiesrecipes/</b:widget-setting>
              <b:widget-setting name='text-3'>rss</b:widget-setting>
              <b:widget-setting name='link-0'>https://www.facebook.com/healthysmoothiesrecipe/</b:widget-setting>
              <b:widget-setting name='text-2'>instagram</b:widget-setting>
            </b:widget-settings>
            <b:includable id='main'>
  <b:include name='widget-title'/>
  <b:include name='content'/>
</b:includable>
            <b:includable id='content'>
              <div class='widget-content'>
                <ul class='socialFilter social-bg social'>
                  <b:loop values='data:links' var='link'>
                   <li>
                    <a expr:class='data:link.name' expr:href='data:link.target' expr:title='data:link.name' rel='noopener noreferrer' target='_blank'>
                    <data:link.name/>
                    </a>
                    </li>
                    </b:loop>
                </ul>
              </div>
            </b:includable>
          </b:widget>
          <b:widget id='PopularPosts1' locked='false' title='Popular Posts' type='PopularPosts' version='2' visible='false'>
            <b:widget-settings>
              <b:widget-setting name='numItemsToShow'>5</b:widget-setting>
              <b:widget-setting name='showThumbnails'>false</b:widget-setting>
              <b:widget-setting name='showSnippets'>false</b:widget-setting>
              <b:widget-setting name='timeRange'>LAST_MONTH</b:widget-setting>
            </b:widget-settings>
            <b:includable id='main' var='this'>
      <b:include name='widget-title'/>
      <div class='widget-content'>
        <b:if cond='data:widget.sectionId == &quot;hot-posts&quot;'>
              <b:loop index='i' values='data:posts' var='post'>
                <b:include data='post' name='content'/>
              </b:loop>
          <b:elseif cond='data:widget.sectionId == &quot;ft-post&quot;'/>
          <div class='GalaxyPSpeed-holds'>
            <b:loop index='i' values='data:posts' var='post'>
              <b:include cond='data:i in [0,1,2,3,4]' data='post' name='content'/>
            </b:loop>
          </div>
          <b:else/>
          <b:class name='sidebar-posts'/>
          <b:loop index='i' values='data:posts' var='post'>
            <b:include data='post' name='content'/>
          </b:loop>
        </b:if>
      </div>
    </b:includable>
            <b:includable id='blogThisShare'/>
            <b:includable id='bylineByName'/>
            <b:includable id='bylineRegion'/>
            <b:includable id='commentsLink'/>
            <b:includable id='commentsLinkIframe'/>
            <b:includable id='content' var='post'>
      <div>
        <b:if cond='data:widget.sectionId == &quot;hot-posts&quot;'>
          <b:class name='hot-item'/>
          <b:elseif cond='data:widget.sectionId == &quot;ft-post&quot;'/>
          <b:class name='GalaxyPSpeedArea'/>
          <b:else/>
          <b:class expr:name='data:i == 0 ? &quot;popular-post post gaint-post&quot; : &quot;popular-post post&quot;'/>
        </b:if>
        <b:class expr:name='&quot;item&quot;+data:i'/>
          <b:if cond='data:widget.sectionId not in [&quot;hot-posts&quot;]'>
          <a class='post-filter-link background-layer image-nos' expr:href='data:post.url.canonical' expr:title='data:post.title ? data:post.title : data:messages.noTitle'>
          <b:if cond='data:post.featuredImage'>
          <img class='snip-thumbnail' expr:alt='data:post.title ? data:post.title : data:messages.noTitle' expr:src='data:post.featuredImage.isYouTube ? resizeImage(data:post.featuredImage.youtubeMaxResDefaultUrl.jsonEscaped, 680) : resizeImage(data:post.featuredImage, 680)'/>
          <b:else/>
          <img class='snip-thumbnail' expr:alt='data:post.title ? data:post.title : data:messages.noTitle' src='https://4.bp.blogspot.com/-O3EpVMWcoKw/WxY6-6I4--I/AAAAAAAAB2s/KzC0FqUQtkMdw7VzT6oOR_8vbZO6EJc-ACK4BGAYYCw/w680/nth.png'/>
          </b:if><b:class expr:name='data:post.featuredImage.isYouTube ? &quot;video-nos&quot; : &quot;image-nos&quot;'/>
          </a>
          </b:if>
          <b:if cond='data:widget.sectionId == &quot;ft-post&quot;'>
           <div class='featured-meta'>
          <b:if cond='data:post.labels and ((data:widget.sectionId in [&quot;ft-post&quot;]) or (data:widget.sectionId == &quot;sidebar&quot; and data:i == 0))'><span class='label-news-flex'><data:post.labels.first.name/></span></b:if>
          <h2 class='entry-title vcard'><a expr:href='data:post.url' expr:title='data:post.title' rel='bookmark'><b:eval expr='data:post.title ? data:post.title : data:messages.noTitle'/></a></h2>
           <b:if cond='data:widgets.Blog.first.allBylineItems.timestamp'><div class='post-snip'><span class='post-date'><time class='published' expr:datetime='data:post.date.iso8601'><data:post.date/></time></span></div></b:if>
        </div>
          <b:else/>
          <b:if cond='data:widget.sectionId not in [&quot;ft-post&quot;,&quot;hot-posts&quot;]'>
           <div class='GalaxyPSpeedSet-box'>
          <b:if cond='data:post.labels and ((data:widget.sectionId in [&quot;ft-post&quot;]) or (data:widget.sectionId == &quot;sidebar&quot; and data:i == 0))'><span class='label-news-flex'><data:post.labels.first.name/></span></b:if>
          <h2 class='entry-title vcard'><a expr:href='data:post.url' expr:title='data:post.title' rel='bookmark'><b:eval expr='data:post.title ? data:post.title : data:messages.noTitle'/></a></h2>
           <b:if cond='data:widgets.Blog.first.allBylineItems.timestamp'><div class='post-snip'><span class='post-date'><time class='published' expr:datetime='data:post.date.iso8601'><data:post.date/></time></span></div></b:if>
        </div>
         </b:if>
           <b:if cond='data:widget.sectionId == &quot;hot-posts&quot;'>
          <h2 class='entry-title vcard'><a expr:href='data:post.url' expr:title='data:post.title' rel='bookmark'><b:eval expr='data:post.title ? data:post.title : data:messages.noTitle'/></a></h2>
         </b:if>
           </b:if>

      </div>
    </b:includable>
            <b:includable id='emailPostIcon'/>
            <b:includable id='facebookShare'/>
            <b:includable id='footerBylines'/>
            <b:includable id='googlePlusShare'/>
            <b:includable id='headerByline'/>
            <b:includable id='linkShare'/>
            <b:includable id='otherSharingButton'/>
            <b:includable id='platformShare'/>
            <b:includable id='postAuthor'/>
            <b:includable id='postCommentsLink'/>
            <b:includable id='postJumpLink'/>
            <b:includable id='postLabels'/>
            <b:includable id='postLocation'/>
            <b:includable id='postReactions'/>
            <b:includable id='postShareButtons'/>
            <b:includable id='postTimestamp'/>
            <b:includable id='sharingButton'/>
            <b:includable id='sharingButtonContent'/>
            <b:includable id='sharingButtons'/>
            <b:includable id='sharingButtonsMenu'/>
            <b:includable id='sharingPlatformIcon'/>
            <b:includable id='snippetedPostByline'/>
            <b:includable id='snippetedPostContent'/>
            <b:includable id='snippetedPostThumbnail'/>
            <b:includable id='snippetedPostTitle'/>
            <b:includable id='snippetedPosts'/>
          </b:widget>
          <b:widget id='Label2' locked='false' title='Labels' type='Label' visible='true'>
            <b:widget-settings>
              <b:widget-setting name='sorting'>ALPHA</b:widget-setting>
              <b:widget-setting name='display'>LIST</b:widget-setting>
              <b:widget-setting name='selectedLabelsList'>Ayurvedic smoothie,Breakfast smoothie,Dessert smoothie bowl,Fruit Smoothie,Green Smoothie,Healthy Smoothie,Kids Smoothie,Low-Calorie Smoothie,dessert smoothie,dessert smoothie recipe,detox smoothie,diet smoothie,low sugar smoothie,meal replacement,post workout smoothies,pre workout smoothie</b:widget-setting>
              <b:widget-setting name='showType'>USER_SELECTED</b:widget-setting>
              <b:widget-setting name='showFreqNumbers'>true</b:widget-setting>
            </b:widget-settings>
            <b:includable id='main' var='this'>
      <b:include name='widget-title'/>
      <b:include name='content'/>
    </b:includable>
            <b:includable id='cloud'>
  <b:loop values='data:labels' var='label'>
    <span class='label-size'>
      <b:class expr:name='&quot;label-size-&quot; + data:label.cssSize'/>
      <a class='label-name' expr:href='data:label.url'>
        <data:label.name/>
        <b:if cond='data:this.showFreqNumbers'>
          <span class='label-count'><data:label.count/></span>
        </b:if>
      </a>
    </span>
  </b:loop>
</b:includable>
            <b:includable id='content'>
      <div class='widget-content'>
        <b:class expr:name='data:this.display + &quot;-label&quot;'/>
        <b:include cond='data:this.display == &quot;list&quot;' name='list'/>
        <b:include cond='data:this.display == &quot;cloud&quot;' name='list'/>
      </div>
    </b:includable>
            <b:includable id='list'>
      <ul>
        <b:loop values='data:labels' var='label'>
          <li>
            <a class='label-name' expr:href='data:label.url'>
              <data:label.name/>
              <b:if cond='data:this.showFreqNumbers'>
                <span class='label-count'><data:label.count/></span>
              </b:if>
            </a>
          </li>
        </b:loop>
      </ul>
    </b:includable>
          </b:widget>
          <b:widget id='HTML14' locked='false' title='&apos;' type='HTML' visible='false'>
            <b:widget-settings>
              <b:widget-setting name='content'><![CDATA[<a href="https://seranking.com/?ga=3839645&source=banner"><img src="https://promo.seranking.com/promo-banners/97e6e5684bc712bbeeb89e5bd51c8667.png" width="240" height="400" /></a>]]></b:widget-setting>
            </b:widget-settings>
            <b:includable id='main'>
  <b:include name='widget-title'/>
  <div class='widget-content'>
    <data:content/>
  </div>
</b:includable>
          </b:widget>
          <b:widget id='HTML19' locked='false' title='Most Recent' type='HTML' visible='true'>
            <b:widget-settings>
              <b:widget-setting name='content'>4/sidebar/recent</b:widget-setting>
            </b:widget-settings>
            <b:includable id='main'>
  <b:include name='widget-title'/>
  <div class='widget-content'>
    <data:content/>
  </div>
</b:includable>
          </b:widget>
          <b:widget id='HTML12' locked='false' title='Calories calculate' type='HTML' visible='false'>
            <b:widget-settings>
              <b:widget-setting name='content'><![CDATA[<div id="inch-calculator-icw" data-ct="calorie_intake" data-cw="100%" data-ch="900" data-cv="MTE3MjQ5ODc4NzA="><div id="inch-calculator-icwh">Calorie Calculator</div><div id="inch-calculator-icwf"><a id="inch-calculator-icwi" href="https://www.inchcalculator.com/calorie-calculator/" target="_blank"><img id="inch-calculator-icwl" src="https://cdn.inchcalculator.com/e/inch-calculator-logo-tiny.png" alt="Inch Calculator Logo" width="40" height="49" /><span id="inch-calculator-icwb">Inch Calculator</span></a></div></div><script src="https://cdn.inchcalculator.com/e/widgets.min.js" async="async" defer="defer" >

<!-- Template LocalHost Plugins -->
<b:tag name='script' type='text/javascript'>
//<![CDATA[
 <!-- jQuery replaceText | http://benalman.com/projects/jquery-replacetext-plugin/ -->
(function($){$.fn.replaceText=function(b,a,c){return this.each(function(){var f=this.firstChild,g,e,d=[];if(f){do{if(f.nodeType===3){g=f.nodeValue;e=g.replace(b,a);if(e!==g){if(!c&&/</.test(e)){$(f).before(e);d.push(f)}else{f.nodeValue=e}}}}while(f=f.nextSibling)}d.length&&$(d).remove()})}})(jQuery);

<!-- Theia Sticky Sidebar | v1.7.0 - https://github.com/WeCodePixels/theia-sticky-sidebar -->
!function(i){i.fn.theiaStickySidebar=function(t){function e(t,e){return!0===t.initialized||!(i("body").width()<t.minWidth)&&(function(t,e){t.initialized=!0,0===i("#theia-sticky-sidebar-stylesheet-"+t.namespace).length&&i("head").append(i('<style id="theia-sticky-sidebar-stylesheet-'+t.namespace+'">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>'));e.each(function(){var e={};if(e.sidebar=i(this),e.options=t||{},e.container=i(e.options.containerSelector),0==e.container.length&&(e.container=e.sidebar.parent()),e.sidebar.parents().css("-webkit-transform","none"),e.sidebar.css({position:e.options.defaultPosition,overflow:"visible","-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"}),e.stickySidebar=e.sidebar.find(".theiaStickySidebar"),0==e.stickySidebar.length){var a=/(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;e.sidebar.find("script").filter(function(i,t){return 0===t.type.length||t.type.match(a)}).remove(),e.stickySidebar=i("<div>").addClass("theiaStickySidebar").append(e.sidebar.children()),e.sidebar.append(e.stickySidebar)}e.marginBottom=parseInt(e.sidebar.css("margin-bottom")),e.paddingTop=parseInt(e.sidebar.css("padding-top")),e.paddingBottom=parseInt(e.sidebar.css("padding-bottom"));var n=e.stickySidebar.offset().top,s=e.stickySidebar.outerHeight();function d(){e.fixedScrollTop=0,e.sidebar.css({"min-height":"1px"}),e.stickySidebar.css({position:"static",width:"",transform:"none"})}e.stickySidebar.css("padding-top",1),e.stickySidebar.css("padding-bottom",1),n-=e.stickySidebar.offset().top,s=e.stickySidebar.outerHeight()-s-n,0==n?(e.stickySidebar.css("padding-top",0),e.stickySidebarPaddingTop=0):e.stickySidebarPaddingTop=1,0==s?(e.stickySidebar.css("padding-bottom",0),e.stickySidebarPaddingBottom=0):e.stickySidebarPaddingBottom=1,e.previousScrollTop=null,e.fixedScrollTop=0,d(),e.onScroll=function(e){if(e.stickySidebar.is(":visible"))if(i("body").width()<e.options.minWidth)d();else{if(e.options.disableOnResponsiveLayouts){var a=e.sidebar.outerWidth("none"==e.sidebar.css("float"));if(a+50>e.container.width())return void d()}var n,s,r=i(document).scrollTop(),c="static";if(r>=e.sidebar.offset().top+(e.paddingTop-e.options.additionalMarginTop)){var p,b=e.paddingTop+t.additionalMarginTop,l=e.paddingBottom+e.marginBottom+t.additionalMarginBottom,f=e.sidebar.offset().top,h=e.sidebar.offset().top+(n=e.container,s=n.height(),n.children().each(function(){s=Math.max(s,i(this).height())}),s),g=0+t.additionalMarginTop,S=e.stickySidebar.outerHeight()+b+l<i(window).height();p=S?g+e.stickySidebar.outerHeight():i(window).height()-e.marginBottom-e.paddingBottom-t.additionalMarginBottom;var u=f-r+e.paddingTop,m=h-r-e.paddingBottom-e.marginBottom,y=e.stickySidebar.offset().top-r,k=e.previousScrollTop-r;"fixed"==e.stickySidebar.css("position")&&"modern"==e.options.sidebarBehavior&&(y+=k),"stick-to-top"==e.options.sidebarBehavior&&(y=t.additionalMarginTop),"stick-to-bottom"==e.options.sidebarBehavior&&(y=p-e.stickySidebar.outerHeight()),y=k>0?Math.min(y,g):Math.max(y,p-e.stickySidebar.outerHeight()),y=Math.max(y,u),y=Math.min(y,m-e.stickySidebar.outerHeight());var v=e.container.height()==e.stickySidebar.outerHeight();c=(v||y!=g)&&(v||y!=p-e.stickySidebar.outerHeight())?r+y-e.sidebar.offset().top-e.paddingTop<=t.additionalMarginTop?"static":"absolute":"fixed"}if("fixed"==c){var x=i(document).scrollLeft();e.stickySidebar.css({position:"fixed",width:o(e.stickySidebar)+"px",transform:"translateY("+y+"px)",left:e.sidebar.offset().left+parseInt(e.sidebar.css("padding-left"))-x+"px",top:"0px"})}else if("absolute"==c){var T={};"absolute"!=e.stickySidebar.css("position")&&(T.position="absolute",T.transform="translateY("+(r+y-e.sidebar.offset().top-e.stickySidebarPaddingTop-e.stickySidebarPaddingBottom)+"px)",T.top="0px"),T.width=o(e.stickySidebar)+"px",T.left="",e.stickySidebar.css(T)}else"static"==c&&d();"static"!=c&&1==e.options.updateSidebarHeight&&e.sidebar.css({"min-height":e.stickySidebar.outerHeight()+e.stickySidebar.offset().top-e.sidebar.offset().top+e.paddingBottom}),e.previousScrollTop=r}},e.onScroll(e),i(document).on("scroll."+e.options.namespace,function(i){return function(){i.onScroll(i)}}(e)),i(window).on("resize."+e.options.namespace,function(i){return function(){i.stickySidebar.css({position:"static"}),i.onScroll(i)}}(e)),"undefined"!=typeof ResizeSensor&&new ResizeSensor(e.stickySidebar[0],function(i){return function(){i.onScroll(i)}}(e))})}(t,e),!0)}function o(i){var t;try{t=i[0].getBoundingClientRect().width}catch(i){}return void 0===t&&(t=i.width()),t}return(t=i.extend({containerSelector:"",additionalMarginTop:0,additionalMarginBottom:0,updateSidebarHeight:!0,minWidth:0,disableOnResponsiveLayouts:!0,sidebarBehavior:"modern",defaultPosition:"relative",namespace:"TSS"},t)).additionalMarginTop=parseInt(t.additionalMarginTop)||0,t.additionalMarginBottom=parseInt(t.additionalMarginBottom)||0,function(t,o){e(t,o)||(console.log("TSS: Body width smaller than options.minWidth. Init is delayed."),i(document).on("scroll."+t.namespace,function(t,o){return function(a){var n=e(t,o);n&&i(this).unbind(a)}}(t,o)),i(window).on("resize."+t.namespace,function(t,o){return function(a){var n=e(t,o);n&&i(this).unbind(a)}}(t,o)))}(t,this),this}}(jQuery);

<!-- Table of Contents jQuery Plugin - jquery.toc | https://github.com/ndabas/toc -->
!function(a){"use strict";var b=function(b){return this.each(function(){var c,d,e=a(this),f=e.data(),g=[e],h=this.tagName,i=0;c=a.extend({content:"body",headings:"h1,h2,h3"},{content:f.toc||void 0,headings:f.tocHeadings||void 0},b),d=c.headings.split(","),a(c.content).find(c.headings).attr("id",function(b,c){var d=function(a){0===a.length&&(a="?");for(var b=a.replace(/\s+/g,"_"),c="",d=1;null!==document.getElementById(b+c);)c="_"+d++;return b+c};return c||d(a(this).text())}).each(function(){var b=a(this),c=a.map(d,function(a,c){return b.is(a)?c:void 0})[0];if(c>i){var e=g[0].children("li:last")[0];e&&g.unshift(a("<"+h+"/>").appendTo(e))}else g.splice(0,Math.min(i-c,Math.max(g.length-1,0)));a("<li/>").appendTo(g[0]).append(a("<a/>").text(b.text()).attr("href","#"+b.attr("id"))),i=c})})},c=a.fn.toc;a.fn.toc=b,a.fn.toc.noConflict=function(){return a.fn.toc=c,this},a(function(){b.call(a("[data-toc]"))})}(window.jQuery);

 <!-- Menuiki jQuery Plugin V2.0.0 | https://pikitemplates/ -->
!function(e){e.fn.Menuiki=function(){var n=this;n.find(".widget").addClass("show-menu"),n.each(function(){a=e(this),d=a.find(".LinkList ul > li").children("a"),g=d.length;for(var t=0;t<2;t++)for(var u=0;u<g;u++){let e=d.eq(u),n=e.text(),a=d.eq(u+1).text();if("_"!==n.charAt(0)&&"_"===a.charAt(0)){var i=e.parent();i.append(0==t?'<ul class="sub-menu m-sub"/>':'<ul class="sub-menu2 m-sub"/>')}"_"===n.charAt(0)&&(e.text(n.replace("_","")),e.parent().appendTo(i.children(0==t?".sub-menu":".sub-menu2")))}n.find(".LinkList ul li ul").parent("li").addClass("sub-tab")})}}(jQuery);

<!-- Lazy Loading jQuery Plugin | https://pikitemplates/ -->
!function(t){t.fn.lazyimg=function(){return this.each(function(){var n=t(this),r=t(window),o=n.attr("src"),a="w"+Math.round(n.width()+n.width()/10)+"-h"+Math.round(n.height()+n.height()/10)+"-p-k-no-nu";o.match("/img/a")&&(o.match("=")?(parts=o.split("="),o=parts[1]&&""!=parts[1].trim()?parts[0]+"=w74-h74-p-k-no-nu":o):o+="=w74-h74-p-k-no-nu");var i={"/s74-c":["/s74-c","/"+a],"/w74-h":["/w74-h74-p-k-no-nu","/"+a],"=w74-h":["=w74-h74-p-k-no-nu","="+a]},h=o;for(var s in i)if(o.match(s)){h=o.replace(i[s][0],i[s][1]);break}n.is(":hidden")||r.on("load resize scroll",function t(){r.scrollTop()+r.height()>=n.offset().top&&(r.off("load resize scroll",t),n.attr("src",""+h).addClass("lazy-img"))}).trigger("scroll")})}}(jQuery);

<!-- Lazy Ticker jQuery Plugin - jquery.toc | https://pikitemplates/ -->
$(function(n){n.fn.lazyticker=function(){return this.each(function(){var n,t=0,c=$(".xx0xx-bticker .GalaxyTicker");function e(){null!=n&&(clearInterval(n),n=null)}function i(){n=setInterval(function(){a(1)},5e3)}function a(n){var e,i,a;c.not(t).removeClass("active"),e=t,i=n,a=c.length,t=(e+i+a)%a,c.eq(t).addClass("active")}jQuery(function(){c.first().addClass("active"),i(),$(".next").click(function(n){e(),a(1),i()}),$(".prev").click(function(n){e(),a(-1),i()})})})}});

//]]>
</b:tag>
<!-- Piki Templates Under License Creative Common Rights (CC-3.0) JS Copyrighted -->
<b:tag name='script' type='text/javascript'>
//<![CDATA[
function _0x4587(t,n){var e=_0x1fb2();return(_0x4587=function(t,n){return e[t-=120]})(t,n)}function _0x1fb2(){var t=["</a></h2></div></div>","GalaxyNew","&max-results=","a.prev-post-link","getElementsByTagName","?alt=json-in-script&max-results=","(normal-bt)","RAPYK","(link)","qgOGQ",'</a></h2><div class="post-snip"><span class="post-author  ">',"Jrswt","www.youtube.com","aTrNQ","fadeIn",".post-body","scroll","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=",'<div class="fb-comments" data-width="100%" data-href="',"jsonp","(download)","#ContactForm1","Sedhy","show",".post-next a .xx0o-postnav-inner p","click","querySelector","vYoOd","lastIndexOf","/w74-h74-p-k-no-nu","PCoDv","dark","<div>","AZNBP","3018344RLVFsB","a#pikitemplates:visible",'<div class="main-button demo">',".LSpeed-filter ul li a","toc",'<div class="GalaxyPSpeedWorks">','<div class="GalaxyPSpeed-holds">',".show-hid a","(caps)","html, body",'" href="',"RdfMC","img",'<div class="GalaxyNew-wraps-sec">','<div class="GalaxyPSpeedBot"><span class="label-news-flex-anywhere">',"uXnHT","</a>","fsyse","#post-placeholder",'<div class="main-button open">',"NMRFd","awUqp",",height=","add","remove",".search-button, .search-container-close",'<div class="alert-message success">',"(info)","block","noTitle","scrollTop","(toc)","tlvEf",".HTML","</span></div></div></div></div>",'</span><div class="hero-feat-box"><h2 class="entry-title"><a href="',"</p></div></a></div>","YznIe","PhDIq","Uncategorized","h2,h3,h4","wrap",'<div class="GalaxyPSpeedSet"><div class="GalaxyPSpeedSet-thumb"><a class="post-filter-link ',"biNZk",'<div class="GalaxyPSpeed-open"><span class="error-status"><b>Error 505:</b> The Server is unavailable to connect ! {Refresh Try Again}</span></div>',".xx0o-postnav","IuxNs","fixed-nos",",top=","type-","ioqvo",'<div class="main-button cart">',"visibility:visible!important;opacity:1!important;position:relative!important;z-index:1!important;text-indent: 1px!important;font-size:14px!important;color:#2791e7!important;margin:0!important;",".before-text","ajax","slideToggle","</a></h2></div>",".xx0xx-wraprelated","(alert-success)","comments-system-default","p.comment-content",'"><a href="',"TQmIj","jFUax","#LSpeed-filter li a","nVqLO","#comments","#LSpeed-filter",".post-body iframe","YApJN",".author-description a",'<div class="xx0xx-bticker">','"><img class="snip-thumbnail lazy-img" alt="',"#mainContent","DzFGs","rZLKR","BILbX","a#pikitemplates",'<div class="main-button info">',"#xxqo-tociki",'<span class="error-status"><b>Error 404:</b> Results Not Found Use Correct <b>/Label</b> or <b>/recent</b> or <b>/random</b> code to Show Posts</span>',"YBBtv",'<div class="main-button buy">',".related-tag","addClass","csUPT","yfeuQ","4480917cdGGyL",'<span class="error-status"><b>Error 400:</b> Wrong Shortcut code Please Use Correct Format like <b>6/featured/label</b>  to Show Posts ASAP !</span>',"#menu-top ul.nav1","7941aXfskU",'<div class="GalaxyNewsTested">',"TrtEu",'<div class="main-button button">',"replaceText","https://www.pikitemplates.com/",".blog-post-comments","appendChild","Ffuwy","a.next-post-link","#footer-wrapper","<img",'<div class="glax-hero">','<div class="GalaxyPSpeedMy"><div class="mega-menu-thumb"><div class="post-filter-link ',"sgrid","#xxqo-tociki li a","(large-bt)","top","866aYBpaa","#upper-ad .widget","GvXqY","removeClass","HqZQu","match",'</h2><p class="comment-snippet">','<div class="GalaxyPSpeed-open"><div class="GalaxyPSpeedMys">',"kyryY",'"/></a></div><div class="GalaxyPSpeedSet-box"><h2 class="entry-title"><a href="',"gd$image","Menuiki","#xx0xx-promenu","ovSvq","random","EAQGX","XBldH","html,body","text","ExfZy",".xxqo-tociki-title","ZAErM",'<div class="xxqo-tociki-pro"><div class="xxqo-tociki-inner"><a href="javascript:;" class="xxqo-tociki-title" role="button" title="Table of Contents"><span class="xxqo-tociki-title-text">',"jBSgC","(ads1)","191915DBEFoh",'<div id="disqus_thread"/>',".GalaxyPSpeedTic .HTML .widget-content,.GalaxyPSpeedPro .HTML .widget-content,.sidebar .HTML .widget-content","#xxqo-menuaflex-list",'<div class="GalaxyPart"><div class="GalaxyPart-thumb"><a class="post-filter-link background-layer ',"eEQpc","aHviA","parent","showMore","/search","height","zIQFH","(buy)","join","Twebg",".widget-title","Htitj","focus",".mobile-GalaxyNew","LLtrS","trim","(left-sidebar)","> .m-sub","head","label",'" src="','</a></h2><div class="post-snip"><p class="post-snippet">',"</span>",'"/></a><div class="featured-meta"><span class="label-news-flex">',"#new-bottom-ad-placeholder","jVURG","27126882HmSVAp","utxjY",'<div class="main-button download">',"theiaStickySidebar","i.ytimg.com","IpktL","attr","open","async",".blog-post h1.entry-title","/maxresdefault.","LUMQG","indexOf","jKvaJ","additionalMarginTop",'<div class="GalaxyPSpeed-open"><span class="error-status"><b>Error 404:</b> Results Not Found Use Correct <b>/Label</b> or <b>/recent</b> or <b>/random</b> code to Show Posts</span></div>',"OyRMe","zpdKM","find","ipZUy","<style>.item-view #feed-view{float:right}.item-view #sidebar-container{float:left}</style>","YiEXj","name","/feeds/comments/default?alt=json&max-results=",'"><a class="snip-thumbnail lazy-img background-layer" href="',"round",'<div class="GalaxyPost-posts item',"split","/feeds/posts/default?alt=json-in-script&max-results=","jrfUb","getItem",'</p><span class="post-author">',"</div></div>","media$thumbnail","title",".backTop",".xx0xx-promenu li",'"><div class="GalaxyPost-img"><a class="post-filter-link background-layer '," open-iki","animate","/default.","AcRxv","UWhnW","#main-ads-post .widget",".PopularPosts .post-filter-link .snip-thumbnail,.FeaturedPost  .post-filter-link .snip-thumbnail,.post-filter .post-filter-link .snip-thumbnail,.avatar-container .snip-thumbnail, .author-image .snip-thumbnail, .comment-image .snip-thumbnail","#bottom-ad-placeholder",".author-description span li",'<span class="error-status"><b>Error 505:</b> The Server is unavailable to connect ! {Refresh Try Again}</span>','"/></a></div><div class="featured-meta"><span class="label-news-flex">',"OefkS","gNsgf",".post-body strike","first","sub-tab","mode","megagrid","(alert-warning)","FyMNA","(alert-error)",'"><span class="comment-image"><img class="snip-thumbnail" src="',"mpYuX","vmvgP","image-nos","PbLRt",'<div class="contact-form"/>',"(alert-passed)",".description-links","a:first",'<div class="video-frame"/>',"</span></div></div></div>","SwzZY","clone","(open)","href","8485122fqLFbA",".contact-form","OtmhG","length","appendTo",'<a class="simple-viewmore" href="/search/label/',"additionalMarginBottom","featured","fadeOut","/w55-h55-p-k-no-nu","OESGQ","1579nZWDFk","GalaxyNew-open","/feeds/posts/default/-/","width",".share-GalaxyNew .window-piki","createElement","slnWA",".LSpeed-filter ul .mega-menu","QyyeI",'<div class="glax-list"><div class="glax-img"><a class="post-filter-link ',".GalaxyPSpeedTic",'</a></h2><div class="post-snip"><span class=" post-author">','<div id="new-top-ad-placeholder"/>','"/></a></div><div class="piki-hero-box"><h2 class="entry-title"><a href="',"alternate",'<pre class="code-box">','<div class="button small-bt">','<div class="alert-message passed">',"716WYHIeP","sidebar",'<div class="alert-message error">',"replace","<ul>","style",'<div class="GalaxyPost-post item',"lSUyX",'<li class="','<div class="button large-bt">',"#top-ad-placeholder","#Menu-GalaxyNew .pro-GalaxyNew","cxhpt","oXToB","content","LuDRM","lazyimg","screen","JmDZt",'<a class="simple-viewmore" href="/search">',"feed",".show-Globecontainer, .hide-LSpeed-filter, .overlay","XXPgX",'<div class="comment-list">',".xx0o-authord .author-description span a","comments-system-",'<div class="main-button link">',"drop-down","Blogger Templates","(cart)","(small-bt)",".dark-toggle","sOvsR","closest","QsKXH","...",'</span><h2 class="entry-title"><a href="',"#lower-ad .widget","headings",".widget-content",'<div class="video-frame"><iframe id="youtube" width="100%" height="360" src="https://www.youtube.com/embed/$1" frameborder="0" allow="autoplay; accelerometer; gyroscope; encrypted-media; picture-in-picture" allowfullscreen></iframe></div>',"sXrUG","type","classList",'<img src="$1"/>',"</ul>","PboMk",'<div class="GalaxyTicker"><h2 class="entry-title"><a href="','<div class="Galaxy-css"><a class="Galaxy-link" href="',"comments","hide","TLGHW",".GlobeGalaxy .HTML .widget-content,.GalaxyPSpeedPro .HTML .widget-content",'"><img class="snip-thumbnail" alt="',"CzsBj","#feed-view, #sidebar-container",'<span class="firstword">',"oQeFn","entry","nNFZE","OyDJi","(right-sidebar)","floor","zrVSX","html",'"><a class="post-filter-link background-layer ',"rel","SCabT",".disqus.com/embed.js",".social-GalaxyNew","data",",left=","blogger","(code-box)",'" title="',"show-hidden","VUthB","lazyticker","open-iki",'</span><span class="post-date">',"Jglyc","term","OVymT","link",'"/></a></div></div><div class="featured-meta"><h2 class="entry-title"><a href="',"/search/label/","ycAIN","jmqOK","owqrO","trending","facebook",'" data-numposts="5"></div>',"setItem","text/javascript","substr",".related-GalaxyNew .widget-title h3",".menu li","JeoQM","each","#social-sec ul.social",'<div class="GalaxyPSpeedArea item',"published","(ads2)","/feeds/posts/default?alt=json-in-script&orderby=updated&start-index=","append","wVrSb","megamenu",'<div class="mydivs-bt"><a class="prev" href="javascript:;" role="button"/><a class="next" href="javascript:;" role="button"/></div>',"target","opened",".share-GalaxyNew","src","NMiLo","toggleClass","sub-tab mega-menu","HhTBZ","JEBiy","disqus","_blank","<style>.item-view #feed-view{width:100%}.item-view #sidebar-container{display:none}</style>","#new-top-ad-placeholder","bNcXP",'<div class="alert-message warning">',"ZdUPm","category","search-container-overlay-show","video-nos","YGYKs",'"/></span><div class="comment-hero"><h2 class="entry-title cmm-title">',"toLowerCase","GET","replaceWith","/s220","visibility:visible!important;opacity:1!important;position:relative!important;z-index:1!important;text-indent: 1px!important;font-size:14px!important;color:#828282!important;margin:0!important;","img.snip-thumbnail","script","(medium-bt)",'</a></h2><div class="post-snip"><span class="post-date">',"</pre>","(demo)",'</span></a><ol id="xxqo-tociki"></ol></div></div>',"TCaHh","(full-width)","recent","edkJA","</div>","body",".post-body blockquote",'" target="_blank"/></li>',"trending || featured || megagrid || comments || sgrid || sidebar || block || related","get","kDHDB",'<div class="loading-icon"/>',"active-search","ntxIf","xIbmm","related",'<div class="button medium-bt">',".search-container-overlay","location","offset","img.youtube.com",'<div id="new-bottom-ad-placeholder"/>','"><div class="GalaxyPost-main-thumb"><a class="post-filter-link ',"nHDko","substring","author","darkmode","(contact-form)",".post-prev a .xx0o-postnav-inner p","url",'</span><div class="GalaxyPSpeedSet-thumb"><a class="post-filter-link ',"<style>.item-view #feed-view{float:left}.item-view #sidebar-container{float:right}</style>","bCMCI"];return(_0x1fb2=function(){return t})()}(function(t,n){function e(t,n,e,r,i){return _0x4587(e-330,i)}function r(t,n,e,r,i){return _0x4587(r-82,n)}function i(t,n,e,r,i){return _0x4587(t- -363,i)}for(var a=_0x1fb2();;)try{if(830764===-parseInt(e(0,0,848,0,632))/1*(-parseInt(i(14,0,0,0,-44))/2)+-parseInt(r(0,239,0,441))/3*(parseInt(i(173,0,0,0,367))/4)+parseInt(e(0,0,732,0,808))/5+-parseInt(e(0,0,837,0,1063))/6+-parseInt(r(0,365,0,438))/7+-parseInt(e(0,0,599,0,460))/8+parseInt(_0x4587(1240-807,1191))/9)break;a.push(a.shift())}catch(t){a.push(a.shift())}})(),$((function(){function t(t){function n(t,n,e,r,i){return _0x4587(i- -684,n)}function e(t,n,e,r,i){return _0x4587(i- -424,r)}function r(t,n,e,r,i){return _0x4587(r-134,e)}function i(t,n,e,r,i){return _0x4587(n-171,i)}function a(t,n,e,r,i){return _0x4587(n-738,e)}if(r(0,0,507,346)===r(0,0,291,346)){var s=$(a(0,1005,1207))[r(0,0,472,259)](t)[r(0,0,395,585)](e(0,0,0,-164,-143))[a(0,1223,1259)]()[n(0,-112,0,0,-245)](n(0,-665,0,0,-512)),o=s[i(0,434,0,0,228)]("/");o||(o=0);var c=s[i(0,434,0,0,668)]("/",o-1);c||(c=0);var u=s[n(0,-405,0,0,-458)](c,o);return(u[e(0,0,0,85,-42)](/((\/s[0-9])|(\/w[0-9]))+/g)||"/d"==u)&&(u=e(0,0,0,-358,-160)),[s[r(0,0,228,360)](0,c),u,s[r(0,0,337,360)](o)][i(0,586,0,0,704)]("")}{const t=_0x304447[a(0,1277,1337)](a(0,1113,1229),"");_0x520095[r(0,0,358,326)](a(0,1283,1299)+t+r(0,0,335,340))}}function n(t,n,e,r,i){return _0x4587(n-664,i)}function r(t,n,e,r,i){return _0x4587(i- -47,e)}function i(t,n){function e(t,n,e,r,i){return _0x4587(r- -229,e)}function r(t,n,e,r,i){return _0x4587(t- -887,e)}function i(t,n,e,r,i){return _0x4587(e- -751,n)}function a(t,n,e,r,i){return _0x4587(e- -127,i)}if(a(0,0,266,0,447)!==i(0,-366,-574))return t[e(0,0,134,153)](r(-450,0,-223))?i(0,-454,-564):e(0,0,39,266);{const t=_0x309944[i(0,-133,-212)](r(-632,0,-415),"");_0x1db010[a(0,0,65,0,5)](_0x4587(1236-801,1248)+t+a(0,0,79,0,3))}}function a(t,n,e,r,i){return _0x4587(n-732,t)}function s(n,r,a,s){function o(t,n,e,r,i){return _0x4587(t-631,e)}function c(t,n,e,r,i){return _0x4587(e-219,r)}function u(t,n,e,r,i){return _0x4587(e- -89,r)}function f(t,n,e,r,i){return _0x4587(i-473,t)}function l(t,n,e,r,i){return _0x4587(i-286,e)}if(u(0,0,469,241)===o(1063,0,1057)){var x=_0x3731ca,d=c(0,0,472,407)+_0x57d7f7(_0x4bf800)[f(741,0,0,0,912)](c(0,0,725,765))+f(602,0,0,0,625),_=o(1192,0,1102)+x;c(0,0,352,318)==x?_0x2f95b1(this)[u(0,0,264,442)](_)[u(0,0,169,290)]():u(0,0,89,54)==x?((x=_0x3fd50c[c(0,0,742,660)](u(0,0,107,163)))[c(0,0,797,828)]=u(0,0,65,233),x[f(995,0,0,0,914)]=!0,x[f(653,0,0,0,645)]="//"+_0x198685+f(513,0,0,0,602),(_0x558b74[l(0,0,680,0,525)](l(0,0,721,0,711))[0]||_0x1ef00a[l(0,0,374,0,525)](u(0,0,118,297))[0])[c(0,0,585,602)](x),_0x6d0047(f(791,0,0,0,808))[u(0,0,204,406)](),_0x1cc7cc(this)[u(0,0,76,139)](o(1034,0,1076))[c(0,0,572,793)](_)[f(662,0,0,0,731)]()):o(782,0,607)==x?(_0x28ff28(o(966,0,990))[c(0,0,512,294)](),_0x52f56b(this)[o(796,0,602)](d)[o(984,0,1216)](_)[c(0,0,477,475)]()):l(0,0,1104,0,872)==x?_0x2246c9(this)[l(0,0,1023,0,872)]():_0x5a2469(this)[o(984,0,1220)](u(0,0,239,444))[o(889,0,1006)]()}else{var p="",b=Math[l(0,0,224,0,409)](Math[o(1022,0,1247)]()*r+1);void 0!==a&&(a[f(723,0,0,0,855)](c(0,0,423,612))?p=o(1092,0,1180)+r:a[c(0,0,601,683)](o(1022,0,1154))?p=c(0,0,383,487)+b+l(0,0,597,0,523)+r:a[u(0,0,293,138)](l(0,0,781,0,544))?p=l(0,0,903,0,742)+r:a[l(0,0,730,0,668)](o(1022,0,1038))&&a[u(0,0,293,315)](l(0,0,591,0,490))&&a[l(0,0,834,0,668)](c(0,0,477,446))||(p=u(0,0,431,549)+a+l(0,0,367,0,526)+r)),p[c(0,0,729,493)]>0&&$[c(0,0,542,671)]({type:f(450,0,0,0,664),url:p,cache:!1,dataType:f(767,0,0,0,727),beforeSend:function(t){function e(t,n,e,r,i){return f(e,0,0,0,i- -491)}function r(t,n,e,r,i){return u(0,0,t- -90,r)}function i(t,n,e,r,i){return c(0,0,i- -400,t)}function o(t,n,e,r,i){return f(n,0,0,0,e- -340)}function x(t,n,e,r,i){return l(0,0,t,0,n- -1121)}if(i(509,0,0,0,387)===e(0,0,437,0,550))switch(s){case i(164,0,0,0,-14):n[e(0,0,521,0,335)](e(0,0,305,0,157)),n[o(0,483,584)](e(0,0,368,0,482))[i(31,0,0,0,258)](i(216,0,0,0,325),(function(t,n){function s(t,n,e,i,a){return r(n-266,0,0,i)}function o(t,n,r,i,a){return e(0,0,n,0,i-803)}function c(t,n,e,r,a){return i(n,0,0,0,r- -158)}if(c(0,57,0,111)===o(0,1231,0,1235))return n=o(0,784,0,989)===a?n[o(0,1442,0,1324)](n,s(0,498,0,521)):n[c(0,312,0,200)](n,s(0,233,0,275)+a);{const t=_0x33daa6[(u=932,f=1008,x(u,f-1304))](s(0,578,0,779),"");_0x692e00[c(0,-201,0,-147)](o(0,1456,0,1323)+t+o(0,1169,0,991))}var u,f}));break;case e(0,0,228,0,132):n[o(0,463,258)](i(203,0,0,0,32))[i(411,0,0,0,228)]()[x(-621,-384)](o(0,739,708))[o(0,276,486)](o(0,47,272));break;case e(0,0,313,0,496):case r(309,0,0,341):case e(0,0,220,0,279):case i(486,0,0,0,356):case r(194,0,0,138):case i(544,0,0,0,404):case o(0,562,350):n[r(-54,0,0,38)](o(0,526,346))[e(0,0,417,0,391)]()[o(0,264,486)](x(-736,-517)+s+i(114,0,0,0,290))}else _0x38bf8f[i(347,0,0,0,358)](x(-727,-632),""),_0x57c57b[i(-117,0,0,0,11)](i(49,0,0,0,-1))},complete:function(t){function r(t,n,e,r,i){return f(t,0,0,0,r- -7)}function i(t,n,e,r,i){return l(0,0,t,0,r-656)}function u(t,n,e,r,i){return o(t-140,0,i)}function x(t,n,e,r,i){return c(0,0,i- -142,r)}function d(t,n,e,r,i){return l(0,0,e,0,i- -310)}i(1398,0,0,1261)!==u(1288,0,0,0,1070)?(u(1259,0,0,0,1115)!=s&&r(983,0,0,763)!=s&&i(1298,0,0,1315)!=s||(a[r(724,0,0,848)](u(975,0,0,0,894),i(1348,0,0,1333))?(e=showMoreText,e=""!=e?e:pikiMessages[i(1309,0,0,1352)],n[i(1724,0,0,1511)](i(1361,0,0,1244))[d(0,0,531,0,427)](u(1188,0,0,0,1093))[u(936,0,0,0,1089)](d(0,0,710,0,531)+e+u(1056,0,0,0,1131))):(e=showMoreText,e=""!=e?e:pikiMessages[r(982,0,0,876)],n[d(0,0,457,0,545)](i(1207,0,0,1244))[x(0,0,0,446,528)](u(1188,0,0,0,1032))[r(865,0,0,631)](u(1283,0,0,0,1390)+a+'">'+e+i(1463,0,0,1227)))),i(1055,0,0,1092)==s&&$(d(0,0,497,0,504))[x(0,0,0,469,528)](i(1285,0,0,1517))[x(0,0,0,97,242)](r(601,0,0,634))):(d(0,0,398,0,464)!=_0x5c0508&&d(0,0,143,0,273)!=_0x39571c&&d(0,0,230,0,349)!=_0x43a934||(_0x1c8aa3[r(936,0,0,848)](u(975,0,0,0,1116),r(674,0,0,857))?(_0x5b7ba7=_0x4da855,_0x237463=""!=_0x24b039?_0x546192:_0xccc2a5[x(0,0,0,689,487)],_0x1a3b90[x(0,0,0,579,646)](r(941,0,0,768))[u(1222,0,0,0,1440)](u(1188,0,0,0,1304))[i(1055,0,0,1107)](d(0,0,452,0,531)+_0x3cc40f+u(1056,0,0,0,1191))):(_0x102352=_0x237b02,_0x23af7e=""!=_0x3bd1f5?_0x22f824:_0x530b3f[i(1356,0,0,1352)],_0x4a72c4[x(0,0,0,655,646)](i(1367,0,0,1244))[r(746,0,0,917)](x(0,0,0,281,494))[u(936,0,0,0,1090)](r(756,0,0,978)+_0x5b45b0+'">'+_0x1cff82+r(604,0,0,751)))),d(0,0,212,0,126)==_0x79f672&&_0x106dc6(u(1299,0,0,0,1272))[d(0,0,372,0,427)](x(0,0,0,654,652))[d(0,0,294,0,141)](i(975,0,0,1110)))},success:function(e){function r(t,n,e,r,i){return o(t- -1280,0,e)}function a(t,n,e,r,i){return f(n,0,0,0,t- -1289)}function c(t,n,e,r,i){return l(0,0,i,0,r-260)}function u(t,n,e,r,i){return l(0,0,i,0,t- -1214)}function x(t,n,e,r,i){return f(i,0,0,0,t- -253)}if(c(0,0,0,730,662)===u(-744,0,0,0,-661)){var d="";switch(s){case r(-499,0,-529):d+=r(-309,0,-308);break;case c(0,0,0,713,749):d+=a(-432,-361);break;case a(-302,-127):d+=c(0,0,0,821,952);break;case u(-440,0,0,0,-580):d+=x(502,0,0,0,412);break;case a(-519,-372):d+=r(-289,0,-189);break;case u(-391,0,0,0,-175):d+=x(591,0,0,0,494);break;case a(-231,-221):d+=x(779,0,0,0,869);break;case a(-443,-594):case c(0,0,0,763,530):d+=u(-654,0,0,0,-698);break;default:d+=c(0,0,0,1086,884)}var _=e[x(776,0,0,0,932)][c(0,0,0,1140,947)];if(null!=_){if(u(-616,0,0,0,-559)===x(532,0,0,0,738)){for(var p=0;p<_[r(-139,0,-168)];p++)if(u(-627,0,0,0,-451)===a(-515,-649)){for(var b=0;b<_[p][c(0,0,0,690,556)][c(0,0,0,1056,966)];b++)if(r(-117,0,-158)==_[p][a(-672,-548)][b][r(-522,0,-349)]){if(u(-762,0,0,0,-935)!==u(-726,0,0,0,-859)){link=_[p][a(-672,-689)][b][c(0,0,0,1052,1270)];break}(_0x24515c=_0x5a1fc6(this))[u(-668,0,0,0,-701)]((function(){function t(t,n,e,i,a){return r(t- -46,0,i)}function n(t,n,e,r,i){return x(e-723,0,0,0,n)}return _0x167075(n(0,1562,1337))[n(0,1379,1415)]({scrollTop:_0x34fbb3(_0x3ff635[n(0,1601,1382)]((e=932,i=1120,u(i-1542,0,0,0,e))))[t(-474,0,0,-379)]()[t(-319,0,0,-495)]},500),!1;var e,i}))}var v=_[p][a(-349,-440)].$t?_[p][r(-182,0,25)].$t:pikiMessages[c(0,0,0,844,899)],h=_[p][c(0,0,0,773,605)][0][r(-194,0,38)].$t,m=_[p][a(-266,-319)].$t,y=$(r(-382,0,-528))[r(-524,0,-556)](m),w=_[p][x(447,0,0,0,361)][0][c(0,0,0,933,918)][r(-477,0,-371)][a(-277,-494)](a(-623,-427),u(-412,0,0,0,-519)),g=y[x(615,0,0,0,646)]()[r(-494,0,-303)](0,110)+u(-357,0,0,0,-446);if(y[a(-421,-280)]()[c(0,0,0,701,663)](0,210),x(405,0,0,0,391)in _[p])if(r(-156,0,-120)===u(-435,0,0,0,-368)){if(void 0!==_[p][u(-743,0,0,0,-899)][0][u(-786,0,0,0,-697)])var k=_[p][x(405,0,0,0,245)][0][r(-507,0,-736)]}else{const t=_0x27d464[r(-110,0,-296)](r(-408,0,-460),"");_0x259c1a[a(-624,-448)](u(-566,0,0,0,-637)+t+x(426,0,0,0,263))}else k=x(528,0,0,0,311);var S=_[p][u(-766,0,0,0,-608)].$t,G=S[c(0,0,0,772,815)](0,4),P=S[c(0,0,0,772,737)](5,7),T=S[r(-423,0,-326)](8,10),M=monthsName[parseInt(P,10)-1]+" "+T+", "+G,N="";if(_[p][u(-462,0,0,0,-699)])var L=_[p][a(-350,-263)][u(-697,0,0,0,-621)];else L=noThumb;m[x(665,0,0,0,513)](m[a(-434,-321)](/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g))>-1?m[c(0,0,0,991,996)](u(-558,0,0,0,-459))>-1?m[a(-371,-415)](m[r(-267,0,-138)](/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g))<m[r(-204,0,-306)](a(-446,-393))?$src=L[u(-389,0,0,0,-513)](r(-427,0,-228),a(-379,-328))[a(-277,-390)](x(693,0,0,0,486),r(-206,0,-231)):$src=t(m):$src=L[u(-389,0,0,0,-427)](r(-427,0,-240),x(657,0,0,0,574))[x(759,0,0,0,800)](r(-176,0,-230),r(-206,0,7)):m[u(-483,0,0,0,-338)](a(-446,-541))>-1?$src=t(m):$src=noThumb;var I=i($src);switch(s){case x(370,0,0,0,413):d+=r(-66,0,-26)+link+'">'+v+c(0,0,0,871,725);break;case u(-761,0,0,0,-756):d+=r(-277,0,-71)+I+x(677,0,0,0,801)+link+x(561,0,0,0,586)+v+u(-501,0,0,0,-536)+$src+x(365,0,0,0,506)+link+'">'+v+a(-581,-556);break;case a(-302,-456):d+=x(381,0,0,0,469)+p+a(-690,-566)+I+u(-649,0,0,0,-447)+link+a(-227,-439)+v+r(-222,0,-82)+$src+u(-498,0,0,0,-465)+k+r(-345,0,-458)+link+'">'+v+x(465,0,0,0,346)+h+c(0,0,0,686,626)+M+c(0,0,0,849,665);break;case r(-161,0,-350):d+=0===p?a(-274,-366)+p+a(-346,-517)+I+a(-537,-388)+link+a(-227,-168)+v+a(-389,-342)+$src+r(-219,0,-434)+k+a(-244,-28)+link+'">'+v+r(-120,0,-327)+h+x(360,0,0,0,409)+M+u(-625,0,0,0,-437):u(-469,0,0,0,-687)+p+u(-704,0,0,0,-834)+I+x(499,0,0,0,493)+link+x(809,0,0,0,890)+v+u(-501,0,0,0,-480)+$src+x(751,0,0,0,880)+link+'">'+v+u(-730,0,0,0,-937)+M+x(722,0,0,0,760);break;case c(0,0,0,843,831):d+=u(-522,0,0,0,-491)+I+c(0,0,0,825,888)+link+u(-339,0,0,0,-167)+v+c(0,0,0,973,812)+$src+u(-447,0,0,0,-433)+k+c(0,0,0,1118,1230)+link+'">'+v+a(-618,-456)+M+x(722,0,0,0,822);break;case r(-64,0,-26):d+=x(804,0,0,0,956)+link+r(-157,0,-214)+w+a(-627,-781)+h+r(-266,0,-59)+v+u(-623,0,0,0,-699);break;case r(-276,0,-167):d+=a(-533,-611)+k+r(-417,0,-281)+I+a(-537,-588)+link+u(-339,0,0,0,-277)+v+x(647,0,0,0,493)+$src+u(-542,0,0,0,-465)+link+'">'+v+x(648,0,0,0,883)+g+a(-352,-358)+h+u(-788,0,0,0,-740)+M+r(-147,0,-155);break;case x(757,0,0,0,617):d+=a(-289,-339)+I+c(0,0,0,825,875)+link+u(-339,0,0,0,-302)+v+c(0,0,0,973,1049)+$src+a(-285,-169)+link+'">'+v+r(-451,0,-602)+M+a(-314,-495);break;case x(437,0,0,0,508):d+=x(531,0,0,0,756)+I+a(-537,-535)+link+c(0,0,0,1135,1189)+v+a(-389,-306)+$src+r(-263,0,-174)+link+'">'+v+a(-618,-438)+M+x(722,0,0,0,542);break;default:n[x(345,0,0,0,279)](u(-715,0,0,0,-594))[r(-240,0,-215)]()[u(-575,0,0,0,-788)](c(0,0,0,685,645)),d+=u(-571,0,0,0,-449),n[r(-240,0,-442)]()[u(-803,0,0,0,-834)](d)}}else{var j=_0x153968(this);j[c(0,0,0,1056,1017)]&&j[r(-138,0,14)](_0x35d500(r(-171,0,53)))}d+=N+=c(0,0,0,1127,1306)}else if(void 0!==_0x128a4f[_0x3fa243][x(405,0,0,0,579)][0][u(-786,0,0,0,-622)])_0x211d8a[_0x9f2bf9][c(0,0,0,731,738)][0][x(362,0,0,0,364)]}else d=u(-761,0,0,0,-767)===s?x(668,0,0,0,725):x(569,0,0,0,698);switch(s){case c(0,0,0,713,931):n[u(-763,0,0,0,-867)](d),d+=c(0,0,0,1011,971);break;case u(-718,0,0,0,-512):n[r(-524,0,-460)](d),d+=c(0,0,0,1011,1010);break;default:d+=a(-610,-436),n[u(-803,0,0,0,-692)](d)}n[a(-365,-248)](x(415,0,0,0,186))[c(0,0,0,1098,894)](),$(x(748,0,0,0,966))[r(-511,0,-446)]()}else{const t=_0x2aed1a[c(0,0,0,1085,999)](u(-423,0,0,0,-581),"");_0x475210[u(-736,0,0,0,-746)](a(-528,-404)+t+x(426,0,0,0,227))}},error:function(){function t(t,n,e,r,i){return u(0,0,i-851,n)}function e(t,n,e,r,i){return u(0,0,t-407,r)}function r(t,n,e,r,i){return o(t- -109,0,r)}if(t(0,895,0,0,1030)===t(0,1204,0,0,1030))e(485,0,0,363)===s?n[e(483,0,0,494)](e(631,0,0,412)):n[r(647,0,0,446)](o(-312- -1423,0,-426));else{var i=_0x5a1c80(this);_0x547f04=i[t(0,1229,0,0,1213)](t(0,1104,0,0,1114))[r(961,0,0,836)](t(0,1132,0,0,1188)),_0x31ac56(i,_0x4f0746,_0x319a6e,r(739,0,0,922))}}}),$(c(0,0,552,779))[u(0,0,70,118)]((function(){function t(t,n,e,r,i){return o(e- -930,0,n)}function n(t,n,e,r,i){return u(0,0,i-100,r)}function e(t,n,e,r,i){return o(i- -397,0,t)}function r(t,n,e,r,i){return f(i,0,0,0,t- -484)}function i(t,n,e,r,i){return o(t- -191,0,i)}if(e(403,0,0,0,641)===i(847,0,0,0,1070)){var s=$(this);s[r(428,0,0,0,452)](i(946,0,0,0,1122))[i(862,0,0,0,958)]()[n(0,0,0,579,393)](e(490,0,0,0,401))&&(a[i(822,0,0,0,608)](i(644,0,0,0,512),r(380,0,0,0,399))?pt=n(0,0,0,616,422):pt=t(0,-110,-153)+a,s[t(0,-57,140)](i(946,0,0,0,720),pt))}else _0x3a5cc1=_0x41715e(_0x1b0b94)[r(440,0,0,0,381)](n(0,0,0,664,453))[t(0,95,96)](),_0x5cb218(n(0,0,0,204,241))[t(0,161,96)](_0x8d04ae)}))}}function o(t,n,e,r,i){return _0x4587(e- -585,i)}function c(t,n,e,r,i){return _0x4587(e- -773,i)}$(c(0,0,-369,0,-309))[a(744,891)]((function(){function t(t,n,e,r,i){return a(i,n-50)}function n(t,n,e,r,i){return c(0,0,e-1084,0,r)}function e(t,n,e,r,i){return a(e,i-68)}function r(t,n,e,r,i){return a(i,e- -706)}if(e(0,0,1119,0,1044)!==n(0,0,555,413))_0x14c593[e(0,0,1260,0,1339)](e(0,0,780,0,922),""),_0x51c355[e(0,0,855,0,992)](r(0,0,259,0,53));else{var i=$(this),o=i[t(0,1177,0,0,1410)]()[n(0,0,771,880)]("/");if(!isNaN(o[0]))if(t(0,1372,0,0,1542)!==r(0,0,358,0,554)){var u=o[0],f=o[1];s(i,u,o[2],f)}else{const n=_0x5b6df8[e(0,0,1307,0,1339)](t(0,1348,0,0,1243),"");_0x53f5ff[t(0,974,0,0,1183)](a(434,518- -748)+n+t(0,988,0,0,1158))}}})),$(o(0,0,-259,0,-234))[a(778,891)]((function(t,n,e){function i(t,n,e,r,i){return c(0,0,r-1372,0,t)}function o(t,n,e,r,i){return a(t,n- -1029)}function u(t,n,e,i,a){return r(0,0,i,0,t- -852)}if(u(-684,0,0,-627)===o(-98,-82)){var f=$(this);n=f[o(21,154)](i(1106,0,0,951))[i(1060,0,0,1038)](c(0,0,1308-1655,0,1367)),s(f,relatedPostsNum,n,u(-682,0,0,-861))}else{var l={};l[u(-452,0,0,-653)]=30,l[u(-386,0,0,-287)]=30,1==_0x278bff&&_0x336b3f(this)[(x=764,d=863,r(0,0,x,0,d-474))](l)}var x,d})),$(o(0,0,3,0,135))[o(0,0,-426,0,-297)]((function(t,e,i){function a(t,n,e,r,i){return o(0,0,r-336,0,t)}function u(t,e,r,i,a){return n(0,e- -255,0,0,a)}function f(t,n,e,i,a){return r(0,0,i,0,e-845)}function l(t,n,e,i,a){return r(0,0,n,0,t- -173)}function x(t,n,e,r,i){return c(0,0,t- -94,0,r)}if(f(0,0,1232,1252)===u(0,843,0,0,854)){var d,_=$(this);if(2===(d=(d=_[u(0,804,0,0,648)]()[x(-445,0,0,-390)]())[a(51,0,0,211)]("/"))[f(0,0,1308,1288)]){if(f(0,0,1142,1239)!==a(285,0,0,95))return _0x57cdaf[u(0,791,0,0,557)](l(217,443))?f(0,0,985,991):a(371,0,0,246);switch(i=d[0],e=d[1],i){case a(223,0,0,265):case l(268,249):t=5;break;case x(-570,0,0,-463):t=2}s(_,t,e,i)}}else 0<_0x2c41e6(this)[a(363,0,0,202)]("ul")[x(-357,0,0,-305)]&&_0xf2f343(this)[f(0,0,1151,1081)](l(343,530))})),$(c(0,0,-304,0,-415))[a(733,891)]((function(t,e){function i(t,n,e,r,i){return o(0,0,t-503,0,e)}function a(t,e,r,i,a){return n(0,i- -706,0,0,r)}function c(t,n,e,i,a){return r(0,0,i,0,a- -892)}function u(t,n,e,i,a){return r(0,0,e,0,n- -536)}function f(t,n,e,i,a){return r(0,0,i,0,n- -428)}if(f(0,-354,0,-186)===f(0,-191,0,-256)){var l=_0x4349de(this);l[i(357,0,443)](i(90,0,188))[i(300,0,251)](u(0,-336,-100))&&l[i(228,0,457)](c(0,0,0,-463,-438))}else{var x,d=$(this);if((x=d[c(0,0,0,-427,-488)]("a")[f(0,-36,0,78)](a(0,0,346,464)))[u(0,-201,-407)](c(0,0,0,-536,-772)))if(a(0,0,346,440)===u(0,-167,-252))_0x3b89cc[u(0,-44,-245)](u(0,-160,-340),""),_0x5070cd[c(0,0,0,-635,-747)](c(0,0,0,-332,-486));else 2===(x=x[u(0,-123,71)]("/"))[f(0,35,0,188)]&&(e=x[0],t=x[1]),s(d,5,t,e)}}))})),$((function(){var t={};function n(t,n,e,r,i){return _0x4587(i-274,r)}function e(t,n,e,r,i){return _0x4587(t- -838,i)}function r(t,n,e,r,i){return _0x4587(n- -69,i)}function i(t,n,e,r,i){return _0x4587(n-956,r)}function a(t,n,e,r,i){return _0x4587(i- -614,n)}t[i(0,1506,0,1439)]=e(-588,0,0,0,-797),t[e(-264,0,0,0,-153)]=e(-529,0,0,0,-479),$(n(0,0,0,904,841))[n(0,0,0,396,534)]((function(){function t(t,n,e,r,a){return i(0,e- -17,0,t)}function e(t,e,r,i,a){return n(0,0,0,e,r-496)}function r(t,e,r,i,a){return n(0,0,0,i,r-7)}function s(t,n,e,r,i){return a(0,e,0,0,r-728)}function o(t,n,e,r,i){return a(0,r,0,0,e-752)}t(1112,0,1164)===t(1108,0,1164)?(localStorage[o(0,0,291,367)](r(0,0,768,919),o(0,0,366,340)===localStorage[r(0,0,744,611)](s(0,0,457,601))?e(0,838,1006):e(0,1192,998)),s(0,0,220,342)===localStorage[r(0,0,744,521)](r(0,0,768,893))?document[s(0,0,343,375)](s(0,0,590,456))[o(0,0,717,916)][o(0,0,430,239)](r(0,0,547,633)):document[t(1233,0,1200)](o(0,0,480,443))[t(1317,0,1518)][s(0,0,303,407)](o(0,0,404,353))):(_0x4b1275[e(0,1147,944)](o(0,0,308,325)),_0x552e78(s(0,0,234,462))[o(0,0,462,566)](180))})),$(e(-361,0,0,0,-241))[e(-286,0,0,0,-74)](),$(n(0,0,0,612,663))[a(0,-75,0,0,-226)](),$(e(-492,0,0,0,-687))[r(0,90,0,0,-86)]((function(){function t(t,n,e,r,a){return i(0,n- -1411,0,r)}function a(t,e,r,i,a){return n(0,0,0,t,a- -955)}function s(t,n,r,i,a){return e(r- -73,0,0,0,t)}function o(t,n,e,i,a){return r(0,a-532,0,0,n)}if(t(0,132,0,25)===t(0,39,0,106))_0x1fec01[t(0,-281,0,-340)](o(0,678,0,0,599));else{var c=$(this);c[t(0,-16,0,35)](s(-464,0,-405),a(-460,0,0,0,-317))[o(0,1017,0,0,858)](s(-400,0,-347))[a(-176,0,0,0,-242)](s(-190,0,-370),o(0,928,0,0,784)),c[a(-122,0,0,0,-272)]()[t(0,-16,0,-232)](t(0,86,0,28),(u=103,f=86,r(0,f- -39,0,0,u)))[a(-311,0,0,0,-272)]()[o(0,845,0,0,902)](t(0,86,0,188),t(0,-261,0,-415))}var u,f})),setInterval((function(){function t(t,n,e,r,i){return a(0,r,0,0,n-339)}function e(t,n,e,i,a){return r(0,i-23,0,0,t)}function s(t,e,r,i,a){return n(0,0,0,e,i-184)}function o(t,n,e,r,a){return i(0,a- -1271,0,r)}function c(t,n,e,r,i){return a(0,n,0,0,i- -32)}if(c(0,-383,0,0,-279)===c(0,-68,0,0,-279))$(o(0,0,0,-150,31))[o(0,0,0,45,195)]||(window[e(199,0,0,174)][t(0,231,0,91)]=c(0,-337,0,0,-282)),$(t(0,-5,0,62))[c(0,28,0,0,-136)]||(window[s(0,716,0,678)][e(575,0,0,460)]=t(0,89,0,316));else{const n=_0xe5929a[c(0,-327,0,0,-107)](c(0,-167,0,0,-369),"");_0x4eefa8[s(0,759,0,650)](t(0,317,0,554)+n+c(0,-321,0,0,-217))}}),2800),$(n(0,0,0,265,431))[i(0,1115,0,1272)]((function(){function t(t,n,e,r,i){return a(0,r,0,0,t-1564)}function e(t,e,r,i,a){return n(0,0,0,t,i- -796)}function r(t,n,e,r,a){return i(0,e- -339,0,n)}function s(t,n,e,r,i){return a(0,r,0,0,i-734)}if(e(57,0,0,-68)===e(64,0,0,-68))0<$(this)[t(1401,0,0,1341)]("ul")[s(0,0,0,491,630)]&&$(this)[r(0,871,970)](e(254,0,0,41));else{var o=_0xf165b6(this);o[r(0,1033,1056)](r(0,899,1123))[t(1372,0,0,1396)]()[t(1332,0,0,1557)](r(0,1015,784))&&(_0x47c1a6[s(0,0,0,593,502)](r(0,1004,821),t(1341,0,0,1539))?_0x5e08d1=e(72,0,0,-111):_0x4bf9c3=r(0,609,763)+_0x56d1d7,o[t(1389,0,0,1419)](r(0,962,1123),_0x34be3f))}})),$(r(0,267,0,0,177))[n(0,0,0,446,433)]((function(){function t(t,e,r,i,a){return n(0,0,0,t,r- -126)}function e(t,n,e,r,i){return a(0,n,0,0,r-1031)}function r(t,n,e,r,i){return a(0,i,0,0,n- -108)}function s(t,e,r,i,a){return n(0,0,0,e,i-300)}function o(t,n,e,r,a){return i(0,e-28,0,t)}if(s(0,574,0,694)===r(0,-273,0,0,-314))return _0x54aa89(s(0,1185,0,968))[o(1490,0,1456)]({scrollTop:_0x4f96c2(_0x43a06e[t(772,0,587)](r(0,-216,0,0,-318)))[t(413,0,369)]()[e(0,756,0,793)]},500),!1;var c=$(this);$(r(0,-317,0,0,-367))[s(0,1063,0,1078)]()[t(657,0,659)](c),$(o(1366,0,1541)).on(e(0,443,0,677),(function(){function n(t,n,r,i,a){return e(0,t,0,i-541)}function i(t,n,e,i,a){return r(0,i-530,0,0,n)}function a(t,n,e,i,a){return r(0,a- -26,0,0,i)}if(r(0,1053-1205,0,0,1274)!==a(0,0,0,-256,-178)){const t=_0x981c3d[a(0,0,0,-79,-209)](n(1333,0,0,1201),"");_0x5c87e6[n(1039,0,0,1150)](i(0,518,0,370)+t+n(1147,0,0,1164))}else $((s=1077,o=873,t(s,0,o-518)))[i(0,-202,0,-18)](i(0,201,0,327));var s,o}))})),$(e(-313,0,0,0,-478))[i(0,1336,0,1489)](r(0,417,0,0,438)),$(r(0,203,0,0,23)).on(e(-578,0,0,0,-444),(function(){function t(t,n,e,r,i){return a(0,r,0,0,n-399)}function e(t,n,e,i,a){return r(0,t- -791,0,0,e)}if(e(-470,0,-449)===t(0,175,0,135))$(this)[t(0,194,0,179)]()[e(-480,0,-326)](t(0,43,0,-32))[(c=988,u=777,r(0,c-606,0,0,u))](e(-436,0,-622))[e(-536,0,-674)](170);else{var i=_0x4bd2ff(this);i[(s=303,o=466,n(0,0,0,o,s- -481))]&&_0x5b2fcf(e(-314,0,-386))[t(0,296,0,229)](i)}var s,o,c,u})),$(n(0,0,0,626,404))[r(0,90,0,0,218)]((function(){function t(t,n,e,r,a){return i(0,r- -1450,0,a)}function n(t,n,e,i,a){return r(0,i- -97,0,0,a)}if(t(0,0,0,-56,-22)===n(0,0,0,280,132))_0x51d845(this)[n(0,0,0,273,121)](n(0,0,0,3,23),n(0,0,0,13,-221));else{var a=$(this);$((s=448,o=240,e(o-918,0,0,0,s)))[t(0,0,0,10,49)]()[t(0,0,0,17,47)](a)}var s,o})),$(a(0,-403,0,0,-194))[e(-679,0,0,0,-620)]((function(){function t(t,n,e,i,a){return r(0,i- -189,0,0,a)}function e(t,n,e,r,a){return i(0,n- -1175,0,e)}if(e(0,23,167)===t(0,0,0,238,420)){var s=_0x256de3(this),o=_0x26aeba;""!=o&&s[e(0,176,179)](o)}else{var c=$(this);$((l=763,x=687,n(0,0,0,x,l-131)))[t(0,0,0,246,439)]()[(u=751,f=947,a(0,f,0,0,u-854))](c)}var u,f,l,x})),$(e(-544,0,0,0,-313)).on(i(0,1216,0,1307),(function(){function t(t,n,r,i,a){return e(r-1832,0,0,0,a)}function r(t,n,e,r,i){return a(0,t,0,0,r-883)}var s,o,c,u;r(704,0,0,687)===r(626,0,0,614)?100<=_0x1a1e8e(this)[r(367,0,0,568)]()?_0x5dd05a[r(612,0,0,518)](250):_0x5acbae[t(0,0,1509,0,1400)](250):($((c=271,u=147,i(0,u- -1028,0,c)))[(s=-266,o=-475,n(0,0,0,s,o- -923))](a(0,-486,0,0,-603- -175)),$(t(0,0,1201,0,1195))[t(0,0,1168,0,1378)](r(317,0,0,483)))})),$(i(0,1503,0,1665))[r(0,90,0,0,31)]((function(){function t(t,n,e,i,a){return r(0,t- -155,0,0,i)}function n(t,n,e,r,i){return a(0,r,0,0,e-122)}function i(t,n,r,i,a){return e(r-733,0,0,0,n)}function s(t,n,r,i,a){return e(n-906,0,0,0,a)}function o(t,n,e,i,a){return r(0,n-708,0,0,i)}if(n(0,0,-158,-390)!==o(0,973,0,920)){const t=_0x59dcb2[n(0,0,47,170)](o(0,773,0,540),"");_0x3a5299[o(0,831,0,1059)](s(0,601,0,0,372)+t+o(0,838,0,839))}else{var c=$(this);if(1==fixedMenu&&0<c[s(0,578,0,0,793)])if(t(-76,0,0,-7)===o(0,1035,0,1229)){var u=_0x32aa55(_0x1522a5)[n(0,0,-193,-406)]();u<_0x4d9e2f(t(145,0,0,2))[i(0,180,116)]()[t(152,0,0,361)]-_0x1acda0&&(u>_0x242636?_0x5115aa[t(129,0,0,103)](n(0,0,-176,-318)):0>=u&&_0x127cda[t(156,0,0,236)](t(92,0,0,62)),u>_0x4b2142?_0x466b8e[n(0,0,-112,-107)](s(0,326,0,0,192)):_0x57783a[o(0,992,0,957)](o(0,897,0,715)),_0x84db94=_0x2c546c(_0x2e057c)[n(0,0,-193,-175)]())}else{var f=$(document)[s(0,367,0,0,257)](),l=c[s(0,289,0,0,485)]()[t(152,0,0,54)],x=c[t(188,0,0,-5)](),d=l+x;$(window)[o(0,890,0,1126)]((function(){function e(n,e,r,i,a){return t(n-980,0,0,i)}function r(t,n,e,r,a){return i(0,t,a- -340)}function a(t,e,r,i,a){return n(0,0,i- -441,r)}function s(t,e,r,i,a){return n(0,0,a-579,t)}function u(t,n,e,r,i){return o(0,n-70,0,i)}if(e(1094,0,0,985)===a(0,0,-669,-775)){var l=_0x191e0f(u(0,976,0,0,878))[s(-12,0,0,0,212)](_0x1bf659)[a(0,0,-609,-482)](a(0,0,-888,-652))[e(1241,0,0,1028)]()[a(0,0,-263,-494)](u(0,881,0,0,744)),_=l[s(194,0,0,0,350)]("/");_||(_=0);var p=l[e(1019,0,0,1222)]("/",_-1);p||(p=0);var b=l[s(169,0,0,0,313)](p,_);return(b[s(564,0,0,0,469)](/((\/s[0-9])|(\/w[0-9]))+/g)||"/d"==b)&&(b=u(0,973,0,0,993)),[l[e(982,0,0,1194)](0,p),b,l[s(467,0,0,0,313)](_)][a(0,0,-333,-518)]("")}var v=$(document)[u(0,1008,0,0,854)]();v<$(s(591,0,0,0,456))[e(977,0,0,1144)]()[a(0,0,-557,-557)]-x&&(v>d?c[r(86,0,0,0,-92)](e(1072,0,0,1189)):0>=v&&c[u(0,1089,0,0,1236)](s(225,0,0,0,403)),v>f?c[s(700,0,0,0,467)](r(-106,0,0,0,-187)):c[e(1109,0,0,974)](a(0,0,-729,-675)),f=$(document)[u(0,1008,0,0,1075)]())}))}}})),$(i(0,1293,0,1253))[n(0,0,0,670,433)]((function(){function t(t,n,r,i,a){return e(t-1468,0,0,0,i)}function n(t,n,e,r,i){return a(0,e,0,0,i-1216)}function r(t,n,e,r,i){return a(0,t,0,0,i-281)}function i(t,n,r,i,a){return e(t-1478,0,0,0,r)}if(r(-151,0,0,0,48)!==t(991,0,0,1173)){var s=$(this);s[n(0,0,807,0,1041)](t(802,0,0,566))[n(0,0,860,0,984)](i(887,0,696))&&s[r(5,0,0,0,-23)](i(1141,0,1281))}else _0x38c188(n(0,0,1038,0,809))[i(814,0,725)](n(0,0,988,0,1121))})),$(e(-354,0,0,0,-419))[r(0,90,0,0,271)]((function(){function t(t,e,r,i,a){return n(0,0,0,a,t-653)}function r(t,n,e,r,a){return i(0,t- -788,0,n)}function a(t,n,r,i,a){return e(n-1171,0,0,0,t)}if(t(1436,0,0,0,1234)!==t(1327,0,0,0,1500)){var s=$(this),o=s[a(528,728)]()[r(590,443)]();a(950,734)==o&&s[a(510,525)](a(519,556)),r(331,238)==o&&s[(f=1056,l=1195,n(0,0,0,l,f-590))](r(698,607))}else{var c=_0x1c8d88[0],u=_0x43e463[1];_0x11a729(_0x41b184,c,_0x316cc2[2],u)}var f,l})),$(a(0,-563,0,0,-406))[n(0,0,0,546,433)]((function(){function t(t,n,r,i,a){return e(n-113,0,0,0,i)}function i(t,n,e,r,i){return a(0,r,0,0,n- -230)}function s(t,n,e,i,a){return r(0,i-1008,0,0,n)}function o(t,n,e,i,a){return r(0,e- -907,0,0,a)}function c(t,e,r,i,a){return n(0,0,0,r,e- -8)}if(i(0,-295,0,-186)===i(0,-452,0,-341))_0x378c9f=_0x184688(_0x1c7301)[i(0,-393,0,-292)](i(0,-402,0,-362))[s(0,1358,0,1334)](),_0x52d261(c(0,525,559))[i(0,-449,0,-666)](_0x3f67c2);else{var u=$(this),f=u[c(0,661,439)]()[i(0,-654,0,-861)]()[s(0,1318,0,1361)](),l=u[c(0,391,379)]();if(f[i(0,-462,0,-615)](i(0,-517,0,-529)))if(o(0,0,-422,0,-656)!==c(0,616,407)){const t=l[c(0,805,701)](c(0,593,656),"");u[c(0,458,674)](s(0,1089,0,1234)+t+o(0,0,-770,0,-574))}else{var x=_0x2d8202(this);_0x42917b(i(0,-486,0,-562))[c(0,770,717)]()[c(0,777,866)](x)}if(f[t(0,-343,0,-463)](c(0,764,554)))if(o(0,0,-621,0,-712)!==c(0,621,578)){const t=_0x514312[c(0,805,844)](o(0,0,-562,0,-631),"");_0x56efee[c(0,458,278)](c(0,617,610)+t+o(0,0,-770,0,-748))}else{const t=l[s(0,1513,0,1478)](o(0,0,-478,0,-256),"");u[c(0,458,561)](i(0,-309,0,-100)+t+s(0,1366,0,1145))}if(f[o(0,0,-594,0,-419)](t(0,-236,0,-333)))if(s(0,1402,0,1196)===s(0,1288,0,1337)){var d=_0x5b1e7c(this);d[s(0,1336,0,1302)](/(https:\/\/\S+(\.png|\.jpeg|\.jpg|\.gif))/g,o(0,0,-396,0,-497)),d[t(0,-362,0,-527)](/(?:https:\/\/)?(?:www\.)?(?:youtube\.com)\/(?:watch\?v=)?(.+)/g,s(0,1324,0,1515))}else{const t=l[s(0,1324,0,1478)](o(0,0,-487,0,-613),"");u[i(0,-652,0,-669)](c(0,449,255)+t+i(0,-638,0,-672))}if(f[t(0,-343,0,-163)](s(0,1609,0,1430)))if(s(0,1164,0,1127)===o(0,0,-788,0,-627)){const n=l[o(0,0,-437,0,-275)](i(0,-353,0,-360),"");u[s(0,1299,0,1131)](t(0,-187,0,-404)+n+i(0,-638,0,-593))}else{var _=_0x266c2b(o(0,0,-738,0,-670))[t(0,-286,0,-242)](c(0,772,888)),p=_0x32b046(i(0,-476,0,-349))[i(0,-405,0,-276)](t(0,-219,0,-212));_0x2294cb[s(0,1147,0,1262)]({url:_,type:o(0,0,-765,0,-842),success:function(t){function n(t,n,e,r,i){return s(0,n,0,i- -632)}function e(t,n,e,r,i){return c(0,i- -289,r)}t=_0x2512a7(t)[e(0,0,0,449,428)](n(0,561,0,0,749))[n(0,849,0,0,702)](),_0x37d361(e(0,0,0,354,207))[e(0,0,0,596,372)](t)}}),_0x24f015[t(0,-402,0,-184)]({url:p,type:t(0,-514,0,-737),success:function(n){function e(t,n,e,r,i){return o(0,0,n-1868,0,r)}var r,i;n=_0x16e0de(n)[e(0,1343,0,1194)](e(0,1334,0,1474))[e(0,1287,0,1504)](),_0x2a06cf(e(0,1151,0,992))[(r=145,i=145,t(0,i-475,0,r))](n)}})}if(f[t(0,-343,0,-326)](c(0,400,314)))if(s(0,1205,0,1173)!==o(0,0,-687,0,-483)){const n=l[s(0,1358,0,1478)](t(0,-591,0,-807),"");u[o(0,0,-784,0,-705)](c(0,799,811)+n+t(0,-526,0,-293))}else{const t=_0x5c8683[c(0,805,771)](c(0,831,669),"");_0xfdd84c[o(0,0,-784,0,-990)](i(0,-524,0,-470)+t+c(0,472,260))}}})),$(r(0,415,0,0,601))[a(0,-301,0,0,-455)]((function(){function t(t,n,e,r,i){return a(0,i,0,0,t-827)}function r(t,n,e,r,i){return a(0,e,0,0,i-223)}function i(t,n,r,i,a){return e(i-1312,0,0,0,r)}function s(t,n,r,i,a){return e(t-1387,0,0,0,n)}function o(t,e,r,i,a){return n(0,0,0,e,r-80)}if(i(0,0,758,957)!==i(0,0,833,617)){var c=$(this),u=c[t(608,0,0,0,505)]()[i(0,0,655,664)]()[o(0,951,776)](),f=c[o(0,283,479)]();if(u[t(595,0,0,0,651)](s(778,749))&&(c[t(405,0,0,0,622)](t(710,0,0,0,864)),$(r(0,0,263,0,117))[o(0,532,519)]($(s(805,1035)))),u[o(0,926,736)](o(0,588,654)))if(i(0,0,1027,1056)===o(0,700,936)){const n=f[i(0,0,835,1013)](i(0,0,546,774),"");c[t(405,0,0,0,424)](s(948,1073)+n+s(750,589))}else{var l=_0x30f443(this);if(1==_0x195b67&&0<l[s(1059,1159)]){var x=_0x404e24(_0x28507a)[r(0,0,-165,0,-92)](),d=l[s(770,564)]()[s(925,1122)],_=l[t(625,0,0,0,613)](),p=d+_;_0x3e8446(_0x2aa529)[i(0,0,737,725)]((function(){function n(t,n,e,i,a){return r(0,0,e,0,t-584)}var e,a,c=_0x35a0af(_0x185af9)[n(492,0,308)]();function u(t,n,e,r,a){return i(0,0,e,t- -598)}function f(t,n,e,r,i){return s(r- -198,n)}c<_0x5a8c42(f(0,870,0,720))[n(414,0,395)]()[n(569,0,753)]-_&&(c>p?l[(e=-187,a=-202,t(a- -768,0,0,0,e))](o(0,1143,1028-358)):0>=c&&l[f(0,960,0,731)](n(509,0,528)),c>x?l[f(0,606,0,731)](n(451,0,338)):l[u(229,0,396)](f(0,482,0,609)),x=_0x335118(_0x31b9f6)[u(175,0,164)]())}))}}if(u[r(0,0,-67,0,-9)](s(826,725)))if(i(0,0,507,623)===i(0,0,460,623)){const n=f[o(0,988,893)](s(826,971),"");c[r(0,0,-43,0,-199)](t(805,0,0,0,729)+n+o(0,613,783))}else(_0x14823b=_0x34c2c4(this)).on(s(809,752),(function(){function t(t,n,e,r,i){return o(0,t,r- -816)}var n,e;_0xecb9ba[t(-233,0,0,-288)](s(185- -534,374)),_0x41f562((n=1260,e=1235,s(n-363,e)))[t(-92,0,0,-138)](180)}));if(u[i(0,0,1038,856)](t(454,0,0,0,469)))if(t(703,0,0,0,655)===r(0,0,152,0,-60))i(0,0,674,641)===_0x470b33?_0x293f55[o(0,304,519)](o(0,679,667)):_0x5b73bd[s(674,606)](s(1029,870));else{const n=f[i(0,0,1097,1013)](s(790,605),"");c[t(405,0,0,0,551)](s(911,1053)+n+t(419,0,0,0,227))}if(u[i(0,0,632,856)](s(1115,1061)))if(t(556,0,0,0,520)===o(0,895,697)){const t=f[o(0,963,893)](o(0,904,920),"");c[i(0,0,447,666)](r(0,0,356,0,143)+t+o(0,493,560))}else{const t=_0xbc4a84[o(0,776,893)](r(0,0,155,0,107),"");_0x26d6d1[s(741,768)](r(0,0,308,0,144)+t+i(0,0,625,680))}if(u[i(0,0,690,856)](o(0,342,551)))if(t(737,0,0,0,834)===r(0,0,96,0,133)){const n=f[t(752,0,0,0,687)](o(0,352,551),"");c[s(741,632)](t(431,0,0,0,587)+n+t(419,0,0,0,374))}else{var b=_0x5a28f3(this),v=b[s(944,962)]()[i(0,0,681,896)](),h=b[i(0,0,825,913)](t(719,0,0,0,939));b[r(0,0,-433,0,-199)](s(1093,894)+v+r(0,0,-35,0,-61)+h+i(0,0,753,609)+v+r(0,0,-118,0,-182)),_0x2ad0af(r(0,0,128,0,108))[o(0,308,519)](_0x50582d(o(0,969,833))),_0x4069fc(r(0,0,-75,0,108))[o(0,939,707)](t(471,0,0,0,297))}if(u[i(0,0,733,856)](t(588,0,0,0,644)))if(i(0,0,575,650)!==t(389,0,0,0,226)){var m=_0x1a5c53(this),y=m[r(0,0,12,0,4)]()[o(0,572,776)]();o(0,688,755)==y&&m[i(0,0,834,666)](r(0,0,-30,0,-168)),r(0,0,-457,0,-228)==y&&m[i(0,0,444,666)](r(0,0,90,0,139))}else{const n=f[o(0,1049,893)](i(0,0,656,849),"");c[r(0,0,-81,0,-199)](t(758,0,0,0,769)+n+t(419,0,0,0,640))}if(u[t(595,0,0,0,650)](o(0,611,609)))if(t(503,0,0,0,592)!==t(503,0,0,0,658)){var w=_0x39dcb4(this),g=w[i(0,0,585,605)](i(0,0,814,705)),k=w[i(0,0,613,605)](o(0,694,875));w=w[s(680,664)](t(625,0,0,0,426)),_0x464637[t(653,0,0,0,522)](g,r(0,0,-117,0,-212),r(0,0,-73,0,-139)+k+t(504,0,0,0,420)+w+r(0,0,-406,0,-259)+_0x21f243[i(0,0,837,932)](_0x449efb[r(0,0,284,0,162)][i(0,0,1006,995)]/2-k/2)+o(0,613,671)+_0x2eaf5f[i(0,0,970,932)](_0xa42549[o(0,886,907)][r(0,0,-21,0,21)]/2-w/2))[i(0,0,828,893)]()}else{const n=f[t(752,0,0,0,858)](i(0,0,590,729),"");c[s(741,791)](o(0,789,789)+n+o(0,497,560))}if(u[s(931,750)](t(627,0,0,0,458)))if(i(0,0,746,918)!==r(0,0,213,0,53)){var S={};S[o(0,793,653)]=0,_0x951b5d(i(0,0,616,752))[i(0,0,785,946)](S,500)}else{const n=f[i(0,0,1179,1013)](i(0,0,743,888),"");c[s(741,515)](r(0,0,-117,0,-40)+n+t(419,0,0,0,607))}if(u[i(0,0,712,856)](r(0,0,37,0,174)))if(t(567,0,0,0,372)===o(0,935,829)){var G;2===(G=G[r(0,0,-145,0,69)]("/"))[o(0,984,864)]&&(_0x1325c2=G[0],_0x14117d=G[1]),_0x5b3609(_0x380400,5,_0x6c1ad3,_0x5e751e)}else{const t=f[r(0,0,88,0,148)](r(0,0,133,0,174),"");c[r(0,0,-97,0,-199)](r(0,0,28,0,-71)+t+i(0,0,505,680))}if(u[r(0,0,-105,0,-9)](t(456,0,0,0,486)))if(t(360,0,0,0,242)!==i(0,0,916,789)){const n=f[r(0,0,213,0,148)](o(0,715,597),"");c[s(741,753)](t(775,0,0,0,935)+n+s(755,611))}else{const n=_0x270354[r(0,0,-22,0,148)](s(849,1019),"");_0x5d0882[o(0,704,546)](t(612,0,0,0,723)+n+t(414,0,0,0,651))}if(u[s(931,952)](t(718,0,0,0,499)))if(r(0,0,245,0,71)===r(0,0,224,0,17)){var P=_0x3e11d9(this),T=_0x3ca1a6;""!=T&&P[t(608,0,0,0,484)](T)}else{const n=f[t(752,0,0,0,528)](t(718,0,0,0,497),"");c[i(0,0,530,666)](i(0,0,582,762)+n+r(0,0,22,0,-185))}if(u[t(595,0,0,0,460)](r(0,0,-153,0,-95)))if(s(1001,876)===r(0,0,-26,0,61)){const t=f[o(0,887,893)](s(845,665),"");c[s(741,772)](o(0,864,701)+t+s(755,833))}else{const n=_0x4bf981[t(752,0,0,0,827)](t(509,0,0,0,301),"");_0x4d5af6[i(0,0,695,666)](r(0,0,95,0,-44)+n+o(0,774,560))}if(u[o(0,563,736)](i(0,0,756,674)))if(t(459,0,0,0,258)===o(0,520,600)){const n=f[s(1088,1156)](o(0,744,554),"");c[o(0,466,546)](t(484,0,0,0,647)+n+s(755,930))}else{var M=_0x117e18(this);M[i(0,0,1028,925)](s(825,824)).on(s(809,733),(function(){function n(n,e,r,i,a){return t(e-180,0,0,0,i)}M[n(0,567,0,533)](n(0,529,0,759))}))}if(u[t(595,0,0,0,769)](s(972,1125)))if(o(0,846,902)!==s(722,614))f[s(1088,853)](t(636,0,0,0,580),""),c[i(0,0,594,666)](o(0,854,807));else{var N=_0x382fac(this),L=N[t(608,0,0,0,387)]()[i(0,0,714,934)]("/");if(!_0x34557b(L[0])){var I=L[0],j=L[1];_0x5ca334(N,I,L[2],j)}}if(u[i(0,0,784,856)](t(335,0,0,0,105))&&(r(0,0,-253,0,-126)!==i(0,0,624,781)?(f[t(752,0,0,0,928)](t(335,0,0,0,409),""),c[i(0,0,840,666)](s(782,629))):_0x2702c4(this)[r(0,0,235,0,18)]()[s(929,1035)](s(807,884))[t(664,0,0,0,667)](o(0,544,778))[r(0,0,-8,0,-67)](170)),u[i(0,0,822,856)](o(0,522,557)))if(o(0,568,739)===s(1126,967)){var q,B=_0x31b812(this);if((q=B[o(0,629,805)]("a")[s(988,1050)](s(1055,918)))[r(0,0,-236,0,-9)](s(716,838)))2===(q=q[o(0,836,814)]("/"))[t(723,0,0,0,703)]&&(_0x5dd44d=q[0],_0x27c83f=q[1]),_0x4cfb52(B,5,_0x3bb735,_0x472dd8)}else f[t(752,0,0,0,800)](r(0,0,-157,0,-188),""),c[s(741,574)](t(393,0,0,0,623))}else{var E=_0x1bc6c7(this);_0x5e66cd(_0x36dbb3).on(t(464,0,0,0,439),(function(){var n,e,r,a,o,c;100<=_0x113b4b(this)[(o=264,c=350,t(o- -248,0,0,0,c))]()?E[(r=-428,a=-275,i(0,0,a,r- -1151))](250):E[(n=-126,e=35,s(n- -1190,e))](250)})),E[r(0,0,-350,0,-131)]((function(){var t,n,e={};function r(t,n,e,r,i){return s(e- -1286,n)}e[r(-425,-425,-438,-542,-600)]=0,_0x2a4513(r(0,-330,-459))[(t=898,n=1112,o(0,t,n-286))](e,500)}))}})),$(n(0,0,0,817,796)).on(a(0,-233,0,0,-354),(function(){function t(t,n,r,i,a){return e(a-1838,0,0,0,r)}function n(t,n,e,i,a){return r(0,n-817,0,0,t)}function i(t,n,e,r,i){return a(0,n,0,0,i-1404)}function s(t,n,r,i,a){return e(a-1353,0,0,0,t)}function o(t,n,e,i,a){return r(0,a- -760,0,0,e)}if(o(0,0,-253,0,-286)===o(0,0,-816,0,-613))_0x16f64b(n(1200,1094))[t(0,0,1466,0,1510)]||(_0x7bd1ed[i(0,1179,0,0,1010)][s(938,0,0,0,1021)]=i(0,1317,0,0,1154)),_0x458382(o(0,0,-665,0,-559))[o(0,0,-165,0,-319)]||(_0x5e850e[n(1195,968)][i(0,1506,0,0,1296)]=t(0,0,1182,0,1364));else{var c=$(this),u=c[t(0,0,1284,0,1131)](s(566,0,0,0,746)),f=c[o(0,0,-900,0,-698)](o(0,0,-127,0,-308));c=c[i(0,920,0,0,921)](i(0,1165,0,0,1202)),window[s(984,0,0,0,955)](u,o(0,0,-715,0,-650),i(0,1191,0,0,1042)+f+t(0,0,1244,0,1291)+c+n(875,880)+Math[i(0,1428,0,0,1248)](window[s(833,0,0,0,1068)][i(0,1255,0,0,1311)]/2-f/2)+o(0,0,-597,0,-512)+Math[n(1069,1206)](window[n(1475,1301)][t(0,0,1192,0,1412)]/2-c/2))[t(0,0,1352,0,1419)]()}})),$(n(0,0,0,353,445))[a(0,-595,0,0,-455)]((function(){function t(t,n,e,r,i){return a(0,e,0,0,t-465)}function e(t,n,e,r,a){return i(0,r- -922,0,e)}function r(t,e,r,i,a){return n(0,0,0,i,t- -1084)}function s(t,n,e,r,i){return a(0,n,0,0,r-322)}function o(t,e,r,i,a){return n(0,0,0,a,t-444)}if(t(272,0,142)===r(-389,0,0,-557)){var c=$(this);c[o(1169,0,0,0,1138)](o(994,0,0,0,1220)).on(e(0,0,488,294),(function(){function n(t,n,r,i,a){return e(0,0,t,a-744)}function i(t,n,e,i,a){return r(t-517,0,0,i)}function a(n,e,r,i,a){return t(r- -701,0,i)}function o(t,n,e,i,a){return r(n-1085,0,0,t)}function u(t,n,e,r,i){return s(0,n,0,i-21)}u(0,301,0,0,203)===u(0,-9,0,0,203)?c[n(1044,0,0,0,952)](i(-157,0,0,5)):(_0x23cab5[i(-140,0,0,-349)](n(1343,0,0,0,1265),u(0,37,0,0,-43)===_0x456aa0[n(1390,0,0,0,1241)](i(194,0,0,389))?i(-57,0,0,-79):u(0,90,0,0,-43)),a(0,0,-622,-749)===_0x11c257[a(0,0,-387,-253)](o(580,762))?_0x5b31d7[n(917,0,0,0,1039)](o(424,617))[i(286,0,0,336)][n(1191,0,0,0,1070)](a(0,0,-584,-689)):_0x4b250e[i(-32,0,0,161)](o(718,617))[n(1139,0,0,0,1357)][a(0,0,-557,-344)](u(0,159,0,0,-5)))}))}else{var u=_0x1169d1(this);_0x3bcd32(r(-405,0,0,-353))[r(-306,0,0,-360)]()[s(0,148,0,219)](u),_0xbc3f79(t(408,0,194)).on(e(0,0,295,294),(function(){function t(t,n,r,i,a){return e(0,0,r,t- -5)}var n,r;_0x4b79e5(t(236,0,414))[(n=-39,r=-233,e(0,0,n,r- -441))](t(548,0,774))}))}})),$(i(0,1353,0,1344))[e(-679,0,0,0,-788)]((function(t){function e(t,n,e,i,a){return r(0,e- -894,0,0,i)}function i(t,e,r,i,a){return n(0,0,0,e,a- -180)}function a(t,n,e,i,a){return r(0,i- -212,0,0,t)}function s(t,e,r,i,a){return n(0,0,0,r,a- -631)}function o(t,e,r,i,a){return n(0,0,0,r,a- -862)}s(0,0,78,0,-95)!==i(0,194,0,0,356)?(_0x515190(s(0,0,-48,0,-138))[i(0,501,0,0,268)](e(0,0,-777,-929)),_0x3e64eb(o(0,0,-192,0,-381))[a(-163,0,0,-107)](i(0,350,0,0,308))):(t=$(this)).on(a(73,0,0,-21),(function(){function n(t,n,r,i,a){return e(0,0,i-364,n)}function r(t,n,e,r,i){return s(0,0,i,0,e-1016)}function i(t,n,e,r,i){return a(t,0,0,r-672)}if(i(611,0,0,671)!==o(0,0,559,0,783-958))t[i(471,0,0,565)](r(0,0,829,0,829)),$(i(689,0,0,739))[n(0,-308,0,-275)](180);else{const t=_0x22b2d1[n(0,16,0,-60)](n(0,-27,0,-110),"");_0x3c97fe[(c=-721,u=-730,e(0,0,c-50,u))](i(493,0,0,574)+t+r(0,0,865,0,936))}var c,u}))})),$(a(0,-69,0,0,-266))[e(-565,0,0,0,-633)](t),$(i(0,1330,0,1191))[r(0,90,0,0,208)]((function(t){function n(t,n,r,i,a){return e(t-620,0,0,0,n)}function i(t,n,r,i,a){return e(t-747,0,0,0,a)}function a(t,n,e,i,a){return r(0,n- -396,0,0,e)}function s(t,n,r,i,a){return e(t-1366,0,0,0,r)}if(s(656,0,817)!==a(0,-337,-255)){var o=_0x13752e(this);o[a(0,45,50)]&&o[(c=953,u=1078,r(0,c-511,0,0,u))](_0x268923(i(196,0,0,0,71)))}else(t=$(this))[n(42,13)]((function(){function e(t,n,e,r,a){return i(e-1024,0,0,0,t)}function r(t,n,e,r,i){return s(t-286,0,n)}function o(t,e,r,i,a){return n(r- -746,e)}if(o(0,-971,-827)!==o(0,-653,-585))return $(r(1208,995))[e(1487,0,1405)]({scrollTop:$(t[e(1538,0,1372)](o(0,-605,-458)))[o(0,-791,-743)]()[e(1127,0,1309)]},500),!1;var c,u,f=_0x5ae620(this);f[r(1324,1313)]&&f[(c=437,u=629,a(0,c-391,u))](_0x1c7dc0(i(83- -372,0,0,0,-99)))}));var c,u})),$(e(-407,0,0,0,-275))[n(0,0,0,641,433)]((function(){function t(t,n,r,i,a){return e(i-1235,0,0,0,t)}function r(t,e,r,i,a){return n(0,0,0,r,i- -562)}function a(t,n,e,r,a){return i(0,n-10,0,r)}if(a(0,1252,0,1252)!==r(0,0,-4,-2)){var s=_0x12d60d(this);s[r(0,0,247,222)]&&_0x4a36be((f=-207,l=-45,n(0,0,0,l,f- -959)))[t(1089,0,0,908)](s)}else{var o=$(this);o[(c=481,u=343,e(u-671,0,0,0,c))]&&$(t(766,0,0,875))[a(0,1477,0,1481)](o)}var c,u,f,l})),$(e(-657,0,0,0,-766))[i(0,1115,0,1169)]((function(){function t(t,n,e,r,a){return i(0,e- -1316,0,n)}function a(t,n,r,i,a){return e(i-1496,0,0,0,a)}function s(t,n,r,i,a){return e(n-1737,0,0,0,a)}if(a(0,0,0,863,926)===a(0,0,0,782,760)){const e=_0xa72e12[t(0,135,179)](s(0,1099,0,0,1128),"");_0x1c8c6d[s(0,1091,0,0,1071)](t(0,90,-89)+e+n(0,0,0,577,767-287))}else{var o=$(this);o[(c=-203,u=-219,r(0,u- -660,0,0,c))]&&$(a(0,0,0,1204,1068))[s(0,1410,0,0,1203)](o)}var c,u})),$(r(0,309,0,0,352))[i(0,1115,0,1239)]((function(){function t(t,n,e,i,a){return r(0,i- -203,0,0,t)}function e(t,n,e,r,i){return a(0,t,0,0,n-603)}function i(t,n,e,i,a){return r(0,e- -802,0,0,t)}function s(t,n,e,i,a){return r(0,a- -742,0,0,e)}function o(t,e,r,i,a){return n(0,0,0,a,e- -21)}if(i(-156,0,-278)===i(-185,0,-368)){var c=_0x36e35a(this);c[i(-491,0,-432)](s(0,0,-81,0,-305),t(16,0,0,92))[e(311,384)](t(367,0,0,292))[o(0,692,0,0,506)](e(441,530),i(-395,0,-550)),c[t(156,0,0,137)]()[s(0,0,-456,0,-372)](e(426,530),i(-644,0,-677))[t(38,0,0,137)]()[o(0,692,0,0,821)](t(312,0,0,269),s(0,0,-466,0,-617))}else{var u=$(this);u[i(-481,0,-361)]&&u[s(0,0,-341,0,-300)]($(s(0,0,-202,0,-333)))}})),$(e(-265,0,0,0,-337))[n(0,0,0,431,433)]((function(){function t(t,n,e,i,a){return r(0,t- -713,0,0,e)}function s(t,n,e,r,i){return a(0,r,0,0,n-168)}function o(t,n,e,r,a){return i(0,t- -1353,0,e)}function c(t,e,r,i,a){return n(0,0,0,e,a-435)}function u(t,n,r,i,a){return e(t-1200,0,0,0,n)}if(o(154,0,378)===c(0,1418,0,0,1235))return o(-193,0,-375)===_0x21c34e?_0xca8f82=_0x19ce37[u(901,797)](_0x184d34,s(0,-35,0,-20)):_0x429a1e=_0x3cbd49[s(0,93,0,232)](_0x290446,t(-636,0,-640)+_0x12935c),_0x19dd04;var f=$(this);f[u(872,912)]&&f[c(0,1294,0,0,1220)]($(t(-236,0,-196)))})),$(r(0,407,0,0,189))[i(0,1115,0,1118)]((function(){function t(t,n,e,r,a){return i(0,n- -444,0,a)}function n(t,n,r,i,a){return e(i-212,0,0,0,r)}function r(t,n,e,r,i){return a(0,n,0,0,t-1211)}function s(t,n,e,r,i){return a(0,n,0,0,r-1022)}if(n(0,0,-231,-444)!==s(0,641,0,590)){const t=_0x28d14d[r(1136,1064)](n(0,0,-535,-429),"");_0x593a93[r(789,694)](n(0,0,-307,-408)+t+s(0,627,0,614))}else{var o=$(this);o[t(0,1022,0,0,986)]&&o[t(0,1023,0,0,1168)]($(r(884,1087)))}})),$(i(0,1295,0,1150))[e(-679,0,0,0,-646)]((function(){function t(t,n,e,i,a){return r(0,t-141,0,0,e)}function e(t,e,r,i,a){return n(0,0,0,t,i- -1203)}if(e(-776,0,0,-681)!==t(320,0,459)){const r=_0x57cca8[t(611,0,752)](t(399,0,583),"");_0x2dc5cc[e(-538,0,0,-737)](n(0,0,0,470,588-19)+r+t(278,0,352))}else $(this)[(i=1157,a=1385,n(0,0,0,a,i-444))](t(241,0,336),n(0,0,0,729,880-427));var i,a})),$(r(0,491,0,0,255))[i(0,1115,0,938)]((function(){function t(t,e,r,i,a){return n(0,0,0,r,a- -858)}function a(t,n,e,i,a){return r(0,a-989,0,0,i)}function s(t,n,e,r,a){return i(0,t- -1356,0,r)}function o(t,n,e,r,a){return i(0,n- -1260,0,r)}function c(t,n,r,i,a){return e(a-1006,0,0,0,t)}if(c(263,0,0,0,309)===c(200,0,0,0,309)){var u=$(this),f=u[t(0,0,-15,0,-189)]()[a(0,0,0,1505,1342)](),l=u[s(39,0,0,129)](a(0,0,0,1294,1426));u[o(0,-112,0,-48)](t(0,0,-29,0,-40)+f+c(396,0,0,0,498)+l+s(-265,0,0,-347)+f+t(0,0,-431,0,-375)),$(t(0,0,-12,0,-85))[o(0,-139,0,-106)]($(c(466,0,0,0,647))),$(c(433,0,0,0,667))[s(-47,0,0,45)](s(-142,0,0,-217))}else{var x=_0x369496(_0x5108a5)[o(0,-5,0,154)](),d=_0x1c4106[s(-179,0,0,56)]()[s(-24,0,0,-243)],_=_0x2c67ab[c(488,0,0,0,580)](),p=d+_;_0x16142c(_0x51c92c)[o(0,-53,0,-79)]((function(){function t(t,n,e,r,i){return s(t-1258,0,0,r)}function n(t,n,e,r,i){return c(e,0,0,0,n- -1065)}var e=_0xec6222(_0x1cbd0)[n(0,-598,-647)]();function r(t,n,e,r,i){return c(t,0,0,0,r- -773)}e<_0x4c10d5(n(0,-528,-651))[n(0,-676,-783)]()[n(0,-521,-376)]-_&&(e>p?_0x21b56d[t(1211,0,0,1183)](s(1297-1381,0,0,1144)):0>=e&&_0x4492cd[n(0,-517,-360)](r(-124,0,0,-289)),e>x?_0x5cb8b3[t(1238,0,0,1439)](n(0,-639,-680)):_0x4b2a24[n(0,-544,-404)](t(1116,0,0,1083)),x=_0x3fb3ae(_0x850fe1)[r(-190,0,0,-306)]())}))}})),$(a(0,-72,0,0,-300))[i(0,1115,0,1138)]((function(){function t(t,n,r,i,a){return e(i-466,0,0,0,t)}var i=$(s(-668,-443,-486,-397,-462))[c(259,285,147,431,237)](t(302,0,0,134)),a=$(c(346,214,-15,219,254))[o(-506,-674,-403,-281,-620)](s(-409,-406,-200,-215,-194));function s(t,n,e,i,a){return r(0,a- -631,0,0,e)}function o(t,e,r,i,a){return n(0,0,0,e,t- -1219)}function c(t,e,r,i,a){return n(0,0,0,i,e- -428)}function u(t,n,e,i,a){return r(0,n-533,0,0,a)}$[t(-253,0,0,-49)]({url:i,type:c(0,57,0,256),success:function(t){function n(t,n,e,r,i){return u(0,e-488,0,0,i)}function e(t,n,e,r,i){return c(0,r- -543,0,n)}function r(t,n,e,r,i){return c(0,t-204,0,n)}function i(t,n,e,r,i){return s(0,0,e,0,t-1379)}if(e(0,-156,0,-391)===n(0,0,1258,0,1461))t=$(t)[n(0,0,1403,0,1359)]((o=-460,f=-548,c(0,f- -836,0,o)))[i(1074,0,1109)](),$(r(280,432))[i(1074,0,1016)](t);else{var a=_0x538063(this);_0x25a1ed(e(0,-487,0,-537))[r(554,324)]()[e(0,47,0,-186)](a)}var o,f}}),$[t(86,0,0,-49)]({url:a,type:o(-734,-808),success:function(t){function n(t,n,e,r,i){return o(e-1789,n)}var e,r,i,a;t=$(t)[n(0,1280,1295)](n(0,1474,1286))[n(0,1360,1239)](),$((i=-365,a=-304,o(a-382,i)))[(e=654,r=627,s(0,0,e,0,r-932))](t)}})})),$(a(0,-230,0,0,-292))[n(0,0,0,600,433)]((function(){var t,e,r=$(this),i=followByEmailText;""!=i&&r[(t=-219,e=-317,n(0,0,0,e,t- -888))](i)})),$(a(0,-293,0,0,-458))[i(0,1115,0,1079)]((function(){var t,e,r=$(this),i=relatedPostsText;""!=i&&r[(t=939,e=703,n(0,0,0,e,t-270))](i)})),$(r(0,522,0,0,322))[r(0,90,0,0,-133)]((function(){var t,n,e={};function r(t,n,e,r,i){return a(0,e,0,0,r-498)}e[r(0,0,455,331)]=30,e[r(0,0,515,397)]=30,1==fixedSidebar&&$(this)[(t=876,n=1034,i(0,t- -516,0,n))](e)})),$(r(0,399,0,0,211))[n(0,0,0,197,433)]((function(){function t(t,e,r,i,a){return n(0,0,0,r,a- -1045)}var e=$(this);function r(t,n,e,r,i){return a(0,i,0,0,t-547)}$(window).on(r(184,0,0,0,120),(function(){var t,n,i,a,s,o;100<=$(this)[(s=517,o=322,r(o-90,0,0,0,s))]()?e[(i=684,a=524,r(i-502,0,0,0,a))](250):e[(t=-141,n=40,r(n- -408,0,0,0,t))](250)})),e[t(0,0,-285,0,-511)]((function(){var n,e,i={};function a(n,e,r,i,a){return t(0,0,a,0,r-1063)}i[(n=788,e=718,r(e-486,0,0,0,n))]=0,$(a(0,0,570,0,362))[a(0,0,764,0,796)](i,500)}))})),$(e(-473,0,0,0,-360))[n(0,0,0,251,433)]((function(){function t(t,n,e,i,a){return r(0,e- -726,0,0,a)}var e=commentsSystem,s=l(355,277,666,282,472)+$(location)[u(-6,-183,-97,-57,-36)](t(0,0,-289,0,-194))+u(-293,-507,-485,-240,-384),o=u(116,168,142,-33,55)+e;function c(t,n,e,r,i){return a(0,n,0,0,t- -240)}function u(t,n,e,r,a){return i(0,t- -1401,0,n)}function f(t,e,r,i,a){return n(0,0,0,a,i-322)}function l(t,n,e,i,a){return r(0,a-288,0,0,n)}t(0,0,-662,0,-471)==e?$(this)[c(-501,-616)](o)[t(0,0,-537,0,-416)]():c(-676,-855)==e?((e=document[f(0,0,0,1119,1161)](c(-658,-492)))[u(133,153)]=l(0,581,0,0,373),e[l(0,686,0,0,660)]=!0,e[u(-273,-235)]="//"+disqusShortname+f(0,0,0,725,700),(document[u(-206,-357)](c(-429,-249))[0]||document[l(0,680,0,0,458)](l(0,526,0,0,426))[0])[t(0,0,-429,0,-388)](e),$(c(-519,-505))[f(0,0,0,889,837)](),$(this)[t(0,0,-630,0,-669)](f(0,0,0,999,1139))[t(0,0,-442,0,-624)](o)[c(-596,-738)]()):t(0,0,-644,0,-661)==e?($(u(-110,-31))[u(-152,-80)](),$(this)[f(0,0,0,761,744)](s)[f(0,0,0,949,765)](o)[t(0,0,-537,0,-721)]()):l(0,1012,0,0,805)==e?$(this)[u(141,296)]():$(this)[f(0,0,0,949,800)](f(0,0,0,924,734))[l(0,337,0,0,477)]()})),$(r(0,260,0,0,357))[i(0,1115,0,979)]((function(){var t=$(this);function e(t,e,r,i,a){return n(0,0,0,e,a- -819)}function i(t,n,e,i,a){return r(0,e-393,0,0,n)}t[i(0,749,687)](/(https:\/\/\S+(\.png|\.jpeg|\.jpg|\.gif))/g,i(0,976,904)),t[e(0,-213,0,0,-182)](/(?:https:\/\/)?(?:www\.)?(?:youtube\.com)\/(?:watch\?v=)?(.+)/g,e(0,205,0,0,31))}))}));
//]]>
</b:tag>
<b:if cond='data:view.isMultipleItems and !data:view.isHomepage'>
<!-- Pagination Scripts -->
<b:tag name='script' type='text/javascript'>
//<![CDATA[
var postResults= 6;
var numOfPages= 2;
var pageOf= ["Page", "of"];
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('5 K;5 m;5 l;5 w;5 s=1p.9;5 y="/";1d();G 1b(a){5 b=\'\';J=M(W/2);4(J==W-J){W=J*2+1}D=l-J;4(D<1)D=1;j=M(a/n)+1;4(j-1==a/n)j=j-1;E=D+W-1;4(E>j)E=j;b+=\'<C 6="3-1u">\'+17[0]+\' \'+l+\' \'+17[1]+\' \'+j+\'</C>\';5 c=M(l)-1;4(l>1){4(l==2){4(m==\'3\'){b+=\'<a 6="3-7 3-U" 9="\'+y+\'"></a>\'}h{b+=\'<a 6="3-7 3-U" 9="/v/u/\'+w+\'?&i-o=\'+n+\'"></a>\'}}h{4(m==\'3\'){b+=\'<a 6="3-7 3-U" 9="#" z="L(\'+c+\');B x"></a>\'}h{b+=\'<a 6="3-7 3-U" 9="#" z="I(\'+c+\');B x"></a>\'}}}4(D>1){4(m=="3"){b+=\'<a 6="3-7" 9="\'+y+\'">1</a>\'}h{b+=\'<a 6="3-7" 9="/v/u/\'+w+\'?&i-o=\'+n+\'">1</a>\'}}4(D>2){b+=\'<C 6="3-7 3-16">...</C>\'}1a(5 d=D;d<=E;d++){4(l==d){b+=\'<C 6="3-7 3-1v">\'+d+\'</C>\'}h 4(d==1){4(m==\'3\'){b+=\'<a 6="3-7" 9="\'+y+\'">1</a>\'}h{b+=\'<a 6="3-7" 9="/v/u/\'+w+\'?&i-o=\'+n+\'">1</a>\'}}h{4(m==\'3\'){b+=\'<a 6="3-7" 9="#" z="L(\'+d+\');B x">\'+d+\'</a>\'}h{b+=\'<a 6="3-7" 9="#" z="I(\'+d+\');B x">\'+d+\'</a>\'}}}4(E<j-1){b+=\'<C 6="3-7 3-16">...</C>\'}4(E<j){4(m=="3"){b+=\'<a 6="3-7" 9="#" z="L(\'+j+\');B x">\'+j+\'</a>\'}h{b+=\'<a 6="3-7" 9="#" z="I(\'+j+\');B x">\'+j+\'</a>\'}}5 e=M(l)+1;4(l<j){4(m==\'3\'){b+=\'<a 6="3-7 3-15" 9="#" z="L(\'+e+\');B x"></a>\'}h{b+=\'<a 6="3-7 3-15" 9="#" z="I(\'+e+\');B x"></a>\'}}b+=\'\';5 f=A.1s(\'1t\');5 g=A.1r(\'1A-1D\');1a(5 p=0;p<f.O;p++){f[p].1c=b}4(f&&f.O>0){b=\'\'}4(g){g.1c=b}}G 12(a){5 b=a.1f;5 c=M(b.1E$1B.$t,10);1b(c)}G 1d(){5 a=s;4(a.k(\'/v/u/\')!=-1){4(a.k(\'?T-i\')!=-1){w=a.H(a.k(\'/v/u/\')+14,a.k(\'?T-i\'))}h{w=a.H(a.k(\'/v/u/\')+14,a.k(\'?&i\'))}}4(a.k(\'?q=\')==-1&&a.k(\'.1C\')==-1){4(a.k(\'/v/u/\')==-1){m=\'3\';4(s.k(\'#F=\')!=-1){l=s.H(s.k(\'#F=\')+8,s.O)}h{l=1}A.18(\'<r Q=\\\'\'+y+\'P/R/N?i-o=1&X=Y-S-r&V=12\\\'><\\/r>\')}h{m=\'u\';4(a.k(\'&i-o=\')==-1){n=1F}4(s.k(\'#F=\')!=-1){l=s.H(s.k(\'#F=\')+8,s.O)}h{l=1}A.18(\'<r Q="\'+y+\'P/R/N/-/\'+w+\'?X=Y-S-r&V=12&i-o=1" ><\\/r>\')}}}G L(a){Z=(a-1)*n;K=a;5 b=A.1h(\'1q\')[0];5 c=A.1o(\'r\');c.1e=\'1m/1n\';c.1i(\'Q\',y+\'P/R/N?1j-1k=\'+Z+\'&i-o=1&X=Y-S-r&V=13\');b.1l(c)}G I(a){Z=(a-1)*n;K=a;5 b=A.1h(\'1q\')[0];5 c=A.1o(\'r\');c.1e=\'1m/1n\';c.1i(\'Q\',y+\'P/R/N/-/\'+w+\'?1j-1k=\'+Z+\'&i-o=1&X=Y-S-r&V=13\');b.1l(c)}G 13(a){11=a.1f.1x[0];5 b=11.1g.$t.H(0,19)+11.1g.$t.H(1z,1w);5 c=1y(b);4(m==\'3\'){5 d=\'/v?T-i=\'+c+\'&i-o=\'+n+\'#F=\'+K}h{5 d=\'/v/u/\'+w+\'?T-i=\'+c+\'&i-o=\'+n+\'#F=\'+K}1p.9=d}',62,104,'|||page|if|var|class|num||href||||||||else|max|lastPageNo|indexOf|currentPageNo|currentPage|postResults|results|||script|locationUrl||label|search|postLabel|false|home_page|onclick|document|return|span|pageStart|pageEnd|PageNo|function|substring|getLabelPage|pageNumber|noPage|getPage|parseInt|summary|length|feeds|src|posts|in|updated|prev|callback|numOfPages|alt|json|jsonstart||post|dataFeed|findPostDate||next|dots|pageOf|write||for|startPagination|innerHTML|pageCurrentBlogger|type|feed|published|getElementsByTagName|setAttribute|start|index|appendChild|text|javascript|createElement|location|head|getElementById|getElementsByName|pageArea|of|active|29|entry|encodeURIComponent|23|blog|totalResults|html|pager|openSearch|20'.split('|'),0,{}))
//]]>
</b:tag>
</b:if>
      	<!-- Slider Mobile Menu -->
<div id='Globecontainer'>
  <div class='area-GalaxyNew'>
      <div class='social-GalaxyNew'/>
    <span class='hide-LSpeed-filter'/>
  </div>
  <div class='Globecontainer-flex'>
    <div class='LSpeed-filter' id='LSpeed-filter'/>
          <div class='mobile-GalaxyNew'/>
  </div>
</div>
<div class='overlay'/>
  <div class='backTop' title='Back to Top'/>
<!-- Blogger Default Widget Scripts -->
   <script async='async' defer='defer' src='//assets.pinterest.com/js/pinit.js' type='text/javascript'/>
  <div class='cookie-box'>
    <div class='cookie-row'>
     <div class='cookie-img'><svg viewBox='0 0 97.93 97.93' xmlns='http://www.w3.org/2000/svg'><path d='M44,23.76a2.47,2.47,0,1,0,.91,3.37A2.47,2.47,0,0,0,44,23.76Z'/><path d='M25.9,40.32a2.47,2.47,0,0,0,0,4.93h0a2.47,2.47,0,1,0,0-4.93Z'/><circle cx='32.08' cy='65.86' r='2.47'/><path d='M56.38,69.91a2.47,2.47,0,1,0,1.14,1.49A2.47,2.47,0,0,0,56.38,69.91Z'/><path d='M72,52.68a2.47,2.47,0,0,0-2.38,1.83,2.44,2.44,0,0,0,.25,1.87,2.47,2.47,0,0,0,4.52-.59,2.44,2.44,0,0,0-.25-1.87A2.47,2.47,0,0,0,72,52.68Z'/><path d='M89.51,52.86A14,14,0,0,1,81,47.2,14.09,14.09,0,0,1,61,35.68,14.09,14.09,0,0,1,49.49,15.73a14,14,0,0,1-5.66-8.55,44,44,0,0,0-21.09,6.15A44.26,44.26,0,0,0,71.46,87.08,44.24,44.24,0,0,0,89.51,52.86ZM28.28,43.42a2.47,2.47,0,0,1-2.38,1.83h0a2.47,2.47,0,1,1,2.38-1.83Zm3.8,24.9a2.47,2.47,0,1,1,2.47-2.47A2.47,2.47,0,0,1,32.08,68.32ZM44.92,27.13A2.47,2.47,0,1,1,44,23.76,2.47,2.47,0,0,1,44.92,27.13ZM57.28,73.27a2.47,2.47,0,1,1-.9-3.36,2.47,2.47,0,0,1,.9,3.36ZM74.42,55.79a2.47,2.47,0,1,1-.25-1.87A2.45,2.45,0,0,1,74.42,55.79Z' fill='#7577a9'/><path d='M97.93,48.52v-.2A2.35,2.35,0,0,0,95.7,46a9.37,9.37,0,0,1-8-5.45,2.35,2.35,0,0,0-3.49-.93,9.51,9.51,0,0,1-5.44,1.72A9.4,9.4,0,0,1,69.39,31.1a2.35,2.35,0,0,0-2.55-2.55c-.28,0-.57,0-.85,0a9.39,9.39,0,0,1-7.68-14.81,2.35,2.35,0,0,0-.93-3.49,9.37,9.37,0,0,1-5.45-8A2.35,2.35,0,0,0,49.61,0H49a49,49,0,1,0,49,49C97.93,48.82,97.93,48.67,97.93,48.52ZM71.46,87.08A44.26,44.26,0,0,1,22.74,13.33,44,44,0,0,1,47.53,4.72a14,14,0,0,0,5.66,8.55A14.09,14.09,0,0,0,64.71,33.22,14.09,14.09,0,0,0,84.66,44.75a14,14,0,0,0,8.56,5.66A44.3,44.3,0,0,1,71.46,87.08Z'/></svg></div>
    <div class='cookie-content'>
      <p>Our website uses cookies to improve your experience. <a href='https://policies.google.com/technologies/cookies' target='_blank' title='Learn more'>Learn more</a></p>
 <button class='cookie-buttons'>Accept!</button>
</div>
</div>
</div>

<style>
  .cookie-box.hide{display:none}
.cookie-box {
    position: fixed;
    width: 90%;
    margin: 20px;
    max-width: 400px;
    min-height: 100px;
    background-color: #ffffff;
    box-shadow: 25px 12px 25px 12px rgb(30 30 30 / 4%);
    z-index: 990;
    border: 2px solid lightgrey;
    border-radius: 6px;
    bottom: 15px;
    right: 0px;
    padding: 15px;
}
.cookie-row {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-align: left;
    align-content: center;
    justify-content: center;
    align-items: center;
}
.cookie-img{padding-right:20px}
.cookie-img svg{fill:#333;width:60px;height: 60px;}
.cookie-content p {
    position: relative;
    width: 100%;
    display: inline-block;
    font-size: 15px;
    color: #666666;
    margin-top: 0!important;
}
.cookie-content p a{text-decoration:underline;}
.cookie-buttons {
    position: relative;
    width: 100%;
    margin-top: 10px;
    float: left;
    background-color: #7577a9;
    font-family: inherit;
    font-size: 14px;
    color: #ffffff;
    text-decoration: none;
    opacity: 1;
    border: none;
    cursor: pointer;
    font-weight: 500;
    padding: 5px;
    border-bottom: 2px solid rgba(0,0,0,0.1);
    border-radius: 6px;
}  
</style>

<script>//<![CDATA[
    cookieChoices = {};
    const cookieBox = document.querySelector(".cookie-box"),
    acceptBtn = cookieBox.querySelector("button");
    acceptBtn.onclick = ()=>{
      document.cookie = "CookieByKey2Blogging; max-age="+60*60*24*30;
      if(document.cookie){ 
        cookieBox.classList.add("hide"); 
      }else{ 
        alert("Cookie can't be set! Please unblock this site from the cookie setting of your browser.");
      }
    }
    let checkCookie = document.cookie.indexOf("CookieByKey2Blogging");
    checkCookie != -1 ? cookieBox.classList.add("hide") : cookieBox.classList.remove("hide");
  //]]>

//<![CDATA[
var uri = window.location.toString();
if (uri.indexOf("%3D","%3D") > 0) {
var clean_uri = uri.substring(0, uri.indexOf("%3D"));
window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf("%3D%3D","%3D%3D") > 0) {
var clean_uri = uri.substring(0, uri.indexOf("%3D%3D"));
window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf("&m=1","&m=1") > 0) {
var clean_uri = uri.substring(0, uri.indexOf("&m=1"));
window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf("?m=1","?m=1") > 0) {
var clean_uri = uri.substring(0, uri.indexOf("?m=1"));
window.history.replaceState({}, document.title, clean_uri);
}
//]]>