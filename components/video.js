export default function Video() {

    return (
<section className="text-center">
<div id="responsiveVideoWrapper" className="relative h-0 pb-fluid-video">
  <iframe
    className="absolute top-0 left-0 w-full h-full"
    src="https://www.youtube.com/embed/wdwUz-ubH-E"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>
</section>
    )
}