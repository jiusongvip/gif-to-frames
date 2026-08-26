export const faqs: { q: string; a: string }[] = [
  {
    q: 'How do I convert a GIF into separate frames?',
    a: 'Open the tool, upload your GIF, then select all frames or a custom range. Choose PNG, JPG, or WebP and download the selected frames as a ZIP archive.',
  },
  {
    q: 'Is this GIF to frames tool free?',
    a: 'Yes. The tool is free to use, does not add a watermark, and does not require an account or installation.',
  },
  {
    q: 'Will my GIF be uploaded to a server?',
    a: 'No. The page reads and renders the GIF locally in your browser. Your file stays on your device.',
  },
  {
    q: 'Can I open WebP or APNG files here?',
    a: 'Yes. The uploader accepts animated GIF, WebP, and APNG files in browsers that support animated image decoding.',
  },
  {
    q: 'Can I extract only one frame from a GIF?',
    a: 'Yes. Use First frame, Last frame, or click any frame in the filmstrip. Then download the current frame.',
  },
  {
    q: 'Can I keep transparent backgrounds?',
    a: 'Yes. PNG and WebP exports can keep transparency. JPG will use a white background because it does not support alpha.',
  },
  {
    q: 'Can I extract every second, third, or Nth frame?',
    a: 'Yes. Set the start frame, end frame, and Every Nth frame value before exporting.',
  },
  {
    q: 'Can I convert GIF frames to PNG?',
    a: 'Yes. Upload the GIF, choose PNG as the output format, and download the current frame or all selected frames as a ZIP. PNG keeps transparency and clean edges.',
  },
  {
    q: 'Can I split a GIF into frames without uploading it?',
    a: 'Yes. The GIF is read and rendered locally in your browser. Your file is not sent to a server, and no account or installation is required.',
  },
  {
    q: 'How do I make a GIF from images?',
    a: 'Use the Frames to GIF section. Select two or more PNG, JPG, or WebP images, drag them into order, set delay and loops, then click Download GIF.',
  },
  {
    q: 'Can I export GIF frames as a sprite sheet?',
    a: 'Yes. Select the frames you want, choose a scale, and click Sprite sheet. The tool creates one PNG image arranged for game or web animation.',
  },
  {
    q: 'What output formats are supported?',
    a: 'You can export PNG, JPG, or WebP. PNG keeps transparency, JPG creates smaller flattened images, and WebP offers a modern balance of quality and file size.',
  },
  {
    q: 'Can I combine frames back into a GIF?',
    a: 'Yes. Use the Frames to GIF section to upload PNG, JPG, or WebP images, drag them into order, set delay and loop count, then download the new GIF.',
  },
  {
    q: 'What is frame delay?',
    a: 'Frame delay is how long each frame stays visible before the animation moves to the next frame. It is measured in milliseconds and controls the speed and rhythm of a GIF.',
  },
  {
    q: 'What is disposal in GIF metadata?',
    a: 'Disposal tells a decoder how to treat the previous frame before drawing the next one. It is important for transparency, partial-frame animations, and rebuilding a GIF accurately.',
  },
  {
    q: 'Why do some extracted frames look different from the animation I see in a browser?',
    a: 'GIFs often store only the changed regions between frames, and browsers composite those deltas with disposal rules during playback. Extraction renders the actual stored pixel data for each frame, so a partially drawn delta frame can look incomplete. This is normal and can help you understand how the GIF is built.',
  },
  {
    q: 'Does the ZIP export include frame timing?',
    a: 'Yes. Every ZIP contains a metadata.json file with delay, dimensions, offset, disposal, and transparency for each exported frame, so you can rebuild the animation with the original timing in another tool.',
  },
  {
    q: 'Can I process multiple GIF files at once?',
    a: 'Yes. Upload multiple files, switch between them with the job tabs, then use All jobs ZIP to package each source into its own folder.',
  },
  {
    q: 'Can I preview the animation before downloading frames?',
    a: 'Yes. Load a GIF and use the Play control to preview it frame by frame. You can set 0.25×, 0.5×, 1×, or 2× speed before choosing which frames to export.',
  },
  {
    q: 'Why choose PNG instead of JPG for GIF frames?',
    a: 'PNG is lossless and supports transparency, so it is better for logos, UI elements, sprites, and animation frames that need clean edges. JPG is smaller but flattens transparency and may introduce compression artifacts.',
  },
  {
    q: 'Can I change the file name pattern before downloading?',
    a: 'Yes. Use the File naming field with {index} and {source} placeholders. For example, frame-{index} creates frame-001, while {source}-{index} adds the source file name.',
  },
  {
    q: 'What is the maximum file size?',
    a: 'The uploader accepts files up to 100 MB. Very large or complex animations may take longer to decode and export.',
  },
  {
    q: 'Can I extract GIF frames without installing software?',
    a: 'Yes. This tool runs in your browser, so you can extract frames without downloading or installing an application.',
  },
  {
    q: 'Can I use extracted GIF frames in Photoshop or After Effects?',
    a: 'Yes. Export PNG frames with a numbered naming pattern, then import the image sequence into Photoshop, After Effects, Premiere, or another editing application.',
  },
  {
    q: 'Can I turn GIF frames into a sprite sheet?',
    a: 'Yes. Select the frames you want, choose a scale, and click Sprite sheet to download one PNG image arranged for game or web animation.',
  },
];
