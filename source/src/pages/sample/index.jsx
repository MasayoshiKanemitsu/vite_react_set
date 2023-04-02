import React from "react";
import Base from "../../layout/base/Base";
import Section from "../../component/section/Section";

const Sample = () => {
  return (
    <>
      <Base>
        {/* Section */}
        <Section>Section。max-widthあり</Section>

        <Section rootClass='l-section--bgGreen'>Section。max-widthあり。親に追加クラス</Section>

        <Section containerClass='l-section__container--right'>
          Section。max-widthあり。containerに追加クラスあり（右寄せ）
        </Section>

        <Section containerClass='l-section__container--left'>
          Section。max-widthあり。containerに追加クラスあり（左寄せ）
        </Section>
        <Section container={false}>Sectionです。「container」がfalseの場合</Section>
        {/* Section */}
      </Base>
    </>
  );
};

export default Sample;
