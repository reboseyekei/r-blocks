import Blockly from 'blockly';
import 'blockly/javascript';

Blockly.Blocks['new_boundary_function'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("Boundary Function Name"), "Name");
        this.appendStatementInput("Content")
            .setCheck(null);
        this.setInputsInline(true);
        this.setColour(15);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['new_boundary_function'] = function (block) {
    var text_name = block.getFieldValue('Name');
    var statements_content = Blockly.JavaScript.statementToCode(block, 'Content');
    // TODO: Assemble JavaScript into code variable.
    var code = 'def ' + text_name + '(_object,**kwargs):\n' + statements_content + '\n';
    return code;
};

Blockly.Blocks['return'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("return");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['return'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'return ' + value_name + '\n';
    return code;
};


Blockly.Blocks['library'] = {
    init: function() {
        this.appendValueInput("NAME").setCheck(null).appendField("library:").appendField(new Blockly.FieldTextInput(""), "library");
        this.setColour(200);
        this.setInputsInline(false);
        this.setNextStatement(true, null);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['library'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'return ' + value_name + '\n';
    return code;
};

/**** Added Library (lib) Function *****/
Blockly.Blocks['lib'] = {
    init: function() {
      this.appendValueInput("lib_name")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_CENTRE)
          .appendField("library");
      this.setInputsInline(true);
      this.setNextStatement(true, null);
      this.setColour(65);
   this.setTooltip("Provide the name of library you want to load into the system");
   this.setHelpUrl("");
    }
};

Blockly.JavaScript['lib'] = function(block) {
    var value_lib_name = Blockly.JavaScript.valueToCode(block, 'lib_name', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'return ' + value_lib_name + '\n';
    return code;
};
/************ ************************/

/**** Added Library (req) Function *****/
Blockly.Blocks['req'] = {
    init: function() {
      this.appendValueInput("lib_name")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_CENTRE)
          .appendField("require");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(65);
   this.setTooltip("Provide the name of library you want to load into the system");
   this.setHelpUrl("");
    }
  };

Blockly.JavaScript['req'] = function(block) {
    var value_lib_name = Blockly.JavaScript.valueToCode(block, 'lib_name', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'require(' + value_lib_name +')\n';
    return code;
};
/***********************************/

/*************** define tallydata ********************/

Blockly.Blocks['tallydata'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("tally(~")
          .appendField(new Blockly.FieldTextInput("substance"), "substance")
          .appendField(", data =")
          .appendField(new Blockly.FieldTextInput("HELPrct"), "HELPrct")
          .appendField(")");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

Blockly.JavaScript['tallydata'] = function(block) {
    var text_substance = block.getFieldValue('substance');
    var text_helprct = block.getFieldValue('HELPrct');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };

/*************************************************/

/********** define tallydataformat ***************/
Blockly.Blocks['tallydataformat'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("tally(~")
          .appendField(new Blockly.FieldTextInput("substance"), "substance")
          .appendField(", data =")
          .appendField(new Blockly.FieldTextInput("HELPrct"), "HELPrct")
          .appendField(", format =")
          .appendField(new Blockly.FieldTextInput("\"proportion\""), "\"proportion\"")
          .appendField(")");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#2ji4j3");
    }
  };

  Blockly.JavaScript['tallydataformat'] = function(block) {
    var text_substance = block.getFieldValue('substance');
    var text_helprct = block.getFieldValue('HELPrct');
    var text__proportion_ = block.getFieldValue('"proportion"');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
/*************************************************/

/************* tallysexdata ****************************/
Blockly.Blocks['tallysexdata'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("tally(")
          .appendField(new Blockly.FieldTextInput("sex"), "sex")
          .appendField("~")
          .appendField(new Blockly.FieldTextInput("substance"), "substance")
          .appendField(", data =")
          .appendField(new Blockly.FieldTextInput("HELPrct"), "HELPrct")
          .appendField(")");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['tallysexdata'] = function(block) {
    var text_sex = block.getFieldValue('sex');
    var text_substance = block.getFieldValue('substance');
    var text_helprct = block.getFieldValue('HELPrct');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
/*******************************************************/

/************* tallysexdata2 ****************************/
Blockly.Blocks['tallysexdata2'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("tally( ~")
          .appendField(new Blockly.FieldTextInput("sex"), "sex")
          .appendField("+")
          .appendField(new Blockly.FieldTextInput("substance"), "substance")
          .appendField(", data =")
          .appendField(new Blockly.FieldTextInput("HELPrct"), "HELPrct")
          .appendField(")");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['tallysexdata2'] = function(block) {
    var text_sex = block.getFieldValue('sex');
    var text_substance = block.getFieldValue('substance');
    var text_helprct = block.getFieldValue('HELPrct');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
/*******************************************************/

/************* tallysexformatdata ****************************/
Blockly.Blocks['tallysexformatdata'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("tally( ~")
          .appendField(new Blockly.FieldTextInput("sex"), "sex")
          .appendField("|")
          .appendField(new Blockly.FieldTextInput("substance"), "substance")
          .appendField(", format =")
          .appendField(new Blockly.FieldTextInput("\"proportion\""), "\"proportion\"")
          .appendField(", data =")
          .appendField(new Blockly.FieldTextInput("HELPrct"), "HELPrct")
          .appendField(")");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['tallysexformatdata'] = function(block) {
    var text_sex = block.getFieldValue('sex');
    var text_substance = block.getFieldValue('substance');
    var text__proportion_ = block.getFieldValue('"proportion"');
    var text_helprct = block.getFieldValue('HELPrct');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
/*******************************************************/

/************ define favstatsdata **********************/
Blockly.Blocks['favstatsdata'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("favstats(")
          .appendField("~")
          .appendField(new Blockly.FieldTextInput("cesd"), "cesd")
          .appendField(", data =")
          .appendField(new Blockly.FieldTextInput("HELPrct"), "HELPrct")
          .appendField(")");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['favstatsdata'] = function(block) {
    var text_cesd = block.getFieldValue('cesd');
    var text_helprct = block.getFieldValue('HELPrct');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
/*******************************************************/

/************ define favstatssubstancedata **********************/
Blockly.Blocks['favstatssubstancedata'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("favstats(")
          .appendField("~")
          .appendField(new Blockly.FieldTextInput("cesd"), "cesd")
          .appendField("|")
          .appendField(new Blockly.FieldTextInput("substance"), "substance")
          .appendField(", data =")
          .appendField(new Blockly.FieldTextInput("HELPrct"), "HELPrct")
          .appendField(")");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['favstatssubstancedata'] = function(block) {
    var text_cesd = block.getFieldValue('cesd');
    var text_substance = block.getFieldValue('substance');
    var text_helprct = block.getFieldValue('HELPrct');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
/*******************************************************/

/************ define favstatssubstancedata2 **********************/
Blockly.Blocks['favstatssubstancedata2'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("favstats(")
          .appendField(new Blockly.FieldTextInput("cesd"), "cesd")
          .appendField("~")
          .appendField(new Blockly.FieldTextInput("substance"), "substance")
          .appendField(", data =")
          .appendField(new Blockly.FieldTextInput("HELPrct"), "HELPrct")
          .appendField(")");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['favstatssubstancedata2'] = function(block) {
    var text_cesd = block.getFieldValue('cesd');
    var text_substance = block.getFieldValue('substance');
    var text_helprct = block.getFieldValue('HELPrct');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
/*******************************************************/

/********************** define cor *********************/
Blockly.Blocks['cor'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("cor(")
          .appendField(new Blockly.FieldTextInput("cesd"), "cesd")
          .appendField("~")
          .appendField(new Blockly.FieldTextInput("mcs"), "mcs")
          .appendField(", data =")
          .appendField(new Blockly.FieldTextInput("HELPrct"), "HELPrct")
          .appendField(")");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['cor'] = function(block) {
    var text_cesd = block.getFieldValue('cesd');
    var text_mcs = block.getFieldValue('mcs');
    var text_helprct = block.getFieldValue('HELPrct');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
/*******************************************************/

/******************* define gf_bar  *********************/
Blockly.Blocks['gf_bar'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("gf_bar(")
          .appendField("~")
          .appendField(new Blockly.FieldTextInput("substance"), "substance")
          .appendField(", data =")
          .appendField(new Blockly.FieldTextInput("HELPrct"), "HELPrct")
          .appendField(", fill = ~")
          .appendField(new Blockly.FieldTextInput("substance"), "substance2")
          .appendField(")");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['gf_bar'] = function(block) {
    var text_substance = block.getFieldValue('substance');
    var text_helprct = block.getFieldValue('HELPrct');
    var text_substance2 = block.getFieldValue('substance2');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
/*******************************************************/

/**************** define pie ***************************/
Blockly.Blocks['pie'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("pie( tally(")
          .appendField("~")
          .appendField(new Blockly.FieldTextInput("substance"), "substance")
          .appendField(", data =")
          .appendField(new Blockly.FieldTextInput("HELPrct"), "HELPrct")
          .appendField("))");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['pie'] = function(block) {
    var text_substance = block.getFieldValue('substance');
    var text_helprct = block.getFieldValue('HELPrct');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
/*******************************************************/

/****************** define gf_boxplot ******************/
Blockly.Blocks['gf_boxplot'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("gf_boxplot(")
          .appendField("~")
          .appendField(new Blockly.FieldTextInput("cesd"), "cesd")
          .appendField(", data =")
          .appendField(new Blockly.FieldTextInput("HELPrct"), "HELPrct")
          .appendField(")");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['gf_boxplot'] = function(block) {
    var text_cesd = block.getFieldValue('cesd');
    var text_helprct = block.getFieldValue('HELPrct');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
/*******************************************************/

/************** define gf_boxplot_substance ******************************/
Blockly.Blocks['gf_boxplot_substance'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("gf_boxplot(")
          .appendField(new Blockly.FieldTextInput("cesd"), "cesd")
          .appendField("~")
          .appendField(new Blockly.FieldTextInput("substance"), "substance")
          .appendField(", data =")
          .appendField(new Blockly.FieldTextInput("HELPrct"), "HELPrct")
          .appendField(")");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['gf_boxplot_substance'] = function(block) {
    var text_cesd = block.getFieldValue('cesd');
    var text_substance = block.getFieldValue('substance');
    var text_helprct = block.getFieldValue('HELPrct');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
/*************************************************************************/

/****************** define gf_histogram ******************/
Blockly.Blocks['gf_histogram'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("gf_histogram(")
          .appendField("~")
          .appendField(new Blockly.FieldTextInput("cesd"), "cesd")
          .appendField(", data =")
          .appendField(new Blockly.FieldTextInput("HELPrct"), "HELPrct")
          .appendField(", bins =")
          .appendField(new Blockly.FieldNumber(0, 0, Infinity, 1), "bins")
          .appendField(")");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['gf_histogram'] = function(block) {
    var text_cesd = block.getFieldValue('cesd');
    var text_helprct = block.getFieldValue('HELPrct');
    var number_bins = block.getFieldValue('bins');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
/*******************************************************/

/************** define gf_histogram_substance ******************************/
Blockly.Blocks['gf_histogram_substance'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("gf_histogram(")
          .appendField("~")
          .appendField(new Blockly.FieldTextInput("cesd"), "cesd")
          .appendField("|")
          .appendField(new Blockly.FieldTextInput("substance"), "substance")
          .appendField(", bins =")
          .appendField(new Blockly.FieldNumber(0, 0, Infinity, 1), "bins")
          .appendField(", data =")
          .appendField(new Blockly.FieldTextInput("HELPrct"), "HELPrct")
          .appendField(")");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['gf_histogram_substance'] = function(block) {
    var text_cesd = block.getFieldValue('cesd');
    var text_substance = block.getFieldValue('substance');
    var number_bins = block.getFieldValue('bins');
    var text_helprct = block.getFieldValue('HELPrct');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
/*************************************************************************/

/****************** define gf_dens ******************/
Blockly.Blocks['gf_dens'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("gf_dens(")
          .appendField("~")
          .appendField(new Blockly.FieldTextInput("cesd"), "cesd")
          .appendField(", data =")
          .appendField(new Blockly.FieldTextInput("HELPrct"), "HELPrct")
          .appendField(")");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['gf_dens'] = function(block) {
    var text_cesd = block.getFieldValue('cesd');
    var text_helprct = block.getFieldValue('HELPrct');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
/*******************************************************/

/****************** define gf_dens_color ******************/
Blockly.Blocks['gf_dens_color'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("gf_dens(")
          .appendField("~")
          .appendField(new Blockly.FieldTextInput("cesd"), "cesd")
          .appendField(", color =")
          .appendField("~")
          .appendField(new Blockly.FieldTextInput("sex"), "sex")
          .appendField(", data =")
          .appendField(new Blockly.FieldTextInput("HELPrct"), "HELPrct")
          .appendField(")");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['gf_dens_color'] = function(block) {
    var text_cesd = block.getFieldValue('cesd');
    var text_helprct = block.getFieldValue('HELPrct');
    var text_sex = block.getFieldValue('sex');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
/*******************************************************/

/****************** define gf_counts ******************/
Blockly.Blocks['gf_counts'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("gf_counts(")
          .appendField("~")
          .appendField(new Blockly.FieldTextInput("sex"), "sex")
          .appendField(", fill =")
          .appendField(new Blockly.FieldTextInput("substance"), "substance")
          .appendField(", position =")
          .appendField(new Blockly.FieldTextInput("position_dodge()"), "position_dodge()")
          .appendField(", data =")
          .appendField(new Blockly.FieldTextInput("HELPrct"), "HELPrct")
          .appendField(")");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['gf_counts'] = function(block) {
    var text_sex = block.getFieldValue('sex');
    var text_substance = block.getFieldValue('substance');
    var text_position_dodge__ = block.getFieldValue('position_dodge()');
    var text_helprct = block.getFieldValue('HELPrct');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
/*******************************************************/

/****************** define gf_percents ******************/
Blockly.Blocks['gf_percents'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("gf_counts(")
            .appendField("~")
            .appendField(new Blockly.FieldTextInput("sex"), "sex")
            .appendField(", fill =")
            .appendField(new Blockly.FieldTextInput("substance"), "substance")
            .appendField(", position =")
            .appendField(new Blockly.FieldTextInput("\"fill\""), "\"fill\"")
            .appendField(", data =")
            .appendField(new Blockly.FieldTextInput("HELPrct"), "HELPrct")
            .appendField(")");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
     this.setTooltip("");
     this.setHelpUrl("");
      }
  };

  Blockly.JavaScript['gf_percents'] = function(block) {
    var text_sex = block.getFieldValue('sex');
    var text_substance = block.getFieldValue('substance');
    var text__fill_ = block.getFieldValue('"fill"');
    var text_helprct = block.getFieldValue('HELPrct');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
/*******************************************************/

/************** define gf_point ******************************/
Blockly.Blocks['gf_point'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("gf_point(")
          .appendField(new Blockly.FieldTextInput("cesd"), "cesd")
          .appendField("~")
          .appendField(new Blockly.FieldTextInput("mcs"), "mcs")
          .appendField(", data =")
          .appendField(new Blockly.FieldTextInput("HELPrct"), "HELPrct")
          .appendField(")");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['gf_point'] = function(block) {
    var text_cesd = block.getFieldValue('cesd');
    var text_mcs = block.getFieldValue('mcs');
    var text_helprct = block.getFieldValue('HELPrct');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
/*************************************************************************/

/************** define gf_qq ******************************/
Blockly.Blocks['gf_qq'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("gf_qq(")
          .appendField("~")
          .appendField(new Blockly.FieldTextInput("cesd"), "cesd")
          .appendField("|")
          .appendField(new Blockly.FieldTextInput("substance"), "substance")
          .appendField(", data =")
          .appendField(new Blockly.FieldTextInput("HELPrct"), "HELPrct")
          .appendField(", color = ~")
          .appendField(new Blockly.FieldTextInput("substance"), "substance2")
          .appendField(")");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['gf_qq'] = function(block) {
    var text_cesd = block.getFieldValue('cesd');
    var text_substance = block.getFieldValue('substance');
    var text_helprct = block.getFieldValue('HELPrct');
    var text_substance2 = block.getFieldValue('substance');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
/*************************************************************************/

/************** define mosaicplot ******************************/
Blockly.Blocks['mosaicplot'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("mosaicplot(")
          .appendField(new Blockly.FieldTextInput("sex"), "sex")
          .appendField("~")
          .appendField(new Blockly.FieldTextInput("substance"), "substance")
          .appendField(", color = ")
          .appendField(new Blockly.FieldTextInput("TRUE"), "TRUE")
          .appendField(", main =")
          .appendField(new Blockly.FieldTextInput("\"Substance vs Sex\""), "\"Substance vs Sex\"")
          .appendField(", data =")
          .appendField(new Blockly.FieldTextInput("HELPrct"), "HELPrct")
          .appendField(")");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['mosaicplot'] = function(block) {
    var text_sex = block.getFieldValue('sex');
    var text_substance = block.getFieldValue('substance');
    var text_true = block.getFieldValue('TRUE')
    var text__substance_vs_sex_ = block.getFieldValue('"Substance vs Sex"');
    var text_helprct = block.getFieldValue('HELPrct');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
/*************************************************************************/

